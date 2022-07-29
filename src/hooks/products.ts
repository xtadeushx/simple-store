import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCT_URL } from '../data/url';
import { IProduct } from '../models';



export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentSort, setCurrentSort] = useState('')
  const [currentLimit, setCurrentLimit] = useState(5)

   function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

  const changeCategory = (data: string) => { setCurrentCategory(data) }
  const changeSort = (data: string) => { setCurrentSort(data) }
  const changeLimit = (data: number) => { setCurrentLimit(data) }

const category =  currentCategory === ''? '': `/category/${currentCategory}`;
const sort =  currentSort === ''? '': `?sort=${currentSort}`;
const limit =  currentLimit === 0? '': `?limit=${currentLimit}`;


  useEffect(() => {
    fetchProducts();
  }, [currentCategory, currentSort, currentLimit]);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');

    try {
      let response = await axios.get<IProduct[]>(`${PRODUCT_URL}${category}${limit}${sort}`);
      let data = await response.data; 
      setTimeout(() => {
        setLoading(false);
        setProducts(data);
      },2000)
        
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      console.log(error);
      setError(error.message);
    }
  };

  return { products, loading, error,addProduct, changeCategory, changeSort, changeLimit};
};
