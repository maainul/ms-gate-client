import React, {useState} from 'react';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';
import { ReactComponent as PlusIcon } from '../img/plus-solid.svg';
import VisitorModal from "./VisitorModal";
const VisitorList = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='m-10'>
                    <div>
                        <div className='flex justify-between m-4'>
                            <div className='font-bold text-purple-500'>{"Visitor"}</div>
                            <PlusIcon className="w-5 hover:cursor-pointer fill-purple-400"
                                      onClick={() => setShowModal(true)}/>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs text-white uppercase bg-blue-500">
                            <tr>
                                <th scope="col" className="px-6 py-2">Image</th>
                                <th scope="col" className="px-6 py-2">Vehicle Info</th>
                                <th scope="col" className="px-6 py-2">Driver Info</th>
                                <th scope="col" className="px-6 py-2">Visitor Info</th>
                                <th scope="col" className="px-6 py-2">Last Visit Date</th>
                                <th scope="col" className="px-6 py-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{*/}
                            {/*    data.length > 0 ? (*/}
                            {/*        data.map(values => (*/}
                            {/*            <tr className="border border-gray-200" key={values._id}>*/}
                            {/*                <td className="px-6">*/}
                            {/*                    <img src={car} alt='default' className='rounded-full w-10 h-10 m-2'/>*/}
                            {/*                </td>*/}
                            {/*                <td className="px-6">*/}
                            {/*                    {values.vehicle.numberPlate}-{values.vehicle.name} - {values.vehicle.color}- {values.vehicle.model}*/}
                            {/*                </td>*/}
                            {/*                <td className="px-6">*/}
                            {/*                    {values.drivers.map(driver => (*/}
                            {/*                        <div>*/}
                            {/*                            <p>{driver.name} - {driver.phoneNumber}</p>*/}
                            {/*                        </div>*/}
                            {/*                    ))}*/}
                            {/*                </td>*/}
                            {/*                <td className="px-6">*/}
                            {/*                    {values.visitors.map(visitor => (*/}
                            {/*                        <>*/}
                            {/*                            <div className='py-1'>*/}
                            {/*                                {visitor.referencePeople.map(vis => (*/}
                            {/*                                    <div>*/}
                            {/*                                        <p>{vis.name}</p>*/}
                            {/*                                    </div>*/}
                            {/*                                ))}*/}

                            {/*                                <div>*/}
                            {/*                                    <p>{visitor.numberOfPassengers} - {visitor.purpose}</p>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </>*/}
                            {/*                    ))}*/}
                            {/*                </td>*/}
                            {/*                <td className="px-6 ">*/}
                            {/*                    21/01/2024*/}
                            {/*                </td>*/}
                            {/*                <td className="px-6">*/}
                            {/*                    <Link href="#"*/}
                            {/*                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Edit</Link>*/}
                            {/*                    <Link href="#"*/}
                            {/*                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">View</Link>*/}
                            {/*                    <Link href="#"*/}
                            {/*                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Delete</Link>*/}
                            {/*                </td>*/}

                            {/*            </tr>*/}
                            {/*        ))*/}
                            {/*    ) : (*/}
                            {/*        <p className='h-12 flex justify-center items-center font-semibold text-sm'>No Data*/}
                            {/*            Found.....</p>*/}
                            {/*    )}*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <VisitorModal onClose={handleOnClose} visible={showModal} />
            </div>
        </div>
    );
};

export default VisitorList;
