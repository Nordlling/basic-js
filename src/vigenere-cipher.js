class VigenereCipheringMachine {

	constructor(id = true) {
         this.id = id
    }

    encrypt(str, key) {
        var alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(typeof str == "undefined" || typeof key == "undefined") throw new Error()
		str = str.toUpperCase()
		key = key.toUpperCase()
		var newStr = str.replace(/[^A-Z]/iug, "")
		key = key.repeat(Math.ceil(str.length/key.length))
		key = key.split("").splice(0, newStr.length).join("")
		var encryptStr = ""
	
		for(var i=0;i<key.length;i++){
			var modAlphabet = " " + alphabet.split("").splice(alphabet.indexOf(newStr[i]), 27).join("") + alphabet.split("").splice(1, alphabet.indexOf(newStr[i])-1).join("")
			encryptStr += modAlphabet[alphabet.indexOf(key[i])]
		}
		i = 0
		var j = 0

		while(i<str.length){
			if(alphabet.includes(str[i])){
				str = str.split("")
				str[i] = encryptStr[j]
				str = str.join("") 
				j++
			}
			i++
		}
		if (this.id == false) return str.split("").reverse().join("")
		else return str
    	}

    decrypt(str, key) {
        var alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(typeof str == "undefined" || typeof key == "undefined") throw new Error()
		str = str.toUpperCase()
		key = key.toUpperCase()
		var newStr = str.replace(/[^A-Z]/iug, "")
		key = key.repeat(Math.ceil(str.length/key.length))
		key = key.split("").splice(0, newStr.length).join("")
		var decryptStr = ""
	
		for(var i=0;i<key.length;i++){
			var modAlphabet = " " + alphabet.split("").splice(alphabet.indexOf(key[i]), 27).join("") + alphabet.split("").splice(1, alphabet.indexOf(key[i])-1).join("")
			decryptStr += alphabet[modAlphabet.indexOf(newStr[i])]
		}
		i = 0
		var j = 0

		while(i<str.length){
			if(alphabet.includes(str[i])){
				str = str.split("")
				str[i] = decryptStr[j]
				str = str.join("") 
				j++
			}
			i++
		}
		if (this.id == false) return str.split("").reverse().join("")
		else return str
	}
}

module.exports = VigenereCipheringMachine;
