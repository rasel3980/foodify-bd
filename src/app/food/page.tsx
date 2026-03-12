'use client';

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import FoodCard from '@/app/components/FoodCard';
import Loading from '../loading';

interface FoodItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  [key: string]: any; 
}

const Food: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = query
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
          : 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

        const response = await fetch(url);
        const data = await response.json();
      
        setFoods(data.meals || []); 
      } catch (error) {
        console.error("Fetching error:", error);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search); 
    setSearch('');   
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl pb-6">
        Your Favourite Food
      </h1>

      <form onSubmit={handleSubmit} className="text-center pb-5">
        <input
          type="search"
          placeholder="Search here"
          value={search}
          onChange={handleInputChange}
          className="border-2 rounded md:w-1/3 w-1/2 px-3"
        />
        <input
          type="submit"
          value="Search"
          className="border-2 rounded cursor-pointer bg-blue-500 px-3 -ml-12"
        />
      </form>

      {loading && <Loading />}
      
      {!loading && foods.length === 0 && (
        <p className="text-center text-red-600 font-semibold">
          No Food found
        </p>
      )}

      <div className="grid md:grid-cols-3 md:gap-10 gap-5 justify-items-center">
        {foods.map((food) => (
          <FoodCard key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Food;