const redux = require('redux')
const createStore = redux.createStore
const combinereducer= redux.combineReducers
console.log('hello saad')

const CAKE_ORDER = 'CAKE_ORDER'
const restok_cake= 'restok_cake'

function restockCake(quantity=1) {
  return {
    type: restok_cake,
    payload: quantity
  }
}




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
        numberOfCake: state.numberOfCake - 1,
      }
   case restok_cake:
    return{
        ...state,
        restok_cake:state.numberOfCake + action.payload
    }
    default:
      return state
  }
}
const rootReducer=combinereducer({
    cake:cakeReducer,
    icecream:IcecreamReducer
})

const Dummystore= createStore(rootReducer)
const store = createStore(reducer)

console.log('Initial State:', store.getState())
 const unsub=  store.subscribe(()=>console.log('updatestate',store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())

console.log('Updated State:', store.getState())

store.dispatch(restockCake(2))
// unsub()
// store.dispatch(orderCake())