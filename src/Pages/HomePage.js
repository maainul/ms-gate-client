import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HOME_VEHICLE } from '../api/api'

const HomePage = () => {

    const [vehicles, setVehicles] = useState([])
    const [error, setError] = useState(null)

    console.log(vehicles)

    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const res = await axios.get(HOME_VEHICLE)
                setVehicles(res.data.data)
            } catch (error) {
                setError('Error: ' + error.message);
            }
        };
        fetchHomePageData();
    }, [])


    return (
        <div>
            <h1>Mainul Hasan</h1>
            <p>{JSON.stringify(vehicles)}</p>

        </div>
    )
}

export default HomePage
