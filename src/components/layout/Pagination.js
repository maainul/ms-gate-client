import leftArrow from '../../angles-left-solid.svg'
import rightArrow from '../../angles-right-solid.svg'

const Pagination = ({ numberOfPage, setPage, page, totalVehicles }) => {
    const pages = []

    for (let i = 1; i <= numberOfPage; i++) {
        pages.push(
            <span
                key={i}
                className='bg-blue-500 text-white px-3 py-1 rounded-sm font-bold text-sm m-[2px] hover:bg-blue-600 hover:cursor-pointer'
                onClick={() => setPage(i)}>
                {i}
            </span>)
    }

    const handleNextPage = () => {
        // Ensure that the next page is within the range of available pages
        if (page < numberOfPage) {
            setPage(page + 1);
        }
    }

    const handlePreviousPage = () => {
        // Ensure that the previous page is within the range of available pages
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <>
            {/* Pagination */}
            <div className='flex justify-between items-center'>
                <div className='text-sm font-bold text-gray-400 px-6 py-3'>{page} of {numberOfPage} Pages</div>
                <div className='text-sm font-bold text-gray-400 px-6 py-3'>Total Data - {totalVehicles}</div>
                <div className='text text-center p-5 flex justify-center items-center'>
                    <span className={`bg-blue-500 text-white px-3 py-1 rounded-sm font-bold text-sm m-[2px] hover:bg-blue-600 hover:cursor-pointer ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handlePreviousPage}>
                        <img src={leftArrow} alt='left arrow pagination' className='w-4 h-5' />
                    </span>
                    {pages}

                <span className={`bg-blue-500 text-white px-3 py-1 rounded-sm font-bold text-sm m-[2px] hover:bg-blue-600 hover:cursor-pointer ${page === numberOfPage ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleNextPage}>
                        <img src={rightArrow} alt='left arrow pagination' className='w-4 h-5' />
                    </span>

                </div>
            </div>
        </>
    )
}

export default Pagination
