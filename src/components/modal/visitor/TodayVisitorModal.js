import { ReactComponent as CloseIcon } from '../../../img/xmark-solid.svg';
import React from "react";


export const TodayVisitorModal = ({ visible, onClose,data }) => {
    if (!visible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-10 w-auto'>
            <div className='m-5 bg-white px-10 py-2 rounded-md w-11/12'>
                <div className="my-2 flex justify-between items-center ">
                    <div className=''></div>
                    {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={onClose}/>
                </div>

                <div className='bg-green-100'>
                    <h1 className='text-center text-2xl font-bold'>{`Total Visitor ( ${data.monthName} )`}</h1>
                    <div>
                        <table className="w-full">
                            <thead className="bg-blue-500 border-y-2 border-gray-200 text-xs text-white">
                            <tr >
                                <th>Name</th>
                                <th>Mobile Number</th>
                                <th>Reference People</th>
                                <th>Purpose</th>
                                <th>Created At</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.data.length > 0 ? (
                                    data.data.map((row, rowIndex) => (
                                        <tr className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-3 text-sm`}
                                            key={rowIndex}>
                                            <td>{row.name}</td>
                                            <td>{row.mobileNumber}</td>
                                            <td>{row.referencePeople}</td>
                                            <td>{row.purpose}</td>
                                            <td>{row.createdAt}</td>

                                        </tr>
                                    ))
                                ) : (
                                    <p className='h-12 flex justify-center items-center font-semibold text-sm'> No Data
                                        Found</p>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
