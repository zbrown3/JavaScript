const team = {
    _players: [
      {
        firstName: 'Christian',
        lastName: 'Pulisic',
        age: 24
      },
      {
        firstName: 'Raheem',
        lastName: 'Sterling',
        age: 27
      },
      {
        firstName: 'Pierre-Emerick',
        lastName: 'Aubameyang',
        age: 33
      }

    ],
    _games: [
        {
            opponent: 'RB Salzburg',
            teamPoints: 2,
            opponentPoints: 1
        },
        {
            opponent: 'Aston Villa',
            teamPoints: 2,
            opponentPoints: 0
        },
        {
            opponent: 'AC Milan',
            teamPoints: 2,
            opponentPoints: 0
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }

  };

  team.addPlayer('Ruben', 'Loftus-Cheek', 26);
  console.log(team.players);

  team.addGame('Wolves', 3, 0);
  console.log(team.games);