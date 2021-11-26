
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import '../src/components/CSS/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Routes,
 
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route exact path="/" element={<Shop />} ></Route>
          <Route  path="/product/:productkey" element={<ProductDetail />} ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch> */}
      </Router>

    </div>
  );
}

export default App;
