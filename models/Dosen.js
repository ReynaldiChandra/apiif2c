// (4) Buat Schema Dosen
const mongoose = require('mongoose')

const DosenSchema = mongoose.Schema({
    // Buat Dosen data
    nidn: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis_kelamin: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        required: false,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', DosenSchema)