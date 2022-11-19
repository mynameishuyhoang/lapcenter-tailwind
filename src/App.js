import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Contact from './pages/contact';
import Home from './pages/home';
import Introduce from './pages/introduce';
import ProductDetail from './pages/product-detail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/intro' element={<Introduce/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
