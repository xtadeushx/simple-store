import axios, { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../components/context/ModalContext';
import { CreateProduct } from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { Select } from '../components/select/Select';
import { CATEGORIES__URL } from '../data/url';
import { useCategories } from '../hooks/categoties';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

const ProductsPage = () => {
  const { products, loading, error, addProduct,changeCategory } = useProducts();
  // const { categories } = useCategories();
  const { modal, open, close } = useContext(ModalContext)
  const onCreate = (data: IProduct) => {
    close();
    addProduct(data);
  }

  const categories =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]



  return (
    <div className="container mx-auto max-w-2xl pt-5" >
      <Select
        options={categories}
        onBlur={changeCategory}
        name="static"
        id="static"
        text="category"
      />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product key={product.id} product={product} />)}

      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={onCreate} />
      </Modal>}
      <button className='fixed bottom-5 right-5 rounded-full bg-red-400 text-white text-2xl px-4 py-2' onClick={open}>+</button>
    </div>
  )
}

export { ProductsPage }