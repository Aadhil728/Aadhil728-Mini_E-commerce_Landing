import React from 'react'
import { CgSearch } from "react-icons/cg";

const Search = () => {
    return (
        <div className='relative group hidden sm:block cursor-pointer'>
            <input type="text" placeholder='Search...' className='search-bar' />
            <CgSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary' />
        </div>
    )
}

export default Search