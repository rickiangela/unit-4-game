var randomNum;
var randomNumCrystalOne;
var randomNumCrystalTwo;
var randomNumCrystalThree;
var randomNumCrystalFour;
var totalScore = 0;
var wins = 0;
var losses = 0;

// Computer random number
randomNum = Math.floor(Math.random() * 40) + 79;
console.log("Random Number: " + randomNum);
$("#random-number-box").html(randomNum);

// First button random number
randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
console.log("First Crystal: " + randomNumCrystalOne);

// Second button random number
randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
console.log("Second Crystal: " + randomNumCrystalTwo);

// Three button random number
randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
console.log("Third Crystal: " + randomNumCrystalThree);

// Four button random number
randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
console.log("Fourth Crystal: " + randomNumCrystalFour);

// If the first gem is pressed
$("#crystal-one").on("click", function () {
    totalScore = totalScore + randomNumCrystalOne;
    console.log("Total Score: " + totalScore);

    $("#total-score").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        console.log("Wins: " + wins);

        $("#wins").html("Wins: " + wins);

        //reset
        totalScore = 0;
        $("#total-score").html(totalScore);
        randomNum = Math.floor(Math.random() * 40) + 79;
        console.log("Random Number: " + randomNum);
        $("#random-number-box").html(randomNum);
        randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
        console.log("First Crystal: " + randomNumCrystalOne);
        randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Second Crystal: " + randomNumCrystalTwo);
        randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
        console.log("Third Crystal: " + randomNumCrystalThree);
        randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
        console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
    if (totalScore > randomNum) {
        losses++;
        console.log("Losses: " + losses);

        $("#losses").html("Losses: " + losses);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
});

// If the second gem is pressed
$("#crystal-two").on("click", function () {
    totalScore = totalScore + randomNumCrystalTwo;
    console.log("Total Score: " + totalScore);

    $("#total-score").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        console.log("Wins: " + wins);

        $("#wins").html("Wins: " + wins);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
    if (totalScore > randomNum) {
        losses++;
        console.log("Losses: " + losses);

        $("#losses").html("Losses: " + losses);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
});

// If the third gem is pressed
$("#crystal-three").on("click", function () {
    totalScore = totalScore + randomNumCrystalThree;
    console.log("Total Score: " + totalScore);

    $("#total-score").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        console.log("Wins: " + wins);

        $("#wins").html("Wins: " + wins);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
    if (totalScore > randomNum) {
        losses++;
        console.log("Losses: " + losses);

        $("#losses").html("Losses: " + losses);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
});

// If the fourth gem is pressed
$("#crystal-four").on("click", function () {
    totalScore = totalScore + randomNumCrystalFour;
    console.log("Total Score: " + totalScore);

    $("#total-score").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        console.log("Wins: " + wins);

        $("#wins").html("Wins: " + wins);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
    if (totalScore > randomNum) {
        losses++;
        console.log("Losses: " + losses);

        $("#losses").html("Losses: " + losses);

         //reset
         totalScore = 0;
         $("#total-score").html(totalScore);
         randomNum = Math.floor(Math.random() * 40) + 79;
         console.log("Random Number: " + randomNum);
         $("#random-number-box").html(randomNum);
         randomNumCrystalOne = Math.floor(Math.random() * 12) + 1;
         console.log("First Crystal: " + randomNumCrystalOne);
         randomNumCrystalTwo = Math.floor(Math.random() * 12) + 1;
         console.log("Second Crystal: " + randomNumCrystalTwo);
         randomNumCrystalThree = Math.floor(Math.random() * 12) + 1;
         console.log("Third Crystal: " + randomNumCrystalThree);
         randomNumCrystalFour = Math.floor(Math.random() * 12) + 1;
         console.log("Fourth Crystal: " + randomNumCrystalFour);
    }
});