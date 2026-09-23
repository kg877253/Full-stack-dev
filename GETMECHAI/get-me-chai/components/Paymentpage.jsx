"use client"

import React from 'react'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { initiatePayment, fetchuser, fetchpayments } from '@/actions/useraction'
import { toast, Bounce } from 'react-toastify'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Paymentpage = ({ username }) => {
    const SearchParams = useSearchParams()
    const router = useRouter()

    const [paymentform, setPaymentform] = useState({
        name: "",
        amount: "",
        message: ""
    })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        getuser();

    }, [])

    useEffect(() => {
        if (SearchParams.get("paymentdone") === "true") {
            toast.success('Thank you for your support!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)   // reload page to show new supporter in list
    }, [])

    const getuser = async () => {
        try {
            const user = await fetchuser(username);
            setcurrentuser(user);
            const payments = await fetchpayments(username);
            setpayments(payments);
            console.log(user, payments)
        } catch (err) {
            console.error("User load nahi hua:", err)
        }
    }

    const handlechange = (e) => {
        setError("")   // type karte hi error hat jaye
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        setError("")

        // client-side quick checks (server bhi dobara check karta hai)
        if (!paymentform.name.trim()) {
            setError("Please enter your name")
            return
        }
        const amt = Number(amount)
        if (!Number.isInteger(amt) || amt < 1) {
            setError("Please enter a valid amount (₹1 or more)")
            return
        }

        try {
            const a = await initiatePayment(amt, username, paymentform)

            // server-side validation error
            if (a.error) {
                setError(a.error)
                return
            }

            const options = {
                key: a.key_id,
                amount: a.amount,
                currency: a.currency,
                name: "Get me chai",
                description: "Support the creator",
                order_id: a.orderId,
                callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/razorpay`,
                prefill: {
                    name: paymentform.name,
                },
                notes: {
                    address: "Get-me-chai"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();

        } catch (err) {
            console.error("Payment failed:", err);
            setError("Payment start nahi ho paayi. Dobara try karo.")
        }
    }

    return (
        <><Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="afterInteractive"
        />
            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col items-center pt-1 px-4">
                <div className='relative bg-red-50'>
                    <img src={currentuser.coverpic} alt="" />

                    <div className='absolute -bottom-15 right-[46%]'>
                        <img className='border-2 border-black/40 object-cover z-10 w-30 h-30 rounded-lg' src={currentuser.profilepic} alt="" />
                    </div>
                </div>

                <div className="info mt-18 flex flex-col items-center gap-2 text-center">
                    <div className='text-3xl font-medium'>
                        {currentuser.name?.toUpperCase()}--Animation
                    </div>
                    <div className='text-sm text-white/80 font-medium'>
                        @{username}
                    </div>
                    <div className='text-gray-400'>
                        {payments.length} supporters | Total ₹{payments.reduce((acc, p) => acc + p.amount, 0)} raised
                    </div>
                </div>

                <div className='flex m-20 gap-5 w-[75%] max-h-[400px]'>
                    <div className="supproter bg-slate-800 w-1/2 p-8 rounded-2xl ">
                        <h2 className='text-3xl mb-4 font-semibold'>Supporters</h2>
                        {/* Supporters leaderboard (amount ke hisaab se sorted) */}
                        <ul className='p-3 overflow-auto max-h-[300px]'>
                            {payments.length === 0 && (
                                <li className='text-gray-400'>There are no supporters yet. Be the first one! ☕</li>
                            )}
                            {payments.map((p) => (
                                <li key={p._id} className='my-2 flex gap-4 items-center '>
                                    <img className='w-7 h-7 rounded-full' src="./avatar.gif" alt="avatar" />
                                    {p.name} donated ₹{p.amount}
                                    {p.message && <> with a message "{p.message}"</>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="payment bg-slate-800 w-1/2 rounded-2xl p-8">
                        <h2 className='text-3xl mb-4 font-semibold'>Make a Payment</h2>

                        <form className='flex flex-col gap-4'>
                            <input
                                name='name'
                                onChange={handlechange}
                                value={paymentform.name}
                                type="text"
                                placeholder='Enter Name'
                                className={`bg-slate-700 p-2 rounded-md ${error.includes("Naam") ? "border border-red-500" : ""}`}
                            />
                            <input
                                name='amount'
                                onChange={handlechange}
                                value={paymentform.amount}
                                type="number"
                                min="1"
                                placeholder='Enter Amount'
                                className='bg-slate-700 p-2 rounded-md'
                            />
                            <input
                                name='message'
                                onChange={handlechange}
                                value={paymentform.message}
                                type="text"
                                placeholder='Enter Message'
                                className='bg-slate-700 p-2 rounded-md'
                            />

                            {error && <p className='text-red-400 text-sm'>{error}</p>}

                            <button
                                type="button"
                                className='w-10/12 mx-auto bg-gradient-to-br from-purple-700 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white py-2 px-4 rounded-md cursor-pointer'
                                onClick={() => pay(paymentform.amount)}
                            >
                                Donate
                            </button>
                        </form>

                        <div className="buttons mt-4 flex flex-row gap-4 justify-center">
                            <button
                                type="button"
                                className='bg-gradient-to-br from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white py-2 px-4 rounded-md cursor-pointer'
                                onClick={() => pay(10)}
                            >
                                Pay ₹10
                            </button>

                            <button
                                type="button"
                                className='bg-gradient-to-br from-red-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white py-2 px-4 rounded-md cursor-pointer'
                                onClick={() => pay(25)}
                            >
                                Pay ₹25
                            </button>

                            <button
                                type="button"
                                className='bg-gradient-to-br from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-4 rounded-md cursor-pointer'
                                onClick={() => pay(50)}
                            >
                                Pay ₹50
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage