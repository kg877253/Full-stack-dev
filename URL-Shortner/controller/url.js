const { nanoid } = require('nanoid');
const URL = require('../models/url');

//Function to generate a new short URL
async function gennewshorturl(req, res) {
    const shortId = nanoid(8);
    const body = req.body;
    if (await URL.findOne({ redirectUrl: body.url })) {
        return res.status(400).json({ error: 'URL already exists' });
    }
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visithistory: []
    })

    return res.status(201).json({ shortId: shortId });
}

//Function to get analytics for a short URL
async function getanalytics(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId: shortId });
    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }
    return res.status(200).json({ totalclicks: entry.visithistory.length, visithistory: entry.visithistory });
}

//Function to redirect to the original URL and record the visit
async function gotoshorturl(req, res) {

    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId: shortId }, { $push: { visithistory: { timestamp: new Date() } } }, { returnDocument: 'after' });
    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }
    // is se original URL pe redirect karenge
    return res.redirect(301, entry.redirectUrl);
}

module.exports = { gennewshorturl, getanalytics, gotoshorturl };