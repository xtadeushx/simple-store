import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { CATEGORIES__URL } from '../data/url';
import { IProduct } from '../models';


export const useCategories = () => {
  const [categories, setCategories] = useState<String[]>(['All']);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState('');

   

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setCategoriesLoading(true);
    setCategoriesError('');

    try {
      let response = await axios.get<String[]>(`${CATEGORIES__URL}`);
      let data = await response.data;
        setCategories(data);
        setCategoriesLoading(false);
    } catch (e: unknown) {
      setCategoriesLoading(false);
      const error = e as AxiosError;
      setCategoriesError(error.message);
    }
  };
console.log(categories)
  return { categories, categoriesLoading, categoriesError};
};
