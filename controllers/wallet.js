const {response} = require('express')
const { validationResult } = require('express-validator');
const Wallet = require('../models/Wallet')
const CasinoWallet = require('../models/CasinoWallet')

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

const saveUserWallet = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    
    const {wallet, money } = req.body
    let user = await CasinoWallet.findOne({wallet})
    if( user ){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario ya existe'
        })
    }

    try {
        const CasinoUser = new CasinoWallet(
            {
                wallet,
                money
            }
        )
        await CasinoUser.save()
        res.json({
            message: 'User Guardado'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error al guardar el usuario'
        })
    }
}

const updateEvent = async(req, res = response)=>
{
    const eventoId = req.params.id;

    try 
    {
        const evento = await CasinoWallet.findOne(wallet);

        if (!evento)
        {
            return res.status(404).json({
                ok: false,
                msg: 'User no existente',
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid,
        };

        const eventoActualizado = await CasinoWallet.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});
        res.status(201).json({
            ok: true,
            eventoActualizado,
            msg: 'El evento se actualizó correctamente',
        });
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar evento, hable con un adminsitrador',
        });
    }

}

module.exports = {
    newUserWallet,
    getUserWallet,
    saveUserWallet,
    updateEvent
}