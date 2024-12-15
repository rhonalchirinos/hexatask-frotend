import { Task } from '../../../app/task/domain/entities/task';
import moment from 'moment';

import m1 from '../../../assets/m1.webp';
import m2 from '../../../assets/m2.avif';
import m3 from '../../../assets/m3.jpg';
import m4 from '../../../assets/m4.jpg';
import m5 from '../../../assets/m5.jpg';

import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

const TaskItem = ({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (task: Task) => void;
}) => {
  const dueAt = moment(task.dueDate).format('DD/MM/YYYY');

  const icon =
    task.front === 'm1'
      ? m1
      : task.front === 'm2'
        ? m2
        : task.front === 'm3'
          ? m3
          : task.front === 'm4'
            ? m4
            : m5;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="h-36 w-full rounded-t-lg" src={icon} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {task.description}
        </p>

        <small className="text-gray-600 dark:text-gray-300">
          vence: {dueAt} <span className="font-bold"> {task.status}</span>
        </small>

        <div className="my-2 flex w-max text-xs font-bold text-gray-700 dark:text-gray-300">
          {task &&
            task?.tags &&
            task?.tags.map((tag, index) => (
              <span
                key={index}
                className="mr-2 rounded-lg bg-gray-800 px-2 py-1 text-gray-200 dark:bg-gray-800 dark:text-gray-200"
              >
                {tag.tag}
              </span>
            ))}
        </div>

        <div className="flex font-bold">
          <button
            onClick={() => onToggle(task)}
            className="mr-2 inline-flex items-center rounded-lg bg-gray-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-yellow-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            <CiEdit />
          </button>
          <button
            onClick={() => onDelete(task)}
            className="inline-flex items-center rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
