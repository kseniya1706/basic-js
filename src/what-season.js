const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date.getMonth()) {
    throw 'Error';
  }
  const month = date.getMonth();
  
  if (month >= 8 && month <= 10){
    return "fall";
  } else {
    if (month >= 2 && month <= 4) {
      return "spring";
    } else {
      if (month >= 5 && month <= 7) {
        return "summer";
      } else
      {
        return "winter";
      }
    }
  }
};
