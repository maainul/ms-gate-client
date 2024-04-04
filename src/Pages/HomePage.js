import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GET_ALL_COUNTS, GET_ALL_VEHICLE_LIST, GET_ALL_VISITOR_LIST } from "../api/api";

import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import SearchBar from '../components/layout/SearchBar';

// CHARTS
import BarChart from '../components/charts/BarChart';
import PieChart from './../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import RadialBar from '../components/charts/RadialBar';
import { VisitorTable } from "../components/table/VisitorTable";
import { VehicleTable } from "../components/table/VehicleTable";






const HomePage = () => {
    const [totalVehicles, setTotalVehicles] = useState('0')
    const [totalVisitors, setTotalVisitors] = useState('0')
    const [totalVisitorToday, setTotalVisitorToday] = useState('0')
    const [visitorTotalCurrentMonth, setVisitorTotalCurrentMonth] = useState('0')
    const [currentMonth, setCurrentMonth] = useState('')
    const [currentYear, setCurrentYear] = useState('0')
    const [vehicleTodayTotal, setVehicleTodayTotal] = useState('0')
    const [vehicleTotalCurrentMonth, setVehicleTotalCurrentMonth] = useState('0')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(GET_ALL_COUNTS)
                console.log(res.data.data)
                setTotalVehicles(res.data.data.vehicleTotal)
                setTotalVisitors(res.data.data.visitorTotal)
                setTotalVisitorToday(res.data.data.visitorTodayTotal)
                setVisitorTotalCurrentMonth(res.data.data.visitorTotalCurrentMonth)
                setCurrentMonth(res.data.data.currentMonth)
                setCurrentYear(res.data.data.currentYear)
                setVehicleTodayTotal(res.data.data.vehicleTodayTotal)
                setVehicleTotalCurrentMonth(res.data.data.vehicleTotalCurrentMonth)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, [])

    return (

        <div className=''>
            <div className="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <Sidebar />
                <div className="flex-grow w-full">

                    {/* Searchbar */}
                    <SearchBar />

                    {/* Cards */}
                    <Cards
                        totalVehicles={totalVehicles}
                        totalVisitors={totalVisitors}
                        totalVisitorToday={totalVisitorToday}
                        visitorTotalCurrentMonth={visitorTotalCurrentMonth}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        vehicleTodayTotal={vehicleTodayTotal}
                        vehicleTotalCurrentMonth={vehicleTotalCurrentMonth}
                    />

                    {/* Charts */}
                    <div className='ml-10 mr-10 mt-10 h-[350px] grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <BarChart isDashboard={true} />
                        <PieChart isDashboard={true} />
                        <RadialBar isDashboard={true} />
                        <LineChart isDashboard={true} />

                    </div>
                    <div className='grid grid-cols-2 mx-10 gap-4 mt-10'>
                        <VisitorTable url={GET_ALL_VISITOR_LIST} />
                        <VehicleTable url={GET_ALL_VEHICLE_LIST} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage
