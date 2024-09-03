
import { useState, useEffect } from 'react'
import HomePage from './pages/Home';
import LoginPage from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './components/Header';
import Notes from './pages/Notes';
import ContactUs from './pages/ContactUs';
import Protected from './components/Protected';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './libs/constants';

type AuthState = {
  isAuth: string;
  setIsAuth?: (value: boolean) => void;
}

export default function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  const logout = ()=>{
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/register' element={<Register />} ></Route>

        <Route path='/notes' element={<Protected>  <Notes /></Protected>} ></Route>
        <Route path='/contact' element={<ContactUs />} ></Route>
        <Route path="*" element={<div>Not Found!</div>}> </Route>
      </Routes>
    </BrowserRouter>)

}

