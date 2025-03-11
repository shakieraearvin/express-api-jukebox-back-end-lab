const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();


// CREATE - POST - /tracks
router.post('/', async (req, res) => {
    try {
        // Create a new pet with the data from req.body
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack); // 201 Created
    } catch (err) {
        res.status(500).json({ err: err.message });
        // Setup for error handling
    }
});











module.exports = router;