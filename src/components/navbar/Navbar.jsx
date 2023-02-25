import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{textDecoration: "none"}}>
          <span>QQQ</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewTwoToneIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...'/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
            <img src='/login-bg-min.jpeg' alt="ProfileImage" />
            <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar