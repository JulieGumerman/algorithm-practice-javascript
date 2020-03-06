class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        console.log(this.keyMap)
    }

    get(key) {
        let index = this._hash(key)
        if(this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                } 
            } 
        }
        return undefined
    }

    values() {
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                //console.log(this.keyMap[i])
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }

    keys() {
        return
    }

}

let ht= new HashTable(17);
ht.set("hello world", "yay")
ht.set("climb", "dogs")
console.log("getter works?", ht.get("climb"))
console.log("getter works 2?", ht.get("lazy"))
console.log(ht.values())