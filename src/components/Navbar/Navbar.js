import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    
    console.log(cart)
    // cart.forEach((item) => {
    //   count += item.qty;
    // });

    setCartCount(cart.length);
  }, [cart, cartCount]);

  return (
    <div >
      <Link to="/">
        <h2>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div >
          <h3 >Cart   {cartCount}</h3>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
