import React from 'react'
import { products } from '../../data/products';
import './cartItem.css'
import { FaPlusCircle,FaMinusCircle,FaTrashAlt} from 'react-icons/fa'




const CartItem = () => {
    return (
        <>
          <div className="cart__item">
            <div className="cart__item-img">
              <img className="pizza-block__image" src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt="Pizza" />
            </div>
            <div className="cart__item-info">
              <h4>{products[0].title}</h4>
             
            </div>
            <div className="cart__item-count">
              <FaMinusCircle className='cursor-pointer text-lg'/>
              <b>1</b>
              <FaPlusCircle className='cursor-pointer text-lg'/>
             
            </div>
            <div className="cart__item-price">
              <b>
              {products[0].price}
              </b>
            </div>
            <div className="cart__item-remove">
             < FaTrashAlt className='cursor-pointer text-lg'/>
            </div>
          </div>
        </>
      );
}

export default CartItem