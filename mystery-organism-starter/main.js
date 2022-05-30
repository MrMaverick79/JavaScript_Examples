 //Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}



//Main factor function of an organism 'PAequor' with 15 base DNA.
const pAequorFactory = (specimenNum, dna ) => {
  return {
    specimenNum,
    dna,
    
    //mutate functon. Takes one strand of DNA and if not the same, replaces it with another.
    mutate() {     
      let selector = Math.floor(Math.random() * 15) 
      let newDna = returnRandBase();
      
      //use if to determine if it is the same, if not use mutate() again
      if (dna[selector] === newDna) {
        this.mutate();
      } 
      else
      {
        dna[selector] = newDna
      }
       return dna
    },

    //compare the DNA of this instance with that of another.
    compareDNA(otherPAqeour) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] == otherPAqeour.dna[i]) {
          count += 1;
        }
      }
      console.log(`Specimen #${this.specimenNum} has ${count * 100/this.dna.length}% DNA bases in common with #${otherPAqeour.specimenNum}.`)
    },

    //checks to see whether more than 60% of DNA is either C or G base and returns True if so
    isLikelyToSurvive() {
      let count = 0;
      
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G' ) {
        count++
        }
      } 
      
      if (count * 100/this.dna.length > 60) {
        return true
      } else {
        return false;
      }
    }, //console.log(`Specimen #${this.specimenNum} has ${count * 100/this.dna.length}% of C and G bases.`) 
      
  }
} 


//create a list of 30 instances that will survive
let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.isLikelyToSurvive() == true) {
    sample.push(temp);
    i += 1
  } 
}
console.log(sample);


/*
TESTING
*/
//console.log(pAequorFactory(1234, mockUpStrand()).mutate());
//create an instance and console log the results 
//let sample = pAequorFactory(1234, mockUpStrand())
//let other =  pAequorFactory(4321, mockUpStrand())
//console.log(sample.compareDNA(other))
//console.log(sample.isLikelyToSurvive() );







