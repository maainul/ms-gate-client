import { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios'
import { ReactComponent as PlusIcon } from '../../img/plus-solid.svg';

import Pagination from '../../components/layout/Pagination'
// import { GET_ALL_FORM_ATTRIBUTE_LIST } from '../../api/api';

import MyModal from '../../Pages/MyModal';




const TableData = ({ url, title }) => {

    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);
    // const [formAttribute, setFormAttribute] = useState(null);
    const [numberOfPage, setNumberOfPage] = useState(2);
    const [totalVehicles, setTotalVehicles] = useState(0);
    const [page, setPage] = useState('1');
    const [limit, setLimit] = useState('10');
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    console.log(setLimit) // For Successful build. Eta na dile netlify te build hoi na
    console.log(error)// For Successful build. Eta na dile netlify te build hoi na

    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setVehicles(res.data.data.vehicles || [])
                setNumberOfPage(res.data.data.numOfPage)
                setTotalVehicles(res.data.data.totalVehicleBasedOnQueryObject)
                setError(null)
            } catch (error) {
                console.log("Error While Getting Expense Types", error)
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData();
    }, [page, limit, url])

    return (
        <div className="relative overflow-x-auto shadow-md bg-white">
            <div className='flex justify-between m-4'>
                <div className='font-bold text-purple-500'>{title}</div>
                <PlusIcon className="w-5 hover:cursor-pointer fill-purple-400" onClick={() => setShowModal(true)} />
            </div>
            <Table data={vehicles} />
            <Pagination
                numberOfPage={numberOfPage}
                setPage={setPage}
                page={page}
                totalVehicles={totalVehicles}

            />
            <MyModal onClose={handleOnClose} visible={showModal} />
        </div>
    )
}

export default TableData