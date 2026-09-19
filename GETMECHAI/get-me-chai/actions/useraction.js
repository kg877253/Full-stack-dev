"use server"

import Razorpay from "razorpay"
import dbConnect from "@/db/connect"
import Payment from "@/models/payment"
import User from "@/models/user"

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
})

// Razorpay order create, payment record create, return order details to client
export const initiatePayment = async (amount, to_username, paymentform) => {
    await dbConnect()

    if (!amount || Number(amount) < 1) {
        throw new Error("Amount kam se kam ₹1 hona chahiye")
    }

    const options = {
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    }

    const order = await razorpay.orders.create(options)

    await Payment.create({
        name: paymentform.name,
        to_user: to_username,
        oid: order.id,
        amount: Number(amount),
        message: paymentform.message || "",
        done: false,
    })

    return {
        orderId: String(order.id),
        amount: Number(order.amount),
        currency: String(order.currency),
        key_id: String(process.env.NEXT_PUBLIC_KEY_ID),
    }
}


export const fetchuser = async (username) => {
    // fetch user details from database
    await dbConnect()
    const user = await User.findOne({ username: username }).lean()

    if (!user) {
        throw new Error("User not found")
    }

    return user
}

export const fetchpayments = async (username) => {
    // fetch payments for a user from database
    await dbConnect()

    const payments = await Payment.find({
        to_user: username,
        done: true
    })
    .sort({ amount: -1 })
    .lean()

    return payments
}