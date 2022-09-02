import React from 'react'
import { PageItemStyled, PageLinkStyled, PaginationStyled } from './PaginationStyled';

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
                <PageItemStyled>
                    <PageLinkStyled className={`page-link ${currentPage == 1 ? 'disable' : ''}`}
                        onClick={prevPage}>
                        Prev
                    </PageLinkStyled>
                </PageItemStyled>
                {pageNumbers.map(pgNumber => (
                    <PageItemStyled key={pgNumber}
                        data-testid={`page-item-${pgNumber}`}
                        className={`page-item-${pgNumber} ${currentPage == pgNumber ? 'active' : ''} `} >
                        <PageLinkStyled onClick={() => setCurrentPage(pgNumber)}
                            className={`page-link ${currentPage == pgNumber ? 'active' : ''}`}
                            data-testid={`page-link-${pgNumber}`}
                        >
                            {pgNumber}
                        </PageLinkStyled>
                    </PageItemStyled>
                ))}
                <PageItemStyled>
                    <PageLinkStyled className={`page-link ${currentPage == nPages ? 'disable' : ''}`}
                        onClick={nextPage}>
                        Next
                    </PageLinkStyled>
                </PageItemStyled>
            </ul>
        </PaginationStyled>
    )
}

export default Pagination