import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from './../../redux/shopping/shopping-actions'

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      
      <div >
        <p >{current.title}</p>
        <p >{current.description}</p>
        <p >$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
