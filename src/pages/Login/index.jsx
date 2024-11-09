/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import Logo from '../../assets/images/Nid-logo.png';
import pattern from '../../assets/images/pattern.webp'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { MyContext } from '../../App'

const Login = () => {

  const [ inputIndex, setinputIndex ] = useState( null );
  const [ isShowPassword, setisShowPassword ] = useState( false );
  const context = useContext( MyContext );


  useEffect( () => {
    context.setisHideSidebarAndHeader( true );
  }, [] );

  const focusInput = ( index ) => {
    setinputIndex( index );
  }

  return (
    <>
      <img src={ pattern } className="loginPattern" />
      <section className='loginSection'>
        <div className="loginBox">
          <div className="logo text-center">
            <img src={ Logo } width="140px" alt='' />
            <h5 className="font-weight-small">Login To Nid Africa Board</h5>
          </div>

          <div className="wrapper mt-3 card border p-4">
            <form>
              <div className={ `form-group mb-3 position-relative ${ inputIndex === 0 && 'focus' }` }>
                <span className="icon"><MdEmail /></span>
                <input type="email" className='form-control' placeholder="Your Email" onFocus={ () => focusInput( 0 ) }
                  onBlur={ () => setinputIndex( null ) } />
              </div>
              <div className={ `form-group mb-3 position-relative ${ inputIndex === 1 && 'focus' }` }>
                <span className="icon"><RiLockPasswordFill /></span>
                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder="Your Password" onFocus={ () => focusInput( 1 ) }
                  onBlur={ () => setinputIndex( null ) } />

                <span className="toggleShowPassword" onClick={()=>setisShowPassword(!isShowPassword)}>
                  {
                    isShowPassword===true ? <IoMdEyeOff /> : <IoMdEye />
                  }
                  {/* password */}
                </span>
              </div>

              <div className="form-group">
                <Button className="btn-secondary btn-ig btn-lg text-center w-100">Sign In</Button>
              </div>
              <div className="form-group">
                <Link to={'/forgot-password'} className='link text-center'>FORGOT PASSWORD</Link>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default Login;
