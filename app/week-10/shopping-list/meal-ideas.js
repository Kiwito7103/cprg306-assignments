"use client";
import { useState, useEffect } from "react";

// Fetch function (outside component)
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    console.log("Fetching from:", url);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Meals received:", data.meals);
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

// Main component
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load function
  async function loadMealIdeas() {
    console.log("Loading meals for ingredient:", ingredient);
    const fetchedMeals = await fetchMealIdeas(ingredient);
    console.log("Setting meals:", fetchedMeals);
    setMeals(fetchedMeals);
  }

  // useEffect to call loadMealIdeas when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient ? (
        <div>
          <p className="mb-4">Here are some meal ideas using {ingredient}:</p>
          <div className="space-y-3">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="flex items-center gap-4"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-lg object-cover border border-cyan-700"
                />
                <p className="text-cyan-300 font-semibold">{meal.strMeal}</p>
              </div>
            ))}
          </div>
          {meals.length === 0 && (
            <p>No meal ideas found for {ingredient}</p>
          )}
        </div>
      ) : (
        <p>Select an item to see meal ideas</p>
      )}
    </div>
  );
}
