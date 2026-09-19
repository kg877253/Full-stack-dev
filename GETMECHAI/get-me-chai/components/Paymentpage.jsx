"use client"
import React from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { initiatePayment } from '@/actions/useraction'

const Paymentpage = ({ username }) => {

    const [paymentform, setPaymentform] = React.useState({
        name: "",
        amount: "",
        message: ""
    })
    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        let a= await initiatePayment(amount, username, paymentform);
        let orderId = a.orderId;
        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount , // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get me chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.BASE_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "<name>", //your customer's name
                "email": "<email>",
                "contact": "<phone>" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col items-center pt-1 px-4">
                <div className='relative bg-red-50'>
                    <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=UPlGnVkn7OinqAOVKBZ-T3zFvwvOI8h-L-dSXYsYfm0%3D&token-time=1791072000" alt="" />

                    <div className='absolute -bottom-15 right-[46%]'>
                        <img className='border border-white/40 z-10 w-30 h-30 rounded-lg' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=YKyQ4hz_aH0ks1xxmvU_PwxQyJGSimiUuGDnJc4RBsI%3D&token-time=1790985600" alt="" />
                    </div>
                </div>

                <div className="info mt-18 flex flex-col items-center gap-2 text-center">
                    <div className='text-3xl font-medium'>
                        JB2A - Jules&Ben's Animated Assets
                    </div>
                    <div className='text-sm text-white/80 font-medium'>
                        @{username}
                    </div>
                    <div className='text-gray-400'>
                        26,984 members . 114 posts . $16,460/release
                    </div>
                </div>

                <div className='flex m-20 gap-5 w-[75%]'>
                    <div className="supproter bg-slate-800 w-1/2 p-8 rounded-2xl">
                        <h2 className='text-3xl mb-4 font-semibold'>Supporters</h2>
                        {/* Show list of all Supporters as a leaderboard */}
                        <ul className='p-3'>
                            <li className='my-1'>John Doe donated $10 ""</li>
                            <li className='my-1'>Jane Smith donated $25 ""</li>
                            <li className='my-1'>Bob Johnson donated $50 "" </li>
                            <li className='my-1'>Alice Williams donated $100 ""</li>
                        </ul>
                    </div>
                    <div className="payment bg-slate-800 w-1/2 rounded-2xl p-8">
                        <h2 className='text-3xl mb-4 font-semibold'>Make a Payment</h2>

                        <form className='flex flex-col gap-4'>
                            <input onChange={handlechange} value={paymentform.name}  type="text" placeholder='Enter Name' className='bg-slate-700 p-2 rounded-md' />
                            <input onChange={handlechange} value={paymentform.amount} type="text" placeholder='Enter Amount' className='bg-slate-700 p-2 rounded-md' />
                            <input onChange={handlechange} value={paymentform.message} type="text" placeholder='Enter Message' className='bg-slate-700 p-2 rounded-md' />
                            <button className='w-10/12 mx-auto bg-gradient-to-br from-purple-700 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white py-2 px-4 rounded-md cursor-pointer'>Donate</button>
                        </form>

                        <div className="buttons mt-4 flex flex-row gap-4 justify-center">
                            <button className='bg-gradient-to-br from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white py-2 px-4 rounded-md cursor-pointer ' onClick={()=> pay(10,)}>Pay ₹10</button>
                            <button className='bg-gradient-to-br from-red-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white py-2 px-4 rounded-md cursor-pointer' onClick={()=> pay(25)}>Pay ₹25</button>
                            <button className='bg-gradient-to-br from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-4 rounded-md cursor-pointer' onClick={()=> pay(50)}>Pay ₹50</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Paymentpage
