import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../layout/Pagination";
import {Link} from "react-router-dom";

export const VisitorTable = ({url}) =>{

    // Table Structure
    const visitorHeaders = [
        { label: "VISITOR NAME", key: "name" },
        { label: "MOBILE NUMBER", key: "mobileNumber" },
        { label: "REFERENCE PEOPLE", key: "referencePeople" },
        { label: "LAST VISIT DATE", key: "updatedAt" },
    ];

    const [visitor,setVisitor] = useState([])

    // Pagination
    const [page,setPage] = useState('1')
    const [limit,setLimit] = useState('10')
    const [numberOfPage,setNumberOfPage] = useState(2)
    const [currentPageData,setCurrentPageData] = useState((1))
    const [totalData,setTotalData] = useState(0)

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
            <div className="bg-white">
                <table className="text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-blue-500">
                    <tr>
                        <th className="">Sl</th>
                        {visitorHeaders.map((header, index) => (
                            <th key={index} className="px-6 py-2">{header.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                    </thead>

                <tbody>
                {
                    visitor.length > 0 ? (
                        visitor.map((row, rowIndex) => (
                            <tr className="border border-gray-200" key={rowIndex}>
                                <td>{rowIndex + 1}</td>
                                {visitorHeaders.map((header, colIndex) => (
                                    <td key={colIndex}>
                                        {row[header.key]}</td>
                                ))}
                                <td className="px-6">
                                    <Link to={`/edit/${row._id}`}
                                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Edit</Link>
                                    <Link to={`/view/${row._id}`}
                                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">View</Link>
                                    <Link to={`/delete/${row._id}`}
                                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Delete</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <p className='h-12 flex justify-center items-center font-semibold text-sm'> No Data Found</p>
                    )
                }
                </tbody>
                </table>
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
