'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')

const players1 = game.players[0];
const players2 = game.players[1];

console.log('players1 >>  ', players1);
console.log('players2 >>  ', players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, second, ...fieldPlayers] = game.players[0];

console.log('game.players[0] >>  ', game.players[0]);
console.log('gk >>  ', gk);
console.log('fieldPlayers >>  ', fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...game.players[0], ...game.players[1]];

console.log('allPlayers >>  ', allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final >>  ', players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

/*
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    }
    */

const { team1, x: draw, team2 } = game.odds;

console.log('team1 >>  ', team1);
console.log('draw >>  ', draw);
console.log('team2 >>  ', team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log('players, goals socored >> ', players, ', ', players.length);
};

printGoals('Davies', 'Muller', 'Lewadowski', 'Kimmich');

printGoals(game.scored);
