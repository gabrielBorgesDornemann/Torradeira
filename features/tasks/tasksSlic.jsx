import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
    try {
        const savedTasks = await AsyncStorage.getItem('@TaskApp:tasks');
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            if (Array.isArray(parsedTasks) && parsedTasks.every(task => task.id && task.title)) {
                return parsedTasks;
            }
            return [];
        }
        return [];
    } catch (err) {
      throw new Error('Erro ao carregar tarefas: ' + err.message);
    }
});
export const saveTasks = createAsyncThunk('tasks/saveTasks', async (tasks) => {
    try {
        await AsyncStorage.setItem('@TaskApp:tasks', JSON.stringify(tasks));
        return tasks;
    } catch (err) {
        throw new Error('Erro ao salvar tarefas: ' + err.message);
    }
});
export const exportTasks = createAsyncThunk('tasks/exportTasks', async (tasks) => {
    try {
        await AsyncStorage.setItem('@TaskApp:backup', JSON.stringify(tasks));
        return 'Backup realizado com sucesso!';
    } catch (err) {
        throw new Error('Erro ao criar backup: ' + err.message);
    }
});
export const restoreTasks = createAsyncThunk('tasks/restoreTasks', async () => {
    try {
        const backup = await AsyncStorage.getItem('@TaskApp:backup');
        if (backup) {
            const parsedBackup = JSON.parse(backup);
            if (Array.isArray(parsedBackup) && parsedBackup.every(task => task.id && task.title)) {
                await AsyncStorage.setItem('@TaskApp:tasks', backup);
                return 'Restauração realizada com sucesso!';
            }
            throw new Error('Backup inválido');
        }
        throw new Error('Nenhum backup encontrado');
    } catch (err) {
        throw new Error('Erro ao restaurar tarefas: ' + err.message);
    }
});
// export const clearTasks = createAsyncThunk('tasks/clearTasks', async () => {
//     try {
//         await AsyncStorage.removeItem('@TaskApp:tasks');
//         return [];
//     } catch (err) {
//         throw new Error('Erro ao limpar tarefas: ' + err.message);
//     }
// });
  const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addTask: (state, action) => {
            state.localTasks.push({
                id: action.payload.id || `local-${Date.now()}`,
                title: action.payload.title,
                description: action.payload.description || '',
                priority: action.payload.priority || 'baixa',
                completed: false,
            })
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        clearTasks: (state) => {
            state.tasks = [];
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(loadTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(saveTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(exportTasks.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(restoreTasks.fulfilled, (state, action) => {
                console.log(action.payload);
            });
    },
);
export const { addTask, toggleTaskCompletion, clearTasks, toggleTheme } = tasksSlice.actions;
export default tasksSlice.reducer;