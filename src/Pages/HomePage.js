import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GET_ALL_FORM_ATTRIBUTE_LIST, GET_ALL_VEHICLE_LIST } from '../api/api'
import Sidebar from './../components/layout/Sidebar';
import Cards from './../components/layout/Cards';
import Table from './../components/layout/Table';
import Pagination from '../components/layout/Pagination';


const HomePage = () => {

    const [vehicles, setVehicles] = useState([])
    const [error, setError] = useState(null)

    // System Automation Server Data
    const [formAttributes, setFormAttribute] = useState([])

    // Pagination Input Fields
    const [numberOfPage, setNumberOfPage] = useState(2)
    const [totalVehicles, setTotalVehicles] = useState(0)
    const [page, setPage] = useState('1')
    const [limit, setLimit] = useState('5')
    console.log(setLimit) // For Successful build. Eita na dile netlify te build hoi na


    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const res = await axios.get(`${GET_ALL_VEHICLE_LIST}?page=${page}&limit=${limit}`)
                setVehicles(res.data.data.vehicles || [])
                setNumberOfPage(res.data.data.numOfPage)
                setTotalVehicles(res.data.data.totalVehicleBasedOnQueryObject)
                setError(null)

                // call to another 
                const sysRes = await axios.get(GET_ALL_FORM_ATTRIBUTE_LIST)
                setFormAttribute(sysRes.data.data)


            } catch (error) {
                console.log("Error While Getting Expense Types", error)
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData();
    }, [page, limit])

    return (

        <div>
            <div class="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <div class="w-64 bg-white">
                    <Sidebar />
                </div>
                {error && <>{error}</>}
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
                            <Pagination
                                numberOfPage={numberOfPage}
                                setPage={setPage}
                                page={page}
                                totalVehicles={totalVehicles}
                            />
                        </div>
                    </div>

                    <div>
                        {JSON.stringify(formAttributes)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage

// https://chat.openai.com/c/ab13c059-a6ec-4eac-bf12-4644075b370f