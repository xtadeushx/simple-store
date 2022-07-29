import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCT_URL } from '../data/url';
import { IProduct } from '../models';



export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentCategory, setCurrentCategory] = useState('')

   function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

  const changeCategory = (data: string) => { setCurrentCategory(data) }

const category =  currentCategory === ''? '': `/category/${currentCategory}`;


  useEffect(() => {
    fetchProducts();
  }, [currentCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');

    try {
      let response = await axios.get<IProduct[]>(`${PRODUCT_URL}${category}?limit=5`);
      let data = await response.data; 
      setProducts([])
        setLoading(false);
        setProducts(data);
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      console.log(error);
      setError(error.message);
    }
  };

  return { products, loading, error,addProduct, changeCategory };
};
