import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
import Purchase from './Pages/Purchase.js/Purchase';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Signup from './Pages/Authentication/Signup';
import Manage from './Pages/Manage'
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='myorders' element={<MyOrder/>} />
          <Route path='addreview' element={<AddReview/>} />
          <Route path='profile' element={<MyProfile/>} />
        </Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
