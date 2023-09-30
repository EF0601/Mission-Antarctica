let userSelection = 0;
let gamePart = 1;

let shouldShowStats = false;

let gameValues = {
    rations: 0,
    morale: 100,
    health: 100,
    days: 0,
    milesAdvancedToday: 0,
    coins: 100,

    mileToNext: 825,
};

function updateValues() {
    document.getElementById("health").textContent = gameValues.health;
    document.getElementById("morale").textContent = gameValues.morale;
    document.getElementById("days").textContent = gameValues.days;
    document.getElementById("rations").textContent = gameValues.rations;
    document.getElementById("distance").textContent = gameValues.mileToNext;
    document.getElementById("coins").textContent = gameValues.coins;
    if (shouldShowStats === true) {
        document.getElementById("stats").style.display = "block";
    }
    else{
        document.getElementById("stats").style.display = "none";
    }
}

//random event gen

const events = ['Lost', 'Sick', 'Tired', 'Hungry', 'Storm', 'Bandits'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEvent() {
    if (randomNumber(1, 100) <= 20) {
        let event = events[randomNumber(0, events.length - 1)];
        switch (event) {
            case 'Lost':
                document.querySelector("#event").textContent = "You got lost! Lose 2 days.";
                gameValues.days = gameValues.days + 2;
                gameValues.morale = gameValues.morale - 2;
                gameValues.health = gameValues.health - 1;
                break;
            case 'Sick':
                document.querySelector("#event").textContent = "You got sick! Lose 7 health.";
                gameValues.morale = gameValues.morale - 3;
                gameValues.health = gameValues.health - 7;
                break;
            case 'Tired':
                document.querySelector("#event").textContent = "You got tired! Lose 3 morale.";
                gameValues.morale = gameValues.morale - 3;
                break;
            case 'Hungry':
                document.querySelector("#event").textContent = "You got hungry! You ate 12 more rations than usual.";
                gameValues.rations = gameValues.rations - 12;
                break;
            case 'Storm':
                document.querySelector("#event").textContent = "You got caught in a storm! Lose 5 days, 5 morale, and 3 health.";
                gameValues.days = gameValues.days + 5;
                gameValues.morale = gameValues.morale - 5;
                gameValues.health = gameValues.health - 3;
                break;
            case 'Bandits':
                document.querySelector("#event").textContent = "You got ambushed by bandits! Lose 1 day, 7 morale, and 5 health.";
                gameValues.days = gameValues.days + 1;
                gameValues.morale = gameValues.morale - 7;
                gameValues.health = gameValues.health - 5;
                break;

            default:
                break;
        }
        updateValues();

    }
    else{
        document.querySelector("#event").textContent = "No random event today.";
    }
}

function advanceMile() {
    gameValues.morale--;
    gameValues.mileToNext = gameValues.mileToNext - 5;
    gameValues.milesAdvancedToday = gameValues.milesAdvancedToday + 2;
    randomEvent();
    if (gameValues.health <= 0) {
        // gamePart = 0;
        document.getElementById("gamePart3").style.display = "none";
        document.getElementById("gameOver").style.display = "block";
        lockedSelection = 0;
        updateValues();
    }
}

//Do this on start
updateValues();

// Add an event listener to the document (or any specific element)
document.addEventListener("keydown", function (event) {
    // Check if the key pressed is the "Enter" key (keyCode 13) or any key
    // You can also use event.key === "Enter" for modern browsers
    if (event.key === "Enter") {
        // Do something when the "Enter" key is pressed
        console.log("Enter key was pressed!");
        confirmSelection();
    } else {
        if (event.key === "`") {
            this.location.reload();
        }
        // Handle other keys here if needed
        console.log(event.key);
        console.log(typeof event.key);
        userSelection = Number(event.key);
        handleSelection();
    }
});

//selections

let lockedSelection = 0;

function handleSelection() {
    if (gamePart === 1) {
        if (userSelection <= 2) {
            switch (userSelection) {
                case 1:
                    document.getElementById("gamePart1Selection1").style.color = "yellow";

                    document.getElementById("gamePart1Selection2").style.color = "white";

                    lockedSelection = 1;
                    break;
                case 2:
                    document.getElementById("gamePart1Selection2").style.color = "yellow";

                    document.getElementById("gamePart1Selection1").style.color = "white";

                    lockedSelection = 2;
                    break;
                default:
                    break;
            }
        }
    }
    if (gamePart === 2) {
        if (userSelection <= 3) {
            switch (userSelection) {
                case 1:
                    document.getElementById("gamePart2Selection1").style.color = "yellow";

                    document.getElementById("gamePart2Selection2").style.color = "white";
                    document.getElementById("gamePart2Selection3").style.color = "white";

                    lockedSelection = 1;
                    break;
                case 2:
                    document.getElementById("gamePart2Selection2").style.color = "yellow";

                    document.getElementById("gamePart2Selection1").style.color = "white";
                    document.getElementById("gamePart2Selection3").style.color = "white";

                    lockedSelection = 2;
                    break;
                case 3:
                    document.getElementById("gamePart2Selection3").style.color = "yellow";

                    document.getElementById("gamePart2Selection1").style.color = "white";
                    document.getElementById("gamePart2Selection2").style.color = "white";

                    lockedSelection = 3;
                    break;

                default:
                    break;
            }
        }
    }
    if (gamePart === 3) {
        if (userSelection <= 3) {
            switch (userSelection) {
                case 1:
                    document.getElementById("gamePart3Selection1").style.color = "yellow";

                    document.getElementById("gamePart3Selection2").style.color = "white";
                    document.getElementById("gamePart3Selection3").style.color = "white";

                    lockedSelection = 1;
                    break;
                case 2:
                    document.getElementById("gamePart3Selection2").style.color = "yellow";

                    document.getElementById("gamePart3Selection1").style.color = "white";
                    document.getElementById("gamePart3Selection3").style.color = "white";

                    lockedSelection = 2;
                    break;
                case 3:
                    document.getElementById("gamePart3Selection3").style.color = "yellow";

                    document.getElementById("gamePart3Selection1").style.color = "white";
                    document.getElementById("gamePart3Selection2").style.color = "white";

                    lockedSelection = 3;
                    break;

                default:
                    break;
            }
        }
    }
}

function confirmSelection() {
    switch (gamePart) {
        case 1:
            if (lockedSelection === 1) {
                lockedSelection = 0;
                userSelection = 0;
                document.getElementById("gamePart1").style.display = "none";
                document.getElementById("gamePart2").style.display = "block";

                gamePart = 2;
            }
            if (lockedSelection === 2) {
                window.open('https://www.google.com', '_blank').focus();
            }
            break;
        case 2:
            switch (lockedSelection) {
                case 1:
                    gameValues.rations = 2000;
                    break;
                case 2:
                    gameValues.rations = 1250;
                    break;
                case 3:
                    gameValues.rations = 750;
                    break;
                default:
                    break;
            }
            lockedSelection = 0;
            userSelection = 0;
            document.getElementById("gamePart2").style.display = "none";
            document.getElementById("gamePart3").style.display = "block";
            shouldShowStats = true;
            // alert("You have " + gameValues.rations + " rations");
            updateValues();
            gamePart = 3;

            break;
        case 3:
            switch (lockedSelection) {
                case 1:
                    advanceMile();
                    if (gameValues.mileToNext <= 0) {
                        gamePart = 4;
                        document.getElementById("gamePart3").style.display = "none";
                        document.getElementById("gamePart4").style.display = "block";
                        lockedSelection = 0;
                        gameValues.morale = 100;
                        gameValues.health++;
                        gameValues.mileToNext = 0;
                        updateValues();
                    }
                    if (gameValues.morale <= 0) {
                        if (gameValues.health-5 <= 0) {
                            gameValues.health = 0;
                        }
                        else{
                            gameValues.health = gameValues.health - 5;
                        }
                    }
                    if (gameValues.milesAdvancedToday >= 14) {
                        gameValues.milesAdvancedToday = 0;
                        gameValues.days++;
                        gameValues.rations = gameValues.rations - 6;

                    }
                    break;
                case 2:
                    if (gameValues.morale + 5 <= 100) {
                        gameValues.morale = gameValues.morale + 5;
                    }
                    else {
                        gameValues.morale = 100;
                    }
                    if (gameValues.health + 1 <= 100) {
                        gameValues.health = gameValues.health + 1;
                    }
                    else {
                        gameValues.health = 100;
                    }
                    gameValues.rations = gameValues.rations - 6;
                    gameValues.days++;
                    break;
                default:
                    break;


            }
            updateValues();
            break;
        default:
            break;
    }
}

