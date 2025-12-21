import React, { useEffect, useState } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromServer } from '../Redux/Products/product'
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'
import { deleteProductsFromServer } from '../Redux/Products/product';
import ModalProduct from '../Components/Modal/ModalProduct';
function Products() {
  let products = useSelector(state => state.products)
  let dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('add')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    dispatch(getProductsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/products.json"))
  }, [])

  let productsSite = products ? Object.entries(products).map(([id, data]) => ({
    id,
    ...data
  })) : [];

  const deleteProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This product will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04AA6D',
      cancelButtonColor: '#FF3239',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteProductsFromServer({
            url: 'https://information-products-a101d-default-rtdb.firebaseio.com/products',
            firebaseId: id
          })
        ).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The product has been deleted.',
            confirmButtonColor: '#04AA6D'
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'info',
          title: 'Cancelled',
          text: 'The product was not deleted.',
          confirmButtonColor: '#FFAA00'
        });
      }
    });
  }
  console.log(productsSite);

  const editModal = (product) => {
setMode('edit')
setOpen(true)
setSelectedProduct(product)
  }
  const addProduct = () => {
setMode('add')
setOpen(true)
setSelectedProduct(null)
  }
  const rows = productsSite.map((element, index) => (
    <Table.Tr key={element.id} style={{ background: index % 2 === 0 ? "#f3f4f6" : "#ffffff" }}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.product}</Table.Td>
      <Table.Td>{element.price}$</Table.Td>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td>
        <Button onClick={() => editModal(element)} variant="filled" color="#04AA6D" size="xs" radius="md" className='text-zinc-50 mr-1' ><FiEdit size={16} /></Button>
        <Button onClick={() => deleteProduct(element.firebaseId)} variant="filled" color="#FF3239" size="xs" radius="md" className='text-zinc-50' ><AiOutlineDelete size={16} /></Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <section>
      <TitlePage title='Products' text='A collection of products showing your produce.' />
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
                <Table.Th>Count</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {rows}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>

      <div className='text-right mt-2'>
        <Button onClick={addProduct} variant="gradient" gradient={{ from: 'rgba(191, 178, 178, 1)', to: 'violet', deg: 99 }} size="xs" radius="md" className='text-zinc-50 mr-1' >Add Product</Button>
      </div>


      <ModalProduct opened={open} onClose={() => setOpen(false)} mode={mode} productData={selectedProduct} />

    </section>
  )
}

export default Products

