
import { faTrashCan,faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'


function Cart() {

  const [total,setTotal] = useState(0)

const cartArray = useSelector((state)=>state.carItem)
console.log(cartArray)

const dispatch = useDispatch()
const navigate = useNavigate()

const getTotal = () =>{
  if(cartArray.length>0){
    setTotal(cartArray?.map((item)=>item?.price).reduce((n1,n2)=>n1+n2))
}
  }
  
console.log(total)

const handleCheckout = () =>{
  alert('order placed succesfully')
  dispatch(emptyCart())
  navigate('/')
}


useEffect(()=>{
  getTotal()
},[cartArray])

  return (
    <>

      <div className='pt-32'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
      
      { cartArray?.length>0?
       <div className='md:grid grid-cols-[2fr_1fr] my-10'>
          <div className='p-3'>
            <table className='w-full border border-gray-400'>
              <thead>
                <tr>
                  <th className='border border-gray-100 p-3 bg-gray-400 '>#</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 '>Title</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 '>Image</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 '>Price</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 '>Action</th>
                </tr>
              </thead>
              <tbody>
               { 
                cartArray.map((item,index)=>(
                  <tr>
                  <td className='border border-gray-100 p-3 ' >{index+1}</td>
                  <td className='border border-gray-100 p-3 text-center'>{item?.title}</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img style={{width:'150px',height:'150px'}} src={item?.image} alt="" /></td>
                  <td className='border border-gray-100 p-3 '>{item?.price}</td>
                  <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-700 rounded p-2 '><FontAwesomeIcon icon={faTrashCan}style={{color:'white'}} /></button></td>
                </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          <div className='pt-5 px-10'>
            <div className='p-5 shadow-lg'>
              <h1 className='text-center text-3xl'>Cart Summary</h1>
              <p className='mt-4 text-xl'>Total Number of Products: {cartArray?.length}</p>
              <p className='mt-4 text-xl'>Grand Total: $ {total}</p>
              <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:border border-green-600 hover:text-green-600 hover:bg-white'>Check Out</button>
            </div>
          </div>

        </div>
    
        :

      <div className='flex justify-center items-center flex-col my-10'>
        <img className='h-30' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="no image" />
        <p className='text-violet-800 text-3xl'>Your Cart is Empty</p>
       <Link to={'/'}> <button className='bg-green-600 p-3 rounded mt-5 '><FontAwesomeIcon className='me-2' icon={faBackward} />Back Home</button></Link>
      </div>}

      </div>
    </>
  )
}

export default Cart
