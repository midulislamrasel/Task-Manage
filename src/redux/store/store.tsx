// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../features/taskSlice";
import taskReducer from "@/redux/features/task/taskSlice";
import { loadState, saveState } from "../utils/localStorage";

// Load initial state from localStorage (if available)
const persistedState = loadState();

// Ensure that tasks are initialized as an empty array if there's no state in localStorage
const tasksState = persistedState ? persistedState.tasks : [];

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState: {
        tasks: { tasks: tasksState }, // Ensure it initializes with an array
    },
});

// Save the tasks to localStorage whenever the state changes
store.subscribe(() => {
    const state = store.getState();
    saveState(state.tasks); // Save only the tasks part of the state
});

// Define RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
