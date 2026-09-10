const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visithistory: [{
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
},
    { timestamps: true }
);

urlSchema.index({ redirectUrl: 1, createdBy: 1 }, { unique: true });

const URL = mongoose.model('url', urlSchema);

module.exports = URL;