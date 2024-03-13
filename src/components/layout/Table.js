
import { Link } from 'react-router-dom';
import car from '../../img/car.jpg'

const Table = ({ data}) => {
    return (
        <>
            <div >
                {/* <h1 classNameName="p-3 text-green-500 font-bold text-lg">User List</h1> */}
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Vehicle Info</th>
                            <th scope="col" className="px-6 py-3">Driver Info</th>
                            <th scope="col" className="px-6 py-3">Visitor Info</th>
                            <th scope="col" className="px-6 py-3">Last Visit Date</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map(values => (
                                    <tr className="border border-gray-200" key={values._id}>
                                        <td className="px-6">
                                            <img src={car} alt='default' className='rounded-full w-14 h-14 m-2' />
                                        </td>
                                        <td className="px-6">
                                            {values.vehicle.numberPlate}-{values.vehicle.name} - {values.vehicle.color}- {values.vehicle.model}
                                        </td>
                                        <td className="px-6">
                                            {values.drivers.map(driver => (
                                                <div>
                                                    <p>{driver.name} - {driver.phoneNumber}</p>
                                                </div>
                                            ))}
                                        </td>
                                        <td className="px-6">
                                            {values.visitors.map(visitor => (
                                                <>
                                                    <div className='py-1'>
                                                        {visitor.referencePeople.map(vis => (
                                                            <div>
                                                                <p>{vis.name}</p>
                                                            </div>
                                                        ))}

                                                        <div>
                                                            <p>{visitor.numberOfPassengers} - {visitor.purpose}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </td>
                                        <td className="px-6 ">
                                            21/01/2024
                                        </td>
                                         <td className="px-6">
                                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Edit</Link>
                                             <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">View</Link>
                                             <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Delete</Link>
                                        </td>
                                       
                                    </tr>
                                ))
                            ) : (
                                <p className='h-12 flex justify-center items-center font-semibold text-sm'>No Data Found.....</p>
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table