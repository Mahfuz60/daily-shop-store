import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetail />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
