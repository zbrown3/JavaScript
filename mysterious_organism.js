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
const pAequorFactory = (num,arr) => {
    return {
        specimenNum: num,
        dna: arr,
        mutate () {
            let baseIndex = (Math.floor(Math.random() * 15));
            let currentBase = this.dna[baseIndex];
            let newBase = returnRandBase();
            while (newBase === currentBase) {
                newBase = returnRandBase();
            }
            this.dna[baseIndex] = newBase;
            return this.dna;
            
        },
        compareDNA (pAequor) {
            let match = 0;
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === pAequor.dna[i]) {
                    match ++;
                }
            }
            let percentage = Math.round(match / this.dna.length * 100);
            console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% in common.`);
        },
        willLikelySurvive () {
            let match = 0
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    match++;
                }
            }
            let percentage = Math.round(match / this.dna.length * 100);
            return percentage >= 60 ? true : false;
        }
    }
}

const strand1 = pAequorFactory(1,mockUpStrand());
const strand2 = pAequorFactory(2,mockUpStrand());
console.log(strand1.dna);
console.log(strand1.willLikelySurvive());