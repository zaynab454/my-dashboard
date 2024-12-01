import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";

const ProductHeader = () => {
    return (
        <div className="product--header">
            <h1 className="header--title">Products Dashboard</h1> 
            <div className="header--activity">
                {/* Barre de recherche pour les produits */}
                <div className="search-box">
                    <input type="text" placeholder="Search for products..." /> 
                    <BiSearch className="icon" />
                </div>

                <div className="notify">
                    <BiNotification className="icon" />
                    <span className="notify-count">3</span> 
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;


