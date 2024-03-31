import React, {useState} from 'react';
import { GET_ALL_VEHICLE_LIST } from './../api/api';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';
import { ReactComponent as PlusIcon } from '../img/plus-solid.svg';
import VehicleModal from "./VisitorModal";
import {VehicleTable} from "../components/table/VehicleTable";


const VehicleEntryList = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='m-10'>
                    <div className="relative overflow-x-auto shadow-md bg-white">
                        <div className='flex justify-between m-4'>
                            <div className='font-bold text-purple-500'>{"Vehicle"}</div>
                            <PlusIcon className="w-5 hover:cursor-pointer fill-purple-400" onClick={() => setShowModal(true)}/>
                        </div>
                        <VehicleTable url={GET_ALL_VEHICLE_LIST} />
                    </div>
                    {/*<TableData url={GET_ALL_VEHICLE_LIST} title={"Vehicle Entry List"} />*/}
                </div>
                <VehicleModal onClose={handleOnClose} visible={showModal} />
            </div>
        </div>
    );
};

export default VehicleEntryList;
