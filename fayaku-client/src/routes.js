import HomePageComponent from "./component/HomePageComponent";
import CategoryHome from "./component/category/CategoryHome";
import ProductDetail from "./component/product/ProductDetail";
import UpdateProduct from "./component/product/UpdateProduct";
import PageNotFound from "./component/PageNotFound";
import HomePageAdmin from "./component/admin/HomePage/HomePageAdmin";
import LoginHome from "./component/login&register/LoginHome";
const routes = [
     { path: ["/trang-chu","/"], component: HomePageComponent, exact: true },
     { path: "/bo-suu-tap", component: CategoryHome, exact: true },
     { path: "/san-pham/:id", component: ProductDetail, exact: true },
     { path: "/dang-nhap", component: LoginHome, exact: true },
     //Admin
     { path: ["/admin/trang-chu","/admin/"], component: HomePageAdmin, exact: true },
     { path: "/admin/login", component: HomePageAdmin, exact: true },
     { path: "/admin/san-pham/cap-nhat/:id", component: UpdateProduct, exact: true },
     //notFound & Exception
     { path: "", component: PageNotFound, exact: true },
     //Note: Page not Found need stay last of array.
    
];
export default routes


