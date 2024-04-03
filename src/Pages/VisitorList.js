import React, {useState} from 'react';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';
import { ReactComponent as PlusIcon } from '../img/plus-solid.svg';
import VisitorModal from "./VisitorModal";
import {VisitorTable} from "../components/table/VisitorTable";
import {GET_ALL_VISITOR_LIST} from "../api/api";


const VisitorList = () => {

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
                            <div className='font-bold text-purple-500'>{"Visitor"}</div>
                            <PlusIcon className="w-5 hover:cursor-pointer fill-purple-400" onClick={() => setShowModal(true)}/>
                        </div>
                       <VisitorTable url={GET_ALL_VISITOR_LIST}/>
                    </div>
                </div>
                <VisitorModal onClose={handleOnClose} visible={showModal} />
            </div>
        </div>
    );
};

export default VisitorList;
