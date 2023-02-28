const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  var today = new Date();


  // var day = "";

  //One way to do it
  // if (today.getDay() === 0) {
    // day = "Sunday";
  // } else if (today.getDay() === 1) {
    // day = "Monday";
  // } else if (today.getDay() === 2) {
    // day = "Tuesday";
  // } else if (today.getDay() === 3) {
    // day = "Wednesday";
  // } else if (today.getDay() === 4) {
    // day = "Thursday";
  // } else if (today.getDay() === 5) {
    // day = "Friday";
  // } else {
    // day = "Saturday";
  // }

  // Another way to do it
  // switch (today.getDay()) {
    // case 0:
      // day = "Sunday";
      // break;
    // case 1:
      // day = "Monday";
      // break;
    // case 2:
      // day = "Tuesday";
      // break;
    // case 3:
      // day = "Wednesday";
      // break;
    // case 4:
      // day = "Thursday";
      // break;
    // case 5:
      // day = "Friday";
      // break;
    // case 6:
      // day = "Saturday";
      // break;
    // default:
    // (Coment)In most cases deafault should never be triggered, espesially here, because there is no 8th day of the week.
    // (Coment)But just in case we add smth here.
    // console.log("Error: current day is equal to: " + today.getDay());
  // }

  res.render("list", {
    kindOfDay: day
  });

});


app.listen(3000, () => {
  console.log("Server is running");
});
