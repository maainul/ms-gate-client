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


import SearchBar from '../components/layout/SearchBar';


const HomePage = () => {

    return (

        <div>
            <div class="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <Sidebar />
                <div class="flex-grow w-full">

                    {/* Searchbar */}
                    <SearchBar />

                    {/* Cards */}
                    <Cards />

                    {/* Charts */}
                    <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4 '>
                        <BarChart isDashboard={true} />
                        <PieChart isDashboard={true} />
                    </div>

                    <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4'>
                        <RadialBar isDashboard={true} />
                        <LineChart isDashboard={true} />
                    </div>

                    {/* Tables of Landing Page */}
                    <div class="relative overflow-x-auto p-10 grid grid-cols-2 gap-4">
                        <TableData url={GET_ALL_VEHICLE_LIST} />
                        <TableData url={GET_ALL_VEHICLE_LIST} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage

// https://chat.openai.com/c/ab13c059-a6ec-4eac-bf12-4644075b370f