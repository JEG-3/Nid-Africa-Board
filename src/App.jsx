/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';      
import Dashboard from './pages/Dashboard';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { useEffect, useState, createContext } from 'react'
import Login from './pages/Login';

const MyContext = createContext();
function App () {

  const [ isToggleSidebar, setisToggleSidebar ] = useState( false );
  const [ isLogin, setIsLogin ] = useState( false );
  const [ isHideSidebarAndHeader, setisHideSidebarAndHeader ] = useState( false );

  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={ values }>
      {
            isHideSidebarAndHeader !== true &&
        <Header />
      }
        <div className="main d-flex">
          {
            isHideSidebarAndHeader !== true &&
            <div className={ `sidebarWrapper ${ isToggleSidebar === true ? 'toggle' : '' }` }>
              <SideBar />
            </div>
          }
          <div className={ `content ${isHideSidebarAndHeader===true && 'full'} ${ isToggleSidebar === true ? 'toggle' : '' }` }>
            <Routes>
              <Route path='/' exact={ true } element={ <Dashboard /> } />
              <Route path='/dashboard' exact={ true } element={ <Dashboard /> } />
              <Route path='/login' exact={ true } element={ <Login /> } />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
