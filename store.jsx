import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import counterReducer from "./features/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});
