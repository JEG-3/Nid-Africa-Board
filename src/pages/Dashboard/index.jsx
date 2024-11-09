/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { MdShoppingBag } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Chart } from "react-google-charts";

// import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoEye } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';

const ITEM_HEIGHT = 48; // Define ITEM_HEIGHT


export const data = [
  [ "Task", "Hours per Day" ],
  [ "Work", 11 ],
  [ "Eat", 2 ],
  [ "Commute", 2 ],
  [ "Watch TV", 2 ],
  [ "Sleep", 7 ], // CSS-style declaration
];

export const options = {
  // title: "My Daily Activities",
  'backgroundColor': 'transparent',
  'chartArea': { 'width': '100%', 'height': '100%' },
  pieHole: 0.4,
  is3D: true,
};

const Dashboard = () => {
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ showBy, setshowBy ] = useState( '' )
  const [ showBysetCatBy, setCatBy ] = useState( '' )
  const open = Boolean( anchorEl );
  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };
  const handleClose = () => {
    setAnchorEl( null );
  };

  return (
    <section className="right-content w-100">
      <div className="card-holder">
        <div className="card shadow border-0 pac mt-3 mb-4">
          <h6>Ecommerce</h6>
        </div>
      </div>
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox color={ [ "#330063", "#250444" ] } icon={ <IoMdCart /> } grow={ true } />
            <DashboardBox color={ [ "#0b4821", "#216c41" ] } icon={ <FaUserCircle /> } />
            <DashboardBox color={ [ "#0b4821", "#216c41" ] } icon={ <GiStarsStack /> } />
            <DashboardBox color={ [ "#330063", "#250444" ] } icon={ <MdShoppingBag /> } />
          </div>
        </div>
        <div className="col-md-4 pl-0">
          <div className="box graphBox">
            <div className="d-flex align-items-center w-100 bottomEle">
              <h6 className="text-white mb-0 mt-0" style={ { fontSize: '12px' } }>
                Total Sales
              </h6>
              <div className="ml-auto">
                <IconButton
                  className="toggleIcon"
                  onClick={ handleClick }
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  className='dropdown_menu'
                  MenuListProps={ {
                    'aria-labelledby': 'long-button',
                  } }
                  anchorEl={ anchorEl }
                  open={ open }
                  onClick={ handleClose }
                  slotProps={ {
                    paper: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                      },
                    },
                  } }
                >
                  {/* { options.map( ( option ) => (

              <MenuItem key={ option } selected={ option === 'Pyxis' } onClick={ handleClose }>
                { option }
              </MenuItem>
            ) ) } */}

                  <MenuItem onClick={ handleClose }>
                    <IoIosTimer /> Last Day
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <IoIosTimer /> Last Week
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <IoIosTimer /> Last Month
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <IoIosTimer /> Last Year
                  </MenuItem>
                </Menu>
              </div>
            </div>
            {/* <h3 className='text-wight font-weight-bold'>$3,787,681.00</h3>
            <p>$3,787,681.00 in last month</p> */}

            <div className="mc-sales-card-group">
              <div className="mc-card-header">
                <div className="mc-dropdown">
                </div>
              </div>
              <div className="mc-sales-card-amount trending_up green">
                <h3>$3,787,681.00</h3>
                <p>
                  40.63% <div className="ico"><TrendingUpIcon /></div>
                </p>
              </div>
              <p className="mc-sales-card-compare">$3,578.90 in last month</p>
              <Chart
                chartType="PieChart"
                width="100%"
                height="170px"
                data={ data }
                options={ options }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow border-0 p-3">
        <h3 className='hd'>Best Selling Products</h3>

        <div className="row cardFilters mt-3">
          <div className="col-md-3">
            <h4>SHOW BY</h4>
            <FormControl size='small' className='w-100'>
              <Select
                value={ showBy }
                displayEmpty
                onChange={ ( e ) => setshowBy( e.target.value ) }
                inputProps={ { 'aria-label': 'without label' } }
                className='w-100'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='10'>Ten</MenuItem>
                <MenuItem value='20'>Twenty</MenuItem>
                <MenuItem value='30'>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */ }
            </FormControl>
          </div>
          <div className="col-md-3">
            <h4>CATEGORY BY</h4>
            <FormControl size='small' className='w-100'>
              <Select
                value={ showBysetCatBy }
                displayEmpty
                onChange={ ( e ) => setCatBy( e.target.value ) }
                inputProps={ { 'aria-label': 'without label' } }
                className='w-100'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='10'>Ten</MenuItem>
                <MenuItem value='20'>Twenty</MenuItem>
                <MenuItem value='30'>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */ }
            </FormControl>
          </div>
        </div>

        <div className='table-responsive mt-4'>
          <table className='table table-borderd v-align'>
            <thead className='thead-dark'>
              <tr>
                <th>UID</th>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDER</th>
                <th>SALES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src='src/assets/images/D IMG 01.png' className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Female...</h6>
                      <p>Womens exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>women</td>
                <td>richman</td>
                <td>
                  {/* <div style={ { width: '10px', textAlign: 'center' } }> */ }
                  <del className='old'>$21.00</del>
                  <span className='new text-danger'>$21.00</span>
                  {/* </div> */ }
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className='m-auto secondary' color="secondary"><IoEye />
                    </Button>
                    <Button className='m-auto success' color="success"><MdOutlineModeEdit />
                    </Button>
                    <Button className='m-auto error' color="error"><MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="aliceblue d-flex tableFooter">
            <p>showing <b>12</b>of <b>60</b></p>
            <Pagination className='pagination' count={ 10 } shape="rounded" showFirstButton showLastButton />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Dashboard;
