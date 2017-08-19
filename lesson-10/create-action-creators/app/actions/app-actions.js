import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'

export let incrementActions = {
  incrementCount: () => {
    console.log('INCREMENT action dispatched')
    dispatcher.dispatch({
      actionType: constants.INCREMENT
    })
  }
}
