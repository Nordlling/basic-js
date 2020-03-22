const chainMaker = {
  chain : "",
  getLength() {
    return this.chain.split("~~").length
  },
  addLink(value) {
    if (this.chain.length==0) this.chain += `( ${value} )`
    else this.chain += `~~( ${value} )`
    return chainMaker
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.split("~~").length || typeof position != "number"){
      this.chain = "" 
      throw new Error
    }   
    this.chain = this.chain.split("~~")
    this.chain.splice(position - 1, 1)
    this.chain = this.chain.join("~~")
    return chainMaker
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~")
    return chainMaker
  },
  finishChain() {
    var trulyChain = this.chain
    this.chain = ""
    return trulyChain    
  }
};

module.exports = chainMaker;
