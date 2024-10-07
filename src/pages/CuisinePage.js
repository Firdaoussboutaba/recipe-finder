import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const CuisinePage = () => {
  const { type: cuisineType } = useParams(); 

  const cuisines = {
    American: [
      {
        name: "Big Mac",
        image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
      },
      {
        name: "Kentucky Fried Chicken",
        image: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
      },
      {
        name: "BBQ Pork Sloppy Joes",
        image: "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
      },
    ],
    Italian: [
      {
        name: "Spaghetti alla Carbonara",
        image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      },
      {
        name: "Lasagne",
        image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      },
      {
        name: "Pizza Express Margherita",
        image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      },
    ],
    Chinese: [
      {
        name: "Sweet and Sour Pork",
        image: "https://www.themealdb.com/images/media/meals/1529442316.jpg",
      },
      {
        name: "Kung Pao Chicken",
        image: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
      },
      {
        name: "Wontons",
        image: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
      },
    ],
  };


  const recipes = cuisines[cuisineType] || [];

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-[#6B705C]">{cuisineType} Cuisine</h1>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#6B705C]">
          {recipes.map((recipe, index) => (
            <div key={index}>
             
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#6B705C]">No recipes available for this cuisine.</p>
      )}
    </div>
  );
};

export default CuisinePage;
