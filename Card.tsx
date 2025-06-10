import { StyleSheet, View, Text } from "react-native";

export default function Card(props: { texto: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    padding: 4,
    margin: 10,
  },

  cardText: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
  },
});
