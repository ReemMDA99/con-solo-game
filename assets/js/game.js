// create prompt
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create fight function
var fight = function() {
//Alert players that they're starting the round
    window.alert("The fight has begun!");
};
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter Enter 'FIGHT' or 'SKIP' to choose.");
// if player chose to fight then fight
if (promptFight === 'FIGHT' || promptFight === 'fight') {

    // Subtract the value of playerAttack from the value of enemyHealth, and use that result to update the value in the enemyHealth variable.
    enemyHealth = enemyHealth-playerAttack;

    // Log a resulting message to the console to confirm that it worked.
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable.
    playerHealth = playerHealth - enemyAttack;
    
    // Log a resulting message to the console to confirm that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " +  playerName + " now has " + playerHealth + " health remaining."
    );

    // check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

    }
    // log a resulting message to the console to confirm that it worked.
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chose to skip

}   else if (promptFight === "SKIP" || promptFight === "skip") {
    //confirm that player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes(true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

} else {
    window.alert ("Please enter valid options!");
}

fight();
