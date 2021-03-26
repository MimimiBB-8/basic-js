const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if(members == undefined || members.length == 0){
   return false
 }
 var res = []
 for(let i=0; i< members.length; i++){
  if(typeof members[i] !== "string"){
    continue
  }
  res.push(members[i].trim()[0])
 }
 res.sort(function(a,b){
  return a.localeCompare(b);
})
return res.join("").toString().toUpperCase()
};
