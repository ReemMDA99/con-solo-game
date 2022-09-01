//skip or fight function
var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to 'FIGHT' or 'SKIP' the game");
      // Enter the conditional recursive function call here!
      if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
        promptFight = promptFight.toLowerCase();
      // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  }
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if player wants to leave
      return true;      
      shop();
    } else {
        return false;
    }
  }
}
    // create fight function
    var fight = function(enemy) {
        // console.log(enemy);
        //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
        // ask the player if they like to fight or skip
        if(fightOrSkip()) {
            //if true leave the fight by breaking loop
            break;
        }
    fightOrSkip();    
        
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // Subtract the value of playerInfo.attack from the value of enemy.health, and use that result to update the value in the enemy.health variable.
        enemy.health = Math.max(0, enemy.health - damage);
       
        // Log a resulting message to the console to confirm that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining."
        );
        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
            
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        
        // Subtract the value of enemy.attack from the value of playerInfo.health, and use that result to update the value in the playerInfo.health variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        
        // Log a resulting message to the console to confirm that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " +  playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check players health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;

            // log a resulting message to the console to confirm that it worked.
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    };
};// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            // debugger;

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);


            // pass the pickedEnemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
        }
        // if the player is still alive and if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // ask the player if he wants to use the store before next round
            var storeConfirm = window.confirm("the fight is over, visit the store before next round?");
            // if yes, take him to the store
            if (storeConfirm) {
                shop();
            }
            
        }
        // if player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};
// // start the game when the page loads
// startGame();

// end game function
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, then the player wins.
    if (playerInfo.health > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
    window.alert("You have lost your robot in the battle");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
// add shop functionality
var shop = function() {
    // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // use switch to carry out hte action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":

    playerInfo.refillHealth();
    break;

    case "upgrade":
    case "UPGRADE":
        playerInfo.upgradeAttack();
        break;

    case "leave":
    case "LEAVE":
        window.alert("Leaving the store.");
        break;
    default:
        window.alert("you did not pick a valid option. try again");
    // call shop again for the player to pick a valid option
    shop();
    break;
  }
}
// start by creating a function called getPlayerName()to handle the player name input.
var getPlayerName = function() {
    var name = "";
    //add loop here with prompt and conditions
    while( name === "" || name === null) {
        name = prompt("What is your Robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name; 

}
// create prompt
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        } else { 
            window.alert("You don't have enough money");
        }
    }, // comma!
      upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.")
        
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
];


// start first game when page loads
startGame();
