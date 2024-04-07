import { useState } from "react";


export const usePagination = () =>{
    const [page, setPage] = useState('1');
    const [limit, setLimit] = useState('10');
    const [numberOfPage, setNumberOfPage] = useState(2);
    const [currentPageData, setCurrentPageData] = useState(1);
    const [totalData, setTotalData] = useState(0);

    const updatePaginationAfterDelete = () => {
        const newTotalData = totalData - 1;
        const newCurrentPageData = currentPageData - 1;
        const newNumberOfPage = Math.ceil(newTotalData / limit);

        setTotalData(newTotalData);
        setCurrentPageData(newCurrentPageData);
        setNumberOfPage(newNumberOfPage);

        if (page > newNumberOfPage) {
            setPage(String(newNumberOfPage));
        }
    };

    return {
        page,
        setPage,
        limit,
        setLimit,
        numberOfPage,
        currentPageData,
        totalData,
        updatePaginationAfterDelete,
    };


}
