'use client'
import { useEffect, useState } from "react";
import Loading from "./loading";
import HomeProduct from "./components/HomeProduct";


export default function Home() {
  const [items,setItems] = useState(null)
  useEffect(()=>{
    const fetchItem = async ()=>{
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      const data = await res.json()
      setItems(data.meals)
    }
    fetchItem()
  },[])

  if(!items){
    return <Loading></Loading>
  }
  return (
    <div>
      this is home page
      <div className="grid grid-cols-3 gap-5">
        {
        items.slice(0,6).map((food)=><HomeProduct key={food.idMeal} food={food}></HomeProduct>)
      }
      </div>
      <div className="text-center mt-5 ">
        <button className="px-6 cursor-pointer py-1 hover:bg-blue-800 rounded bg-blue-600 text-white">See More</button>
      </div>
    </div>
  );
}
