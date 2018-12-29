const sumMultiple = require('../src/sumOfMultiple');

describe('SumOfMultiple', ()=> {
    describe('initialization', ()=> {
        it('should generate array range 1-1000', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(1000);
            const array = Array.from(new Array(1000), (val,index)=> index+1);
            expect(sumOfMultiple.content).toEqual(array);
        })
    })

    describe('multiply by 3', ()=> {
        it('should generate value multiply 3', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(3);
            expect(sumOfMultiple.listOfArray()).toEqual([3]);
        })
    })

    describe('multiply by 5', ()=> {
        it('should generate value multiply 5', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(5);
            expect(sumOfMultiple.listOfArray()).toEqual([3,5]);
        })

        it('should generate array multiply 5 by N', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(10);
            expect(sumOfMultiple.listOfArray()).toEqual([3,5,6,9,10]);
        })
    })

    describe('multiply by 3 and 5', ()=> {
        it('should generate value multiply 3 and 5', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(15);
            expect(sumOfMultiple.listOfArray()).toEqual([3,5,6,9,10,12,15]);
        })
    })

    describe('sum array multiply by 3 and 5', ()=> {
        it('should generate total value multiply 3 and 5', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(9);
            expect(sumOfMultiple.sumAll()).toEqual(23);
        })
        it('should generate total value multiply 3 and 5', ()=> {
            const sumOfMultiple = new sumMultiple.SumOfMultiple(15);
            expect(sumOfMultiple.sumAll()).toEqual(60);
        })
    })
   
})