"use client";

import { deleteTask, updateTask } from "@/redux/features/task/taskSlice";
import { RootState } from "@/redux/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [formData, setFormData] = useState<{
        taskTitle: string;
        priority: "low" | "medium" | "high";
        deadline: string;
        description: string;
    }>({
        taskTitle: "",
        priority: "low",
        deadline: "",
        description: "",
    });

    const startEditing = (task: {
        id: string;
        taskTitle: string;
        priority: "low" | "medium" | "high";
        deadline: string;
        description: string;
    }) => {
        setEditingTaskId(task.id);
        setFormData({
            taskTitle: task.taskTitle,
            priority: task.priority,
            deadline: task.deadline,
            description: task.description,
        });
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                name === "priority"
                    ? (value as "low" | "medium" | "high")
                    : value,
        }));
    };

    const handleUpdate = () => {
        if (editingTaskId) {
            dispatch(updateTask({ ...formData, id: editingTaskId }));
            setEditingTaskId(null);
        }
    };

    return (
        <div className=" mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">Task List</h2>
            {tasks.length > 0 ? (
                <ul className="space-y-4">
                    {tasks.map((task) =>
                        editingTaskId === task.id ? (
                            <li
                                key={task.id}
                                className="border p-4 rounded-md shadow-md"
                            >
                                <input
                                    name="taskTitle"
                                    value={formData.taskTitle}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md mb-2"
                                    placeholder="Task Title"
                                />
                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md mb-2"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                <input
                                    name="deadline"
                                    type="date"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md mb-2"
                                />
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded-md mb-2"
                                    placeholder="Description"
                                ></textarea>
                                <button
                                    className="text-green-500 underline mr-2"
                                    onClick={handleUpdate}
                                >
                                    Save
                                </button>
                                <button
                                    className="text-red-500 underline"
                                    onClick={() => setEditingTaskId(null)}
                                >
                                    Cancel
                                </button>
                            </li>
                        ) : (
                            <li
                                key={task.id}
                                className="border p-4 rounded-md shadow-md flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-bold">
                                        {task.taskTitle}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Priority: {task.priority}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Deadline: {task.deadline}
                                    </p>
                                    <p className="text-sm">
                                        {task.description}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="text-blue-500 underline"
                                        onClick={() => startEditing(task)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 underline"
                                        onClick={() =>
                                            dispatch(deleteTask(task.id))
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <p>No tasks available. Add some!</p>
            )}
        </div>
    );
};

export default TaskList;
