module.exports = function createDreamTeam(members) {
	var cypher = []
	var symb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
  if(!Array.isArray(members)) return false  
  for(i=0;i<members.length;i++){
    if (typeof members[i] == "string" && symb.includes(members[i][0])){
    	members[i] = members[i].replace(/ /gi, '')
		  cypher.push(members[i][0].toUpperCase())
	}
  }
return cypher.sort().join("")
};