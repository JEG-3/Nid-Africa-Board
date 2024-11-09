/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import logo from '../../assets/images/nid-africa.png';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from "../SearchBox";
import { MdOutlineLightMode, MdOutlineMenu, MdEmail, MdNotificationsActive } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { BsShieldFillExclamation } from "react-icons/bs";
import { MyContext } from "../../App";

const Header = () => {
    const [ anchorEl, setAnchorEl ] = useState( null );
    const [ notificationAnchorEl, setNotificationAnchorEl ] = useState( null );

    const openMyAcc = Boolean( anchorEl );
    const openNotifications = Boolean( notificationAnchorEl );

    const context = useContext( MyContext );

    const handleOpenMyAccDrop = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleCloseMyAccDrop = () => {
        setAnchorEl( null );
    };

    const handleOpenNotificationsDrop = ( event ) => {
        setNotificationAnchorEl( event.currentTarget );
    };

    const handleCloseNotificationsDrop = () => {
        setNotificationAnchorEl( null );
    };

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    {/* Logo Column */ }
                    <div className="col-sm-2 d-flex align-items-center">
                        <Link to="/" className="logo">
                            <img src={ logo } alt="NID Africa Logo" />
                        </Link>
                    </div>

                    {/* Button Column */ }
                    <div className="bc col-sm-5 d-flex align-items-center part2">
                        <Button className="rounded-circle ms-5" onClick={ () => context.setisToggleSidebar( !context.isToggleSidebar ) }>
                            {
                                context.isToggleSidebar===false ?  <MdMenuOpen /> : <MdOutlineMenu/>
                            }
                        </Button>
                        <SearchBox />
                    </div>

                    <div className="col-sm-5 d-flex align-items-center part3 justify-content-end">
                        <Button className="rounded-circle ms-3">
                            <MdOutlineLightMode />
                        </Button>
                        <Button className="rounded-circle ms-3">
                            <FaCartShopping />
                        </Button>
                        <Button className="rounded-circle ms-3 mr-5">
                            <MdEmail />
                        </Button>

                        <div className="dropdownWrapper">
                            <Button className="rounded-circle ms-3 mrr-5" onClick={ handleOpenNotificationsDrop }>
                                <MdNotificationsActive />
                            </Button>
                            <Menu
                                anchorEl={ notificationAnchorEl }
                                className="notifications dropdown_list"
                                id="notifications"
                                open={ openNotifications }
                                onClose={ handleCloseNotificationsDrop }
                                transformOrigin={ { horizontal: 'right', vertical: 'top' } }
                                anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
                            >

                                <div className="head pll-3 pb-0">
                                    <h4>Orders (12)</h4>
                                </div>

                                <Divider className='mb-1' />

                                <div className="scroll">

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    <MenuItem onClick={ handleCloseNotificationsDrop }>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">
                                                    few seconds ago
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>
                                <div className='pt-2 pl-2 pr-2 w-100'>
                                    <Button className='btn-blue w-100'>View all notifications</Button>
                                </div>
                            </Menu>
                        </div>

                        {
                            context.isLogin!== true ? <Link to={'/login'}><Button className='btn-purple btn-lg'>Sign In</Button></Link>
                            :   
                            <div className="myAccWrapper">
                            <Button className="myAcc d-flex align-items-center" onClick={ handleOpenMyAccDrop }>
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                    </span>
                                </div>
                                <div className="userInfo">
                                    <h4 className="uc">NID AFRICA SITE</h4>
                                    <p className="mb-0">@letstalk@nidafrica.store</p>
                                </div>
                            </Button>

                            <Menu
                                anchorEl={ anchorEl }
                                id="account-menu"
                                open={ openMyAcc }
                                onClose={ handleCloseMyAccDrop }
                                transformOrigin={ { horizontal: 'right', vertical: 'top' } }
                                anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
                            >
                                <Divider />
                                <MenuItem onClick={ handleCloseMyAccDrop }>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My account
                                </MenuItem>
                                <MenuItem onClick={ handleCloseMyAccDrop }>
                                    <ListItemIcon>
                                        <BsShieldFillExclamation fontSize="larger" />
                                    </ListItemIcon>
                                    Reset password
                                </MenuItem>
                                <MenuItem onClick={ handleCloseMyAccDrop }>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                        }

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
