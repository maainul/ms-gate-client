import { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios'
import { ReactComponent as PlusIcon } from '../../img/plus-solid.svg';
import Pagination from '../../components/layout/Pagination'
import VisitorModal from "../../Pages/VisitorModal";




const VisitorTableData = ({ url, title }) => {

    const [visitors, setvisitors] = useState([]);
    const [error, setError] = useState(null);
    // const [formAttribute, setFormAttribute] = useState(null);
    const [numberOfPage, setNumberOfPage] = useState(2);
    const [totalvisitors, setTotalvisitors] = useState(0);
    const [page, setPage] = useState('1');
    const [limit, setLimit] = useState('10');
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    console.log(setLimit) // For Successful build. Eta na dile netlify te build hoi na
    console.log(error)// For Successful build. Eta na dile netlify te build hoi na


    return (
        <div className="relative overflow-x-auto shadow-md bg-white">
            <div className='flex justify-between m-4'>
                <div className='font-bold text-purple-500'>{title}</div>
                <PlusIcon className="w-5 hover:cursor-pointer fill-purple-400" onClick={() => setShowModal(true)} />
            </div>
            <Table data={visitors} />
            <Pagination
                numberOfPage={numberOfPage}
                setPage={setPage}
                page={page}
                totalvisitors={totalvisitors}
            />
            <VisitorModal onClose={handleOnClose} visible={showModal} />
        </div>
    )
}

export default VisitorTableData