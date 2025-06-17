import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function ScrollScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>Tela com ScrollView</Text>
            <ScrollView style={styles.scrollContainer}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <View key={index} style={StyleSheet.item}>
                        <Text style={StyleSheet.itemText}>Item {index + 1}</Text>
                    </View>
                ))}
            </ScrollScreen>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Text style={styles.buttonText}>Voltar para Home</Text>
                  </TouchableOpacity>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      padding: 20,
    },
  
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
      textAlign: 'center',
    },

    scrollContainer: {
        flex: 1,
    },
  
    item: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd'
    },
  
    itemText: {
      fontSize: 16,
      color: '#333',
    },
  
    button: {
      backgroundColor: "#dc3545",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  