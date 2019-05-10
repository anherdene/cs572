var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const collection = req.dbcollection;
  collection.createIndex({ coord: '2d' });
  collection.find({ coord: { $near: [41.017654, -91.9665342] } }).limit(3).toArray((err, doc) => {
    res.json(doc);
  });

});
router.get('/:q',async function(req, res, next) {

  let aggregate = [];
  switch (req.params.q) {
    case '1':
      aggregate = [
        {$match:{"state": "WA"}},
        {$group:{"_id" : "$state","zipcodes" : { $addToSet : "$_id" }}}
      ];
      break;
    case '2':
      aggregate = [
        {$match:{"pop":{$lt:5000}}},
        {$project: {"_id" :1}}
      ];
      break;
    case '3':
      aggregate = [
        {$group:{'_id':{'city': '$city', 'state':'$state'} ,'zips':{$sum : 1}}},
        {$match:{'zips' : {$gte:2}}},
        {$project:{'city': '$_id.city', 'state': '$_id.state', _id:0, 'zips':'$zips'}},
        {$sort: {'city':1, 'state' :1}}
      ];
      break;
    case '4':
      aggregate = [
        {$group:{'_id':{'city':'$city', 'state':'$state'}, 'pop':{$sum : '$pop'}}},
        {$sort: {'pop':1}},
        {$group:{'_id' : '$_id.state', 'pop':{$first:'$pop'}, 'city' : {$first: '$_id.city'}}}
      ];
      break;
  }
  req.aggregate = aggregate;
  next()
});
router.use(async function(req, res, next) {
  if (req.body) {
    console.log(req.dbselect);
    let collection = await req.dbcollection.aggregate(req.aggregate).toArray()
    let resbody = {};
    resbody.count = collection.length;
    resbody.data= collection;
    res.json(resbody);
  }
});


module.exports = router;
