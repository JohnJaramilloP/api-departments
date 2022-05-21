const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departmentSchema = new Schema({
    codigo: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Department', departmentSchema);