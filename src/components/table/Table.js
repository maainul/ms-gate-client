// import {DDMMMYYYY} from "../../utils/DateFormat";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ViewVisitorModal } from "../modal/ViewVisitorModal";

export const Table = ({ tblHeader, data }) => {
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    const [selectedRow, setSelectedRow] = useState(null)


    const handleViewClick = (rowData) => {
        setSelectedRow(rowData)
        setShowModal(true)
    }


    return (
        <>
            <div>
                <table className="text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-blue-500">
                        <tr>
                            <th className="">Sl</th>
                            {tblHeader.map((header, index) => (
                                <th key={index} className="px-6 py-2">{header.label}</th>
                            ))}
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {
                        data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr className="border border-red-200" key={rowIndex}>
                                    <td>{rowIndex + 1}</td>
                                    {tblHeader.map((header, colIndex) => (
                                        <td key={colIndex}>
                                            {row[header.key]}</td>
                                    ))}
                                    <td className="px-6">
                                        <Link href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Edit</Link>
                                        <Link href="#" onClick={() => handleViewClick(row)}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">View</Link>

                                        <Link href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p className='h-12 flex justify-center items-center font-semibold text-sm'> No Data Found</p>
                        )
                    }
                </tbody>
                <ViewVisitorModal onClose={handleOnClose} visible={showModal} data={selectedRow} />
            </div>
        </>
    )
}

// https://chat.openai.com/c/0f9d14ac-a0a3-4886-9d2e-b5d1eecf979b