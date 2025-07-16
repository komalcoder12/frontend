import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import User from './pages/User';   
import StoreOwner from './pages/StoreOwner';  
import StoreList from './pages/StoreList';
import UpdatePassword from './pages/UpdatePassword';   // Add this import
import TestRating from './pages/TestRating';           // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<Admin />} /> 
        <Route path="/user-dashboard" element={<User />} /> 
        <Route path="/store-owner-dashboard" element={<StoreOwner />} /> 
        <Route path="/store-list" element={<StoreList />} />
        <Route path="/update-password" element={<UpdatePassword />} />  
        <Route path="/rating-test" element={<TestRating />} />        
      </Routes>
    </Router>
  );
}

export default App;
