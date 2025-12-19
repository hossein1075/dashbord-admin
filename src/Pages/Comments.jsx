import React, { useEffect, useState } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsFromServer } from '../Redux/Comments/comment'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { deleteCommentsFromServer } from '../Redux/Comments/comment';
import Swal from 'sweetalert2'



function Comments() {
  let comments = useSelector(state => state.comments)
  let dispatch = useDispatch()
  const [confirm, setConfirm] = useState({})

  useEffect(()=> {
    dispatch(getCommentsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/comments.json"))
  },[])

let commentsSite = comments ? Object.entries(comments).map(([id, data]) => ({
  id,
  ...data
})) : [];
  console.log(commentsSite);

 const handleConfirm = (id) => {
  const stateNow = confirm[id]
    Swal.fire({
    title: stateNow ? 'Do you want to unconfirm this comment?' : 'Do you want to confirm this comment?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#04AA6D',
    cancelButtonColor: '#FF3239',
    confirmButtonText: stateNow ? 'Yes, unconfirm it!' : 'Yes, confirm it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      
      setConfirm(prev => ({ ...prev, [id]: !prev[id] }));
      
      Swal.fire({
        icon: 'success',
        title: stateNow ? 'Unconfirmed!' : 'Confirmed!',
        text: stateNow ? 'The comment has been unconfirmed.' : 'The comment has been confirmed.',
        confirmButtonColor: '#04AA6D'
      }) 
    } else if (result.dismiss === Swal.DismissReason.cancel) {
  
      Swal.fire({
        icon: 'info',
        title: 'Cancelled',
        text: 'No changes were made to the comment.',
        confirmButtonColor: '#FFAA00'
      });
    }
  });
  }

 const deleteComment = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This comment will be deleted!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#04AA6D',
    cancelButtonColor: '#FF3239',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(
        deleteCommentsFromServer({
          url: 'https://information-products-a101d-default-rtdb.firebaseio.com/comments',
          firebaseId: id
        })
      );
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The comment has been deleted.',
        confirmButtonColor: '#04AA6D'
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    
      Swal.fire({
        icon: 'info',
        title: 'Cancelled',
        text: 'The comment was not deleted.',
        confirmButtonColor: '#FFAA00'
      });
    }
  });
}

  const rows = commentsSite.map((element, index) => (
      <Table.Tr key={element.id} style={{background : index % 2 === 0 ? "#f3f4f6" : "#ffffff"}}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.email}</Table.Td>
        <Table.Td>{element.comment}</Table.Td>
        <Table.Td>
          <Button onClick={() => handleConfirm(element.id)} variant="filled" color={confirm[element.id] ? '#04AA6D' : '#FF3239'} size="xs" radius="md" className='text-zinc-50 mr-1'>{confirm[element.id] ? <GiConfirmed size={16} /> : <IoIosCloseCircle size={16} />}</Button>
          <Button onClick={() => deleteComment(element.firebaseId)} variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50'><AiOutlineDelete size={16}/></Button>
        </Table.Td>
      </Table.Tr>
    ));
  return (
    <section>
      <TitlePage title='Commnets' text='A collection of commnets showing your website data.'/>
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
                <Table.Th>Comment</Table.Th>
                <Table.Th className='w-[125px]'>Actions</Table.Th>
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

export default Comments
