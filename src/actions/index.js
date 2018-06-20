import TaskService from '../core/service/task.service';
import firebase from '../core/config';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK,
  LIST_TASKS
} from '../action-types';

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

export const create = (params) => async (dispatch) => {
  await TaskService.createTask(params);

  return dispatch(addTask(params));
}

export const update = (params) => async (dispatch) => {
  const response = await TaskService.updateTask(params);

  return dispatch(updateTask(response.data));
}

export const remove = (params) => async (dispatch) => {
  const response = await TaskService.removeTask(params);

  return dispatch(removeTask(response.data));
}

export const get = (params) => async (dispatch) => {
  const response = await TaskService.getTaskById(params);

  return dispatch(getTask(response.data));
}

export const list = () => async (dispatch) => {
  try {
    await firebase.database().ref('tasks').on('value', snapshot => {
      const value = snapshot.val();
      const data = !!value ? Object.keys(value).map(uid => ({ ...value[uid], uid })) : [];

      return dispatch(listTasks(data));
    });
  } catch(e) {
    // DO NOTHING
  }
}
