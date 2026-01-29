'use client'
import Image from "next/image";
import { use, useEffect, useState } from "react";

const FoodDetails = ({ params }) => {
    const [item, setItem] = useState(null);
    const { id } = use(params); 

    useEffect(() => {
        const fetchFood = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();
            const singleItem = data.meals.find(meal => meal.idMeal === id);
            setItem(singleItem);
        };
        fetchFood();
    }, [id]);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex gap-5 w-full">
            <div>
                <Image className="shadow-xl" src={item.strMealThumb} alt={item.strMeal} width={600} height={800}></Image>
            </div>
            <div className=" w-[700px]">
            <h2 className="font-bold text-3xl pb-5">{item?.strMeal}</h2>
            <p>{item.strInstructions}</p>
            <p><span className="font-bold">Ingredient: </span>{item?.strIngredient1}, {item?.strIngredient2}, {item?.strIngredient3}, {item.strIngredient4}, {item.strIngredient5}, {item.strIngredient6}, {item.strIngredient7}, {item.strIngredient8}, {item.strIngredient9}, {item.strIngredient10}, {item.strIngredient11}, {item?.strIngredient12}, {item?.strIngredient13}, {item?.strIngredient14}</p>
            <p><span className="font-bold">Measure:</span> {item.strMeasure1}, {item.strMeasure2}, {item.strMeasure3}, {item.strMeasure4}, {item.strMeasure5},</p>
            </div>
        </div>
    );
};

export default FoodDetails;
