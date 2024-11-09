/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import Button from "@mui/material/Button";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

const ITEM_HEIGHT = 48; // Define ITEM_HEIGHT

const DashboardBox = ( props ) => {
  const [ anchorEl, setAnchorEl ] = useState( null );
  const open = Boolean( anchorEl );
  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };
  const handleClose = () => {
    setAnchorEl( null );
  };


  useEffect( () => {
    console.log( props.color );
  }, [ props.color ] );

  const options = [ 'Option 1', 'Option 2', 'Option 3' ]; // Define the options array

  return (
    <Button
      className="dashboardBox"
      style={ {
        backgroundImage: `linear-gradient(to right, ${ props.color[ 0 ] } , ${ props.color[ 1 ] })`,
      } }
    >
      { props.grow === true ? (
        <span className="chart">
          <TrendingUpRoundedIcon />
        </span>
      ) : (
        <span className="chart">
          <TrendingDownRoundedIcon />
        </span>
      ) }
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white">Total Users</h4>
          <span className="text-white">277</span>
        </div>

        <div className="ml-auto">
          { props.icon ? (
            <span className="icon">{ props.icon }</span>
          ) : (
            ''
          ) }
        </div>
      </div>

      <div className="d-flex align-items-center w-100 bottomEle">
        <h6 className="text-white mb-0 mt-0" style={ { fontSize: '12px' } }>
          Last Month
        </h6>
        <div className="ml-auto">
          <IconButton
            aria-label="more"
            className='toggleIcon'
            id="long-button"
            aria-controls={ open ? 'long-menu' : undefined }
            aria-expanded={ open ? 'true' : undefined }
            aria-haspopup="true"
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

            <MenuItem onClick={handleClose}>
            <IoIosTimer/> Last Day
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IoIosTimer/> Last Week
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IoIosTimer/> Last Month
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IoIosTimer/> Last Year
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Button>
  );
};

export default DashboardBox;

// import React from 'react';
// import { Button, IconButton } from '@mui/material';         
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// const SalesCard = () => {
//   return (
//     <div className="mc-sales-card-group">
//       <div className="mc-card-header">
//         <h4 className="mc-card-title">Total Sales</h4>
//         <div className="mc-dropdown">
//           <Button
//             type="button"
//             id="react-aria1793710698-:r9:"
//             aria-expanded="false"
//             className="mc-dropdown-toggle btn btn-primary"
//           >
//             <IconButton aria-label="more options">
//               <i className="material-icons">more_horiz</i>
//             </IconButton>
//           </Button>
//         </div>
//       </div>
//       <div className="mc-sales-card-amount trending_up green">
//         <h3>$3,787,681.00</h3>
//         <p>
//           40.63% <TrendingUpIcon />
//         </p>
//       </div>
//       <p className="mc-sales-card-compare">$3,578.90 in last month</p>
//     </div>
//   );
// };

// export default SalesCard;