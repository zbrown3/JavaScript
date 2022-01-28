class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    static generateName() { // static keyword creates method that can be called directly from the class, but not from the instance of the class.
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }
} 