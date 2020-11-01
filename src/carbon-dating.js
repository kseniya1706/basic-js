const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || !sampleActivity) {
    return false;
  }
  let sampNumAct = Number(sampleActivity);
  if (isNaN(sampNumAct) || typeof sampNumAct != 'number' || sampNumAct < 0 || sampNumAct > MODERN_ACTIVITY) {
    return false;
  }
  else {
    const time = Math.ceil(HALF_LIFE_PERIOD * MODERN_ACTIVITY / sampleActivity);
  return time;
    
  }
};
