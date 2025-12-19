import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { getTaskeFromServer } from '../Redux/Tasks/tasks'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { deleteTasksFromServer } from '../Redux/Tasks/tasks'
import Swal from 'sweetalert2'


function Task() {

  let tasks = useSelector(state => state.tasks)
  let dispatch = useDispatch()
  const status = ["Completed", "Not Completed", "In Progress"]
  
  useEffect(()=> {
    dispatch(getTaskeFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/tasks.json"))
  },[])

  let tasksSite = tasks ? Object.entries(tasks).map(([id, data]) => ({
  id,
  ...data
})) : [];
  
  console.log(tasksSite);
const deleteTasks = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This task will be deleted!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#04AA6D',
    cancelButtonColor: '#FF3239',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(
        deleteTasksFromServer({
          url: 'https://information-products-a101d-default-rtdb.firebaseio.com/tasks',
          firebaseId: id
        })
      );
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The task has been deleted.',
        confirmButtonColor: '#04AA6D'
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        icon: 'info',
        title: 'Cancelled',
        text: 'The task was not deleted.',
        confirmButtonColor: '#FFAA00'
      });
    }
  });
}

  const rows = tasksSite.map((element, index) => {
     let statusRandom = status[Math.floor(Math.random() * status.length)]

     let statusColor
     if(statusRandom === 'Completed') statusColor = '#04AA6D'
     if(statusRandom === 'Not Completed') statusColor = '#FF3239'
     if(statusRandom === 'In Progress') statusColor = '#FFEB3B'
    return( <Table.Tr key={element.id} style={{background : index % 2 === 0 ? "#f3f4f6" : "#ffffff"}}>
       <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.task}</Table.Td>
      <Table.Td style={{color: statusColor,}}>{statusRandom}</Table.Td>
      <Table.Td>

        <Button onClick={() => deleteTasks(element.firebaseId)} variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50'><AiOutlineDelete size={18}/></Button>
      </Table.Td>
    </Table.Tr>)
});
  return (
    <section>
      <TitlePage title='task' text='A collection of Task for doing by people.'/>
       <div className='border-t-4 border-solid border-emerald-500 rounded-t-md bg-zinc-50 p-5'>
   <Table.ScrollContainer minWidth={900}>
           <Table 
           styles={{
    th: {
      background: "#04AA6D",
      color: "#FAFAFA",
      paddingLeft: 10,
      
    },
    td: {
      paddingLeft: 10,
      fontFamily: 'Noto Medium'
    }
    
  }}>
      <Table.Thead>
        <Table.Tr>
           <Table.Th className='w-15'>#</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Task</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {rows}
      </Table.Tbody>
    </Table>
</Table.ScrollContainer>
      </div>
    </section>
  )
}

export default Task

