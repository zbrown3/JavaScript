class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
    }

  }

const balloonAttack = (p1, p2) => {
    let p1BalloonsLeft = 100 - (p2.hitsPerMinute * 10);
    let p2BalloonsLeft = 100 - (p1.hitsPerMinute * 10);

    if (p1BalloonsLeft > p2BalloonsLeft) {
        return p1.name;
    } else if (p2BalloonsLeft > p1BalloonsLeft) {
        return p2.name;
    } else {
        return 'Tie';
    }
}




const p1 = new Player('p1', 5);
const p2 = new Player('p2', 5);
 
console.log(balloonAttack(p1, p2));