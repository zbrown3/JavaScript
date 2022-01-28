class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
}
  
class Nurse extends HospitalEmployee { // extend keyword makes the methods of the parent class available inside the child class
    constructor(name,certifications) {
      super(name); // super keyword calls the constructor of the parent class.  Super must be called on first line of constructor before this keyword.
      this._certifications = certifications;
    }
} 
const nurseOlynyk = new Nurse('Olynyk',['Trauma','Pediatrics']);
