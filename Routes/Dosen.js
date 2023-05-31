// (5) Buat router Dosen
const express = require('express')
const router = express.Router() 
const Dosen = require('../models/Dosen')

// Create 
router.post('/', async(req, res) => {
    // tampung input dosen 
    const dosenPost = new Dosen({
        nidn: req.body.nidn,
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        umur: req.body.umur
    })

// Simpan
    try {
        // simpan data 
        const dosen = await dosenPost.save()
        // response
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const dosen = await Dosen.find()
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

// Update 
router.put('/:dosenId', async(req, res) => {
    // tampung input dosen 
    const data = {
        nidn: req.body.nidn,
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        umur: req.body.umur
    }

    try {
        // update data 
        const dosen = await Dosen.updateOne({_id: req.params.dosenId}, data)
        // response
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:dosenId', async(req, res) => {
    try {
        // delete data 
        const dosen = await Dosen.deleteOne({_id: req.params.dosenId})
        // response
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router