
const {createSlice}=  require('@reduxjs/toolkit')
// for importing other action from other slice for extra reducer const {cakeActions}=require('../features/cakeSlice')
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
    },
    // // if we want two different slice to follow eatchother
    // extraReducers:{
    //     ['cake/order']:(state)=>{
    //         state.numberoficecream-- 
       extraReducers:(builder)=>{
        builder.addCase(cakeAction.order,state=>{
            state.numberoficecream--
        })
       } 
    

})



 module.exports = {
  cakeReducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions
}