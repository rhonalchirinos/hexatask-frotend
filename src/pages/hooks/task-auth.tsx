import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { taskService } from '../../app/task/application/services/task-service';
import { Task } from '../../app/task/domain/entities/task';

export const useTask = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useUsers must be used within an UserProvider');
  }

  const fetchTaskAll = async () => {
    return await taskService.all();
  };

  const fetchTaskShow = async (id: number) => {
    return await taskService.show(id);
  };

  const fetchTaskCreate = async (task: Task) => {
    return await taskService.create(task);
  };

  const fetchTaskUpdate = async (task: Task) => {
    return await taskService.update(task);
  };

  const fetchTaskDelete = async (task: Task) => {
    return await taskService.delete(task);
  };

  return {
    fetchTaskAll,
    fetchTaskCreate,
    fetchTaskShow,
    fetchTaskUpdate,
    fetchTaskDelete,
  };
};
