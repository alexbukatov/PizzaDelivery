import React from 'react';
import {  addItem } from '../../Redux/slices//cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../Redux/store';
import { CartStateT } from '../../Redux/slices/cart/cartTypes';

type PizzaBlockProps = {
  id:string; 
  title:string; 
  price:number; 
  sizes:number[]; 
  types:number[];
}

const PizzaBlock:React.FC<PizzaBlockProps> = ({ id, title, price, sizes, types}) => {
  const arrSelectType = ['Тонкое', 'Традиционое'];
  const dispatch = useDispatch();
  const cartItem = useSelector((state:RootState) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;

  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const onClickAdd = () => {
    const item:CartStateT = {
      id,
      title,
      price,
      size: sizes[activeSize],
      type: arrSelectType[activeType],
      count:0,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => (
              <li
                key={type}
                onClick={() => setActiveType(index)}
                className={activeType === index ? 'active' : ''}>
                {arrSelectType[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}>
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} руб.</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"></path>
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
