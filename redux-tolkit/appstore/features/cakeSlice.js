
const {createSlice}=  require('@reduxjs/toolkit')
const initialState= {
    numberofcake:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        order:(state)=>{
            state.numberofcake -=1
        },
        restock:(state,action)=>{
            state.numberofcake += action.payload
        }
    }

})



 module.exports = {
  cakeReducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions
}