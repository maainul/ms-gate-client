import React  from 'react'
import InputBox from '../components/layout/InputBox';
import TextArea from '../components/layout/TextArea';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { CREATE_VEHICLE } from '../api/api';
import { ReactComponent as CloseIcon } from '../img/xmark-solid.svg';



const MyModal = ({ visible, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = async (data) => {
        try {
            await axios.post(CREATE_VEHICLE, data);
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.log(error);
        }
    };

    const handleError = (errors) => { };
    const registerOptions = {
        vehicle: {
            name: { required: "name is required" },
            color: { required: "color is required" },
            model: { required: "model is required" },
            numberPlate: { required: "number Plate is required" },
        },
        drivers: [
            {
                photo: { required: "photo is required" },
                name: { required: "name is required" },
                phoneNumber: { required: "phone Number is required" },
                address: { required: "address is required" },
            }],
        visitors: [{
            referencePeople: [{
                name: { required: "name is required" },
            }],
            numberOfPassengers: { required: "number Of Passengers is required" },
            purpose: { required: "purpose is required" },
            entryTimes: { required: "entry Times is required" },
        }
        ]
    };

    const handleOnClose = (e) => { if (e.target.id === "container") onClose() }
    if (!visible) return null


    return (
        <div id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'
            onClick={handleOnClose}>
            <div className='m-5 bg-white px-10 py-5 rounded-md w-4/5'>
                <div className="my-4 flex justify-between items-center">
                    <div></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2  sm:grid-cols-1 gap-4">
                        {/* Vehicle Info */}
                        <div className='p-6 rounded-md bg-lime-50 hover:bg-lime-100 hover:cursor-pointer'>
                            <h1 className='text-gray-800 font-semibold'>Vehicle Info</h1>
                            <InputBox title="Name" name="vehicle.name" id="vehicleName" borderColor="border-2 border-lime-300 focus:border-lime-600" type="text" register={register} options={registerOptions.vehicle.name} />
                            {errors && errors.vehicle?.name && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.name.message}</span>}
                            <InputBox title="Color" name="vehicle.color" id="vehicleColor" borderColor="border-2 border-lime-300 focus:border-lime-600" type="text" register={register} options={registerOptions.vehicle.color} />
                            {errors && errors.vehicle?.color && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.color.message}</span>}
                            <InputBox title="Model" name="vehicle.model" id="vehicleModel" borderColor="border-2 border-lime-300 focus:border-lime-600" type="text" register={register} options={registerOptions.vehicle.model} />
                            {errors && errors.vehicle?.model && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.model.message}</span>}
                            <InputBox title="NumberPlate" name="vehicle.numberPlate" id="vehicleNumberPlate" borderColor="border-2 border-lime-300 focus:border-lime-600" type="text" register={register} options={registerOptions.vehicle.numberPlate} />
                            {errors && errors.vehicle?.numberPlate && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.numberPlate.message}</span>}
                        </div>

                        {/* Driver Info */}
                        <div className='p-6 rounded-md bg-orange-50 hover:bg-orange-100 hover:cursor-pointer'>
                            <h1 className='text-gray-800 font-semibold'>Driver Info</h1>
                            <InputBox title="Photo" name="drivers[0].photo" id="driverPhoto" borderColor="border-2 border-orange-300 focus:border-orange-600" type="text" register={register} />
                            {/* {errors && errors.drivers?.photo && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.name.photo}</span>} */}
                            <InputBox title="Name" name="drivers[0].name" id="driverName" borderColor="border-2 border-orange-300 focus:border-orange-600" type="text" register={register} />
                            {/* {errors && errors.drivers?.name && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.name.message}</span>} */}
                            <InputBox title="Phone Number" name="drivers[0].phoneNumber" id="driverPhoneNumber" borderColor="border-2 border-oran
                        ge-300 focus:border-orange-600" type="text" register={register} />
                            {/* {errors && errors.drivers?.phoneNumber && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.phoneNumber.message}</span>} */}
                            <TextArea title="Address" name="drivers[0].address" id="driverAddress" borderColor="border-2 border-orange-300 focus:border-orange-600" type="text" register={register} />
                            {/* {errors && errors.drivers?.address && <span className="text-red-500 text-sm mt-1">{errors.vehicle?.address.message}</span>} */}
                        </div>

                        {/* Visitor Info */}
                        <div className='p-6 rounded-md bg-purple-50 hover:bg-purple-100 hover:cursor-pointer'>
                            <h1 className='text-gray-800 font-semibold'>Visitor Info</h1>
                            <InputBox title="Name" name="visitors[0].referencePeople[0].name" id="visitorName" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.name && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.name.name}</span>} */}
                            <InputBox title="Number Of Passengers" name="visitors[0].numberOfPassengers" id="numberOfPassengers" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.numberOfPassengers && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.numberOfPassengers.message}</span>} */}
                            <InputBox title="Purpose" name="visitors[0].purpose" id="purpose" borderColor="border-2 border-purple-300 focus:border-purple-600" type="text" register={register} />
                            {/* {errors && errors.visitors?.purpose && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.purpose.message}</span>} */}
                            <InputBox title="Entry Times" name="visitors[0].entryTimes" id="entryTimes" borderColor="border-2 border-purple-300 focus:border-purple-600" type="date" register={register} />
                            {/* {errors && errors.visitors?.entryTimes && <span className="text-purple-500 text-sm mt-1">{errors.visitors?.entryTimes.message}</span>} */}
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
