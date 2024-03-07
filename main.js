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
    }
  };
};

const pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor.dna);
console.log(pAequor.mutate());