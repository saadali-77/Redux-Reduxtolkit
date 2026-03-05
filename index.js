const redux = require('redux')
const createStore = redux.createStore

console.log('hello saad')

const CAKE_ORDER = 'CAKE_ORDER'

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1
  }
}

const initialState = {
  numberOfCake: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        numberOfCake: state.numberOfCake - action.quantity
      }

    default:
      return state
  }
}

const store = createStore(reducer)

console.log('Initial State:', store.getState())
 const unsub=  store.subscribe(()=>console.log('updatestate',store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())

console.log('Updated State:', store.getState())
unsub()
store.dispatch(orderCake())