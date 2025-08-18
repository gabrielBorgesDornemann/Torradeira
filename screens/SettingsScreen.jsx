import { StyleSheet, View, Text, Switch } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import { useTasks } from "../contexts/TaskContext";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";

const counter = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

export default function SettingsScreen() {
  const { toggleTheme, theme, clearTasks, exportTasks, restoreTasks } =
    useTasks();
  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigation();

  const handleClearTasks = async () => {
    try {
      await clearTasks();
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
      setSuccessMessage("");
      alert(err.message);
    }
  };

  const handleRestore = async () => {
    try {
      const message = await restoreTasks();
      setSuccessMessage(message);
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
        color="#28a745"
      />
      <CustomButton
        title="Decrementar"
        onPress={() => dispatch(decrement())}
        color="#dc3545"
      />
      <CustomButton
        title="Resetar"
        onPress={() => dispatch(reset())}
        color="#17a2b8"
      />

      <CustomButton
        title={`Mudar para Tema ${theme === "light" ? "Escuro" : "Claro"}`}
        onPress={toggleTheme}
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
        onPress={() => navigate.toggleDrawer()}
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
