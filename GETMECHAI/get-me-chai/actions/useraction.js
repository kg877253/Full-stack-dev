"use server"

import Razorpay from "razorpay"
import dbConnect from "@/db/connect"
import Payment from "@/models/payment"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const initiatePayment = async (amount, to_username, paymentform) => {
    await dbConnect()

    if (!amount || Number(amount) < 1) {
        throw new Error("Amount kam se kam ₹1 hona chahiye")
    }

    // Razorpay amount paise mein leta hai (₹1 = 100 paise)
    const options = {
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    }

    const order = await razorpay.orders.create(options)

    // Pending state mein save — verify hone ke baad done:true hoga
    await Payment.create({
        name: paymentform.name,
        to_user: to_username,
        oid: order.id,
        amount: Number(amount),
        message: paymentform.message || "",
        done: false,
    })

    return {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        key_id: process.env.RAZORPAY_KEY_ID,
    }
}