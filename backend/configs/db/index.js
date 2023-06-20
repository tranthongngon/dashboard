const mongoose = require('mongoose');

async function connect() {
 try {
  await mongoose.connect('mongodb://127.0.0.1:27017/dashboard', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  });
  console.log('connect succsess');
 } catch (error) {
  console.log('failure');
 }
}

module.exports = {connect}