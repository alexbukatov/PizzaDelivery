import React from 'react';
import { useSelector} from 'react-redux';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Sceleton';
import Pagination from '../components/Pagination';

import { fetchPizzas } from '../Redux/slices/pizza/asynkActions';
import { RootState,useAppDispatch } from '../Redux/store';


const Home:React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector((state:RootState) => state.pizzas);
  const { categoryId, sortType, currentPage, searchValue } = useSelector((state:RootState) => state.filter);

  const category = categoryId > 0 ? `&category=${categoryId}` : '';
  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
  const search = searchValue ? `&search=${searchValue}` : '';

  const getPizzas = React.useCallback(async () => {
    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        currentPage,
        search,
      }),
    );
  },[category,
    sortBy,
    order,
    currentPage,
    search]);

  React.useEffect(() => {
    getPizzas();
  }, [sortType, category, sortBy, order, currentPage, search , getPizzas]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Сайт временно не работает 😕</h2>
            <p>Проверьте подключение к интернету и перезагрузите сайт</p>
          </div>
        ) : status === 'loading' ? (
          [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : (
          items.map((obj:any) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
