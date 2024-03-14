import React from 'react'
import { GET_ALL_VEHICLE_LIST } from '../api/api'
import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import TableData from './../components/layout/TableData';

// CHARTS
import BarChart from '../components/charts/BarChart';
import PieChart from './../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import RadialBar from '../components/charts/RadialBar';


// 
import { ReactComponent as BellIcon } from '../img/bell-regular.svg';
import { ReactComponent as GlobeSolid } from '../img/globe-solid.svg';
import { ReactComponent as BarsSolid } from '../img/bars-solid.svg';
import { ReactComponent as SunRegular } from '../img/sun-regular.svg';
import { ReactComponent as SearchIcon } from '../img/magnifying-glass-solid.svg';

// import { ReactComponent as SunSolid } from '../img/sun-solid.svg';
import ProfileImage from '../img/default.png';


const HomePage = () => {

    return (

        <div>
            <div class="flex min-h-screen bg-gray-100 text-gray-500">

                {/* Sidebar OR Left Bar of Index Page */}
                <div class="w-64 bg-white">
                    <Sidebar />
                </div>

                <div class="flex-grow w-full">
                    {/* Searchbar */}
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



                    {/* Cards */}
                    <div className="grid grid-cols-6 gap-4 mx-10">
                        <Cards />
                    </div>
                    {/* Charts */}
                    <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4 '>
                        <div className='bg-white rounded-md'>
                            <BarChart isDashboard={true} />
                        </div>
                        {/* <div className='bg-white'> */}
                        <PieChart isDashboard={true} />
                        {/* </div> */}
                    </div>
                    <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4'>
                        <div className='bg-white rounded-md'>
                            <RadialBar isDashboard={true} />
                        </div>
                        <div className='bg-white rounded-md'>
                            <LineChart isDashboard={true} />
                        </div>
                    </div>
                    {/* Tables of Landing Page */}
                    <div class="relative overflow-x-auto p-10 grid grid-cols-2 gap-4">
                        <div class="relative overflow-x-auto shadow-md bg-white">
                            <TableData url={GET_ALL_VEHICLE_LIST} />
                        </div>
                        <div class="relative overflow-x-auto shadow-md bg-white">
                            <TableData url={GET_ALL_VEHICLE_LIST} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomePage

// https://chat.openai.com/c/ab13c059-a6ec-4eac-bf12-4644075b370f