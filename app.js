const redux = require('redux')
const createStore = redux.createStore
//store
const initialState ={
    counter: 0
}
//actions
const increment = (qty =1) => {
   return {
    type: "INCREMENT",
    payload: qty,
   }
}

const decrement = (qty =1) => {
    return{
        type: "DECREMENT",
        payload: qty,
    }
}
//reducer
const reducer = (state=initialState ,action) =>{
const {type , payload} = action

    switch(type){
        case "INCREMENT":
            return{...state , counter: state.counter + payload}
        case "DECREMENT":
            return{...state , counter: state.counter - payload}
        default:
            return  state
    }
}

const store = createStore(reducer)
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
//dispatch

store.dispatch(increment(11))