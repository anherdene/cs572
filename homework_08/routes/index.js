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

  let dbselect = {};
  dbselect.query = {}
  dbselect.project = {}
  dbselect.option = {}
  switch (req.params.q) {
    case '1':
      break;
    case '2':
      dbselect.project = {restaurant_id:1, name:1,cuisine:1, district:1};
      break;
    case '3':
      dbselect.project = {restaurant_id:1, name:1,cuisine:1, district:1,_id:0};
      break;
    case '4':
      dbselect.project = {restaurant_id:1, name:1,cuisine:1, district:1,_id:0,'address.zipcode':1};
      break;
    case '5':
      dbselect.query = {district : 'Bronx'};
      break;
    case '6':
      dbselect.query = {district : 'Bronx'};
      dbselect.option = {limit : 5};
      break;
    case '7':
      dbselect.query = {district : 'Bronx'};
      dbselect.option = {limit : 5,skip:5};
      break;
    case '8':
      dbselect.query = {'address.coord':{$lt :-95.754168}};
      break;
    case '9':
      dbselect.query = {cuisine:{$ne:'American '}, 'grades.score':{$gt:70}, 'address.coord':{$lt :-65.754168}};
      break;
    case '10':
      dbselect.query = {name:{$regex:/^Wil.*/}};
      dbselect.project = {_id:0, address:0, grades:0}
      break;
    case '11':
      dbselect.query = {name:{$regex:/ces$/}};
      dbselect.project = {_id:0, address:0, grades:0}
      break;
    case '12':
      dbselect.query = {name:{$regex:/Reg/}};
      dbselect.project = {_id:0, address:0, grades:0}
      break;
    case '13':
      dbselect.query = {name:{$regex:/Reg/}};
      break;
    case '14':
      dbselect.query = {district:{$in:['Bronx', 'Brooklyn', 'Queens', 'Staten Island']}};
      dbselect.project = {_id:0, address:0, grades:0};
      break;
    case '15':
      dbselect.query = {district:{$nin:['Bronx', 'Brooklyn', 'Queens', 'Staten Island']}};
      dbselect.project = {_id:0, address:0, grades:0};
      break;
    case '16':
      dbselect.query = {'grades.score':{$lt:10}};
      dbselect.project = {_id:0, address:0, grades:0};
      break;
    case '17':
      dbselect.query = {'address.coord.1': {$gt:42, $lt:52}};
      dbselect.project = {_id:0, grades:0, district:0, cuisine:0};
      break;
    case '18':
      dbselect.option = {sort:[{name:1}]};
      break;
    case '19':
      dbselect.option = {sort:[{name:-1}]};
      break;
    case '20':
      dbselect.option = {sort:[{name:1},{cuisine:1}]};
      break;
    case '21':
      dbselect.query = {'address.coord':{$type:"double"}};
      break;
    case '22':
      dbselect.query = {name:{$regex : /^Mad.*/}};
      dbselect.project = {name:1, district:1, 'address.coord':1, cuisine:1, _id:0};
      break;
  }
  req.dbselect = dbselect;
  next()
});
router.use(async function(req, res, next) {
  if (req.body) {
    console.log(req.dbselect);
    let collection = await req.dbcollection.find(req.dbselect.query,req.dbselect.option).project(req.dbselect.project).toArray()
    let resbody = {};
    resbody.count = collection.length;
    resbody.data= collection;
    res.json(resbody);
  }
});


module.exports = router;
