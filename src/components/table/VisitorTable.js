import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../layout/Pagination";
import {Link} from "react-router-dom";
import { ViewVisitorModal } from "../modal/ViewVisitorModal";

export const VisitorTable = ({url}) =>{

    // Table Structure
    const visitorHeaders = [
        { label: "VISITOR NAME", key: "name" },
        { label: "MOBILE NUMBER", key: "mobileNumber" },
        { label: "REFERENCE PEOPLE", key: "referencePeople" },
        { label: "LAST VISIT DATE", key: "updatedAt" },
    ];

   

    // Pagination
    const [page,setPage] = useState('1')
    const [limit,setLimit] = useState('10')
    const [numberOfPage,setNumberOfPage] = useState(2)
    const [currentPageData,setCurrentPageData] = useState((1))
    const [totalData,setTotalData] = useState(0)
    const [visitor,setVisitor] = useState([])


    // View Modal Show
    const[showModal,setShowModal] = useState(false)
    const handleOnClose = ()=> setShowModal(false)
    const [selectedRow,setSelectedRow] = useState(null)


    const handleViewClick = (rowData) =>{
        setSelectedRow(rowData)
        setShowModal(true)
    }




    useEffect(() => {
        const fetchVisitorList = async () =>{
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setVisitor(res.data.data.data)
                setCurrentPageData(res.data.data.pageDataCount)
                setNumberOfPage(res.data.data.numberOfPage)
                setTotalData(res.data.data.totalDataCount)
            }catch (error) {
                console.log(error)
            }
        };
        fetchVisitorList()
    }, [page,limit,url]);


    return(
        <>
            <div>
            <div className="bg-white overflow-auto rounded-lg shadow">
                <table className="w-full">
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
                               <td className={`font-bold ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-blue-600` }>{rowIndex + 1}</td>
                                {visitorHeaders.map((header, colIndex) => (
                                    <td key={colIndex} className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                        {row[header.key]}</td>
                                ))}
                                <td className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                    <Link to={`/edit/${row._id}`} 
                                          className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 mr-2 hover:bg-yellow-400">Edit</Link>
                                    <Link onClick={() => handleViewClick(row)}
                                          className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 mr-2 hover:bg-green-400">View</Link>
                                    <Link to={`/delete/${row._id}`}
                                          className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-800 bg-orange-200 rounded-lg bg-opacity-50 hover:bg-orange-400">Delete</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <p className='h-12 flex justify-center items-center font-semibold text-sm'> No Data Found</p>
                    )
                }
                </tbody>
                </table>
                <ViewVisitorModal onClose={handleOnClose} visible={showModal} data={selectedRow} />

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
