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
// READ - GET - /pets
router.get('/', async (req, res) => {
    try {
        //throw new Error('This is an error message') << will test the error
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);
      } catch (err) {
        res.status(500).json({ err: err.message }); // 500 Internal Server Error
      };
});












module.exports = router;