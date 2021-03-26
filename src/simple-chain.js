const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chain: [],
  
  getLength() {
    return this;
  },

  addLink(value) {
    if (value === null) {
      this.chain.push(null);
    }
    else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (isNaN (position) == false && position > 0 && this.chain.length >= position) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw new Error();
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let bracketEveryChain = [];
    bracketEveryChain = this.chain.map(function (item){
      return '( ' + item + ' )';
    });
    this.chain = [];
    return bracketEveryChain.join('~~')
  }
};

module.exports = chainMaker;