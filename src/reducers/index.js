import initialState from './initialState';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK,
  LIST_TASKS
} from '../action-types';

const tasks = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          listTasks: [
            ...state.tasks.listTasks,
            ...action.payload
          ]
        }
      }
    case UPDATE_TASK:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_TASK:
      return {
        ...state,
        ...action.payload
      }
    case GET_TASK:
      return {
        ...state,
        ...action.payload
      }
    case LIST_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          listTasks: [
            ...action.payload
          ]
        }
      }
    default:
      return state
  }
}

export default tasks;
