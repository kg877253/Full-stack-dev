import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import Payment from "@/models/payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import dbConnect from "@/db/connect";

export const POST = async (req) => {
    await dbConnect();
    let body = await req.formData();
    body = Object.fromEntries(body);

    //check if razorpayorderid is present on the server
    let payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
        return NextResponse.json(
            { error: "Payment record not found" },
            { status: 404 }
        );
    }

    let isValid = validatePaymentVerification({
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
        signature: body.razorpay_signature,
    },
        body.razorpay_signature, process.env.KEY_SECRET);

    if (isValid) {
        // update payment record
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, {
            razorpayPaymentId: body.razorpay_payment_id,
            done: true,
        },{ new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/${payment.to_user}?paymentdone=true`);
    }
    else {
        return NextResponse.json({
            success: false,
            message: "Payment verification failedddddd",
        }, { status: 400 });
    }
}
