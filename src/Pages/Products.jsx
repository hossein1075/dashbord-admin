import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromServer } from '../Redux/Products/product'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Products() {
    let products = useSelector(state => state.products)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProductsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/products.json"))
  },[])

  let productsSite = products ? Object.values(products) : []
  console.log(productsSite);
  const rows = elements.map((element, index) => (
      <Table.Tr key={element.name} style={{background : index % 2 === 0 ? "#f3f4f6" : "#ffffff"}}>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
        <Table.Td>
          <Button variant="filled" color="#04AA6D" size="xs" radius="md" className='text-zinc-50 mr-1'><GiConfirmed size={16}/></Button>
          <Button variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50'><AiOutlineDelete size={16}/></Button>
        </Table.Td>
      </Table.Tr>
    ));
  return (
 <section>
  <TitlePage title='Products' text='A collection of products showing your produce.'/>
   <div className='border-t-4 border-solid border-emerald-500 rounded-t-md bg-zinc-50 p-5'>
    
             <Table 
             styles={{
       table: {
        tableLayout: "fixed",  
        width: "100%",  
      },
      th: {
        background: "#04AA6D",
        color: "#FAFAFA",
        paddingLeft: 10,
        
      },
      td: {
        paddingLeft: 10
      }
    }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
  
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
  
        </div>
 </section>
  )
}

export default Products

//  {productsSite.map(product => (
      
//      ))}