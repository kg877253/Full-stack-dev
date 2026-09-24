"use client"
import React from 'react'
import { usePathname, useParams, useRouter, useSearchParams } from 'next/navigation'

const Blog = () => {
    const pathname = usePathname()
    const params = useParams()
    const searchParams = useSearchParams()
  return (
    <div>
        pathname: {pathname} <br />
        params: {JSON.stringify(params)} <br />
        searchParams: {searchParams.get("name")} <br />
        searchParams: {searchParams.get("age")} <br />

      Blog Post

    </div>
  )
}

export default Blog
