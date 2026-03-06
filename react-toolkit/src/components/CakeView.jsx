import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import store from '../appstore/store'
import { order, restock } from '../appstore/features/cakeSlice'
export const CakeView = () => {
const dispatch= useDispatch()
    const selector= useSelector(store=>store.cake.numberofcake)
  return (
    <>
    <h2>cake view {selector} </h2>
    <button onClick={()=>dispatch(order())}>orderCake</button>
    
    <button onClick={()=>dispatch(restock(5))}>restockcake</button>
    </>
  )
}
