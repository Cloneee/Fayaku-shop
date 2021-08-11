import Header from "./component/Header";
import routes from "./routes";
import Footer from "./component/Footer";
import "./assets/css/product.css"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageAdmin from "./component/admin/HomePage/HomePageAdmin";
import { useDispatch,useSelector } from "react-redux";
import { getCartFromLocalStorage } from "./redux/action/user/cart&order/cart";

function App() {
  // const dispatch = useDispatch()
  // const cartFromStore = useSelector((state) => state.cart);
  // localStorage.setItem("cart","[]")
  // dispatch(getCartFromLocalStorage())
  const maproutes = routes.map((route, index) => {
    return (
      <Route key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  });
  return (
    <Router>
      <div className="App">
        <div className="">
          <Header />
          <Switch>{maproutes}</Switch>
          <br></br>

          <Footer />


        </div>

      </div>
    </Router>
  );
}

export default App;
