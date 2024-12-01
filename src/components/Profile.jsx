import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import userImage from '../assets/image.png'
import { BiCart, BiPackage } from "react-icons/bi";

const orders = [
    {
        title: 'Laptop',
        price: '$899.99',
        icon: <BiCart />,
        status: 'Shipped', 
    },
    {
        title: 'Wireless Mouse',
        price: '$29.99',
        icon: <BiPackage />, 
        status: 'In Transit',
    },
    {
        title: 'Keyboard',
        price: '$49.99',
        icon: <BiPackage />, 
        status: 'Delivered',
    }
];

const Profile = () => {
    return (
      <div className="profile">
        <ProfileHeader />

        <div className="user--profile">
            <div className="user--detail">
                <img src={userImage} alt="" />
                <h3 className="username">Jhone Doe</h3>
                <span className="profession">Customer</span> 
            </div>

            <div className="user-orders">
                {orders.map((order, index) => (
                    <div className="order" key={index}>
                        <div className="order-detail">
                            <div className="order-cover">{order.icon}</div>
                            <div className="order-info">
                                <h5 className="title">{order.title}</h5>
                                <span className="price">{order.price}</span> 
                                <span className="status">{order.status}</span> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
};

export default Profile;

