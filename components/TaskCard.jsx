import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function TaskCard({
  title,
  completed,
  priority,
  onPress,
  onToggle,
  isLocal,
  onDelete,
}) {
  const { theme } = useSelector((state) => state.tasks);
  const priorityColors = {
    alta: "#dc3545",
    media: "#ffc107",
    baixa: "#28a745",
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        completed && styles.completedCard,
        theme === "dark" && styles.darkCard,
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <TouchableOpacity onPress={onToggle} disabled={!isLocal}>
          <Text style={[styles.checkbox, completed && styles.checkedCheckbox]}>
            {completed ? "✓" : "⬜"}
          </Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={[styles.title, theme === "dark" && styles.darkText]}>
            {title}
          </Text>
          <Text
            style={[
              styles.priority,
              theme === "dark" && styles.darkText,
              { color: priorityColors[priority] || "#666" },
            ]}
          >
            Prioridade: {priority || "Não definida"}
          </Text>
        </View>
        {isLocal && (
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.deleteButton}>🗑️</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: "#e0e0e0",
  },
  darkCard: {
    backgroundColor: "#444",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    fontSize: 20,
    marginRight: 10,
  },
  checkedCheckbox: {
    color: "#28a745",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  priority: {
    fontSize: 14,
    color: "#666",
  },
  darkText: {
    color: "#fff",
  },
  deleteButton: {
    fontSize: 20,
    color: "#dc3545",
  },
});
