const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var result = 0;

  if(sampleActivity == undefined || typeof sampleActivity !== "string") {
    return false;
  }
  const coff = 0.693;
  const k = coff/HALF_LIFE_PERIOD;
  var number = parseFloat(sampleActivity)
  if (isNaN(number)){
    return false
  }
  if(number < 1 || number > 15){
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY/number))/k);
};
