import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Card({ title, description, onPress }: any) {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <Text style={style.cardTitle}>{title}</Text>
      <Text style={style.cardDescription}>{description}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  cardDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
});
