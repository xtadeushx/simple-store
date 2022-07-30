import { useContext } from 'react'
import { ModalContext } from '../components/context/ModalContext';
import { CreateProduct } from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { SortPanel } from '../components/SortPanel';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import Login from '../components/login/Login';

interface ProductsPageProps {
  addToCart: (data: IProduct) => void;
}





const ProductsPage = ({addToCart}:ProductsPageProps) => {
  const { products, loading, error, addProduct, changeCategory, changeSort, changeLimit } = useProducts();
  const { modal, open, close } = useContext(ModalContext)
  const onCreate = (data: IProduct) => {
    close();
    addProduct(data);
  }
  return (
    <>
      <SortPanel changeCategory={changeCategory} changeSort={changeSort} changeLimit={changeLimit} />
      <div className="container mx-auto max-w-4xl pt-5 grid grid-cols-2 gap-10" >
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}

        {modal && <Modal title='Create new product' onClose={close}>
          <CreateProduct onCreate={onCreate} />
        </Modal>}
        {modal && <Modal title='Create new product' onClose={close}>
          <Login />
        </Modal>}

        <button className='fixed bottom-5 right-5 rounded-full bg-red-400 text-white text-2xl px-4 py-2' onClick={open}>+</button>
      </div></>

  )
}

export { ProductsPage }