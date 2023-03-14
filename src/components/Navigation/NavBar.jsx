import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.css";


export default function NavBar() {
  return (
    
    <div className="navBarBox">

            <div className="navBarLeft">
              <span className='logo'>Code Com</span>
            </div>

            <div className="navBarCenter">
              <div className="searchBarBox">
                  <SearchIcon className='searchIcon'/>
                  <input placeholder="search course" className="searchInput" />
              </div>
            </div>

            <div className="navBarRight">
              <div className="navBarLinks">
                <span className="links">Home </span>
                <span className="links">Subscribe</span>
              </div>

              <div className="navBarIcons">   {/**Navigation Icons */}

                <div className="navBarIcon">
                    <MessageIcon />
                    <span className="iconTag">3</span>
                </div>

                <div className="navBarIcon">
                  <ShoppingCartIcon /> 
                  <span className="iconTag">3</span> 

                </div>
              </div>
                <div className="pic">
                    <img src="/Images/img1 (2).jpg" alt="" className="profilePicImage" />
                </div>

            </div>

    </div>
    
  )
}
