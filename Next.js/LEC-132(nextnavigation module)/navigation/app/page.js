"use client"
import { usePathname, useParams, useRouter, useSearchParams } from "next/navigation"
import { use, useEffect } from "react"

export default function Home() {

  const pathname = usePathname() // pathname use hota hai current page ke path ko get karne ke liye
  const params = useParams() // params use hota hai dynamic route ke parameters ko get karne ke liye
  const router = useRouter() // router use hota hai navigation ke liye, jaise ki page redirect karna

  // searchParams use hota hai query parameters ko get karne ke liye
  const searchParams = useSearchParams()
  const name = searchParams.get("name") //get method use hota hai specific query parameter ko get karne ke liye
  const age = searchParams.get("age")

  useEffect(() => {
    //3 seconds ke baad page redirect hojayega "/blogpost/cpppp" page pe
    setTimeout(() => {
      router.push("/blogpost/cpppp")
    }, 3000)
  }, [router])
  
  return (
    <div>
      pathname: {pathname} <br />
      params: {JSON.stringify(params)} <br />
      searchParams: {name} <br />
      searchParams: {age} <br />
      my homepage
    </div>
  );
}
