import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import { IoSearchOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';

const elements = [
  { UserName: 'Jordan', ProductID: 12.011, PurchaseDate: 'C', Status: 'Carbon', Email: '', Payment: '', img: '' },
  { UserName: 'Hilton', ProductID: 14.007, PurchaseDate: 'N', Status: 'Nitrogen', Email: '', Payment: '', img: '' },
  { UserName: 'Karyn', ProductID: 88.906, PurchaseDate: 'Y', Status: 'Yttrium', Email: '', Payment: '', img: '' },
  { UserName: 'Chris', ProductID: 137.33, PurchaseDate: 'Ba', Status: 'Barium', Email: '', Payment: '', img: '' },
];

function Orders() {

  const rows = elements.map((element, index) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.img}</Table.Td>
      <Table.Td>{element.UserName}</Table.Td>
      <Table.Td>{element.ProductID}</Table.Td>
      <Table.Td>{element.PurchaseDate}</Table.Td>
      <Table.Td>{element.Status}</Table.Td>
      <Table.Td>{element.Email}</Table.Td>
      <Table.Td>{element.Payment}</Table.Td>
      <Table.Td>
        <Button variant="light" radius="md">Details</Button>
      </Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <div>
        <div>
          <TitlePage text='' title='Orders' />
        </div>
        <div>
          <div className='relative bg-gray-100 h-9 flexCenter border-2 border-solid dark:border-violet-600 border-violet-200 rounded-md'>
            <input type="text" className='w-full outline-none pl-7' placeholder='Search' />
            <span className='absolute left-1'>
              <IoSearchOutline size={20} />
            </span>
          </div>
          <div>
            <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer ' onClick={() => ContextData.setOpen(true)}>
              <FaBars />
            </button>
            <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer ' onClick={() => ContextData.setOpen(true)}>
              <FaBars />
            </button>
            <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer ' onClick={() => ContextData.setOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              <Table.Th>UserName</Table.Th>
              <Table.Th>ProductID</Table.Th>
              <Table.Th>PurchaseDate</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Payment</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  )
}

export default Orders