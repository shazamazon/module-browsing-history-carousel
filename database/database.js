const mongoose = require('mongoose');
const { uri } = require('./config.js');

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
  console.log('database connected!');
});

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  AllProductIds: Array,
  itemsViewed: [{ 
    ItemName: String,
    Photo: String,
    ProductId: Number
  }],
  name: String
}, { collection: 'user-data' });

const user = connection.model('user', userSchema);

const itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProductId: Number,
  ItemName: String,
  Photo: String
}, { collection: 'item-data' });

const item = connection.model('item', itemSchema);

module.exports = { user, item };
