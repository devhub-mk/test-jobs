import React from 'react';
import './Pagination.css'
import { usePagination, DOTS } from './usePagination';

const Pagination = (props) => {
    const {onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;
    const paginationRange = usePagination({currentPage, totalCount,siblingCount, pageSize});

    if (currentPage ===0 || paginationRange.length < 2){
        return null;
    }
    const onNext = () =>{
        onPageChange(currentPage + 1);
    };
    const onPrevious = ()=>{
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className='pagination-container'>
        <li className= {`pagination-item ${currentPage=== 1?"disabled": ""}`} onClick={onPrevious} key={"arrow-left"}>
            <div className="arrow left"/>
        </li>
        {paginationRange.map(pageNumber =>{
            if(pageNumber===DOTS){
                return <li className='pagination-item dots'>&#8230;</li>
            }
            return(
            <li className={`pagination-item ${pageNumber===currentPage? "active": ""}`} onClick={()=>onPageChange(pageNumber)} key={pageNumber}>
                {pageNumber}
            </li>
            )
        })}
        <li className={`pagination-item ${currentPage === lastPage? "disabled": ""}`} onClick={onNext} key={"arrow-right"}>
            <div className="arrow right"/>
        </li>
    </ul>
  );
};

export default Pagination;
