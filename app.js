const team = {
  _players: [
    {firstname:'King', lastname: 'scul', age: 18 },
   {firstname: 'Von', lastname: ' Brown', age:20}, 
   {firstname: 'Sam',lastname:'Luke', age: 29}],
_games: [{opponent: 'thus', teamPoints: 10, opponentPoints: 30},
{opppnent: 'lary', teamPoints: 50, opponentPoints: 30}, 
{opponent: 'suz', teamPoints: 100, opponentPoints: 80}],
get players(){
  return this._players;
},
get games(){
  return this._games;
},
addPlayer(newFirstName, newLastName, newAge){
 const player = { firstName: newFirstName, lastName: newLastName, age: newAge}
 team._players.push(player);
},
addGame(newOpponent, newTeamPoints, newOpponentPoints){
  const game = {
    opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints
  }
  team._games.push(game);
}
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Titians', 100, 98);
console.log(team._games);
