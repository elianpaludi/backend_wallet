const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    wallet:{
        type: String,
        required: true
    },
    proyect:{
        type: String,
        required: true
    },
    cryptocurrencie:{
        type: String,
        required: true
    },
    network:{
        type: String,
        required: true
    }
})

module.exports = model('User', UserSchema)