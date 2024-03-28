import React, {useEffect, useState} from 'react'
import axios from "axios";
import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import TableData from './../components/layout/TableData';
import SearchBar from '../components/layout/SearchBar';

// CHARTS
import BarChart from '../components/charts/BarChart';
import PieChart from './../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import RadialBar from '../components/charts/RadialBar';



import {GET_ALL_VEHICLE_LIST} from "../api/api";



const HomePage = () => {
    const [totalVehicles, setTotalVehicles] = useState(0);
    const [error, setError] = useState(null);

    const url = GET_ALL_VEHICLE_LIST
    const [page, setPage] = useState('1');
    const [limit, setLimit] = useState('10');

    useEffect(() => {
        const fetchHomePageData = async ()=>{
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setTotalVehicles(res.data.data.totalVehicleBasedOnQueryObject)
            }catch (error) {
                console.log("Error While Getting Expense Types", error)
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData()
    }, [page,limit,url]);


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
                        {/*<TableData url={GET_ALL_VEHICLE_LIST} />*/}
                        {/*<TableData url={GET_ALL_VEHICLE_LIST} />*/}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default HomePage

// https://chat.openai.com/c/ab13c059-a6ec-4eac-bf12-4644075b370f