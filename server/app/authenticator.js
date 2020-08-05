const mongoose = require('mongoose');

const clientModel = require('./mongodb/models/client'),
	tokenModel = require('./mongodb/models/token'),
	userModel = require('./mongodb/models/user');

const registerUser = (req, res) => {
  console.log(req);
  return ({foo: "bar"})
}

module.exports = {

}
