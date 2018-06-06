import BaseService from './base.service';

class TaskService extends BaseService {
  getAllTasks = async () => await this.getAll('tasks');

  getTaskById = async (params) => await this.getById('tasks', params);

  createTask = async (params) => await this.post('tasks', params);

  updateTask = async (params) => await this.update('tasks', params);

  removeTask = async (params) => await this.destroy('tasks', params);
}

export default new TaskService();
