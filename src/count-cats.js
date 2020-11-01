const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(subArr => {
    subArr.forEach(item => {
      if (item === "^^"){
        count++;
      }
    })
  })
  return count;
};
