const team = {
    _players: [ {
      firstName: 'Kai',
      lastName: 'Havertz',
      age: 22
      },
      {
        firstName: 'Edouard',
        lastName: 'Mendy',
        age: 29
      },
      {
        firstName: 'NGolo',
        lastName: 'Kante',
        age: 30
      }
    ],
    _games: [
      {
        opponent: 'Burnley',
        teamPoints: 1,
        opponentPoints: 1
      },
      {
        opponent: 'Malmo',
        teamPoints: 1,
        opponentPoints: 0
      },
      {
        opponent: 'Newcastle',
        teamPoints: 3,
        opponentPoints: 0
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (firstName,lastName,age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player);
    },
    addGame (opponentName,teamPoints,opponentPoints) {
      let game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game);
    },
  
  }
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players);
  team.addGame('Southampton',1,1);
  team.addGame('Norwich',7,0);
  team.addGame('Brentford',1,0);
  console.log(team.games)
  