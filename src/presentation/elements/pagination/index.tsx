import React from 'react'
import { PaginationStyled } from './PaginationStyled';

const Pagination = (props: { nPages: number, currentPage: number, setCurrentPage: (number: number) => void }) => {
    const { nPages, currentPage, setCurrentPage } = props;
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if (currentPage !== nPages) { setCurrentPage(currentPage + 1) };
    }
    const prevPage = () => {
        if (currentPage !== 1) { setCurrentPage(currentPage - 1) };
    }
    return (
        <PaginationStyled>
            <ul className='pagination'>
                <li className="page-item">
                    <p className={`page-link ${currentPage == 1 ? 'disable' : ''}`}
                        onClick={prevPage}>
                        Prev
                    </p>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        data-testid={`page-item-${pgNumber}`}
                        className={`page-item-${pgNumber} ${currentPage == pgNumber ? 'active' : ''} `} >
                        <p onClick={() => setCurrentPage(pgNumber)}
                            className={`page-link ${currentPage == pgNumber ? 'active' : ''}`}
                            data-testid={`page-link-${pgNumber}`}
                        >
                            {pgNumber}
                        </p>
                    </li>
                ))}
                <li className="page-item">
                    <p className={`page-link ${currentPage == nPages ? 'disable' : ''}`}
                        onClick={nextPage}>
                        Next
                    </p>
                </li>
            </ul>
        </PaginationStyled>
    )
}

export default Pagination