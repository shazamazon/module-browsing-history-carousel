const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { user, item } = require('../database/database');
const app = express();
const port = 4445;


app.use(express.static('client'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/item', (req, res) => {
  item.find({ ProductId: Number(req.query.ProductId) })
    .exec()
    .then(itemObj => {
      res.status(200).send(itemObj);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
});

app.get('/user', (req, res) => {
  user.find({_id: req.query._id})
    .exec()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
});

app.post('/user', (req, res) => {
  const entry = new user({
    _id: new mongoose.Types.ObjectId(),
    AllProductIds: req.body.AllProductIds,
    itemsViewed: [req.body.itemsViewed],
  });
  entry.save()
    .then(result => {
      res.status(201).send(result._id);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err });
    });
});

app.put('/updateUser', (req, res) => {
  user.updateOne({ _id: req.body._id }, { itemsViewed: req.body.itemsViewed, AllProductIds: req.body.AllProductIds})
    .exec()
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.error(err);
    });
});



app.listen(port, () => { console.log(`we are listening from port ${port}`); });
