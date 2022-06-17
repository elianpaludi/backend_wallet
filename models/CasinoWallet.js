const {Schema, model} = require('mongoose')

const UserWalletSchema = new Schema({
    wallet:{
        type: String,
        required: true
    },
    money:{
        type: Number,
        required: false
    },
})

module.exports = model('UserWallet', UserWalletSchema)
