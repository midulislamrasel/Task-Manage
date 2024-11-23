// utils/localStorage.ts

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("tasks");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state from localStorage:", err);
        return undefined;
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("tasks", serializedState);
    } catch (err) {
        console.error("Could not save state to localStorage:", err);
    }
};
