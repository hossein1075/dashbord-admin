import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromServer } from '../Redux/Products/product'


function Products() {
    let products = useSelector(state => state.products)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProductsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/products.json"))
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

//  {productsSite.map(product => (
      
//      ))}