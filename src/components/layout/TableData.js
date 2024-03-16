import { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios'

// import { GET_ALL_FORM_ATTRIBUTE_LIST } from '../../api/api';

import Pagination from '../../components/layout/Pagination'
import { GET_ALL_FORM_ATTRIBUTE_LIST } from '../../api/api';

const TableData = ({ url }) => {

    const [vehicles, setVehicles] = useState([])
    const [error, setError] = useState(null)

    // Another Server Data
    const [formAttribute, setFormAttribute] = useState(null)

    // Pagination Input Fields
    const [numberOfPage, setNumberOfPage] = useState(2)
    const [totalVehicles, setTotalVehicles] = useState(0)
    const [page, setPage] = useState('1')
    const [limit, setLimit] = useState('5')
    console.log(setLimit) // For Successful build. Eita na dile netlify te build hoi na
    console.log(error)


    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setVehicles(res.data.data.vehicles || [])
                setNumberOfPage(res.data.data.numOfPage)
                setTotalVehicles(res.data.data.totalVehicleBasedOnQueryObject)
                setError(null)

                // call to another 
                const sysRes = await axios.get(GET_ALL_FORM_ATTRIBUTE_LIST)
                console.log(sysRes.data.data)
                setFormAttribute(sysRes.data.data)

            } catch (error) {
                console.log("Error While Getting Expense Types", error)
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData();
    }, [page, limit, url])

    return (
        <div class="relative overflow-x-auto shadow-md bg-white">
            <Table data={vehicles} />
            <Pagination
                numberOfPage={numberOfPage}
                setPage={setPage}
                page={page}
                totalVehicles={totalVehicles}
            />

            <div>
                {JSON.stringify(formAttribute)}
            </div>


        </div>
    )
}

export default TableData