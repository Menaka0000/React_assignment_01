import './App.css';
import Login from "./component/login/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./routes/main-shared-layout";
import Registration from "./component/user-registration/Registration";
import Dashboard from "./component/dashboard/Dashboard";
import Products from "./component/product/Products";
import Cart from "./component/cart/Cart";

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path='/signIn' element={<Login/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<Registration/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/product' element={<Products/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
