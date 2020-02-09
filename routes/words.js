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

router.get("/:tableName", async (req, res) => {
    try {
        const words = await Words.findAll(req.params.tableName);
        if (!words) {
            res.status(404).json({
                message: "Could not find that tableName"
            })
        }
        else {
            res.status(200).json(words)
        }
    } catch {
        res.status(500).json({error})
    }
})


// POST 
router.post('/:tableName', async (req, res) => {
    const word = req.body
    const tableName = req.params.tableName

    try {
        const newWord = await Words.add(word, tableName) 
        res.status(201).json(newWord) 
    }
    catch {
        res.status(500).json({error})
    }
})

// UPDATE 
router.put('/:tableName/:id', async (req, res) => {
    const tableName = req.params.tableName;
    const id = req.params.id 
    const changes = req.body
    try {
    const findId = await Words.findById(tableName, id)

    if(!findId) {
    res.status(404).json({
        message: "ID could not be found"
    })
    } else {
    const updatedWord = await Words.update(changes, id, tableName)
    res.status(200).json(updatedWord)
    }
    } catch (error) {
    res.status(500).json({error})
    }
})

// DELETE 
router.get('/:tableName/:id', async (req, res) => {
    const tableName = req.params.tableName;
    const id = req.params.id 
    try {
    const findId = await Words.findById(tableName, id)
    if(!findId) {
        res.status(404).json({
        message: "ID could not be found"
    })
    } else {
        res.status(200).json({message: 
        "Successfully deleted!"}) 
    }
} catch {
    res.status(500).json({error})
}
})
