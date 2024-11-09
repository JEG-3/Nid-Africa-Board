/* eslint-disable no-unused-vars */
import React from 'react';
import {IoIosSearch} from 'react-icons/io';

const SearchBox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
      <IoIosSearch className='mr-2'/>
      <input type="text" placeholder='Search...' />
    </div>
  )
}

export default SearchBox;
