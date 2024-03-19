import React, { useState } from 'react'

import ProfileImage from '../../img/default.png';
import { ReactComponent as BarsSolid } from '../../img/bars-solid.svg';
import { ReactComponent as BellIcon } from '../../img/bell-regular.svg';
import { ReactComponent as SunRegular } from '../../img/sun-regular.svg';
import { ReactComponent as GlobeSolid } from '../../img/globe-solid.svg';
import { ReactComponent as SearchIcon } from '../../img/magnifying-glass-solid.svg';
// import { ReactComponent as SunSolid } from '../img/sun-solid.svg';


const SearchBar = () => {


    return (
        <div className='bg-white h-14 m-10 mt-5 rounded-lg flex justify-between '>
            <div className='flex pl-5 gap-2'>
                <SearchIcon className="w-4 hover:cursor-pointer fill-gray-400" />
                <input type='text' className='flex-grow p-2 focus:border-transparent outline-none w-96' placeholder='Search...' />
            </div>

            <div className='flex gap-4 mr-7 justify-center items-center'>
                <GlobeSolid className="w-5 hover:cursor-pointer fill-gray-400" />
                <BarsSolid className="w-5 hover:cursor-pointer fill-gray-400" />
                <SunRegular className="w-5 hover:cursor-pointer fill-gray-400" />
                <BellIcon className="w-5 hover:cursor-pointer fill-gray-400" />
                <img src={ProfileImage} alt='profile' className='w-8 h-8 rounded-full hover:cursor-pointer border-2 border-gray-200' />
            </div>

        </div>
    )
}

export default SearchBar
