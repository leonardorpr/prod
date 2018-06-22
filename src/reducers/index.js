import initialState from './initialState';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK,
  LIST_TASKS
} from '../action-types';

const prod = (state = initialState, action) => {
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
      const taskCalendar = {};
      const dates = Object.entries(state.tasks.calendar);

      const result = dates.filter((date, index) => date[0] === action.payload[index]);
      console.log(result)
      // action.payload.forEach(tasks => {
      //   if(tasks.date === state.tasks.calendar[tasks.date]) {
      //     taskCalendar[task.date] = [...tasks];
      //     console.log('task calendar', taskCalendar);
      //   }
      // });

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

export default prod;
