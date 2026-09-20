"use server"

import Razorpay from "razorpay"
import dbConnect from "@/db/connect"
import Payment from "@/models/payment"
import User from "@/models/user"

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
})

// Order create + payment record create + order details client ko return
// Errors throw nahi karte, return karte hain (production me thrown error ka message client tak nahi pahunchta)
export const initiatePayment = async (amount, to_username, paymentform) => {
    await dbConnect()

    const name = (paymentform?.name || "").trim()
    const message = (paymentform?.message || "").trim()
    const amt = Number(amount)

    //  validation (order banane se PEHLE) 
    if (message.length > 200) return { error: "Message 200 characters tak hi allowed hai" }

    // creator exist karta hai ya nahi
    const creator = await User.findOne({ username: to_username }).select("_id").lean()
    if (!creator) return { error: "Creator nahi mila" }

    // ab Razorpay order + DB record 
    const order = await razorpay.orders.create({
        amount: amt * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    })

    await Payment.create({
        name,
        to_user: to_username,
        oid: order.id,
        amount: amt,
        message,
        done: false,
    })

    return {
        orderId: String(order.id),
        amount: Number(order.amount),
        currency: String(order.currency),
        key_id: String(process.env.NEXT_PUBLIC_KEY_ID),
    }
}


// Public page ke liye: sirf safe fields (email, razorpay keys kabhi nahi)
export const fetchuser = async (username) => {
    await dbConnect()

    const user = await User.findOne({ username })
        .select("-razorpaysecret -razorpayid -email")
        .lean()

    if (!user) {
        throw new Error("User not found")
    }

    return JSON.parse(JSON.stringify(user))
}


// Supporters list: sirf successful payments, sirf zaroori fields
export const fetchpayments = async (username) => {
    await dbConnect()

    const payments = await Payment.find({ to_user: username, done: true })
        .select("name amount message createdAt")
        .sort({ amount: -1 })
        .lean()

    return JSON.parse(JSON.stringify(payments))
}