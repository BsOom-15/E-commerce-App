import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import ShopCategories from './Pages/ShopCategories/ShopCategories';
import Product from './Pages/Products/Product';
import Cart from './Pages/Carts/Cart';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mans' element={<ShopCategories banner = {men_banner} category = 'men' />}/>
        <Route path='/womens' element={<ShopCategories banner={women_banner} category = 'women' />}/>
        <Route path='/kids' element={<ShopCategories banner={kids_banner} category = 'kid'/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
