import React, { useEffect } from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsFromServer } from '../Redux/Comments/comment'


function Comments() {
  let comments = useSelector(state => state.comments)
  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getCommentsFromServer("https://information-products-a101d-default-rtdb.firebaseio.com/comments.json"))
  },[])

  let commentsSite = comments ? Object.values(comments) : []
  console.log(commentsSite);
  return (
    <section>
      <TitlePage title='Commnets' text='A collection of commnets showing your website data.'/>
    </section>
  )
}

export default Comments

//  {commentsSite.map(comment => (
      
//      ))}