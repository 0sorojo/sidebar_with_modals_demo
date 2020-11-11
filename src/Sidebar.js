import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './redRootSVGLOGO.svg';

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <button className='close-btn'>
        <FaTimes />
      </button>
    </aside>
  );
};

export default Sidebar;
