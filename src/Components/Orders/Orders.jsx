import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import { IoSearchOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';

const elements = [
  { id: 1, UserName: 'Jordan', ProductID: '#APT009', PurchaseDate: '20/02/2025', Status: 'Delivered', Email: 'Jordan@gamil.com', Payment: 'Paid', img: '/images/home/user1.png' },
  { id: 2, UserName: 'Hilton', ProductID: '#APT083', PurchaseDate: '30/01/2025', Status: 'Approved', Email: 'Hilton@gamil.com', Payment: 'Paid', img: '/images/home/user1 (1).png' },
  { id: 3, UserName: 'Karyn', ProductID: '#APT032', PurchaseDate: '22/02/2025', Status: 'Processing', Email: 'Karyn@gamil.com', Payment: 'Pending', img: '/images/home/user3.png' },
  { id: 4, UserName: 'Chris', ProductID: '#APT048', PurchaseDate: '30/01/2025', Status: 'Processing', Email: 'Chris@gamil.com', Payment: 'Pending', img: '/images/home/user4.png' },
];

function Orders() {

  const rows = elements.map((element, index) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <img
          src={element.img}
          alt={element.UserName}
          className="size-12 rounded-full object-cover border-2 border-solid border-emerald-500"
        />
      </Table.Td>
      <Table.Td className='font-Noto-SemiBold font-semibold'>{element.UserName}</Table.Td>
      <Table.Td>{element.ProductID}</Table.Td>
      <Table.Td>{element.PurchaseDate}</Table.Td>
      <Table.Td>{element.Status}</Table.Td>
      <Table.Td>{element.Email}</Table.Td>
      <Table.Td>{element.Payment}</Table.Td>
      <Table.Td>
        <Button variant="light" radius="md" color='#04aa6d'>Details</Button>
      </Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <div className='flex'>
        <div>
          <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Orders</h2>
        </div>
        <div className='flex'>
          <div className='relative bg-gray-100 h-9 flexCenter border-2 border-solid dark:border-violet-600 border-violet-200 rounded-md'>
            <input type="text" className='w-full outline-none pl-7' placeholder='Search' />
            <span className='absolute left-1'>
              <IoSearchOutline size={20} />
            </span>
          </div>
          <div className='flex'>
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
          <Table.Thead className='text-emerald-500 font-Noto-light font-light'>
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