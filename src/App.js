import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ListProduct from "./Components/ListProduct";
import ProductDetails from "./Components/ProductDetails";
import UserProfile from './Components/UserProfile';
import PrivateRoute from "./PrivateRoute";
function App() {
  const isAuth=false
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg",
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<ListProduct products={products} />} />
        <Route
          path="/list/:id"
          element={<ProductDetails products={products} />}
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute  isAuth={isAuth}>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
