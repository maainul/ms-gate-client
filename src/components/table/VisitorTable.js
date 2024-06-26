import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../layout/Pagination";
import { ViewVisitorModal } from "../modal/visitor/ViewVisitorModal";
import LimitDropdown from "../dropDowns/LimitDropdown";
import {DeleteVisitorModal} from "../modal/visitor/DeleteVisitorModal";

export const VisitorTable = ({ url }) => {

    // Table Structure
    const visitorHeaders = [
        { label: "VISITOR NAME", key: "name" },
        { label: "MOBILE NUMBER", key: "mobileNumber" },
        { label: "REFERENCE PEOPLE", key: "referencePeople" },
        { label: "LAST VISIT DATE", key: "updatedAt" },
    ];

    // Visitor
    const [visitor, setVisitor] = useState([])

    // Pagination
    const [page, setPage] = useState('1')
    const [limit, setLimit] = useState('10')
    const [numberOfPage, setNumberOfPage] = useState(1)
    const [currentPageData, setCurrentPageData] = useState(1)
    const [totalData, setTotalData] = useState(0)


    // View Modal Show
    const [selectedRow, setSelectedRow] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const handleViewOnClose = () => setShowModal(false)
    const handleViewClick = (rowData) => {
        setSelectedRow(rowData)
        setShowModal(true)
    }

   // Delete Modal
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const handleDeleteOnClose = () => setIsDeleteModalVisible(false)
    const handleDeleteClick = (rowData) => {
        setSelectedRow(prevData => {return rowData});
        setIsDeleteModalVisible(true)
    };

    // Function to update pagination after deletion
    const updatePaginationAfterDelete = () =>{
        // Calculate new total data count after deletion
        const newTotalData = totalData -1
        // Calculate new number of pages after deletion
        const newNumberOfPage = Math.ceil(newTotalData / limit)
        const newCurrentTotal = currentPageData -1
        //update pagination state variable
        setTotalData(newTotalData)
        setNumberOfPage(newNumberOfPage)
        setCurrentPageData(newCurrentTotal)
        if(page > newNumberOfPage){
            setPage(String(newNumberOfPage))
        }
    }


    // Fetch Visitor Data
    useEffect(() => {
        const fetchVisitorList = async () => {
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setVisitor(res.data.data.data)
                setCurrentPageData(res.data.data.pageDataCount)
                setNumberOfPage(res.data.data.numberOfPage)
                setTotalData(res.data.data.totalDataCount)
            } catch (error) {
                console.log(error)
            }
        };
        fetchVisitorList()
    }, [page, limit, url]);


    return (
        <>
            <div>
                <div className="px-4 my-4">
                    <LimitDropdown limit={limit} setLimit={setLimit} />
                </div>
                <div className="bg-white overflow-auto rounded-lg shadow px-4">
                    <table className="w-full p-10">
                        <thead className="bg-blue-500 border-y-2 border-gray-200 text-xs text-white">
                            <tr className="">
                                <th className="p-3 font-semibold tracking-wide text-left w-20 ">Sl</th>
                                {visitorHeaders.map((header, index) => (
                                    <th key={index} className="p-3 font-semibold tracking-wide text-left">{header.label}</th>
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
                                                <td key={colIndex} className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                                    {row[header.key]}</td>
                                            ))}
                                            <td className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                                <button
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 mr-2 hover:bg-yellow-400">Edit</button>
                                                <button onClick={() => handleViewClick(row)}
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 mr-2 hover:bg-green-400">View</button>
                                                <button onClick={() => handleDeleteClick(row)}
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-800 bg-orange-200 rounded-lg bg-opacity-50 hover:bg-orange-400">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <p className='h-12 flex justify-center items-center font-semibold text-sm'> No Data Found</p>
                                )
                            }
                        </tbody>
                    </table>
                    <ViewVisitorModal onClose={handleViewOnClose} visible={showModal} data={selectedRow} />
                    <DeleteVisitorModal
                        onClose={handleDeleteOnClose}
                        visible={isDeleteModalVisible}
                        data={selectedRow} setVisitor={setVisitor}
                        onUpdatePagination = {updatePaginationAfterDelete}/>

                </div>
                <Pagination
                    numberOfPage={numberOfPage}
                    setPage={setPage}
                    page={page}
                    totalData={totalData}
                    currentPageData={currentPageData}

                />
            </div>

        </>
    )
}
