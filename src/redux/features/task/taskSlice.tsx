// features/taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: string;
    taskTitle: string;
    priority: "low" | "medium" | "high";
    deadline: string;
    description: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        // Add other reducers if needed (e.g., removeTask, updateTask)
    },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
