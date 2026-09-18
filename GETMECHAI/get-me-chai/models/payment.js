import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "User",
        required: true
    },
    userto : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    oid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    message : {
        type: String,
    },
    createdat : {
        type: Date,
        default: Date.now
    },
    updatedat :{
        type: Date,
        default: Date.now
    },
    done:{
        type: Boolean,  
        default: false
    }
});

export default mongoose.model("Payment", PaymentSchema);