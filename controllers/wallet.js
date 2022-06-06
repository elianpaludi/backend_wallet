const {response} = require('express')
const { validationResult } = require('express-validator');
const Wallet = require('../models/Wallet')

const newUserWallet = async (req, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {wallet, proyect, cryptocurrencie, network} = req.body

    try {
        const newWallet = new Wallet(
            {
                wallet,
                proyect,
                cryptocurrencie,
                network
            }
        )

        await newWallet.save()
        res.json({
            message: 'Wallet Guardado'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error al guardar el wallet'
        })
    }
}

const getUserWallet = async (req, res) => {
    const wallets = await Wallet.find();
    return res.json({
        ok:true,
        wallets,
    })
}

module.exports = {
    newUserWallet,
    getUserWallet
}