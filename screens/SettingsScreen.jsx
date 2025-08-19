import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
import {
  toggleTheme,
  clearTasks,
  exportTasks,
  restoreTasks,
} from "../features/tasks/tasksSlice";
import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const { theme } = useSelector((state) => state.tasks);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClearTasks = async () => {
    try {
      await dispatch(clearTasks());
      await dispatch(saveTasks([]));
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
      const result = await dispatch(exportTasks()).unwrap();
      setSuccessMessage(result);
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (err) {
      setSuccessMessage("");
      alert(err.message);
    }
  };

  const handleRestore = async () => {
    try {
      const result = await dispatch(restoreTasks()).unwrap();
      setSuccessMessage("Backup restaurado com sucesso!");
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
      <Text style={[styles.text, theme === "dark" && styles.darkText]}>
        Contador: {counter}
      </Text>
      <CustomButton
        title="Incrementar"
        onPress={() => dispatch(increment())}
        color="#007bff"
      />
      <CustomButton
        title="Decrementar"
        onPress={() => dispatch(decrement())}
        color="#007bff"
      />
      <CustomButton
        title="Resetar Contador"
        onPress={() => dispatch(reset())}
        color="#007bff"
      />
      <CustomButton
        title={`Mudar para Tema ${theme === "light" ? "Escuro" : "Claro"}`}
        onPress={() => dispatch(toggleTheme())}
        color="#007bff"
      />
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
        title="Restaurar Backup"
        onPress={handleRestore}
        color="#17a2b8"
      />
      <CustomButton
        title="Abrir Menu Lateral"
        onPress={() => navigation.toggleDrawer()}
        color="#007bff"
      />
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Limpar Tarefas"
        message="Deseja excluir todas as tarefas locais?"
        onConfirm={handleClearTasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
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
