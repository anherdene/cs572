var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  let collection = req.dbcollection.find({}).toArray();
  collection.then(data => res.json(data));
});
router.post('/search/:q', function (req, res, next) {
  if (req.params.q) {
    let doc = req.mongodb.findOne({ 'lecture': req.params.q });
    doc.then((data) => res.json(data));
  }
});
router.post('/', function (req, res) {
  if (req.body) {
    req.mongodb.insertOne(req.body);
    let collection = req.mongodb.find({}).toArray();
    collection.then(data => res.json(data));
  }
})
router.put('/', function (req, res, next) {
  console.log(req.body);
  if (req.body) {
    req.mongodb.save(req.body)
    let collection = req.mongodb.find({}).toArray();
    collection.then(data => res.json(data));
  }
});

router.delete('/delete/:id', function (req, res, next) {
  if (req.params.id) {
    req.mongodb.remove({ "_id": req.params.id });
    let collection = req.mongodb.find({}).toArray();
    collection.then(data => res.json(data));
  }
})
module.exports = router;