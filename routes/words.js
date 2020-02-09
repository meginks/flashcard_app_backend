const express = require('express');
const router = express.Router(); 

const Words = require('../models/word_models')


// GET By ID 
router.get('/:tableName/:id', async (req, res) => {
    try {
        const word = await Words.findById(req.params.tableName, req.params.id) 
        if(!word){
        res.status(404).json({
            message: "The ID or tableName could not be found"
            })
        } else {
            res.status(200).json(word)
        }
    }
    catch {
        res.status(500).json({message: 'There was an error.'})
    }
})

// GET ALL 


// POST 


// UPDATE 


// DELETE 

