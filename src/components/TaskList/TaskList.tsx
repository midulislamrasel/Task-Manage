// "use client";

// import React, { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
// import OngoingTasks from "./OngoingTasks";
// import CompletedTasks from "./CompletedTasks";

// interface Task {
//     id: string;
//     taskTitle: string;
//     priority: "low" | "medium" | "high";
//     deadline: string;
//     description: string;
// }

// const TaskList: React.FC = () => {
//     const [ongoingTasks, setOngoingTasks] = useState<Task[]>([
//         {
//             id: "1",
//             taskTitle: "Task 1",
//             priority: "low",
//             deadline: "2024-12-01",
//             description: "Ongoing task 1",
//         },
//         {
//             id: "2",
//             taskTitle: "Task 2",
//             priority: "medium",
//             deadline: "2024-12-02",
//             description: "Ongoing task 2",
//         },
//     ]);

//     const [completedTasks, setCompletedTasks] = useState<Task[]>([
//         {
//             id: "3",
//             taskTitle: "Task 3",
//             priority: "high",
//             deadline: "2024-12-03",
//             description: "Completed task 3",
//         },
//     ]);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const onDragEnd = (result: any) => {
//         const { source, destination } = result;

//         if (!destination) return;

//         const sourceList =
//             source.droppableId === "ongoing" ? ongoingTasks : completedTasks;
//         const destinationList =
//             destination.droppableId === "ongoing"
//                 ? ongoingTasks
//                 : completedTasks;

//         const [movedTask] = sourceList.splice(source.index, 1);
//         destinationList.splice(destination.index, 0, movedTask);

//         if (source.droppableId === "ongoing")
//             setOngoingTasks([...ongoingTasks]);
//         else setCompletedTasks([...completedTasks]);

//         if (destination.droppableId === "ongoing")
//             setOngoingTasks([...destinationList]);
//         else setCompletedTasks([...destinationList]);
//     };

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <div className="grid grid-cols-2 gap-4 mx-auto mt-6">
//                 <OngoingTasks tasks={ongoingTasks} />
//                 <CompletedTasks tasks={completedTasks} />
//             </div>
//         </DragDropContext>
//     );
// };

// export default TaskList;
