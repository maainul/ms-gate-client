import Card from "./Card"
import { ReactComponent as CarIcon } from '../../img/car-solid.svg';
import { ReactComponent as UserIcon } from '../../img/user-group-solid.svg';
import { ReactComponent as GurardIcon } from '../../img/person-military-pointing-solid.svg';
import { ReactComponent as ViewIcon } from '../../img/eye-regular.svg';

const Cards = () => {
    return (
        <>
            <Card
                title={"Total Vehicles"}
                icon={<CarIcon className="w-9 h-9 p-2 rounded-2xl text-gray-300 bg-green-200 fill-green-400" />}
                totalAmount={500}
                hoverColor={'hover:bg-green-50'}
                textColor={'text-green-500'}
                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-green-200 fill-green-400" />}
            />
            <Card
                title={"Total Visitors"}
                icon={<UserIcon className="w-9 h-9 p-2 rounded-2xl text-gray-300 bg-purple-200 fill-purple-400" />}
                totalAmount={100}
                hoverColor={'hover:bg-purple-50'}
                textColor={'text-purple-500'}

                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-purple-200 fill-purple-400" />}
            />
            <Card
                title={"Total Guard Present"}
                icon={<GurardIcon className="w-9 h-9 p-2 rounded-2xl text-gray-300 bg-red-200 fill-red-400" />}
                totalAmount={300}
                hoverColor={'hover:bg-red-50'}
                textColor={'text-red-500'}
                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-red-200 fill-red-400" />}
            />
            <Card
                title={"Today Total Vehicle"}
                icon={<CarIcon className="w-9 p-2 h-9 rounded-2xl text-gray-300 bg-yellow-100 fill-yellow-400" />}
                totalAmount={500}
                hoverColor={'hover:bg-yellow-50'}
                textColor={'text-yellow-500'}
                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-yellow-100 fill-yellow-400" />}
            />

            <Card
                title={"Today Total Visitors"}
                icon={<UserIcon className="w-9 p-2 h-9 rounded-2xl text-gray-300 bg-orange-200 fill-orange-400" />}
                totalAmount={200}
                hoverColor={'hover:bg-orange-50'}
                textColor={'text-orange-500'}
                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-orange-200 fill-orange-400" />}
            />
            <Card
                title={"Today Guard Present"}
                icon={<UserIcon className="w-9 p-2 h-9 rounded-2xl text-gray-300 bg-lime-100 fill-lime-400" />}
                totalAmount={500}
                hoverColor={'hover:bg-lime-50'}
                textColor={'text-lime-500'}
                bottomIcon={<ViewIcon className="w-8 p-2 hover:cursor-pointer hover:rounded-2xl hover:text-gray-300 hover:bg-lime-200 fill-lime-400" />}
            />
        </>
    )
}

export default Cards
