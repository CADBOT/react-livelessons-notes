import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'
import {EventEmitter} from 'events'

let _count = 0

function getCount() {
  return _count
}

function incrementCount() {
  _count = _count + 1
}

export let TodoStore = Object.assign({}, EventEmitter.prototype, {
  getCount: getCount,

  emitChange: function() {
    this.emit('CHANGE_EVENT')
  },

  addChangeListener: function(callback) {
    this.on('CHANGE_EVENT', callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener('CHANGE_EVENT', callback)
  }
})

//TODO register with the dispatcher
dispatcher.register(action => {
  console.log(`inside cb: ${action}`)
  switch (action.actionType) {
    case 'INCREMENT':
      incrementCount()
      TodoStore.emitChange()
      break;
  }
})
