import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";

function TaskBox({ task, requestDeleteTask, requestUpdateTask }) {
   const { _id, title, isCompleted } = task;
   const [isExpanded, setIsExpanded] = useState(false);
   const [updatedTask, setUpdatedTask] = useState(title);
   
   return (
      <div className="my-2">
         <div
            className={`transition-all duration-300 ease-in-out ${
               isCompleted ? "line-through text-gray-400" : "text-white"
            } border border-gray-700 rounded-lg ${
               isExpanded ? "rounded-b-none" : "rounded-b-lg"
            } p-4 flex justify-between bg-gray-600`}>
            <div className="flex items-center gap-3">
               <div
                  className="text-xl cursor-pointer"
                  onClick={() =>
                     requestUpdateTask({ isCompleted: !isCompleted, title }, _id, () => {
                        if (!isCompleted) {
                           toast.success("Task Completed");
                        }
                     })
                  }>
                     {/* after completing the task it give line through */}
                  {isCompleted ? (
                     <IoMdCheckmarkCircleOutline className="text-green-500" />
                  ) : (
                     <MdRadioButtonUnchecked />
                  )}
               </div>
               <span className={isCompleted ? "line-through" : ""}>{title}</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-xl cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                  <FaPen />
               </div>
               <div className="text-2xl cursor-pointer" onClick={() => requestDeleteTask(_id)}>
                  <MdDelete />
               </div>
            </div>
         </div>
         <div
            className={`flex transition-all duration-300 ease-in-out overflow-hidden ${
               isExpanded ? "max-h-[500px]" : "max-h-0"
            }`}>
            <textarea
               id="message"
               onChange={(event) => setUpdatedTask(event.target.value)}
               value={updatedTask}
               className="block w-full px-4 py-2 text-sm text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg rounded-t-none rounded-r-none outline-none font-poppins"
               placeholder="Edit your task ..."
            />
            <button
               type="button"
               onClick={() => {
                  requestUpdateTask({ isCompleted, title: updatedTask }, _id, () =>
                     toast.success("Task Updated Successfully")
                  );
                  setIsExpanded(false);
               }}
               className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-lg rounded-t-none rounded-l-none focus:ring-4 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
               Edit
            </button>
         </div>
      </div>
   );
}

export default TaskBox;
