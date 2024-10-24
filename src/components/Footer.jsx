import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';







function Footer() {
  return (
    <div className='min-h-80 bg-violet-800 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]' >
        <div className=' p-2 text-white'>
       <div className='flex gap-3 text-3xl '>
          <FontAwesomeIcon icon={faCartShopping}  />
          <h1>E-cart</h1>
        </div>
        <p className='mt-4 text-1xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit iusto sequi dignissimos velit. Ex, veritatis cumque! Esse laborum animi, saepe at numquam possimus facere recusandae repellendus aliquam totam fugit.</p>
        </div>
        <div className='flex jsutify-center'>
          <div className=' p-2 text-white  '>
           <h1 className='text-3xl'>LINKS</h1>
          <Link to={'/'}><p className='mt-3'>Home</p></Link>
          <Link to={'/Wishlist'}><p className='mt-3'>Whishlist</p></Link>
         <Link to={'/cart'}> <p className='mt-3'>Cart</p></Link>
            </div>   
        </div>    
        <div className='flex jsutify-center'>
          <div className=' p-2 text-white  '>
           <h1 className='text-3xl'>GUIDES</h1>
          <p className='mt-3'>React</p>
          <p className='mt-3'>React Bootstrap</p>
          <p className='mt-3'>Bootswatch</p>
            </div>   
        </div>   

       
          <div className=' p-2 text-white  '>
           <h1 className='text-3xl'>CONTACT US</h1>
          <div className='mt-3'>
            <input type="text" placeholder='Email' className='form-control w-100 p-2' />
            <button className='py-2 bg-orange-600'>Subscribe</button>
          </div>
          <div className='flex'>
          
          </div>
            </div>   
            
    </div>
  )
}

export default Footer
