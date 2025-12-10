import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskeFromServer } from '../Redux/Tasks/tasks'

function Products() {
    let products = useSelector(state => state.products)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTaskeFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/products.json"))
  },[])

  let productsSite = products ? Object.values(products) : []
  console.log(productsSite);
  return (
 <section>
  <TitlePage title='Products' text='A collection of products showing your produce.'/>
 </section>
  )
}

export default Products

//  {productsSite.map(products => (
      
//      ))}