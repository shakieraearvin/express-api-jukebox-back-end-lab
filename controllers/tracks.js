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
// READ - GET - /tracks
router.get('/', async (req, res) => {
    try {
        //throw new Error('This is an error message') << will test the error
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);
      } catch (err) {
        res.status(500).json({ err: err.message }); // 500 Internal Server Error
      };
});

// READ - GET - /tracks/:trackId
router.get('/:trackId', async (req, res) => {
    //res.json({ message: `Show route with the param ${req.params.trackId}` }); test the route works
    try {
        const foundTrack = await Track.findById(req.params.trackId);
        if (!foundTrack) { // error handling for a track is not found 
          res.status(404);
          throw new Error('Track not found.');
        }
        res.status(200).json(foundTrack);
      } catch (err) {
        if (res.statusCode === 404) {
          res.json({ err: err.message });
        } else {
          // Add else statement to handle all other errors
          res.status(500).json({ err: err.message });
        }
      }
  });
  // UPDATE - PUT - /tracks/trackId

router.put('/:trackId', async (req, res) => {
    try {
      const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body); // first param is finding the track, second param is updating the form
  
      if (!updatedTrack) {
        res.status(404)
        throw new Error('Track not found!');
      }
      res.status(200).json(updatedTrack);
    } catch (err) {
      if (res.statusCode === 404) {
        res.json({ err: err.message });
      } else {
        res.status(500).json({ err: err.message });
      }
    }
  });

// DELETE - DELETE - /tracks/:trackId
router.delete('/:trackId', async (req, res) => {
    try {
      const deleteTrack = await Track.findByIdAndDelete(req.params.trackId);
  
      if (!deleteTrack) {
        res.status(404)
        throw new Error('Track not found!');
      }
  
      res.status(200).json(deleteTrack);
    } catch (err) {
      if (res.statusCode === 404) {
        res.json({ err: err.message });
      } else {
        res.status(500).json({ err: err.message });
      }
    }
  });










module.exports = router;