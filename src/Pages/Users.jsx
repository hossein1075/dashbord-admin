import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUsersFromServer } from '../Redux/Users/users'

function Users() {
  let users = useSelector(state => state.users)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getUsersFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/users.json"))
  }, [])

  let usersSite = users ? Object.values(users) : []
  console.log(users);
  
  return (
     <section>
      <TitlePage title='Users' text='A collection of Users in web seite.'/>
   
    </section>
  )
}

export default Users

//    {usersSite.map(user => (
      
//    ))}