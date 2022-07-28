import React, { useEffect, useState } from 'react';
import getCategories from '../../../utils/apis/getCategories';
import CategoriesItem from '../../molecules/categories-item';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [readCategotries, setEeadCategotries] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };
    getApi();
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => setEeadCategotries(!readCategotries)}
      >
        categorias
      </button>
      <ul>
        {
          readCategotries && categories.map(({ id, name }) => (
            <CategoriesItem key={id} id={id} name={name} />
          ))
        }
      </ul>
    </div>
  );
}
