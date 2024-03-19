import React from 'react';
import { GET_ALL_VEHICLE_LIST } from '../api/api';
import TableData from '../components/layout/TableData';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';

const VisitorList = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='m-10'>
                    <TableData url={GET_ALL_VEHICLE_LIST} />
                </div>
            </div>
        </div>
    );
};

export default VisitorList;
