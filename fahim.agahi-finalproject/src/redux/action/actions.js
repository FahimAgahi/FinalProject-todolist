import * as actions from './actionTypes'

export function addTask(title, description) {
  return {
    type: actions.TASK_ADDED,
    payload: {
      title,
      description,
    },
  }
}

export function editTask(id, title, description, status) {
  return {
    type: actions.TASK_EDITED,
    payload: {
      id,
      title,
      description,
      status,
    },
  }
}
export function deleteTask(id) {
  return {
    type: actions.TASK_DELETED,
    payload: {
      id,
    },
  }
}
