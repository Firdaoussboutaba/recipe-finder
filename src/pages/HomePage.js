import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-8 text-center">
     
      <h2 className="text-2xl font-bold text-center mb-4 text-dark">
        Welcome to Recipe Finder
      </h2>
      <h2 className="text-3xl font-bold mb-6">Explore Recipes by Cuisine</h2>
      
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* American Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/American" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              American Cuisine
            </Link>
            <img 
              src="https://i.pinimg.com/564x/19/9c/af/199caf4c68143278bf58dbbcd124be4e.jpg" 
              alt="American Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Italian Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Italian" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Italian Cuisine
            </Link>
            <img 
              src="https://i.pinimg.com/564x/df/06/5e/df065eb6e8c4d19597e3b5d71f940f22.jpg" 
              alt="Italian Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Chinese Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Chinese" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Chinese Cuisine
            </Link>
            <img 
              src="https://i.pinimg.com/564x/fe/6f/1c/fe6f1c8e21858cd59cae50504a2ffff8.jpg" 
              alt="Chinese Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
