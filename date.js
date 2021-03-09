//jshint esvesion:6

module.exports.getDate = function (){

const toDay = new Date();

let option = {
  weekday: "long",
  month: "long",
  day: "numeric"
}
   return toDay.toLocaleDateString("en-in",option);

}


module.exports.getDay = function (){;

const toDay = new Date();

let option = {
  weekday: "long",

}
   return toDay.toLocaleDateString("en-in",option);

}
