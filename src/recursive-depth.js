const CustomError = require("../extensions/custom-error");
let maxDepth = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        maxDepth = this.calculateDepth(arr[i], depth + 1);
      } 
    }
    maxDepth = (maxDepth > depth) ? maxDepth : depth;
  
    let result = maxDepth;
    maxDepth = 0;
    return result;
    }
  };