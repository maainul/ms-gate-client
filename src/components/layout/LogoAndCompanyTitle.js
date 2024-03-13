import React from 'react'
import logo from "../../img/logo512.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const LogoAndCompanyTitle = () => {
    return (
        <>
            <div className="px-5 py-6 cursor-pointer items-center border-b-2 border-b-gray-200 justify-between flex gap-2 mb-6 bg-white">
                <div className='flex gap-3'>
                    <img src={logo} className="w-6" alt="Logo" />
                    <span className="font-bold text-xl text-blue-600 text-center">GATE Entry</span>
                </div>
                <FontAwesomeIcon icon={faBars} className="text-xl text-gray-500" />
            </div>
        </>
    )
}

export default LogoAndCompanyTitle
