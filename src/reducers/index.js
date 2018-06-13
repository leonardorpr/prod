import initialState from './initialState';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK,
  LIST_TASKS
} from '../constants';

const tasks = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        ...action.payload
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
        ...action.payload
      }
    default:
      return state
  }
}
