import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { getTaskeFromServer } from '../Redux/Tasks/tasks'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Task() {

  let tasks = useSelector(state => state.tasks)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTaskeFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/tasks.json"))
  },[])

  let tasksSite = tasks ? Object.values(tasks) : []
  console.log(tasksSite);
  
  return (
    <section>
      <TitlePage title='task' text='A collection of Task for doing by people.'/>
      
    </section>
  )
}

export default Task

//  {tasksSite.map(task => (
      
//      ))}