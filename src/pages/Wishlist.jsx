import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { remoewishlistitem }  from '../redux/slices/wishlistSlice';
import { addItemtoCart } from '../redux/slices/cartSlice';

function Wishlist() {

  const wishlistArray = useSelector((state)=>state.Wishlist)
  console.log(wishlistArray)

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemtoCart(item))
    dispatch(remoewishlistitem(item?.id))
  }

  return (
    <>
    <h1 className='pt-32 text-center text-4xl text-violet-800'>Wishlist</h1>
   { wishlistArray?.length>0?

    <div className='mt-5 mb-10 px-10 md:grid grid-cols-4'>

      { wishlistArray?.map((item)=>(
         <div className=" p-2">
         <div className='p-2 rounded shadow-lg'>
           <img className='h-80 w-full' src={item?.image} alt="" />
           <h4 className='text-center text-3xl'>{item?.title?.slice(0,20)}</h4>
           <p className='text-justify'>{item?.description?.slice(0,60)}...</p>
           <p className='text-2xl'>{item?.price}<span className='text-violet-600'>$70</span></p>
           <div className='flex justify-between'>
             <button onClick={()=>dispatch(remoewishlistitem(item?.id))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
             <button onClick={()=>wishes(item)} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
           </div>
         </div>
       </div>
      ))
       
      }

      
    </div>
     :
    <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div>
        <img className='w-full h-50 mb-10' src=" https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?rs=1&pid=ImgDetMain" alt="no image" />
      </div>
      <div></div>

     

    </div>
    }

    </>
  )
}

export default Wishlist
