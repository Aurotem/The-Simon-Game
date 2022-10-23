/*Colors*/
var buttonColours = ["red", "green", "blue", "yellow"];
var numberOfColours = buttonColours.length;

/*Arrays of the chosen colors*/
var gamePattern = [];
var chosenColours = [];

/*Level and sequence controller*/
var level = 0;
var selectCount = 0;

/*These will be pushed to the arrays*/
var id;
var randomSelectedColour;

/*Starting Game*/
var started = false;
    $("h1").on("click", function(){
        if(!started){
            nextSequence();
            started = true;
        }
    })
    $("body").on("keypress", function(){
        if(!started){
        nextSequence();
        started = true;
        }
    });

/*User Selection*/

    $(".box").on("click", function(){

        id = $(this).attr("id");
        chosenColours.push(id);

        /*Sounds And effects when clicked*/
        $("#" + id).fadeOut(100).fadeIn(100);
        sounds(id);

        /*Answer Check*/
        checkAnswer();
    });



function nextSequence()
{
    /*Selecting a random number, then select color with it*/
    var randomColourNumber = Math.round(Math.random() * 3);
    randomSelectedColour = buttonColours[randomColourNumber];
    gamePattern.push(randomSelectedColour);

    /*Sounds And effects when selected*/
    $("#" + randomSelectedColour).fadeOut(100).fadeIn(100);
    sounds(randomSelectedColour);

    /*Setting the level*/
    level = level + 1;
    $("h1").html("Level" + level);
    chosenColours = [];
}

function checkAnswer()
{

        if(chosenColours[selectCount] === gamePattern[selectCount]){
            selectCount++;

            /*This will work when the user finishes the sequence*/
            if(gamePattern.length === chosenColours.length){
                setTimeout(nextSequence, 1000);
                selectCount = 0;
            }
            console.log(selectCount);

        } else{ /*If player chose the wrong color */

            /*Informing the player*/
            sounds("wrong");
            console.log("false");

            /*Changing the bg colour*/
            $("body").addClass("wrong");
            setTimeout(function(){
                $("body").removeClass("wrong");
            }, 200);

            $("h1").html("Oops! Looks like you failed! Your score was: " + level + "!");

            /*Resetting area*/
            level = 0;
            gamePattern = [];
            chosenColours = [];
            started = false;
        }

}

function sounds(id){

var audio = new Audio("sounds/" + id + ".mp3");
audio.play();
}