import React, { useState } from 'react';
import { IProduct } from '../models';
import { FaShoppingBag } from 'react-icons/fa'

interface ProductProps {
    product: IProduct;
}

const Product = ({ product }: ProductProps) => {
    const [details, setDetails] = useState(false);

    const buttonClassName = details ? "bg-blue-400" : "bg-yellow-400";


    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 justify-center hover:scale-110 hover:transition-all">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <p className="text-center mt-5 mb-5">{product.title}</p>
            <p className="font-bold text-gray-500">Price: <span className='text-gray-500  decoration-4 line-through decoration-2' >{product.price}$</span> <span className='text-black'>New price: {(product.price * 0.9).toFixed()}$</span></p>



            {details && (
                <div className="">
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>
            )} 
            <div className="flex justify-center items-center mt-10">
                 <button
                className={`py-1 px-1 border rounded-md mr-2 ${buttonClassName}`}
                onClick={() => setDetails((prev) => !prev)}>
                {details ? 'Hide details' : 'Show details'}
            </button>
             <button
                className={`py-1 px-2 border rounded-md ${buttonClassName}`}
                onClick={() => setDetails((prev) => !prev)}>
                <FaShoppingBag/>
            </button>
            </div>
            
        </div>
    );
};

export { Product };
