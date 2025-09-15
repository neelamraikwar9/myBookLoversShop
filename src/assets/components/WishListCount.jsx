import React from 'react'
// import WishList from '../pages/WishList'
import useBookContext from '../contexts/BookContext'

 const WishListCount = () => {
    const { list } = useBookContext();
  return (
    <>
    <span>{list?.length}</span>
    </>
  )
}

export default WishListCount;