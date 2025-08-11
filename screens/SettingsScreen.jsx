import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import { useTasks } from "../contexts/TaskContext";

export default function SettingsScreen() {
  const { theme, toggleTheme, exportTasks, restoreTasks } = useTasks();
  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClearTasks = async () => {
    try {
      await handleClearTasks();
      setModalVisible(false);
      setSuccessMessage("Tarefas limpas com sucesso!");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (err) {
      setModalVisible(false);
      setSuccessMessage("");
      alert("Erro ao limpar tarefas");
    }
  };

  const handleExport = async () => {
    try {
      const message = await exportTasks();
      setSuccessMessage(message);
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRestore = async () => {
    try {
      const mensage = await restoreTasks();
      setSuccessMessage(mensage);
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (err) {
      setSuccessMessage("");
      alert(err.message);
    }
  };

  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.title, theme === "dark" && styles.darkText]}>
        Configurações
      </Text>
      {successMessage ? (
        <Text style={styles.successText}>{successMessage}</Text>
      ) : null}
      <CustomButton title="Alterar Tema" onPress={toggleTheme} color="007bff" />
      <CustomButton
        title="Limpar Todas as Tarefas"
        onPress={() => setModalVisible(true)}
        color="#dc3545"
      />
      <CustomButton
        title="Exportar Tarefas"
        onPress={handleExport}
        color="#17a2b8"
      />
      <CustomButton
        title="Restaurar Tarefas"
        onPress={handleRestore}
        color="#17a2b8"
      />
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Limpar Tarefas"
        message="Você tem certeza que deseja limpar todas as tarefas? Esta ação não pode ser desfeita."
        onConfirm={handleClearTasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    color: "#28a745",
    textAlign: "center",
    marginBottom: 10,
  },
  darkText: {
    color: "#fff",
  },
});
