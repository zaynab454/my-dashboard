import React from "react";
import ProductHeader from "./ProductHeader";
import "../styles/content.css";
import ProductCard from "../components/ProductCard";
import ProductList from "./ProductList";

const Content = () => {
    return (
        <div className="content">
            <ProductHeader /> 
              <ProductCard />   
            <ProductList />   
        </div>
    );
};

export default Content;
