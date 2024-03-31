import React from 'react'
import InputBox from '../components/layout/InputBox';
import TextArea from '../components/layout/TextArea';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { CREATE_VISITOR} from '../api/api';
import { ReactComponent as CloseIcon } from '../img/xmark-solid.svg';



const MyModal = ({ visible, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = async (data) => {
        try {
            await axios.post(CREATE_VISITOR, data);
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.log(error);
        }
    };

    const handleError = (errors) => {
        console.log(errors)
    };
    // const registerOptions = {
    //
    //         name: { required: "name is required" },
    //         mobileNumber: { required: "mobile Number is required" },
    //         // entryTimes: { required: "entry Times is required" },
    //         referencePeople: { required: "reference People  is required" },
    // };

    const handleOnClose = (e) => { if (e.target.id === "container") onClose() }
    if (!visible) return null


    return (
        <div id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 w-auto'
            onClick={handleOnClose}>
            <div className='m-5 bg-white px-10 py-5 rounded-md w-4/5'>
                <div className="my-4 flex justify-between items-center">
                    <div></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-2  sm:grid-cols-1 gap-4">

                        {/* Visitor Info */}
                        <div className='p-6 rounded-md bg-purple-50 hover:bg-purple-100 hover:cursor-pointer'>
                            <h1 className='text-gray-800 font-semibold'>Visitor Info</h1>
                            <InputBox title="Name" name="name" id="visitorName" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.name && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.name.name}</span>} */}
                            <InputBox title="Mobile Number" name="mobileNumber" id="mobileNumber" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.numberOfPassengers && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.numberOfPassengers.message}</span>} */}
                            <InputBox title="Refrence People" name="referencePeople" id="referencePeople" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.purpose && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.purpose.message}</span>} */}
                            <InputBox title="Entry Times" name="entryTimes" id="entryTimes" borderColor="border-2 border-purple-300 focus:border-purple-600" type="date" register={register} />
                            {/* {errors && errors.visitors?.entryTimes && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.entryTimes.message}</span>} */}
                            <TextArea title="Purpose" name="purpose" id="purpose" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.purpose && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.purpose.message}</span>} */}
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

export default MyModal
