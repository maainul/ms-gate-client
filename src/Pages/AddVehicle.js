import React from 'react'
import Sidebar from '../components/layout/Sidebar'

const AddVehicle = () => {
    return (
        <div>
            <div class="flex min-h-screen bg-gray-100 text-gray-500">
                {/* Sidebar OR Left Bar of Index Page */}
                <div class="w-64 bg-white">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default AddVehicle
