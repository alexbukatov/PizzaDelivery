import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../Redux/slices//filter/filterSlice';
import { RootState } from '../Redux/store';

const Categories:React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state:RootState) => state.filter.categoryId);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategoty = React.useCallback((index:number) => {
    dispatch(setCategoryId(index))
  },[])

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            onClick={() => onClickCategoty(index)}
            className={categoryId === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
