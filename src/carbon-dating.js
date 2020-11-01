const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  }
  const sampNumAct = Number(sampleActivity);
  if (isNaN(sampNumAct)) {
    return false;
  }
  else {
    const time = Math.ceil((Math.log(MODERN_ACTIVITY/sampNumAct)*1000)/(693/HALF_LIFE_PERIOD));
  return time;
    
  }
};
