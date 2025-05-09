import { useContext, useEffect, useState } from "react";
import TaskBox from "../components/TaskBox";
import UserNavBar from "../components/UserNavBar";
import privateApiClient from "../services/privateApiClient.js";
import toast from "react-hot-toast";
import { userContext } from "../contexts/userContext.jsx"


// this is task page where user can add, delete and update tasks
const requestAllTasks = async () => {
   try {
      return await privateApiClient.get("/api/task");
   } catch (error) {
      if (error?.response?.data?.message) {
         toast.error(error.response.data.message);
      } else {
         toast.error(error.message);
      }
   }
   return null;
};

function Tasks() {
   const [user] = useContext(userContext);
   const [allTasks, setAllTasks] = useState([]);
   const [taskTitle, setTaskTitle] = useState("");

   useEffect(() => {
      (async () => {
         const tasks = await requestAllTasks();
         if (tasks) setAllTasks(tasks.data);
      })();
   }, []);


   //for adding task
   const requestAddTask = async () => {
      try {
         if (!taskTitle.trim()) return;
         await privateApiClient.post("/api/task", { title: taskTitle });
         toast.success("Task Added Successfully");
         const tasks = await requestAllTasks();
         if (tasks) setAllTasks(tasks.data);
         setTaskTitle("");
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };
   
   //for deleting task 
   const requestDeleteTask = async (_id) => {
      try {
         await privateApiClient.delete(`/api/task/${_id}`);
         toast.success("Task Deleted Successfully");
         const tasks = await requestAllTasks();
         if (tasks) setAllTasks(tasks.data);
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };


   //for updating task
   const requestUpdateTask = async (body, _id, toastMessage) => {
      try {
         await privateApiClient.patch(`/api/task/${_id}`, body);
         toastMessage();
         const tasks = await requestAllTasks();
         if (tasks) setAllTasks(tasks.data);
      } catch (error) {
         if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
         } else {
            toast.error(error.message);
         }
      }
   };

   return (
      <div className="min-h-screen bg-gray-50">
         <UserNavBar />
         <div className="max-w-4xl px-4 py-12 mx-auto mt-24 sm:px-6 lg:px-8">
            {/* Welcome Header */}
            <div className="mb-10 text-center">
               <h1 className="mb-2 text-3xl font-bold text-gray-900">
                  {/* Welcome, <span className="text-indigo-600">{user.name}</span> */}
               </h1>
               <p className="text-gray-600">Manage your tasks efficiently</p>
            </div>

            {/* Add Task Form */}
            <div className="flex flex-col gap-4 mb-10 sm:flex-row">
               <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="Enter new task..."
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onKeyPress={(e) => e.key === 'Enter' && requestAddTask()}
               />
               <button
                  onClick={requestAddTask}
                  className="w-full px-6 py-3 font-medium text-white transition-colors duration-200 bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 sm:w-auto"
               >
                  Add Task
               </button>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
               {allTasks.length === 0 ? (
                  <div className="py-10 text-center">
                     <p className="text-lg text-gray-500">No tasks found. Add a new task to get started!</p>
                  </div>
               ) : (
                  allTasks.map((task) => (
                     <TaskBox
                        key={task._id}
                        task={task}
                        requestDeleteTask={requestDeleteTask}
                        requestUpdateTask={requestUpdateTask}
                     />
                  ))
               )}
            </div>
         </div>
      </div>
   );
}

export default Tasks;
