/* eslint-disable no-console */

const team = {
  _players: [
    {
      firstName: 'Loid',
      lastName: 'Forger',
      age: 0
    },
    {
      firstName: 'Yor',
      lastName: 'Briar',
      age: 27
    },
    {
      firstName: 'Anya',
      lastName: 'Forger',
      age: 6
    }
  ],
  _games: [
    {
      opponent: 'Eden Academy',
      teamPoints: 0,
      opponentPoints: 0
    },
    {
      opponent: 'Secret Police',
      teamPoints: 0,
      opponentPoints: 0
    },
    {
      opponent: 'Ostania',
      teamPoints: 0,
      opponentPoints: 0
    }
  ],
  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstName,
      lastName,
      age
    });
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent,
      teamPoints,
      opponentPoints
    });
  },
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  }
};

team.addPlayer('Bond', 'Forger', 0);
team.addGame('Sylvia Sherwood', 0, 0);
console.log(team.players);
console.log(team.games);
