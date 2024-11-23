"use client";
import { addTask } from "@/redux/features/task/taskSlice";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
// import { addTask } from "../features/taskSlice";
import { v4 as uuidv4 } from "uuid"; // To generate unique IDs

const TaskForm: React.FC = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        taskTitle: "",
        priority: "low",
        deadline: "",
        description: "",
    });

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            ...formData,
        };

        dispatch(addTask(newTask)); // Add task to Redux store

        console.log("Task Added:", newTask);

        // Clear the form
        setFormData({
            taskTitle: "",
            priority: "low",
            deadline: "",
            description: "",
        });
    };

    return (
        <div className="w-[600px] mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Create a Task</h2>
            <form onSubmit={handleSubmit}>
                {/* Task Title */}
                <div className="mb-4">
                    <label
                        htmlFor="taskTitle"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Task Title
                    </label>
                    <input
                        type="text"
                        id="taskTitle"
                        name="taskTitle"
                        value={formData.taskTitle}
                        onChange={handleChange}
                        className="border-2 mt-1 p-4 block w-full h-[22px] text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter task title"
                    />
                </div>

                {/* Priority and Deadline */}
                <div className="flex justify-between">
                    <div className="mb-4">
                        <label
                            htmlFor="priority"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Priority
                        </label>
                        <select
                            id="priority"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="mt-1 border-2 block w-full h-[22px] text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="mt-1 border-2 p-4 block w-full h-[22px] text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="border-2 mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter task description"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
