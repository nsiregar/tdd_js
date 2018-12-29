const prime = require('../src/primeNumbers');

describe('get prime number',()=> {
    describe('list available prime number under 10', ()=> {
        it('should generate prime number below 10', ()=> {
            const primeNumbers = new prime.primeNumbers(10);
            expect(primeNumbers.listPrime).toEqual([2,3,5,7])
        })
    })

    describe('return larges prime number from list', ()=> {
        it('should generate largest prime number below 10', ()=> {
            const primeNumbers = new prime.primeNumbers(10);
            expect(primeNumbers.largestPrime).toEqual(7)
        })

        it('should generate largest prime number below 10001', ()=> {
            const primeNumbers = new prime.primeNumbers(10001);
            expect(primeNumbers.largestPrime).toEqual(9973)
        })
    })

    describe('return prime number by index', ()=> {
        it('should generate prime number index = 6', ()=> {
            const primeNumbers = new prime.primeNumbers(100);
            expect(primeNumbers.primeNumber(6)).toEqual(13)
        })
        it('should generate prime number index = 10001', ()=> {
            const primeNumbers = new prime.primeNumbers(110000);
            expect(primeNumbers.primeNumber(10001)).toEqual(104743)
        })

    })
})