"use server"

import Razorpay from "razorpay"
import dbConnect from "@/db/connect"
import payment from "@/models/payment"
import user from "@/models/user"

export const initiatePayment = async (amount, to_username, paymentform) => {
    await dbConnect()

    var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

    let options={
        amount: amount,
        currency: "INR",
    }
    
}