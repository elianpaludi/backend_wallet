const {Router} = require('express')
const { newUserWallet, getUserWallet, saveUserWallet, updateEvent } = require('../controllers/wallet')
const router = Router();

router.post('/', newUserWallet);
router.post('/save/wallets', saveUserWallet); //Almacena la wallet de un usuario
router.put('/update/wallets/:wallet', updateEvent)
router.get('/admin/wallets', getUserWallet);

module.exports = router