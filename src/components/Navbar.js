import React, {useState} from 'react';
import Logo from '../assets/Bike.jpg';
import {Link} from 'react-router-dom';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
        <div className="leftside" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/bike"> Bikes </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        
        <div className="rightSide">
            <Link to="/"> Home</Link>
            <Link to="/bike"> Bikes</Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact</Link>
        <button onClick={toggleNavbar}>
            <ListAltOutlinedIcon />
        </button>
        </div>
    </div>
  );
}

export default Navbar