const {Router} = require('express')
const { newUserWallet, getUserWallet } = require('../controllers/wallet')
const router = Router();

router.post('/', newUserWallet);

router.get('/admin/wallets', getUserWallet);

module.exports = router