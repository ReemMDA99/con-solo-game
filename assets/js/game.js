// create prompt
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create fight function
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
while(playerHealth > 0 && enemyHealth > 0) {
    // ask the player if they like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player chose to skip
    if (promptFight === "SKIP" || promptFight === "skip") {
        //confirm that player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
        // console.log(promptFight);
        
    }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        // Subtract the value of playerAttack from the value of enemyHealth, and use that result to update the value in the enemyHealth variable.
        enemyHealth = Math.max(0, enemyHealth - damage);
       
        // Log a resulting message to the console to confirm that it worked.
        console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
            
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        
        // Subtract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable.
        playerHealth = Math.max(0, playerHealth - damage);
        
        // Log a resulting message to the console to confirm that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " +  playerName + " now has " + playerHealth + " health remaining."
        );

        // check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;

            // log a resulting message to the console to confirm that it worked.
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    };
};// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
// function to start a new game
var startGame = function() {
    // debugger;
     // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            enemyHealth = randomNumber(40, 60);


            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        // if the player is still alive and if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".");
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
        if ( playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
    } else {
        window.alert("you don't have enough money");
    }
    break;

    case "upgrade":
    case "UPGRADE":
        if (playerMoney >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money!");
        }
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
// start first game when page loads
startGame();
