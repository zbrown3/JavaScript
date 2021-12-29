const robot = {
    energyLevel: 100,
    checkEnergy() { // never use => and this.object in the same fuction.
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();