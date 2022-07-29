import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct;
}

const Product = ({ product }: ProductProps) => {
    const [details, setDetails] = useState(false);

    const buttonClassName = details ? "bg-blue-400" : "bg-yellow-400";


    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold text-gray-500">Price: <span className='text-gray-500  decoration-4 line-through decoration-2' >{product.price}$</span> <span className='text-black'>New price: {(product.price * 0.9).toFixed()}$</span></p>



            {details && (
                <div className="">
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>
            )} 
             <button
                className={`py-2 px-4 border ${buttonClassName}`}
                onClick={() => setDetails((prev) => !prev)}>
                {details ? 'Hide details' : 'Show details'}
            </button>
        </div>
    );
};

export { Product };
