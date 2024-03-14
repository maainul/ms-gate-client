import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET_ALL_VEHICLE_LIST } from './../api/api';
import TableData from '../components/layout/TableData';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';

const VehicleEntryList = () => {
    return (
        <div class="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div class="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='m-10'>
                    <TableData url={GET_ALL_VEHICLE_LIST} />
                </div>
            </div>
        </div>
    );
};

export default VehicleEntryList;
