import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import store from '../appstore/store'
import { order, restock } from '../appstore/features/icecreamSlice'
export const IcecreamView = () => {
    const selector= useSelector(store=>store.icecream.numberoficecream)
    const dispatch= useDispatch()
  return (
    <>
    <h2> icecream view {selector} </h2>
        <button onClick={()=>dispatch(order())}>ordericecream</button>
        <button onClick={()=>dispatch(restock(1))}>restock icecream</button>
    </>
  )
}
