
var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.delete('/days/:id', function(req,res,next){});

router.get('/days/:id', function(req,res,next){});

router.get('/api/days', function(req,res,next){
  Day.findAll()
  .then(function(days){
    // console.log(days);
      res.json(days);
  })

});

router.post('/days', function(req,res,next){
  // res.json('you created a day!!');
})

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/api/hotels', function(req,res,next){
  Hotel.findAll()
  .then(function(hotels){
    res.json(hotels);
  })
});

router.get('/api/restaurants', function(req,res,next){
  Restaurant.findAll()
  .then(function(restaurants){
    res.json(restaurants);
  })
});

router.get('/api/activities', function(req,res,next){
  Activity.findAll()
  .then(function(activities){
    res.json(activities);
  })
});

// // $(function () {
//     $.get('/api/restaurants')
//     .then(function (restaurants) {
//       restaurants.forEach(function (restaurant) {
//         console.log(restaurant.name);
//       });
//     })
//     .catch(console.error.bind(console));
// // })



module.exports = router;
