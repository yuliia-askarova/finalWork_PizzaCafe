import React from "react";
import "./Pizzas.css";
import Pic1 from "../../assets/coffee.png";
import Pic2 from "../../assets/coffee1.png";

const config = [
  {
    link: "/",
    img: Pic1,
    headerSection: "Espresso",
    ingredientsSection:
      "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. Espresso forms the base for many other coffee drinks.",
    price: "10 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Caffè Americano",
    ingredientsSection:
      "Made by diluting espresso with hot water, resulting in a similar strength to drip coffee but with a different flavor profile.",
    price: "12 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "Latte",
    ingredientsSection:
      "Made with espresso and steamed milk, topped with a small amount of milk foam. Flavorings or syrups can be added, such as vanilla or caramel.",
    price: "14 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Cappuccino",
    ingredientsSection:
      "Made with equal parts espresso, steamed milk, and milk foam. It has a strong coffee flavor with a creamy texture.",
    price: "15 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "Macchiato",
    ingredientsSection:
      "Espresso stained with a small amount of frothed milk or milk foam. It can be served either as a latte macchiato (with more milk) or espresso macchiato (with less milk).",
    price: "11 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic2,
    headerSection: "Mocha",
    ingredientsSection:
      "A combination of espresso, steamed milk, and chocolate syrup, topped with whipped cream. It's a sweet and indulgent coffee option.",
    price: "12 €",
    button: "+",
  },
  {
    link: "/",
    img: Pic1,
    headerSection: "French Press",
    ingredientsSection:
      "Coffee made by steeping coarsely ground coffee beans in hot water and then pressing the grounds with a plunger. It produces a full-bodied and rich cup of coffee.",
    price: "16 €",
    button: "+",
  },
];

const Drinks = () => {
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

export default Drinks;
