// It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

// damage = 50 * (attack / defense) * effectiveness
// attack = your attack power
// defense = the opponent's defense
// effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
// Effectiveness:

// Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

// Super effective: 2x damage
// Neutral: 1x damage
// Not very effective: 0.5x damage
// To prevent this challenge from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

// fire > grass
// fire < water
// fire = electric
// water < grass
// water < electric
// grass = electric
// The function you must implement takes in:

// your type
// the opponent's type
// your attack power
// the opponent's defense

function calculateDamage(yourType, opponentType, attack, defense) {
  let baseDmg = 50 * (attack / defense);

  switch (yourType) {
    case "fire":
      switch (opponentType) {
        case "water":
          return baseDmg * 0.5;
        case "grass":
          return baseDmg * 2;
        case "electric":
          return baseDmg;
        case "fire":
          return baseDmg;
      }

    case "water":
      switch (opponentType) {
        case "water":
          return baseDmg;
        case "grass":
          return baseDmg * 0.5;
        case "electric":
          return baseDmg;
        case "fire":
          return baseDmg * 2;
      }
    case "electric":
      switch (opponentType) {
        case "water":
          return baseDmg * 2;
        case "grass":
          return baseDmg * 0.5;
        case "electric":
          return baseDmg;
        case "fire":
          return baseDmg;
      }

    case "grass":
      switch (opponentType) {
        case "water":
          return baseDmg * 2;
        case "grass":
          return baseDmg;
        case "electric":
          return baseDmg;
        case "fire":
          return baseDmg * 0.5;
      }
  }
}

console.log(calculateDamage("fire", "water", 1, 1));
