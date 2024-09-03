import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { setCurrentPage } from '../../Redux/slices/filter/filterSlice';
import { useDispatch } from 'react-redux';

const Pagination:React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
