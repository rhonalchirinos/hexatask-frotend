import { useEffect, useState } from 'react';
import { useTask } from '../hooks/task-auth';
import { Task } from '../../app/task/domain/entities/task';
import { useParams } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import { Tag } from '../../app/task/domain/entities/tag';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';

const TaskEdit = () => {
  const { id } = useParams();
  const { fetchTaskShow, fetchTaskUpdate, fetchTaskCreate } = useTask();
  const [task, setTask] = useState<Task>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id == 'new') {
      setTask(
        new Task({
          front: 'm1',
          title: '',
          description: '',
          dueDate: moment().toDate(),
          status: 'pendiente',
          tags: [],
        }),
      );
    } else {
      fetchTaskShow(Number(id)).then((task: Task) => {
        setTask(task);
      });
    }
  }, []);

  const handleSubmit = async (data: {
    title: string | undefined;
    front: string | undefined;
    description: string | undefined;
    dueDate: Date | undefined;
    status: string | undefined;
    tags: Tag[] | undefined;
  }) => {
    if (task) {
      task.title = data.title;
      task.front = data.front;
      task.title = data.title;
      task.description = data.description;
      task.dueDate = moment(data.dueDate, 'DD/MM/YYYY').toDate();
      task.status = data.status;
      task.tags = data.tags;

      if (task.id) {
        fetchTaskUpdate(task)
          .then(() => navigate('/tasks'))
          .then(() => toast.success('Tarea actualizada'));
      } else {
        fetchTaskCreate(task)
          .then(() => navigate('/tasks'))
          .then(() => toast.success('Tarea creada'));
      }
    }
  };

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">Editar </h1>
      <div>{task && <TaskForm task={task} onSubmit={handleSubmit} />}</div>
    </div>
  );
};

export default TaskEdit;
