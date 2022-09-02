import { useState } from "react";

function usePagesForPagination(list:any[],numberOfItemsPerPage:number){
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(numberOfItemsPerPage);
    const indexOfLastPageItem = currentPage * itemsPerPage;
    const indexOfFirstPageItem = indexOfLastPageItem - itemsPerPage;
    const currentPageItems = list?.slice(indexOfFirstPageItem, indexOfLastPageItem);
    const nPages = Math.ceil(list.length / itemsPerPage);
    return {itemsPerPage, currentPage, setCurrentPage,currentPageItems, nPages}
}
export default usePagesForPagination;