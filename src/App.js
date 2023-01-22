
import Catalog from './catalog/Catalog';
import ShoppingCart from './shoppingCart/ShoppingCart';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import useGetAllProducts from './helpersFuncs/useGetAllProducts';
import AllProducts from './data/AllProducts';
function App() {


  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Catalog
          catalog={useGetAllProducts(AllProducts)}
          title='All Products'
          bannerImg='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg' />} />
        <Route path='/produce' element={<Catalog
          catalog={AllProducts.Produce}
          title='Fresh Produce'
          bannerImg='https://7253288.fs1.hubspotusercontent-na1.net/hubfs/7253288/Vegetables.jpg' />} />
        <Route path='/meats' element={<Catalog
          catalog={AllProducts.Meats}
          title='Never Frozen'
          bannerImg='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_04/1531869/cooking-steak-rare-today-inline-200124.jpg' />} />
        <Route path='/dairy' element={<Catalog
          catalog={AllProducts.Dairy}
          title='Dairy You Love'
          bannerImg='https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2020/10/shutterstock_1232966839.jpg?w=640' />} />
        <Route path='/grains' element={<Catalog
          catalog={AllProducts.Grains}
          title='Grains And More'
          bannerImg='https://www.verywellfit.com/thmb/u7wzSRDbBuwPMnhLW5MZ5dLM0A4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1178795919-13d46443e70f4cdeb2ff117dd709c501.jpeg' />} />
        <Route path='/cart'
          element={<ShoppingCart />} />
      </Routes>


    </Router>
  );
}

export default App;
