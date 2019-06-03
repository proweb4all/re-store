import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <th>1</th>
          <th>Пером и шпагой</th>
          <th>2</th>
          <th>$25</th>
          <th>
            <button className="btn btn-outline-danger btn-sm">
              <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm">
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm">
              <i className="fa fa-minus-circle" />
            </button>
          </th>
        </tbody>
      </table>
      <div className='total'>Total: $50</div>
    </div>
  );
};

export default ShoppingCartTable;
