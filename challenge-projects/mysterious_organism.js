// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Add your functions below:
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() { // Mutates only 1 base of the DNA array with while condition to run random DNA base again if the base is same as the random base generated
      let idx = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[idx] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[idx] = newBase;
      return this.dna;
    },
    compareDna(comparePaeq) { // Compares two instances of the DNA arrays to ascertain percentage in common
      let commonBase = 0;
      for (let i=0; i < comparePaeq.dna.length; i++) {
        if (comparePaeq.dna[i] === this.dna[i]) {
          commonBase++;
        }
      }
      let baseInPertcentage = (commonBase / comparePaeq.dna.length * 100).toFixed();
      console.log(`Specimen #${comparePaeq.specimenNum} and specimen #${this.specimenNum} have ${baseInPertcentage}% DNA in common`);
    },
    // Find the DNA that will survive if it consists minimum 60% combination of both G and C strands | Project extension 
    willLikelySurvive() {
      let survive = this.dna.filter(base => base === 'G' || base === 'C');
      return survive.length / this.dna.length >= 0.6      
    },
    // Returns complement strands based on Chargaff's Rule | Project extension
    complimentStrand() {
        let newStrand = [];
        this.dna.map(base => {
        switch (base) {
            case 'A':
                newStrand.push('T');
                break;
            case 'T':
                newStrand.push('A');
                break;
            case 'G':
                newStrand.push('C');
                break;
            case 'C':
                newStrand.push('G');
                break;
        }
    })
    return newStrand;
    }
  }
} 

// To generate required amount of minimum 60% survival rate specimens | Project extension
const generateSpecimens = (num) => {
    let specCount = 1;
    const likelySurvive = [];
    while (likelySurvive.length < (num)) {
      let newPaeq = pAequorFactory(specCount, mockUpStrand());
      if (newPaeq.willLikelySurvive() === true) {
        likelySurvive.push(newPaeq);
      }
      specCount++;
    }
    return likelySurvive;
}

// Test functions:
newPaeq1 = pAequorFactory(1, mockUpStrand()); // Comment this out for generateSpecimens to run
newPaeq2 = pAequorFactory(2, mockUpStrand()); // Comment this out for generateSpecimens to run

console.log(newPaeq1, newPaeq2); // Returns both instances of above paequor specimens for comaprison to below mutations & complement strands
console.log(newPaeq1.mutate(), newPaeq2.mutate()); // Returns mutated specimens for above instances

newPaeq1.compareDna(newPaeq2); // Returns common bases in percentage between specimen 1 and 2

//console.log(generateSpecimens(30)); // <-- Uncomment after commenting out newPaeq1 & newPaeq2 | Returns 30 instance of specimens which has passed 60% survival rate

console.log(newPaeq1.complimentStrand()); // Returns complement strand 
console.log(newPaeq2.complimentStrand()); // Returns complement strand