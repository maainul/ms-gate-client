import axios from 'axios';
import React, { useState } from 'react'

import { ReactComponent as CloseIcon } from '../../../img/xmark-solid.svg';
import {CREATE_VISITOR} from "../../../api/api";
import Input from "../../layout/Input";

const AddVisitorModal = ({ visible, onClose,updateVisitorList  }) => {
    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(CREATE_VISITOR, {
                name, mobileNumber
            });
            console.log(res)
            onClose(); // Close the modal after successful submission
            updateVisitorList()
        } catch (error) {
            console.log(error);
        }
    };

    if (!visible) return null

    return (
        <div id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
            <div className='m-5 bg-white px-10 py-5 rounded-md w-4/12'>
                <div className="my-4 flex justify-between items-center">
                    <div></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <div className='p-6 rounded-md bg-lime-50 hover:bg-lime-100 hover:cursor-pointer'>
                            <h1 className='text-gray-800 font-semibold'>Visitor Info</h1>

                            <Input
                                title="Name"
                                borderColor="border-2 border-lime-300 focus:border-lime-600"
                                type="text"
                                value={name}
                                onChange={(value) => setName(value)}
                            />
                            <Input
                                title="Mobile Number"
                                borderColor="border-2 border-lime-300 focus:border-lime-600"
                                type="text"
                                value={mobileNumber}
                                onChange={(value) => setMobileNumber(value)}
                            />
                        </div>
                    </div >
                    <div className="w-full flex justify-center gap-4 mt-8">
                        <button type="button" className="rounded-md text-sm font-semibold leading-6 text-white lg:w-36 sm:w-32 xl:w-72  bg-rose-500 shadow-sm hover:bg-rose-400 h-10">
                            Cancel
                        </button>
                        <button type="submit" className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold xl:w-72 lg:w-36 sm:w-32 text-white shadow-sm hover:bg-purple-400 h-10">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddVisitorModal