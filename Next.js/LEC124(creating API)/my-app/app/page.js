"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false)

  const handleclick = async () => {
    let data = {
      name: "sachin",
      age: 23
    }

    let res = await fetch("/api/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    let a = await res.json()
    console.log(a)
  }

  const handleclick2 = async () => {
    setLoading(true)
    let res = await fetch("/api/add", { method: "GET" })
    let a = await res.json()
    console.log(a)
    setLoading(false)
    setData(a.message)
  }

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <button onClick={handleclick}>Click me2</button>
      <br />
      <button onClick={handleclick2} disabled={loading}>
        {loading ? "Loading..." : "Click me"}
      </button>
      {data && <p>{data}</p>}
    </div>
  );
}
