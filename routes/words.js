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
        res.status(500).json({error})
    }
})

// GET ALL 


// POST 
router.post('/:tableName', async (req, res) => {
    try {
        const word = req.body
        const tableName = req.params.tableName
        const newWord = await Words.add(word, tableName) 
        res.status(201).json(newWord) 
    }
    catch {
        res.status(500).json({error})
    }
})

// UPDATE 


// DELETE 

