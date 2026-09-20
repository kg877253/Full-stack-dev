"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { fetchuser } from '@/actions/useraction'

const Dashboard = () => {
    const inputClass = "w-full bg-[#1a2333] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 placeholder:text-gray-500 transition"
    const labelClass = "block text-sm text-gray-300 mb-1.5"

    const { data: session, status, update } = useSession()
    const router = useRouter()

    const [form, setform] = useState({
        name: "",
        email: "",
        username: "",
        profilepic: "",
        coverpic: "",
        razorpayid: "",
        razorpaysecret: "",
    })

    useEffect(() => {
        getuser()
        if (status === "unauthenticated") {
            router.push('/login')
        }
    }, [status, router])
    
    const getuser = async () => {
        let user = await fetchuser(session.user.username)
        setform(user)
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e)=>{
        update();
        let res = await updateprofile(e,session?.user?.username)
        alert ("Profile updated successfully")
    }


    if (status === "loading") return <p className="text-white text-center mt-20">Loading...</p>

    return (
        <div className="flex justify-center px-4 py-12 bg-[#0a0e17] min-h-screen text-white">
            <form className="w-full max-w-xl bg-[#111826] border border-white/10 rounded-2xl p-8 shadow-lg" action={handlesubmit}>
                <h2 className="text-2xl font-bold mb-8 text-center">Welcome to your Dashboard</h2>

                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center border border-white/10 overflow-hidden">
                        <span className="text-2xl">👤</span>
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className={labelClass}>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handlechange} placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handlechange} placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Username</label>
                        <input type="text" name="username" value={form.username} onChange={handlechange} placeholder="@username" className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Profile Picture URL</label>
                        <input type="text" name="profilepic" value={form.profilepic} onChange={handlechange} placeholder="https://..." className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Cover Picture URL</label>
                        <input type="text" name="coverpic" value={form.coverpic} onChange={handlechange} placeholder="https://..." className={inputClass} />
                    </div>

                    <div className="pt-2 border-t border-white/10">
                        <p className="text-sm font-semibold text-gray-300 mb-3">Razorpay Credentials</p>
                        <div>
                            <label className={labelClass}>Key ID</label>
                            <input type="text" name="razorpayid" value={form.razorpayid} onChange={handlechange} placeholder="rzp_test_xxxx" className={inputClass} />
                        </div>
                        <div className="h-4"></div>
                        <div>
                            <label className={labelClass}>Key Secret</label>
                            <input type="password" name="razorpaysecret" value={form.razorpaysecret} onChange={handlechange} placeholder="••••••••" className={inputClass} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition py-2.5 rounded-lg font-semibold">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Dashboard