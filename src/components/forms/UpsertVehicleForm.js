import React from 'react'
import InputBox from '../layout/InputBox'
import TextArea from '../layout/TextArea';
import { useForm } from 'react-hook-form';

const UpsertVehicleForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => console.log(data);

    return (
        <div className='m-10 bg-white px-10 py-20 rounded-md'>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div className=" grid grid-cols-3 gap-4">

                    {/* Form Part 1 */}
                    <div className='p-6 rounded-md bg-lime-50 hover:bg-lime-100 hover:cursor-pointer'>
                        <h1 className='text-gray-800 font-semibold'>Vehicle Info</h1>
                        <InputBox
                            title="Name"
                            name="name"
                            id="name"
                            borderColor="border-2 border-lime-300 focus:border-lime-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Color"
                            name="color"
                            id="color"
                            borderColor="border-2 border-lime-300 focus:border-lime-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Model"
                            name="model"
                            id="model"
                            borderColor="border-2 border-lime-300 focus:border-lime-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="NumberPlate"
                            name="numberPlate"
                            id="numberPlate"
                            borderColor="border-2 border-lime-300 focus:border-lime-600"
                            type="text"
                            register={register} />
                    </div>

                    {/* Form Part 2 Driver Info */}
                    <div className='p-6 rounded-md bg-orange-50 hover:bg-orange-100 hover:cursor-pointer'>
                        <h1 className='text-gray-800 font-semibold'>Driver Info</h1>
                        <InputBox
                            title="Photo"
                            name="photo"
                            id="photo"
                            borderColor="border-2 border-orange-300 focus:border-orange-400"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Name"
                            name="driverName"
                            id="driverName"
                            borderColor="border-2 border-orange-300 focus:border-orange-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Phone Number"
                            name="phoneNumber"
                            id="phoneNumber"
                            borderColor="border-2 border-orange-300 focus:border-orange-600"
                            type="text"
                            register={register} />
                        <TextArea
                            title="Address"
                            name="address"
                            id="address"
                            borderColor="border-2 border-orange-300 focus:border-orange-600"
                            type="text"
                            register={register} />
                    </div>

                    {/* Form Part 3 Reference People */}
                    <div className='p-6 rounded-md bg-purple-50 hover:bg-purple-100 hover:cursor-pointer'>
                        <h1 className='text-gray-800 font-semibold'>Reference People</h1>
                        <InputBox
                            title="Name"
                            name="referencePeople"
                            id="referencePeople"
                            borderColor="border-2 border-purple-300 focus:border-purple-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Number Of Passengers"
                            name="numberOfPassengers"
                            id="numberOfPassengers"
                            borderColor="border-2 border-purple-300 focus:border-purple-600"
                            type="text"
                            register={register} />
                        <InputBox
                            title="Purpose"
                            name="purpose"
                            id="purpose"
                            borderColor="border-2 border-purple-300 focus:border-purple-600"
                            register={register} />
                        <InputBox
                            title="Entry Times"
                            name="entryTimes"
                            id="entryTimes"
                            borderColor="border-2 border-purple-300 focus:border-purple-600"
                            type="date"
                            register={register} />
                    </div>


                </div>
                <div className="flex justify-center my-10 gap-4">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-white w-72 bg-rose-500 rounded-sm shadow-sm hover:bg-rose-400 h-10" >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-sm bg-green-500 px-3 py-2 text-sm font-semibold w-72 text-white shadow-sm hover:bg-green-400 h-10"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpsertVehicleForm
