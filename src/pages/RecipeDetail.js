import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { name } = useParams();

  const recipeName = name.replace(/-/g, ' ');

  const recipeData = {
    "Big Mac": {
      title: "Big Mac",
      image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
      ingredients: ["1 Sesame Seed Bun", "2 Beef Patties", "Lettuce", "Cheese", "Pickles", "Onions", "Special Sauce"],
      directions: "To make a Big Mac, combine all sauce ingredients in a bowl, season with salt, and chill. Form 1/3 cup of seasoned mince into 4 balls, then flatten each into 15cm circles on baking paper. Heat oil in a large pan over high heat and cook the patties in two batches for 1-2 minutes per side until charred and cooked through, keeping them warm. Slice each burger bun into three parts and lightly toast them. Assemble the burgers by spreading Big Mac sauce on the bottom bun, layering with chopped onion, lettuce, cheese, a beef patty, and pickles, then repeat with the middle bun before adding the top bun. After cooking, wait 30 minutes for your food to settle, then go for a jog."
    
    },
    "Kentucky Fried Chicken": {
      title: "Kentucky Fried Chicken",
      image: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
      ingredients: ["Chicken", "Flour", "Salt", "Pepper", "Paprika", "Eggs", "Buttermilk"],
      directions: "Preheat the fryer to 350°F and mix all spice ingredients. Combine the spice mix with flour, brown sugar, and salt. Dip chicken pieces in egg whites, then coat them in the flour mixture, ensuring it sticks well. Let the chicken rest for 5 minutes to dry. Fry in batches: breasts and wings for 12-14 minutes, and legs and thighs for a few extra minutes, until a meat thermometer reads 165°F in the thickest part. Drain on paper towels and serve hot."
    },
    "BBQ Pork Sloppy Joes": {
      title: "BBQ Pork Sloppy Joes",
      image: "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
      ingredients: ["Ground Pork", "BBQ Sauce", "Buns", "Onions", "Pickles"],
      directions: "Preheat the oven to 450°F and wash and dry all produce. Cut sweet potatoes into ½-inch wedges, toss with oil, salt, and pepper on a baking sheet, and roast for 20-25 minutes until browned and tender. Meanwhile, slice and chop onion and garlic, squeeze lime juice into a bowl, and melt butter to brush onto halved buns. In another bowl, combine lime juice, sliced onion, sugar, and salt to quick-pickle. Heat oil in a pan over medium-high heat, cook chopped onion until softened, then add garlic and pork, seasoning with salt and pepper, and cook until browned. Mix BBQ sauce, pickling liquid, ketchup, sugar, and water in a third bowl, then add to the cooked pork, stirring until thickened. Toast the buns until golden, fill with BBQ pork, top with pickled onions and hot sauce, and serve with sweet potato wedges on the side."
    },
    "Spaghetti alla Carbonara": {
      title: "Spaghetti alla Carbonara",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Pepper"],
      directions: "Boil water in a large saucepan and season with salt. Cook 350g spaghetti for 10 minutes until al dente. Meanwhile, fry finely chopped 100g pancetta and 2 bruised garlic cloves in melted butter until golden. In a bowl, beat 3 large eggs and mix with grated 50g pecorino and 50g parmesan cheese. Once the spaghetti is cooked, combine it with the pancetta in the frying pan, remove the garlic, and quickly stir in the egg and cheese mixture off the heat, adding pasta water to keep it moist. Serve immediately, topped with remaining cheese and black pepper."
    },
    "Lasagne": {
      title: "Lasagne",
      image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      ingredients: ["Lasagne Noodles", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella Cheese", "Parmesan Cheese"],
      directions: "Heat oil in a large saucepan and add chopped bacon, cooking until golden. Add diced onion, celery, and carrot, cooking for 5 minutes until softened. Stir in minced garlic, then add mince, breaking it up as it browns for about 6 minutes. Mix in tomato purée and cook for 1 minute, then add chopped tomatoes and water to rinse the cans. Stir in honey and season to taste, simmering for 20 minutes. Preheat the oven to 200°C (180°C fan/gas 6). To assemble the lasagne, layer ragu sauce, lasagne sheets, and more sauce in a roasting tin, finishing with pasta. Mix crème fraîche with water, pour over the top, and add mozzarella and Parmesan. Bake for 25-30 minutes until golden, serving with basil if desired."
    },
    "Pizza Express Margherita": {
      title: "Pizza Express Margherita",
      image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil"],
      directions: "Preheat the oven to 230°C. Dissolve sugar and crumble fresh yeast into warm water, letting it stand for 10-15 minutes in a warm spot until frothy. Sift flour and salt into a bowl, creating a well in the center, and add the yeast mixture and olive oil. Lightly flour your hands and mix the ingredients until combined. Dust your surface with flour and knead the dough for 10 minutes until smooth and silky. Place the dough in a lightly oiled baking tray. Spread passata on top, add mozzarella (or other cheese), season with oregano and black pepper, and drizzle with olive oil. Bake for 10-12 minutes until the cheese is slightly colored, then top with basil leaves and enjoy!"
    },
    "Sweet and Sour Pork": {
      title: "Sweet and Sour Pork",
      image: "https://www.themealdb.com/images/media/meals/1529442316.jpg",
      ingredients: ["Pork", "Bell Peppers", "Pineapple", "Vinegar", "Sugar", "Soy Sauce"],
      directions: "To prepare Sweet and Sour Pork, crack an egg into a bowl and separate the egg white and yolk. Slice the pork tenderloin into strips and create a marinade with a pinch of salt, one teaspoon of starch, two teaspoons of light soy sauce, and the egg white. Marinate the pork strips for about 20 minutes. In another bowl, mix the remaining starch with water and vinegar to create a starchy sauce. For cooking, heat oil in a wok to 190°C (375°F), then add the marinated pork strips and fry until brown. Remove the pork and leave some oil in the wok. Combine tomato sauce and sugar in the wok, heating until well mixed. Add water to the sweet and sour sauce, then reintroduce the pork strips. Finally, pour in the starchy sauce and stir-fry until everything is combined. Serve with a garnish of coriander."
    },
    "Kung Pao Chicken": {
      title: "Kung Pao Chicken",
      image: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
      ingredients: ["Chicken", "Peanuts", "Soy Sauce", "Chili Peppers", "Ginger", "Garlic"],
      directions: "To prepare the chicken dish, combine sake or rice wine, soy sauce, sesame oil, and cornflour dissolved in water, then divide the mixture in half. In a glass dish or bowl, coat the chicken pieces with half of the sake mixture, cover, and refrigerate for about 30 minutes. In a medium frying pan, mix the remaining sake mixture with chillies, vinegar, and sugar. Add spring onion, garlic, water chestnuts, and peanuts, then heat the sauce slowly over medium heat until aromatic. Meanwhile, remove the chicken from the marinade and sauté it in a large frying pan until the juices run clear. Once the sauce is aromatic, add the sautéed chicken and let it simmer until the sauce thickens."
     
    },
    "Wontons": {
      title: "Wontons",
      image: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
      ingredients: ["Wonton Wrappers", "Ground Pork", "Green Onions", "Soy Sauce", "Ginger"],
      directions: "In a bowl, combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables. Separate the wonton skins and place a heaping teaspoon of the filling in the center of each skin. Brush water on two borders of the skin, about 1/4 inch from the edge, then fold the skin over to form a triangle, sealing the edges. Pinch the two long outside points together. Heat oil to 450°F and fry 4 to 5 wontons at a time until golden. Drain and serve with sauce."
    }
  };

  const recipe = recipeData[recipeName];

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#6B705C] mb-4">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 md:max-w-xs mb-4 md:mb-0">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-[#6B705C] mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[#6B705C] mb-2">Directions</h2>
          <p className="mb-4">{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;