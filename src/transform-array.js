const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const seq = [`--discard-next`,`--double-prev`, `--double-next`,`--discard-prev`]

    if (arr.length == 0){
        return []
    }
  
    return arr.reduce((prev, cur, indx) => {
      if (seq.includes(cur)) {
        return prev;
      }
  
      if (arr[indx - 1] == `--discard-next`) {
        return prev;
      }
  
      if (arr[indx - 1] == `--double-next`) {
        prev.push(cur, cur);
      } else {
        prev.push(cur);
      }
  
      if (arr[indx + 1] == `--discard-prev`) {
        prev.splice(prev.length - 1, 1)
      }
  
      if (arr[indx + 1] == `--double-prev`) {
        prev.push(cur)
      }
      return prev;
    },[]);
  };
