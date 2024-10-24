import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addwishlistItem } from '../redux/slices/wishlistSlice';
import { addItemtoCart } from '../redux/slices/cartSlice';



function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data)

  const dispatch = useDispatch()

  return (
    <div className='pt-40 mb-10 px-10 md:grid grid-cols-4'>

     { 
     data?.length>0 &&
     data.map((item)=>(
      <div className=" p-2">
        <div className='p-3 rounded shadow-lg'>
          <img className='h-60 w-full' src={item?.image}alt="" />
          <h4 className='text-center text-2xl'>{item?.title?.slice(0,20)}</h4>
          <p className='text-justify mt-5 '>{item?.description?.slice(0,60)}...</p>
          <p className='text-xl '>Price :<span className='text-violet-600'>{item?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={() => dispatch(addwishlistItem(item))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
            <button onClick={()=>dispatch(addItemtoCart(item))} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
     ))
      



     }
    </div>
  )
}

export default Home
