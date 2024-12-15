import { useEffect, useState } from 'react';
import { useTask } from '../hooks/task-auth';
import TaskItem from './components/TaskItem';
import { Task } from '../../app/task/domain/entities/task';
import { toast } from 'react-toastify';
import { IoIosAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const { fetchTaskAll, fetchTaskDelete } = useTask();
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  const reloadTasks = () => {
    fetchTaskAll().then((tasks: Task[]) => {
      setTasks(tasks);
    });
  };

  useEffect(() => reloadTasks(), []);

  // Función para alternar (toggle) el estado de la tarea
  const toggleTask = (task: Task) => {
    navigate('/tasks/' + task.id);
  };

  // Función para crear una nueva tarea
  const newTask = () => {
    navigate('/tasks/new');
  };

  // Función para eliminar la tarea
  const deleteTask = (task: Task) => {
    fetchTaskDelete(task)
      .then(() => reloadTasks())
      .then(() => toast.success('Tarea eliminada'));
  };

  return (
    <div className="flex rounded-xl bg-gray-100 p-2 shadow-lg">
      <div className="flex h-full w-full flex-col p-4 text-gray-700">
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <button
            onClick={() => newTask()}
            className="mr-2 inline-flex items-center rounded-lg bg-gray-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-yellow-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            <IoIosAdd />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
