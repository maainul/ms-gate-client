import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import SearchBar from '../components/layout/SearchBar'
import InputBox from '../components/layout/InputBox'
import TextArea from '../components/layout/TextArea'

const AddVisitor = () => {
    return (
        <div class="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div class="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />

                <div className='m-10 bg-white px-10 py-20'>
                    <form>
                        <div className=" grid grid-cols-3 gap-4">
                            {/* Form Part 1 */}
                            <div className='p-6 rounded-md bg-lime-50 hover:bg-lime-100 hover:cursor-pointer'>
                                <h1 className='text-gray-800 font-semibold'>Vehicle Info</h1>
                                <InputBox title={"Name"} name={"name"} id={"name"} borderColor={"border-2 border-lime-300 focus:border-lime-600"} type={"text"} />
                                <InputBox title={"Color"} name={"color"} id={"color"} borderColor={"border-2 border-lime-300 focus:border-lime-600"} type={"text"} />
                                <InputBox title={"Model"} name={"model"} id={"model"} borderColor={"border-2 border-lime-300 focus:border-lime-600"} type={"text"} />
                                <InputBox title={"NumberPlate"} name={"numberPlate"} id={"numberPlate"} borderColor={"border-2 border-lime-300 focus:border-lime-600"} type={"text"} />
                            </div>

                            {/* Form Part 1 */}
                            <div className='p-6 rounded-md bg-orange-50 hover:bg-orange-100 hover:cursor-pointer'>
                                <h1 className='text-gray-800 font-semibold'>Driver Info</h1>
                                <InputBox title={"Photo"} name={"photo"} id={"photo"} borderColor={"border-2 border-orange-300 focus:border-orange-600"} type={"text"} />
                                <InputBox title={"Name"} name={"name"} id={"name"} borderColor={"border-2 border-orange-300 focus:border-orange-600"} type={"text"} />
                                <InputBox title={"Phone Number"} name={"phoneNumber"} id={"phoneNumber"} borderColor={"border-2 border-orange-300 focus:border-orange-600"} type={"text"} />
                                <TextArea title={"Address"} name={"address"} id={"address"} borderColor={"border-2 border-orange-300 focus:border-orange-600"} type={"text"} />

                            </div>

                            {/* Form Part 1 */}
                            <div className='p-6 rounded-md bg-purple-50 hover:bg-purple-100 hover:cursor-pointer'>
                                <h1 className='text-gray-800 font-semibold'>Reference People</h1>
                                <InputBox title={"Name"} name={"referencePeople"} id={"referencePeople"} borderColor={"border-2 border-purple-300 focus:border-purple-600"} type={"text"} />
                                <InputBox title={"Number Of Passengers"} name={"numberOfPassengers"} id={"numberOfPassengers"} borderColor={"border-2 border-purple-300 focus:border-purple-600"} type={"text"} />
                                <InputBox title={"Purpose"} name={"purpose"} id={"purpose"} borderColor={"border-2 border-purple-300 focus:border-purple-600"} />
                                <InputBox title={"Entry Times"} name={"entryTimes"} id={"entryTimes"} borderColor={"border-2 border-purple-300 focus:border-purple-600"} type={"date"} />
                            </div>


                        </div>
                        <div className="flex justify-center my-10 gap-4">
                            <button type="button" className="text-sm font-semibold leading-6 text-white w-72 bg-rose-500 rounded-sm shadow-sm hover:bg-rose-400 h-10" >
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
            </div>
        </div>
    )
}

export default AddVisitor
