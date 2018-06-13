import TaskService from '../core/service/task.service';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK,
  LIST_TASKS
} from '../constants';

export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data
});

export const updateTask = (data) => ({
  type: UPDATE_TASK,
  payload: data
});

export const removeTask = (data) => ({
  type: REMOVE_TASK,
  payload: data
});

export const getTask = (data) => ({
  type: GET_TASK,
  payload: data
});

export const listTasks = (data) => ({
  type: LIST_TASKS,
  payload: data
})

export const create = (params) => (dispatch) => {
  const response = TaskService.createTask(params);

  return dispatch(addTask(response.data));
}

export const update = (params) => (dispatch) => {
  const response = TaskService.updateTask(params);

  return dispatch(updateTask(response.data));
}

export const remove = (params) => (dispatch) => {
  const response = TaskService.removeTask(params);

  return dispatch(removeTask(response.data));
}

export const get = (params) => (dispatch) => {
  const response = TaskService.getTaskById(params);

  return dispatch(getTask(response.data));
}

export const list = (params) => (dispatch) => {
  const response = TaskService.getAllTasks(params);

  return dispatch(listTasks(response.data));
}
