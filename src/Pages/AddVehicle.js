import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import SearchBar from '../components/layout/SearchBar'
import UpsertVehicleForm from '../components/forms/UpsertVehicleForm'


const AddVehicle = () => {

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                <SearchBar />
                <UpsertVehicleForm />
            </div>
        </div >
    )
}

export default AddVehicle
