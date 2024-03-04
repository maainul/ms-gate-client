import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET_ALL_VEHICLE_LIST } from './../api/api';

const VehicleEntryList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicleLists = async () => {
            try {
                const res = await axios.get(GET_ALL_VEHICLE_LIST);
                setVehicles(res.data.data); // Set vehicles state to response data
            } catch (error) {
                if (error.response) {
                    //   The request was made and the server responded with a status code
                    //   that falls out of the range of 2xx
                    //   console.log(error.response.data);
                    //   console.log(error.response.status);
                    //   console.log(error.response.headers);
                    setError('Server Error: ' + error.response.status);
                } else if (error.request) {
                    // The request was made but no response was received
                    // console.log(error.request);
                    setError('Network Error: Could not connect to server');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    //console.log('Error', error.message);
                    setError('Error: ' + error.message);
                }
            }
        };

        fetchVehicleLists();
    }, []);

    return (
        <div>
            <h1>Vehicle List</h1>
            {error && <p>{error}</p>}
            {vehicles.length > 0 ? (
                vehicles.map(vehicle => (
                    <div key={vehicle._id}>
                        <p>{vehicle.vehicleModel}</p>
                        <p>{vehicle.driverName}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VehicleEntryList;
