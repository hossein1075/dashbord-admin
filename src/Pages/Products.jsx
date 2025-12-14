import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromServer } from '../Redux/Products/product'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

function Products() {
    let products = useSelector(state => state.products)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProductsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/products.json"))
  },[])

  let productsSite = products ? Object.values(products) : []
  console.log(productsSite);
  const rows = productsSite.map((element, index) => (
    <Table.Tr key={element.id} style={{background : index % 2 === 0 ? "#f3f4f6" : "#ffffff"}}>
         <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{element.product}</Table.Td>
        <Table.Td>{element.price}$</Table.Td>
        <Table.Td>{element.number}</Table.Td>
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
            <Table.Th>Product</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Number</Table.Th>
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

export default Products

//  {productsSite.map(product => (
      
//      ))}