import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/accounts/login/" target="_blank"><InstagramIcon /></a>

             <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> 
        </div>
        <p> &copy; 2023 bikes.com</p>
    </div>
  )
}

export default Footer