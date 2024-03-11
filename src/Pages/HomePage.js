import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HOME_VEHICLE } from '../api/api'
import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import Table from './../components/layout/Table';


const HomePage = () => {

    const [vehicles, setVehicles] = useState([])
    const [error, setError] = useState(null)
    console.log(error)
    console.log(vehicles)

    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const res = await axios.get(HOME_VEHICLE)
                setVehicles(res.data.data)
            } catch (error) {
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData();
    }, [])

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

                    {/* Tables of Landing Page */}
                    <div class="relative overflow-x-auto p-10">
                        <div class="relative overflow-x-auto shadow-md bg-white">
                            <Table data={vehicles} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage

