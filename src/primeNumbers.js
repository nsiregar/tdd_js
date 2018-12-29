class primeNumbers {
    constructor(int) {
        this.listNumber = Array.from(new Array(int), (val,index)=> index+1)
        this.largestPrime = null
        this.listPrime = []
        this.generatePrimeNumber()
        this.getLargestPrime()
    }

    generatePrimeNumber() {
        for(let i=0; i<this.listNumber.length;i++) {
            if(this.isPrime(this.listNumber[i])) {
                this.listPrime.push(this.listNumber[i])
            }
        }
    }

    getLargestPrime() {
        this.largestPrime = this.listPrime[this.listPrime.length - 1];
    }

    primeNumber(number) {
        return this.listPrime[number-1];
    }

    isPrime(number) {
        if (number === 1) {
            return false
        }
        for(let index=2; index<number; index++)
        {
           if(number %index ==0)
               {
                return false;
               }
         }
         return true
    }
}

exports.primeNumbers = primeNumbers