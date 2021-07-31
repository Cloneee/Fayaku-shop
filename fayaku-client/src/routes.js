import HomePageComponent from "./component/HomePageComponent";
import CategoryHome from "./component/category/CategoryHome";
import ProductDetail from "./component/product/ProductDetail";
import UpdateProduct from "./component/product/UpdateProduct";
import PageNotFound from "./component/PageNotFound";
const routes = [
     { path: ["/trang-chu","/"], component: HomePageComponent, exact: true },
     { path: "/bo-suu-tap", component: CategoryHome, exact: true },
     { path: "/san-pham/:id", component: ProductDetail, exact: true },
     { path: "/san-pham/cap-nhat/:id", component: UpdateProduct, exact: true },
     { path: "", component: PageNotFound, exact: true },
     //Note: Page not Found need stay last of array.
    
];
export default routes


