'use strict';
/* global $ tripModule */

$(tripModule.load);
// console.log('hi');
//   $.get('/api/restaurants')
//     .then(function (restaurants) {
//       restaurants.forEach(function (restaurant) {
//         console.log(restaurant.name);
//       });
//     })
//     .catch(console.error.bind(console));



// $(function (){
//      var htmlString = "<option> test </option>"
//         $('#hotel-choices').append(htmlString);
        
//     // $.ajax({
//     //     method: 'GET'
//     //     url: 'api/hotels'
//     // })
//     // .then(function(responseData){
//     //    
//     // })
// })

// $.ajax({
// method: 'GET',
// url: '/days'
// })
// .then(function (data) { 
 
//     console.log( data); 
// })
// .catch(console.error.bind(console));
//  var Day = require('./day.js');



$.get('/api/days')
.then(function(days){
    // console.log(days);
})


$.get('/api/hotels')
.then(function (hotels) {
  hotels.forEach(function(hotels){
    // console.log(hotels.name);
    var htmlString = "<option> "+ hotels.name +" </option>"
    $('#hotel-choices').append(htmlString);
  });
})
.catch( console.error.bind(console) );

$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    var htmlString = "<option> "+ restaurant.name +" </option>"
    $('#restaurant-choices').append(htmlString);
  });
})
.catch( console.error.bind(console) );

$.get('/api/activities')
.then(function (activities) {
  activities.forEach(function(activity){
    var htmlString = "<option> "+ activity.name +" </option>"
    $('#activity-choices').append(htmlString);
  });
})
.catch( console.error.bind(console) );


// should log "GET response data: You GOT all the days"



