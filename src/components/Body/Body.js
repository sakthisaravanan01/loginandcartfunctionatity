import React from "react";
import { fruits } from "../../config";
import Card from "../Card/Card";
import "./Body.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../cartSlice";
const Body = () => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
    alert(`${item.name} is added to cart`);
  };
  return (
    <div className="fruit-container">
      {fruits.map((fruit, index) => {
        return (
          <div className="fruit-item" key={index}>
            <div className="fruit-name">{fruit.name}</div>
            <div>
              <img src={fruit.image} alt={fruit.name} className="fruit-image" />
            </div>
            <div className="fruit-prizes">price:{fruit.price}</div>
            <button onClick={() => addFoodItem(fruit)}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
