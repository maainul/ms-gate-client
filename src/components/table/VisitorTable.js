import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../layout/Pagination";
import {Table} from '../table/Table'

export const VisitorTable = ({url}) =>{

    // Table Structure
    const visitorHeaders = [
        { label: "VISITOR NAME", key: "name" },
        { label: "MOBILE NUMBER", key: "mobileNumber" },
        { label: "REFERENCE PEOPLE", key: "referencePeople" },
        { label: "LAST VISIT DATE", key: "updatedAt" },
        { label: "ACTION", key: "actions" }, // Assuming you have actions for each row
    ];

    const [visitor,setVisitor] = useState([])

    // Pagination
    const [page,setPage] = useState('1')
    const [limit,setLimit] = useState('10')
    const [numberOfPage,setNumberOfPage] = useState(2)
    const [currentPageData,setCurrentPageData] = useState((1))
    const [totalData,setTotalData] = useState(0)

    useEffect(() => {
        const fetchVisitorList = async () =>{
            try {
                const res = await axios.get(url)
                console.log(res.data.data)
                setVisitor(res.data.data.data)
                setCurrentPageData(res.data.data.pageDataCount)
                setNumberOfPage(res.data.data.numberOfPage)
                setTotalData(res.data.data.totalDataCount)
            }catch (error) {

            }
        };
        fetchVisitorList()
    }, [page,limit,url]);


    return(
        <>
            <Table data={visitor} tblHeader={visitorHeaders} />
            <Pagination
                numberOfPage={numberOfPage}
                setPage={setPage}
                page={page}
                totalData={totalData}
                currentPageData = {currentPageData}
            />
        </>
    )
}