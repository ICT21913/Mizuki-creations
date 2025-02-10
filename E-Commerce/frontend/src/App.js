import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import keytag_banner from './Components/Assets/banner_keytag.jpg'
import necklace_banner from './Components/Assets/banner_necklace.jpg'
import earring_banner from './Components/Assets/banner_earrings.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/necklace' element={<ShopCatagory banner={necklace_banner} catagory="necklace"/>}/>
        <Route path='/keytag' element={<ShopCatagory banner={keytag_banner} catagory="keytag"/>}/>
        <Route path='/earrings' element={<ShopCatagory banner={earring_banner} catagory="earrings"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
