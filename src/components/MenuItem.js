import React from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

// This is a functional component that represents a single menu item. 
// it renders the name, description, image, and price
const MenuItem = ({ item, itemCounts, setItemCounts, subtotal, setSubtotal }) => {
  return (
    <div class="container-fluid row text-center entry">
      <div class="col-4">
        <img src={"./images/"+item.imageName} alt={"An image of "+item.title} class="img-fluid rounded float-left"/>
      </div>
      <div class="col-8">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div class="row">
          <div class="col-6">
            <p>${item.price}</p>
          </div>
          <div class="col-6">
            {/* price */}
            <div class="row">
              <div class="col-4">
                <button class="cart-button" onClick={() => removeItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> 
                  <BsDashCircle /> 
                </button> 
              </div>
              <div class="col-4">
                <p>{itemCounts[item.id - 1]}</p> 
              </div>
              <div class="col-4">
                <button class="cart-button" onClick={() => addItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> 
                  <BsPlusCircle /> 
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// add this item to the cart: update the item count and subtotal
function addItem(item, itemCounts, setItemCounts, subtotal, setSubtotal) {
  const nextCounts = itemCounts.map((c, i) => { return c + (i === (item.id - 1)); });
  setItemCounts(nextCounts);

  let newSubtotal = Math.round((subtotal + item.price) * 100) / 100;
  newSubtotal = parseFloat(newSubtotal.toFixed(2));
  setSubtotal(newSubtotal);
}

// remove this item to the cart: update the item count and subtotal
function removeItem(item, itemCounts, setItemCounts, subtotal, setSubtotal) {
  if (itemCounts[item.id - 1] !== 0) {
    const nextCounts = itemCounts.map((c, i) => { return c - (i === (item.id - 1)); });
    setItemCounts(nextCounts);

    let newSubtotal = subtotal - (Math.round(item.price * 100) / 100);
    newSubtotal = parseFloat(newSubtotal.toFixed(2));
    setSubtotal(newSubtotal);
  }
}

export default MenuItem;
