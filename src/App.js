import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
import Purchase from './Pages/Purchase.js/Purchase';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Signup from './Pages/Authentication/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Portfolio from './Pages/Portfolio';
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllUser from './Pages/Dashboard/AllUser';
import Manage from './Pages/Dashboard/Manage';
import AddProducts from './Pages/Dashboard/AddProducts';
import AllOrders from './Pages/Dashboard/AllOrders';
import PageNotFound from './Pages/PageNotFound';
import Blogs from './Pages/Blogs';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='myorders' element={<MyOrder />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='users' element={<AllUser/>} />
          <Route path='manage' element={<Manage/>} />
          <Route path='addProducts' element={<AddProducts/>} />
          <Route path='allOrders' element={<AllOrders/>} />
        </Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
        <Toaster/>
    </div>
  );
}

export default App;
