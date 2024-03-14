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

const HomePage = () => {

    return (

        <div>
            <div class="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <div class="w-64 bg-white">
                    <Sidebar />
                </div>

                <div class="flex-grow w-full">

                    {/* Heading of Process */}
                    <div className="flex justify-between m-10 text-gray-600">
                        <span className="font-bold">Dashboard</span>
                        <span>Icons</span>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-5 gap-4 mx-10">
                        <Cards />
                    </div>
                    {/* Charts */}
                    <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4'>
                        <div className='bg-white'>
                        <BarChart isDashboard={true} />
                        </div>
                        {/* <div className='bg-white'> */}
                        <PieChart isDashboard={true} />
                        {/* </div> */}
                    </div>
                     <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4'>
                        <div className='bg-white'>
                        <LineChart isDashboard={true} />
                        </div>
                        <div className='bg-white'>
                        <RadialBar isDashboard={true} />
                        </div>
                    </div>
                    {/* Tables of Landing Page */}
                    <div class="relative overflow-x-auto p-10">
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