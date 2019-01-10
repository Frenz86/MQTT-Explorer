import { ActionTypes } from '../reducers'
import * as q from '../../../backend/src/Model'

export const selectTopic = (topic: q.TreeNode) => {
  return {
    selectedTopic: topic,
    type: ActionTypes.selectTopic,
  }
}
