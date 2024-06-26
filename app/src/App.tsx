import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import { Login, SignUp } from 'Components';
import MainPage from 'routes/MainPage/MainPage';
import TestPage from 'routes/Test/Test';
import Main from 'layout/Main/Main';
import FullScreen from 'layout/FullScreen/FullScreen';
import Catalog from 'routes/Catalog/Catalog';
import Categories from 'routes/Categories/Categories';
import SingleProduckt from 'routes/SingleProduckt/SingleProduckt';
import Cart from 'routes/Cart/Cart';
import OrderPlacing from 'routes/OrderPlacing/OrderPlacing';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/fullscreen' element={<FullScreen />}>
        <Route path='test/:id' element={<TestPage />} />
      </Route>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/food/:id' element={<SingleProduckt />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<OrderPlacing />} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes>
  );
}


export default App;