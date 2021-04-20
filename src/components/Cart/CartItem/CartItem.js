import React from "react";


import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from './../../../redux/shopping/shopping-actions'

const CartItem = ({ item, adjustQty, removeFromCart }) => {

  return (
    <div >
     
      <div >
        <p >{item.title}</p>
        <p >{item.description}</p>
        <p >$ {item.price}</p>
      </div>
      <div >
      
        <button
          onClick={() => removeFromCart(item.id)}
          
        >
         Remove
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
