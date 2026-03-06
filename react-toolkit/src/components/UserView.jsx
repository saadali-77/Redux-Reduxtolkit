import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../appstore/features/userSlice'
export const UserView = () => {
    const user= useSelector(state=>state.user)
    const dispatch= useDispatch()
    useEffect(()=>{
   dispatch(fetchUsers())
    },[])
  return (
    <> 
    
    <h2>list of user view</h2>
    {user.loading && <div>loading...</div>}
    {!user.loading && user.error ? <div> Error: {user.error}</div> :null }
    <ul>
{user.users.map(user=>(
    <li key={user.id}>
        {user.name}

    </li>
))

}

    </ul>
    </>
  )
}
