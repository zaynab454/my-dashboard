import React from "react";
import  {BiCart, BiHelpCircle, BiHome, BiMessage, BiSolidReport, BiStats, BiPackage } from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = () =>{
    return <div className="menu">
        <div className="logo">
            <BiCart className="logo-icon" />
            <h2>CaraShop</h2>
        </div>

        <div className="menu--list">
            <a href="#" className="item">
                <BiHome className="icon" />
              Dashboard
            </a>
            <a href="#" className="item">
                <BiPackage className="icon" />
              Shipments
            </a>
            <a href="#" className="item">
                <BiSolidReport className="icon" />
                Report
            </a>
            <a href="#" className="item">
                <BiStats className="icon" />
               Stats
            </a>
            <a href="#" className="item">
                <BiMessage className="icon" />
                Message
            </a>
            <a href="#" className="item">
                <BiHelpCircle className="icon" />
                Help
            </a>
        </div>
    </div>;
};

export default Sidebar;