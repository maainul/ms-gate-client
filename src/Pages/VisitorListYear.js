import axios from "axios";
import React, {useEffect, useState} from 'react';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';
import {GET_ALL_VISITOR_LIST} from "../api/api";
import {ViewVisitorModal} from "../components/modal/visitor/ViewVisitorModal";
import {DDMMMYYYY} from "../utils/DateFormat";

const VisitorListYear = () => {
    // Table Structure
    const visitorHeaders = [
        { label: "VISITOR NAME", key: "name" },
        { label: "MOBILE NUMBER", key: "mobileNumber" },
        { label: "REFERENCE PEOPLE", key: "referencePeople" },
        { label: "LAST VISIT DATE", key: "updatedAt" },
    ];

    const [totalData, setTotalData] = useState(0)
    const [visitor, setVisitor] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)

    const handleViewOnClose = () => setShowModal(false)
    const handleViewClick = (rowData) => {
        setSelectedRow(rowData)
        setShowModal(true)
    }

    const fetchVisitorList = async () => {
        try {
            const res = await axios.get(`${GET_ALL_VISITOR_LIST}`)
            const filteredData = filterDataForCurrentMonth(res.data.data.data);
            setVisitor(filteredData)
            setTotalData(filteredData.length)
        } catch (error) {
            console.log(error);
        }
    };

    // Function to filter data for the current month
    const filterDataForCurrentMonth = (data) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return data.filter(item => {
            const createdDate = new Date(item.createdAt);
            return createdDate.getFullYear() === currentYear;
        });
    };

// Fetch Visitor Data
    /* eslint-disable */
    useEffect(() => {
        fetchVisitorList();
    }, []);
    /* eslint-enable */

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='m-10'>
                    <div className="relative overflow-x-auto shadow-md bg-white">
                        <div className='flex justify-between m-4'>
                            <div className='font-bold text-purple-500'>{"Visitor"} - {totalData}</div>
                        </div>
                        <div>

                            <div className="bg-white overflow-auto shadow px-4">
                                <table className="w-full p-10">
                                    <thead className="bg-blue-500 border-y-2 border-gray-200 text-xs text-white">
                                    <tr className="">
                                        <th className="p-3 font-semibold tracking-wide text-left w-20 ">Sl</th>
                                        {visitorHeaders.map((header, index) => (
                                            <th key={index}
                                                className="p-3 font-semibold tracking-wide text-left">{header.label}</th>
                                        ))}
                                        <th className="p-3 font-semibold tracking-wide text-left">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        visitor.length > 0 ? (
                                            visitor.map((row, rowIndex) => (
                                                <tr className="" key={rowIndex}>
                                                    <td className={`font-bold ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-blue-600`}>{rowIndex + 1}</td>
                                                    {visitorHeaders.map((header, colIndex) => (
                                                        <td key={colIndex}
                                                            className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                                            {header.key === 'updatedAt' ? DDMMMYYYY(row[header.key]) : row[header.key]}
                                                        </td>
                                                    ))}
                                                    <td className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                                        <button onClick={() => handleViewClick(row)}
                                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 mr-2 hover:bg-green-400">View
                                                        </button>

                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <p className='h-12 flex justify-center items-center font-semibold text-sm'> No
                                                Data Found</p>
                                        )
                                    }
                                    </tbody>
                                </table>
                                <ViewVisitorModal
                                    onClose={handleViewOnClose}
                                    visible={showModal}
                                    data={selectedRow}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorListYear;
