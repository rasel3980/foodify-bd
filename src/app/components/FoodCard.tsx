import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FoodProps {
  food: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strInstructions: string;
  };
}

const FoodCard: React.FC<FoodProps> = ({ food }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strInstructions } = food;

  return (
    <div>
      <div className="card bg-base-100 h-[600px] shadow-sm hover:shadow-md hover:shadow-gray-600 overflow-hidden">
        <Image
          className="rounded-md object-cover"
          src={strMealThumb}
          width={400}
          height={500}
          alt={strMeal} 
          priority={false}
        />
        <div className="card-body">
          <h2 className="card-title">
            {strMeal}
            <div className="badge badge-secondary">{strCategory}</div>
          </h2>
          <p>{strInstructions?.slice(0, 120)}....</p>
          
          <div className="card-actions justify-end">
            <Link href={`/foodDetails/${idMeal}`}>
              <button className="px-4 py-1 bg-green-700 hover:bg-green-800 text-white rounded cursor-pointer">
                Details
              </button>
            </Link>
            <button className="px-4 py-1 bg-green-700 hover:bg-green-800 text-white rounded cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;