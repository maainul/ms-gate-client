import React from 'react'

import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import SearchBar from '../components/layout/SearchBar';

// CHARTS
import BarChart from '../components/charts/BarChart';
import PieChart from './../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import RadialBar from '../components/charts/RadialBar';



import {GET_ALL_VEHICLE_LIST, GET_ALL_VISITOR_LIST} from "../api/api";
import {VisitorTable} from "../components/table/VisitorTable";
import {VehicleTable} from "../components/table/VehicleTable";



const HomePage = () => {
    const totalVehicles = 10

    return (

        <div>
            <div className="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <Sidebar />
                <div className="flex-grow w-full">

                    {/* Searchbar */}
                    <SearchBar />

                    {/* Cards */}
                    <Cards totalVehicles={totalVehicles} />

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
                    <div className="relative overflow-x-auto p-10 grid grid-cols-2 gap-4">
                        <VisitorTable url={GET_ALL_VISITOR_LIST} />
                        <VehicleTable url={GET_ALL_VEHICLE_LIST} />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default HomePage
