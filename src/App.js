import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Buy from './pages/buy';
import Contact from './pages/contact';
import Home from './pages/home';
import Introduce from './pages/introduce';
import Login from './pages/login';
import PageNotFound from './pages/page-not-found';
import ProductDetail from './pages/product-detail';
import Register from './pages/register';
import MyCart from './pages/mycart';
import History from './pages/history';
import Orders from './pages/orders';

function App() {

  const name = localStorage.getItem('name')
  const isAdmin = localStorage.getItem('isAdmin')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Introduce />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        {
          name && (
            <>
              <Route path='/buy' element={<Buy />} />
              <Route path='/my-cart' element={<MyCart />} />
            </>
          )
        }
        <Route path='/purchase-history' element={<History />} />
        {
          isAdmin === 'true' &&
          <Route path='/orders' element={<Orders />} />
        }
        <Route path='/*' element={<PageNotFound />} />
        {
          !name && (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </>
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
