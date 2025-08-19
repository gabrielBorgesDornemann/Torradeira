import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import CustomButton from "../components/CustomButton";

export default function LocationScreen() {
  const { theme } = useSelector((state) => state.tasks);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = locationData.coords;
      setLocation({ latitude, longitude });

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          {
            headers: {
              "User-Agent": "taskApp/1.0 (https://github.com/username/taskApp)",
            },
          }
        );
        setAddress(response.data.display_name);
      } catch (err) {
        setAddress("Unable to fetch address");
        console.error("Error fetching address:", err);
      }

      setIsLoading(false);
    } catch (error) {
      setError("Error fetching location");
      console.error("Error getting location:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.title, theme === "dark" && styles.darkText]}>
        Your Location
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : error ? (
        <>
          <Text style={[styles.errorText, theme === "dark" && styles.darkText]}>
            {error}
          </Text>
          <CustomButton title="Retry" onPress={getLocation} />
        </>
      ) : location ? (
        <>
          <Text style={[styles.text, theme === "dark" && styles.darkText]}>
            Latitude: {location.latitude.toFixed(6)}, Longitude:{" "}
            {location.longitude.toFixed(6)}
          </Text>
          <Text style={[styles.text, theme === "dark" && styles.darkText]}>
            Address: {address || "Fetching address..."}
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Cê ta aqui"
              pinColor="Red"
            />
          </MapView>
          <CustomButton title="Refresh Location" onPress={getLocation} />
        </>
      ) : (
        <Text style={[styles.text, theme === "dark" && styles.darkText]}>
          Location not available
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  map: {
    width: Dimensions.get("window").width - 40,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  darkText: {
    color: "#fff",
  },
});
