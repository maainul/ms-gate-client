
import { Link } from 'react-router-dom';

const Table = () => {
    return (
        <div >
            {/* <h1 classNameName="p-3 text-green-500 font-bold text-lg">User List</h1> */}
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-white uppercase bg-blue-500">
                    <tr>

                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-300">
                        <th scope="row" className="font-medium whitespace-nowrap px-6 py-4">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 flex gap-5">
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-300 ">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-graay-400">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 flex gap-5">
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-300 ">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 flex gap-5">
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-300 ">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 flex gap-5">
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Table