import { ReactComponent as CloseIcon } from '../../img/xmark-solid.svg';

const VehicleDetails = ({ vehicle }) => {
    return (
        <div className='bg-blue-50 p-2'>
            <h2 className='font-bold text-center'>Vehicle Details</h2>
            <p>Name: {vehicle.name}</p>
            <p>Color: {vehicle.color}</p>
            <p>Model: {vehicle.model}</p>
            <p>Number Plate: {vehicle.numberPlate}</p>
        </div>
    );
};

const DriverDetails = ({ drivers }) => {
    return (
        <div className='bg-orange-50 p-2'>
            <h2 className='font-bold text-center'>Driver Details</h2>
            {drivers.map(driver => (
                <div key={driver._id}>
                    <p>Name: {driver.name}</p>
                    <p>Address: {driver.address}</p>
                    <p>Phone Number: {driver.phoneNumber}</p>
                    <img src={driver.photo} alt="Driver" />
                </div>
            ))}
        </div>
    );
};

const VisitorDetails = ({ visitors }) => {
    return (
        <div className='bg-green-50 p-2'>
            <h2 className='font-bold text-center'>Visitor Details</h2>
            {visitors.map(visitor => (
                <div key={visitor._id}>
                    <p>Purpose: {visitor.purpose}</p>
                    <p>Number of Passengers: {visitor.numberOfPassengers}</p>
                    <p>Reference People:</p>
                    <ul>
                        {visitor.referencePeople.map(person => (
                            <li key={person._id}>{person.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export const ViewVehicleModal = ({ visible, onClose, data }) => {
    console.log(data)
    const handleOnClose = (e) => { if (e.target.id === "container") onClose() }
    if (!visible) return null
    return (
        <div id='container' className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-xs flex justify-center items-center z-10 w-auto'
            onClick={handleOnClose}>
            <div className='m-5 bg-white px-10 py-5 rounded-md w-6/12'>
                <div className="my-4 flex justify-between items-center">
                    <div className=''></div> {/* This empty div creates space */}
                    <CloseIcon className="w-5 hover:cursor-pointer fill-red-400" onClick={onClose} />
                </div>
                <div>
                    <VehicleDetails vehicle={data.vehicle} />
                    <DriverDetails drivers={data.drivers} />
                    <VisitorDetails visitors={data.visitors} />
                </div>
            </div>

        </div>
    )
}