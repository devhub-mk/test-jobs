import React from 'react';
import "../styles/LeftSidebar.css";

import {FaUserGroup} from "react-icons/fa6";
import {HiUserGroup} from "react-icons/hi2";
import {AiTwotoneShop} from "react-icons/ai";
import {PiVideoFill} from "react-icons/pi";
import {RiMemoriesFill} from "react-icons/ri"

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <div className="profile">
        <div className="profile-img">
          <img src="/images/profile.jpg" alt="" />
        </div>
        <p>Rohan Verma</p>
      </div>
      <ul>
        <li>
          <div className="icon">
            <FaUserGroup/>
          </div>
          <div className="sd-title">
            <h3>Friends</h3>
          </div>
        </li>
        <li>
          <div className="icon">
           <HiUserGroup/>
          </div>
          <div className="sd-title">
            <h3>Groups</h3>
            <p>3 new</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <AiTwotoneShop/>
          </div>
          <div className="sd-title">
            <h3>Marketplace</h3>
            <p>3 new</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <PiVideoFill/>
          </div>
          <div className="sd-title">
            <h3>Watch</h3>
            <p>9 new videos</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <RiMemoriesFill/>
          </div>
          <div className="sd-title">
            <h3>Memories</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
