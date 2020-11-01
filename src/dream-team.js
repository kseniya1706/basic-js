const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let firstLetters = [];
  let res = '';

  if (Array.isArray(members)) {
    members.forEach(item => {
      if (typeof item == 'string'){
        let tempItem = item.trim()
        firstLetters.push(tempItem[0].toUpperCase())
      }
    });
  
    if (firstLetters.length == 0) {
     res = false;
    }
    else {
      res = firstLetters.sort().join('');
    }
  } else {
    res = false;
  }
  
  return res;
};
