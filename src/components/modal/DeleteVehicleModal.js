import axios from "axios";
import {DELETE_VEHICLE} from "../../api/api";
import { ReactComponent as CloseIcon } from '../../img/xmark-solid.svg';


export const DeleteVehicleModal = ({ visible, onClose, data,setVehicle }) => {

    const deleteData = async (data) => {
        console.log(data)
        try {
            await axios.delete(DELETE_VEHICLE+`${data._id}`,data)
            setVehicle(prevVehicle => prevVehicle.filter(vehicle => vehicle._id !== data._id));
            onClose()
        }catch (error) {
            console.log(error)
        }
    }

    if (!visible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-10 w-auto'>
            <div className='m-5  rounded-md w-3/12 p-4 bg-red-50'>
                <div className="flex justify-between items-center">
                    <div className=''></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer hover:bg-red-100 fill-red-400" onClick={onClose} />
                </div>

                <div className='  text-center'>
                    <h1 className='text-lg font-extrabold text-red-500 text-center mb-5'>Are You Sure You want to Delete ?</h1>
                    <button className='bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-700' onClick={() =>deleteData(data)}>Delete</button>
                </div>
            </div>

        </div>
    )
}