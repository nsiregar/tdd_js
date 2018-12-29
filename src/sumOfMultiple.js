class SumOfMultiple {
    constructor(int) {
        this.content = Array.from(new Array(int), (val,index)=> index+1)
        this.arr = []
    }
    listOfArray() {
        for (let item in this.content) {
            if(this.content[item] % 5 == 0) {
                this.arr.push(this.content[item])
            }else if(this.content[item] % 3 == 0) {
                this.arr.push(this.content[item])
            }
           }
         return this.arr;
    }
    sumAll() {
       this.listOfArray()
       const total = this.arr.reduce((a, b) => a + b, 0);
       return total;
    }
}

exports.SumOfMultiple = SumOfMultiple