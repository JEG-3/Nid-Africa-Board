/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Button } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt, FaCartArrowDown, FaAngleRight } from "react-icons/fa";
import { MdMessage, MdNotificationsActive } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { MyContext } from "../../App";


const SideBar = () => {

  const [ activeTab, setActiveTab ] = useState( null );
  const [ isToggleSubmenu, setIsToggleSubmenu ] = useState( false );

  const isOpenSubmenu = ( index ) => {
    setActiveTab( index );
    setIsToggleSubmenu( !isToggleSubmenu )
  }

  const context = useContext( MyContext );


  return (
    <>
      <div className="sidebar">
        <ul>
          <div className="dash mt-3">
            <li>
              <Link to='/'>
                <Button className={ `w-100 ${ activeTab === 0 ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 0 ) }>
                  <span className='icon'><MdDashboard /></span>
                  Dashboard
                  <span className='arrow'><FaAngleRight /></span>
                </Button>
              </Link>
            </li>
          </div>
          <li>
            <Button className={ `w-100 ${ activeTab === 1 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 1 ) }>
              <span className='icon'><FaProductHunt /></span>
              Products
              <span className='arrow'><FaAngleRight /></span>
            </Button>
            <div className={ `submenuWrapper ${ activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed' }` }>
              <ul className="submenu">
                <li><Link to='#'>Product List</Link></li>
                <li><Link to='#'>Product View</Link></li>
                <li><Link to='#'>Product Upload</Link></li>
              </ul>
            </div>
          </li>

          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 2 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 2 ) }>
                <span className='icon'>
                  <FaCartArrowDown />
                </span>
                Orders
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 3 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 3 ) }>
                <span className='icon'>
                  <MdMessage />
                </span>
                Messages
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 4 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 4 ) }>
                <span className='icon'>
                  <MdNotificationsActive />
                </span>
                Notifications
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 5 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 5 ) }>
                <span className='icon'>
                  <IoMdSettings />

                </span>
                Settings
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 6 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 6 ) }>
                <span className='icon'>
                  <MdDashboard />
                </span>
                Dashboard
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 7 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 7 ) }>
                <span className='icon'>
                  <FaProductHunt />
                </span>
                Products
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 8 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 8 ) }>
                <span className='icon'>
                  <FaCartArrowDown />
                </span>
                Orders
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 9 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 9 ) }>
                <span className='icon'>
                  <MdMessage />
                </span>
                Messages
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 10 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 10 ) }>
                <span className='icon'>
                  <MdNotificationsActive />
                </span>
                Notifications
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button className={ `w-100 ${ activeTab === 11 && isToggleSubmenu === true ? 'active' : '' }` } onClick={ () => isOpenSubmenu( 11 ) }>
                <span className='icon'>
                  <IoMdSettings />

                </span>
                Settings
                <span className='arrow'>
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        <br />

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant='contained'><IoIosLogOut />Logout</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;