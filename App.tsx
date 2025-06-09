import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Saudacoes from "./saudacoes";

export default function App() {
  const handleButtonPress = () => {
    Alert.alert("Botão Pressionado", "Você clicou no botão");
  };

  const handleTouchablePress = () => {
    Alert.alert("Botão Pressionado", "Você clicou no botão personalizado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao React Native</Text>
      <Image
        source={{ uri: "https://reactnative.dev/img/logo-og.png" }}
        style={styles.image}
      />
      <Button title="Clique Aqui" onPress={handleButtonPress} />
      <TouchableOpacity
        style={styles.customButton}
        onPress={handleTouchablePress}
      >
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  customButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
