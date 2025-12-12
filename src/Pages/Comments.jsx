import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsFromServer } from '../Redux/Comments/comment'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";



function Comments() {
  let comments = useSelector(state => state.comments)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getCommentsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/comments.json"))
  },[])

  let commentsSite = comments ? Object.values(comments) : []
  console.log(commentsSite);

  const rows = commentsSite.map((element, index) => (
      <Table.Tr key={element.id} style={{background : index % 2 === 0 ? "#f3f4f6" : "#ffffff"}}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.email}</Table.Td>
        <Table.Td>{element.comment}</Table.Td>
        <Table.Td>
          <Button variant="filled" color="#04AA6D" size="xs" radius="md" className='text-zinc-50 mr-1'><GiConfirmed size={16}/></Button>
          <Button variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50'><AiOutlineDelete size={16}/></Button>
        </Table.Td>
      </Table.Tr>
    ));
  return (
    <section>
      <TitlePage title='Commnets' text='A collection of commnets showing your website data.'/>
       <div className='border-t-4 border-solid border-emerald-500 rounded-t-md bg-zinc-50 p-5'>
        
             <div>
                  <Table 
                 styles={{
           table: {
            overflow: 'auto'
          },
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
                <Table.Th>Rows</Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Comment</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
      
            <Table.Tbody>
              {rows}
            </Table.Tbody>
          </Table>
             </div>
      
            </div>
    </section>
  )
}

export default Comments

//  {commentsSite.map(comment => (
      
//      ))}