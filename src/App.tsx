import React, {Suspense} from 'react';
import './scss/app.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import MainLoyouts from './layouts/MainLoyouts';
const Cart  = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'))


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLoyouts />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <Cart/>
          </Suspense>} />
        <Route path="*" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <NotFound />
          </Suspense>} />
        <Route path="pizza/:id" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <FullPizza />
          </Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
