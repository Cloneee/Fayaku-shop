import { combineReducers } from "redux"
import products from "./admin/productAdmin"
import productByID from "./admin/product/getProductByID"
import categories from "./user/category/userGetAllCategories"
import categoryByID from "./user/category/userGetCategoryById"
import suppliers from "./user/supplier/userGetAllSuppliers"
import supplierByID from "./user/supplier/userGetSupplierById"
import userLogin from "./user/login&register/login"
const reducer = combineReducers({
   products,productByID,
   categories,categoryByID,
   suppliers,supplierByID,
   userLogin
   
})
export default reducer