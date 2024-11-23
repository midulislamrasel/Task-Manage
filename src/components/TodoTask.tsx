"use client";
import { RootState } from "@/redux/store/store";
import React from "react";
import { useSelector } from "react-redux";

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <div className="w-[600px] mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">Task List</h2>
            {tasks.length > 0 ? (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="p-4 bg-white rounded-md shadow-md border"
                        >
                            <h3 className="font-bold">{task.taskTitle}</h3>
                            <p>Priority: {task.priority}</p>
                            <p>Deadline: {task.deadline}</p>
                            <p>Description: {task.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks added yet.</p>
            )}
        </div>
    );
};

export default TaskList;
