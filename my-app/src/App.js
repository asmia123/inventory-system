import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import Category from "./pages/admin/category/categories";
import Products from "./pages/admin/product/products";
import Brands from "./pages/admin/brand/brands";
import Items from "./pages/admin/item/items";
import Users from "./pages/admin/user/users";
import Layout from "./components/layout";
import ViewCategory from "./pages/admin/category/viewCategory";
import AddCategory from "./pages/admin/category/addCategory";
import EditCategory from "./pages/admin/category/editCategory";
import UserPanel from "./pages/user/panel";
function App() {
  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  // const token = useSelector((state)=>state.login.token);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path= "/viewcategory/:categoryId" element={<ViewCategory />} />
        <Route path="/category" element={<Category />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory/:categoryId" element={<EditCategory />} />
        <Route path="/product" element={<Products />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/item" element={<Items />} />
        <Route path="/users" element={<Users />} />
        <Route path ="/panel" element={<UserPanel />} />
      </Routes>
   </Layout>
  );
}

export default App;
