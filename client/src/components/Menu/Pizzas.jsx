import React from "react";
import "./Pizzas.css";
import Pic1 from "../../assets/pizza-with-olives.png";
import Pic2 from "../../assets/pizza-with-salami.png";

const config = [
  {
    link: "/",
    img: Pic1,
    headerSection: "4 cheeses",
    ingredientsSection: "Tomato sauce, mozzarella, gorgonzola, parmesan",
    price: "10 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Breakfast",
    ingredientsSection: "Cream, mozzarella, tomato, bacon, chicken egg",
    price: "12 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "Hawaiian",
    ingredientsSection: "tomato sauce, mozzarella, prosciutto, pineapple",
    price: "14 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Margarita",
    ingredientsSection: "Tomato sauce, mozzarella, olive oil",
    price: "15 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "Vegetarian",
    ingredientsSection:
      "Tomato sauce, mozzarella, tomato, mushrooms, pepper, olives",
    price: "11 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Panasia",
    ingredientsSection: "Tomato sauce, mozzarella, chorizo, pineapple, bell pepper",
    price: "12 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "Gorgonzola with pear",
    ingredientsSection: "Cream, mozzarella, gorgonzola, pear, truffle honey",
    price: "16 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Carbonara",
    ingredientsSection: "Cream, mozzarella, tomato, bacon, onion",
    price: "13 €",
    button: "+",
  },
];

const Pizzas = () => {
  return (
    <div className="pizza-list">
      <ul>
        {config.map((item, index) => (
          <li key={index}>
            <div className="pizza-image">
              <img src={item.img} alt="" />
            </div>

            <div className="pizza-header">{item.headerSection}</div>
            <div className="pizza-ingredients">{item.ingredientsSection}</div>

            <div className="pizza-details">
              <div className="pizza-price">{item.price}</div>
              <button className="pizza-button">{item.button}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
