import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counter/counterSlice";
import taskReducer from "@/redux/features/task/taskSlice";
// Create the Redux store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: taskReducer,
    },
    // preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
