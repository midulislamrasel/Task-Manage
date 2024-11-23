// "use client";

// import React from "react";
// import { Droppable, Draggable } from "react-beautiful-dnd";

// interface Task {
//     id: string;
//     taskTitle: string;
//     priority: "low" | "medium" | "high";
//     deadline: string;
//     description: string;
// }

// interface Props {
//     tasks: Task[];
// }

// const OngoingTasks: React.FC<Props> = ({ tasks }) => {
//     return (
//         <Droppable droppableId="ongoing">
//             {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps}>
//                     <h2 className="text-xl font-bold mb-4">Ongoing Tasks</h2>
//                     <ul className="space-y-4">
//                         {tasks.map((task, index) => (
//                             <Draggable
//                                 key={task.id}
//                                 draggableId={task.id}
//                                 index={index}
//                             >
//                                 {(provided) => (
//                                     <li
//                                         ref={provided.innerRef}
//                                         {...provided.draggableProps}
//                                         {...provided.dragHandleProps}
//                                         className="border p-4 rounded-md shadow-md"
//                                     >
//                                         <h3 className="font-bold">
//                                             {task.taskTitle}
//                                         </h3>
//                                         <p className="text-sm text-gray-600">
//                                             Priority: {task.priority}
//                                         </p>
//                                         <p className="text-sm text-gray-600">
//                                             Deadline: {task.deadline}
//                                         </p>
//                                         <p className="text-sm">
//                                             {task.description}
//                                         </p>
//                                     </li>
//                                 )}
//                             </Draggable>
//                         ))}
//                         {provided.placeholder}
//                     </ul>
//                 </div>
//             )}
//         </Droppable>
//     );
// };

// export default OngoingTasks;
