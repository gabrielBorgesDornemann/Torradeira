import { StyleSheet, View, Text } from "react-native";
import { useTasks } from "../contexts/TaskContext";

export default function ProfileScreen() {
  const { theme } = useTasks();

  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.title, theme === "dark" && styles.darkText]}>
        aaaaa
      </Text>
      <Text style={[styles.text, theme === "dark" && styles.darkText]}>
        Meu Perfil
      </Text>
      <Text style={[styles.Text, theme === "dark" && styles.darkText]}>
        Email: WhenIMetYouAndSummer@gmail.com
      </Text>
      <Text style={[styles.Text, theme === "dark" && styles.darkText]}>
        Tarefas Concluídas: (baseado no TaskContext)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Text: {
    fontSize: 18,
    marginVertical: 5,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  darkText: {
    color: "#fff",
  },
});
