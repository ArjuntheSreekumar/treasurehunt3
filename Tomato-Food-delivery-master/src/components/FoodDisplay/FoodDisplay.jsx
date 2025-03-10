import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Define unique questions for each puzzle
  const puzzleQuestions = {
    Puzzle1: [
        "You are and always will be a _________"
    ],
    Puzzle2: [
      "https://www.hongkiat.com/blog/creative-404-error-pages/",
      "Ninjas are _______?"
    ],
    Puzzle3: [
        "Linkedin based question"
    ],
    Puzzle4: [
        "Like all good lovers, they start with the head.",
        "The older the majestic creature the more its stripes",
        "My brother used to love _______"
    ],
    Puzzle5: [
       "A city must be untangled to be understood",
      "I will be there before and after you I am ________"
    ]
  };

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} className="food-item-container">
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
                {/* Display Unique Questions for Each Puzzle */}
                <div className="food-questions">
                  {puzzleQuestions[item.name]?.map((question, qIndex) => (
                    <p key={qIndex}>{question}</p>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
