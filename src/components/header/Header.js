import React from 'react'
import './header.css'
import { logo } from '../../assets';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

export const Header = () => {
  const {user} = useSelector((state)=>state.auth)
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap py-2 px-12 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
            <img src={logo} alt="logo" className="w-12 h-12 text-white p-2 bg-white-500 rounded-full" />
            <span className="ml-3 text-xl">Neos-tweet</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
          
          {user? <Link to={`/profile/${user.username}`}>
            <p className='font-bold'>{`Hi , ${user.firstName}`}</p>
          </Link> : <Link to='/login'>
            <LoginOutlinedIcon/>
          </Link>}
          </nav>  
        </div>
      </header>
    </>
    
  )
}
