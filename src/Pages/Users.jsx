import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUsersFromServer } from '../Redux/Users/users'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function Users() {
  let users = useSelector(state => state.users)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/users.json"))
  }, [])

  let usersSite = users ? Object.values(users) : []
  console.log(users);
  const rows = usersSite.map((element, index) => (
    <Table.Tr key={element.id} style={{ background: index % 2 === 0 ? "#f3f4f6" : "#ffffff" }}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>
        <Button variant="filled" color="#04AA6D" size="xs" radius="md" className='text-zinc-50 mr-1'><FiEdit size={16} /></Button>
        <Button variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50'><AiOutlineDelete size={16} /></Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <section>
      <TitlePage title='Users' text='A collection of Users in web seite.' />

        <div className='border-t-4 border-solid border-emerald-500 rounded-t-md bg-zinc-50 p-5'>
         <Table.ScrollContainer minWidth={850}>
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
                <Table.Th>name</Table.Th>
                <Table.Th>Phone Number</Table.Th>
                <Table.Th>Email</Table.Th>
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

export default Users

