import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Component/Dashboard/AddProduct';
import AddReviue from './Component/Dashboard/AddReviue';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardHome from './Component/Dashboard/DashboardHome';
import MyCart from './Component/Dashboard/MyCart';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Samsung from './Component/MobailPhones/Samsung';
import Symphony from './Component/MobailPhones/Symphony';
import Xiaomi from './Component/MobailPhones/Xiaomi';
import Header from './Component/Pages/Header/Header';
import ManageOrder from './Component/Pages/ManageOrder';
import Navbar from './Component/Pages/Navbar/Navbar';
import RequireAuth from './Component/Requireauth';
import SingUp from './Component/SingUp/SingUp';
import UpdateProfile from './Component/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home/' element={<Symphony></Symphony>}></Route>
          <Route path='/home/symphony' element={<Symphony></Symphony>}></Route>
          <Route path='/home/samgsung' element={<Samsung></Samsung>}></Route>
          <Route path='/home/xiaomi' element={<Xiaomi></Xiaomi>}></Route>
        </Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
          <Route path='/dashboard/addreviue' element={<AddReviue/>}></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct/>}></Route>
          <Route path='/dashboard/mycart' element={<MyCart/>}></Route>
          <Route path='/dashboard/' element={<DashboardHome/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/update' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/manageorder/:_id' element={<RequireAuth>
          <ManageOrder/>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
