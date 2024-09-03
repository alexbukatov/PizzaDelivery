import React from 'react';
import {  setSortType } from '../Redux/slices/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import { SortPropertyEnum } from '../Redux/slices/filter/filterTypes';


const Sort:React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);
  const sort = useSelector((state:RootState) => state.filter.sortType);

  document.querySelector('sort');

  const [open, setOpen] = React.useState(false);

  type SortItem = {
    sortName:string;
    sortProperty:SortPropertyEnum;
  }

  const list:SortItem[]= [
    { sortName: 'популярности ↑', sortProperty: SortPropertyEnum.RETING_DESC },
    { sortName: 'популярности ↓', sortProperty: SortPropertyEnum.RETING_ASC },
    { sortName: 'цене ↑', sortProperty: SortPropertyEnum.PRICE_DESC },
    { sortName: 'цене ↓', sortProperty: SortPropertyEnum.PRICE_ASC },
    { sortName: 'алфавиту ↑', sortProperty: SortPropertyEnum.TITLE_DESC },
    { sortName: 'алфавиту ↓', sortProperty: SortPropertyEnum.TITLE_ASC },
  ];

//   type M = React.MouseEvent<HTMLBodyElement> & {
//     composedPath(): Node[];
// }

  React.useEffect(() => {
    const clickOutside = (event:MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };
  }, []);

  const onClickList = React.useCallback((obj:SortItem) => {
    dispatch(setSortType(obj));
    setOpen(false);
  },[]);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.sortName}</span>
      </div>
      {open ? (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickList(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.sortName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
})

export default Sort;
