"use client"
import { useState, useEffect } from "react";
export default function Home() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl border-amber-50 border-2 p-3 m-2">Welcome to the Home Page <span className="border-4 p-1 border-cyan-700">{count}</span></h1>
      <button className="text-blue-300 border-2 rounded-2xl p-2 m-2 ml-90 cursor-pointer" onClick={()=> setcount(count+1)}>a +</button>
      <button className="text-blue-300 border-2 rounded-2xl p-2 m-2 ml-20 cursor-pointer" onClick={()=> setcount(count-1)}>m -</button>
    </div>
  );
}
