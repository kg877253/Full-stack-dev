"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <><div className="flex flex-col gap-5 w-1/4 m-0-auto mt-10 p-5 border-2 border-gray-300 rounded-xl mx-auto">

      <br />
      <span>Not signed in</span>
      <br />
      <button className="bg-blue-200 text-blue-800 hover:bg-blue-300 rounded-2xl p-2" onClick={() => signIn("github")}>Sign in with github</button>
      <br />
      <button className="bg-green-200 text-green-800 hover:bg-green-300 rounded-2xl p-2" onClick={() => signIn("google")}>Sign in with google</button>
    </div>
    </>
  )
}