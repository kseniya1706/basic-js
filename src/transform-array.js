const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const res = [];
  const indexDiscardNext = arr.indexOf('--discard-next');
  const indexDiscardPrev = arr.indexOf('--discard-prev');
  const indexDoubleNext = arr.indexOf('--double-next');
  const indexDoublePrev = arr.indexOf('--double-prev');

  if (indexDiscardNext != -1) {
     res = arr.splice(indexDiscardNext+1, 1);
  } else {
   if (indexDiscardPrev != -1) {
       res = arr.splice(indexDiscardPrev-1, 1);
   } else {
       if (indexDoubleNext != -1) {
           res = arr.splice(indexDoubleNext+1, 1);
       } else {
           if (indexDoublePrev != -1) {
               res = arr.splice(indexDoublePrev-1, 1);
           }
       }
   }
  }
  return res;
};