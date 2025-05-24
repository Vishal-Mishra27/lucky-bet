import React from 'react'
import Header2 from '../MyComponent/Header2'
import Header3 from './Header3'
import FilterPannel from "./FilterPannel";
import DropDownTable from './DropDownTable';

export default function Result() {
  return (
    <div>
      <Header2 />
      <Header3 />
      <FilterPannel />
      <DropDownTable/>
    </div>
  );
}
