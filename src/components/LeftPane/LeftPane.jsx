import React from 'react'
import './LeftPane.css'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import GroupsIcon from '@mui/icons-material/Groups';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LeftPane() {
  return (
    <div className='leftpane'>
      <div className="leftpane-container">
        <div className="leftpanemenu">

        <h2 className='heading'>Overview</h2>

            <li className='leftpanemenuItem'>
              <MarkunreadIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">Messages</span>
            </li>

            <li className='leftpanemenuItem'>
              <GroupsIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">GroupsIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <AddCircleIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">AddCircleIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <AutoAwesomeIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">AutoAwesomeIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <DashboardIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">DashboardIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <ThumbUpAltIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">ThumbUpAltIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <TipsAndUpdatesIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">TipsAndUpdatesIcon</span>
            </li>

            <li className='leftpanemenuItem'>
              <FeedIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">FeedIcon</span>
            </li>

            

            <hr className='hr' />
            <div className="likedPages">
                <h2 className='heading'>Courses</h2>

                <div className="pageListpane">
                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <li className='pagelist'>
                        <img src="./Images/img1 (1).jpg" alt="" className="pagePic" />
                        <span className="pagetitle">Course 1</span>
                    </li>

                    <hr />
                    <br />
                    <li className='leftpanemenuItem'>
              <SettingsIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">Setting</span>
            </li>

            <li className='leftpanemenuItem'>
              <LogoutIcon className="leftPaneMenuIcons"/>
              <span className="leftpanemenuText">Log Out</span>
            </li>

                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
