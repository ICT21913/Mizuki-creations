import React, { useContext, useState, useEffect } from "react";
import "./CSS/ShopCatagory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCatagory = (props) => {
  console.log(props);
  //   const { all_product } = useContext(ShopContext);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProduction, setFilteredProduction] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    const _products = allProducts.filter(
      (product) => props.catagory === product.category
    );
    setFilteredProduction(_products);
  }, [allProducts, props.catagory]);

  return (
    <div className="shop-catagory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcatagory-indexSort">
        <p>
          <span>Showing 1-{filteredProduction.length}</span> out of{" "}
          {filteredProduction.length} products
        </p>
        <div className="shopcatagory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
        {filteredProduction.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.price}
            />
          );
        })}
      </div>
      <div className="shopcatagory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCatagory;
