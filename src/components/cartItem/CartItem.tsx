import React from 'react'
import { products } from '../../data/products';
import './cartItem.css'
import { FaPlusCircle,FaMinusCircle,FaTrashAlt} from 'react-icons/fa'
import { ICart } from '../../models';

interface CartItemProps{
  id:number|undefined;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onclick:(id:number)=> void;
}

const CartItem = ({title, price, image,id=0,quantity, onclick}:CartItemProps) => {
    return (
        <>
          <div className="cart__item">
            <div className="cart__item-img">
              <img className="pizza-block__image" src={image} alt="clothe" />
            </div>
            <div className="cart__item-info">
              <h4>{title}</h4>
             
            </div>
            <div className="cart__item-count">
              <FaMinusCircle className='cursor-pointer text-lg'/>
              <b>{quantity}</b>
              <FaPlusCircle className='cursor-pointer text-lg'/>
             
            </div>
            <div className="cart__item-price">
              <b>
              {price * quantity} ₴
              </b>
            </div>
            <div className="cart__item-remove">
             < FaTrashAlt className='cursor-pointer text-lg' onClick={()=>{onclick(id)}}/>
            </div>
          </div>
        </>
      );
}

export default CartItem