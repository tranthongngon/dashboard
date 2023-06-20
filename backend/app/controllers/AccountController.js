const Account = require('../models/account')
class AccountController {
  login(req, res) {
    const account = req.body;
    console.log('[account]:', account);
  }
  register(req, res) {
    const data = req.body;
    console.log(data);
    const account = new Account(data)
    account.save();
  }
}

module.exports = new AccountController()