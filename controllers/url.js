const shortid = require("shortid");
const URL = require('../models/urlModel');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'URL is required'})
    const shortID = shortid;
    await URL.create({
        shortID :shortID,
        redirectUrl: body.url,
        visitHistory:[]
    }
    ) 
return res.json({id: shortID});

}

module.exports = {handleGenerateNewShortURL}