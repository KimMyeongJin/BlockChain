"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const gensisBlock = new Block(0, "1010101010101", "", "HelloLagom", 123456);
let blockchain = [gensisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map