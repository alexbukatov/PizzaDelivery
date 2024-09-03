import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './FullPizza.module.scss';
import { Link } from 'react-router-dom';

const FullPizza:React.FC = () => {
  type PyzzaT = {
    title:string;
    price:number;
  }
  const [pizza, setPizza] = React.useState<PyzzaT>();
  const { id } = useParams();
  
  const idUrl = id ? id.replace(':', ''):'';
  
  
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://6607567abe53febb857f6cdf.mockapi.io/items/' + idUrl,
        );
        setPizza(data);
      } catch (error) {
        navigate('/');
      }
    }
    fetchPizza();
  }, [idUrl, navigate]);

  
  if(!pizza){
    return 'загрузка...';
  }

  return (
    <div className="container">
      <img
        className="image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt=""
      />
      <h2 className={styles.title}>{pizza.title}</h2>
      <h4 className={styles.price}>{pizza.price}₽</h4>
      <Link to={'/'}><button className='button button--outline button--add'>Назад</button></Link>
    </div>
  );
};

export default FullPizza;
