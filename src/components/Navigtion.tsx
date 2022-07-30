import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaStoreAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { ModalContext } from './context/ModalContext';
import { ICart } from '../models';

interface NavigtionProps{
  cart: ICart[];
}


const Navigtion = ({cart}:NavigtionProps) => {

let cartLength = cart.length;

  const { modal, open, close } = useContext(ModalContext)
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <div className="flex items-center"> <FaStoreAlt />
      <Link to='/' className='mr-2'><span className="font-bold ml-4">Simple store</span></Link></div>
     



      <span className='flex justify-between w-[200px] items-center'>
        <Link to="/cart" className="flex items-center">
         
          <svg
            className='ml-2 relative'
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-2 right-[11.2rem] text-[10px] rounded-full border  px-1 bg-white text-gray-600">{cartLength}</span>
        </Link>
       <BsFillPersonFill className='text-[25px]' onClick={open}/>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  )
}

export { Navigtion };