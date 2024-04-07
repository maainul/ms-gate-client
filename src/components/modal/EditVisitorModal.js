import { ReactComponent as CloseIcon } from '../../img/xmark-solid.svg';
import { useState } from 'react';

export const EditVisitorModal = ({ data, onClose }) => { // Pass onClose function as a prop
    const [isVisible, setIsVisible] = useState(true); // Manage visibility internally

    if (!isVisible) return null; // Check visibility state

    const handleClose = () => {
        setIsVisible(false); // Update visibility state when clicking close icon
    };

    return (
        <div id='container' className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-10 w-auto'>
            <div className='m-5 bg-white px-10 py-5 rounded-md w-6/12'>
                <div className="my-4 flex justify-between items-center">
                    <div className=''></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={handleClose} />
                </div>
                <div className='m-5 bg-white px-10 py-5 rounded-md max-w-lg w-full'>
                    {/* ID : {data._id}<hr />
                    Name : {data.name}<hr />
                    Mobile Number : {data.mobileNumber} <hr />
                    Reference People : {data.referencePeople} <hr />
                    Purpose : {data.purpose}<hr />
                    Visiting Date Time : {DDMMMYYYYHHMM(data.createdAt)}<hr /> */}
                </div>
            </div>

        </div>
    );
};
