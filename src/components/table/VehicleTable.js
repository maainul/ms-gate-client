import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../layout/Pagination";
import { ViewVehicleModal } from "../modal/ViewVehicleModal";
import LimitDropdown from "../dropDowns/LimitDropdown";
import {DeleteVehicleModal} from "../modal/DeleteVehicleModal";

export const VehicleTable = ({ url }) => {

    // Table Structure
    const vehicleHeaders = [
        { label: "Vehicle Name", key: "vehicle.name" },
        { label: "Color", key: "vehicle.color" },
        { label: "Model", key: "vehicle.model" },
        { label: "Number Plate", key: "vehicle.numberPlate" },
        { label: "Created At", key: "createdAt" },
    ]

    // Vehicle Varaible 
    const [vehicle, setVehicle] = useState([])

    // Pagination
    const [page, setPage] = useState('1')
    const [limit, setLimit] = useState('10')
    const [numberOfPage, setNumberOfPage] = useState(2)
    const [currentPageData, setCurrentPageData] = useState((1))
    const [totalData, setTotalData] = useState(0)


    // View Modal Show
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    const [selectedRow, setSelectedRow] = useState(null)

    const handleViewClick = (rowData) => {
        setSelectedRow(rowData)
        setShowModal(true)
    }

    // Delete Modal
    const[isDeleteModalVisible,setIsDeleteModalVisible] = useState(false)
    const handleDeleteOnClose = () => setIsDeleteModalVisible(false)
    const handleDeleteClick = (rowData) =>{
        setSelectedRow(prevData => {return rowData})
        setIsDeleteModalVisible(true)
    }

    const updatePaginationAfterDelete = () =>{
        // Calculate new total data count after deletion
        const newTotalData = totalData -1
        const newCurrentPageData = currentPageData -1
        // Calculate new number of pages after deletion
        const newNumberOfPage = Math.ceil(newTotalData / limit)
        //update pagination state variable
        setTotalData(newTotalData)
        setCurrentPageData(newCurrentPageData)
        setNumberOfPage(newNumberOfPage)
        if(page > newNumberOfPage){
            setPage(String(newNumberOfPage))
        }
    }

    useEffect(() => {
        const fetchVehicleList = async () => {
            try {
                const res = await axios.get(`${url}?page=${page}&limit=${limit}`)
                setVehicle(res.data.data.data)
                setCurrentPageData(res.data.data.pageDataCount)
                setNumberOfPage(res.data.data.numberOfPage)
                setTotalData(res.data.data.totalDataCount)
            } catch (error) {
                console.log(error)
            }
        };
        fetchVehicleList()
    }, [page, limit, url]);

    return (
        <>
            <div>
                <LimitDropdown limit={limit} setLimit={setLimit} />
                <div className="bg-white overflow-auto rounded-lg shadow">
                    <table className="w-full">
                        <thead className="bg-blue-500 border-y-2 border-gray-200 text-xs text-white">
                            <tr className="">
                                <th className="p-3 font-semibold tracking-wide text-left w-20 ">Sl</th>
                                {vehicleHeaders.map((header, index) => (
                                    <th key={index} className="p-3 font-semibold tracking-wide text-left uppercase">{header.label}</th>
                                ))}
                                <th className="p-3 font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vehicle.length > 0 ? (
                                    vehicle.map((row, rowIndex) => (
                                        <tr className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm`} key={rowIndex}>
                                            <td className={`font-bold ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-blue-600`}>{rowIndex + 1}</td>
                                            <td>{row.vehicle.name}</td>
                                            <td>{row.vehicle.color}</td>
                                            <td>{row.vehicle.model}</td>
                                            <td>{row.vehicle.numberPlate}</td>
                                            <td>{row.createdAt}</td>
                                            <td className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm text-gray-700 whitespace-nowrap`}>
                                                <button to={`/edit/${row._id}`}
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
                    <ViewVehicleModal onClose={handleOnClose} visible={showModal} data={selectedRow} />
                    <DeleteVehicleModal
                        onClose={handleDeleteOnClose}
                        visible={isDeleteModalVisible}
                        data={selectedRow}
                        setVehicle={setVehicle}
                        onUpdatePagination = {updatePaginationAfterDelete}
                    />

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