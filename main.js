// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //Returns an object that contains 15 basic DNA 
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      const bases = ['A', 'T', 'C', 'G'].filter(base => base !== currentBase);
      const newBase = bases[Math.floor(Math.random() * bases.length)];
      this.dna = this.dna.slice(0, randomIndex) + newBase + this.dna.slice(randomIndex + 1);
      return this.dna;
    },
    compareDNA(other) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === other.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
      
      console.log(`Specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percentage}% DNA in common.`);
    }
  };
};

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());

console.log(pAequor1.dna);
console.log(pAequor1.mutate());
pAequor1.compareDNA(pAequor2);