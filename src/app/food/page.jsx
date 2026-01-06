'use client'
import FoodCard from '@/app/components/FoodCard';
import React, { useEffect, useState } from 'react';

const Food = () => {
    const [food,setFood] = useState([])
    console.log("data",food);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            const data = await response.json()
            setFood(data.meals)
        }
        fetchData()
    },[])
    
    return (
        <div>
            <h1 className='text-center font-bold text-3xl pb-6'>Your Favourite Food</h1>
        <div className='grid md:grid-cols-3 md:gap-10 gap-5 justify-items-center'>
            {
                food.map((f)=><FoodCard key={f.idMeal} food={f}></FoodCard>)
            }
        </div>
        </div>
    );
};

export default Food;