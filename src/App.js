import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeadbar from './E-commrace/MainHeadbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import HeaderCategoris from './HeaderCategoris'
// import Headbar from './Headbar'
import Shop from './E-commrace/Shop_section/Shop';
import Home from './E-commrace/Home';
// import Headbar from './Headbar'
// import HeaderCategoris from './HeaderCategoris'
// // import Home from './Home'
// import Quantity from './Quantity'
// import Categorisitem from './Categorisitem'
// import Featured from './Featured'
// import Specialoff from './Specialoff'
// import Recentproduct from './Recentproduct'
// import Logoteb from './Logoteb'
// import Footer from './Footer'
// import Signin from './Signin'
import ShopDetail from './E-commrace/Shop_details/ShopDetail';
import ProductDescription from './E-commrace/ProductDescription';
import ShopingCart from './E-commrace/ShopingCart';
import Checkout from './E-commrace/Checkout';
import ContectUs from './E-commrace/ContectUs';
// import 'antd/dist/reset.css';
import Signup from './E-commrace/Userdeshboard/Signup';
import Signin from './E-commrace/Userdeshboard/Signin';
import Protectroute from './E-commrace/Protecetroute/Protectroute';
import Footer from './E-commrace/Footer';







const App = () => {
  return (


    <>

      <Router>
        <MainHeadbar />
        <Routes>

          <Route path="/home" element={<Home Component={Home} />} />
          <Route path="/shop" element={<Shop Component={Shop} />} />
          <Route path="/shopDetail" element={<Protectroute Component={ShopDetail} />} />
          <Route path="/productDescription" element={<ProductDescription Component={ProductDescription} />} />
          <Route path="/about" element={<Footer Component={Footer} />} />
         
          <Route path="/shopingCart" element={<Protectroute Component={ShopingCart} />} />
          <Route path="/checkout" element={<Protectroute Component={Checkout} />} />
          <Route path="/contectUs" element={<ContectUs Component={ContectUs} />} />
          <Route path="/signup" element={<Signup  />} />
          <Route path="/signin" element={<Signin  />} />
         
        </Routes>

      </Router>


    </>

  )
}

export default App;
