import React from 'react';
import { Interface } from 'readline';
import { sortProperty } from '../data/categories';
import { Select } from './select/Select';






interface SortPanel {
  changeCategory: (data: string) => void;
  changeSort: (data: string) => void;
  changeLimit: (data: number) => void;
}


const SortPanel = ({ changeCategory, changeSort, changeLimit }: SortPanel) => {
  return (
    <div className="flex flex-col center justify-center align absolute lef-15 top-20 border p-5">
      <Select
        options={sortProperty.categories}
        onBlur={changeCategory}
        name="static"
        id="static"
        text="category"
      />
      <Select options={sortProperty.sort} onBlur={changeSort} name="sort" id="sort" text="sort" />
      <Select options={sortProperty.limit} onBlur={changeLimit} name="limit" id="limit" text="limit on page" />
    </div>
  );
};

export { SortPanel };
