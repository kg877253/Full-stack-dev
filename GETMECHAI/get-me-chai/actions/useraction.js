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
    if (!name) return { error: "Please enter your name" }
    if (name.length > 50) return { error: "Name should be less than 50 characters" }
    if (!Number.isInteger(amt) || amt < 1) {
        return { error: "Please enter a valid amount (₹1 or more)" }
    }
    if (amt > 100000) return { error: "Maximum amount is ₹1,00,000" }

    // creator exist karta hai ya nahi
    const creator = await User.findOne({ username: to_username }).select("_id").lean()
    if (!creator) return { error: "Creator not found" }

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
        .select(" -email")
        .lean()
    if (!user) {
        return { error: "User not found" }
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
export const updateprofile = async (data, oldusername) => {
    await dbConnect()
    const f = Object.fromEntries(data)

    // username badla hai to check karo ki koi aur to use nahi kar raha
    if (f.username !== oldusername) {
        const taken = await User.findOne({ username: f.username })
        if (taken) return { error: "Username already exists" }
    }

    // sirf ye fields update honge, email nahi
    const updates = {
        name: f.name,
        username: f.username,
        profilepic: f.profilepic,
        coverpic: f.coverpic,
    }
    // razorpay fields khali ho to purane wale ko mat mitao
    if (f.razorpayid) updates.razorpayid = f.razorpayid
    if (f.razorpaysecret) updates.razorpaysecret = f.razorpaysecret

    await User.findOneAndUpdate({ username: oldusername }, updates)

    // username badla to purane supporters bhi naye username pe aa jayein
    if (f.username !== oldusername) {
        await Payment.updateMany({ to_user: oldusername }, { to_user: f.username })
    }

    return { success: true }

}