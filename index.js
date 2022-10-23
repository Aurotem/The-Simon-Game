var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern =[];
var chosenColours = [];
var numberOfColours = buttonColours.length;
var level = 0;

    document.addEventListener("keypress", function(){
    if(gamePattern.length < 1){
        $("h1").html("Level " + level);
        nextSequence();
    }

    })

    $("button").on("click", function(){
    var id = this.innerHTML;
    effect(id);
    sounds(id);
    console.log(id);
    chosenColours.push(id);
    checkAnswer(level);
    console.log(chosenColours);
    console.log(gamePattern);
    });

function nextSequence()
{
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    sounds(randomChosenColour);
    effect(randomChosenColour);
    level = level + 1;
    $("h1").html("Level " + level);
    chosenColours = [];

}

function checkAnswer(currentLevel)
{
    var answerIndex;
    if(id = "red"){
        answerIndex = 0;
    }else if(id = "green"){
        answerIndex = 1;
    }else if(id = "blue"){
        answerIndex = 2;
    }else if(id = "yellow"){
        answerIndex = 3;
    }

    if(answerIndex === gamePattern[currentLevel -1]){
        console.log("Annen");
        setTimeout(nextSequence, 1000);
        console.log(answerIndex);
        console.log(gamePattern[currentLevel - 1]);
    }else{
        console.log("baban");
        console.log(answerIndex);
        console.log(gamePattern[currentLevel - 1]);
    }
}


function effect(id)
{
    var activeButton = $('.' + id);

    activeButton.addClass("pressed");

    
    setTimeout(function(){
        activeButton.removeClass("pressed");

    }, 100);
}

function sounds(id){

    switch(id){
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;

        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;

        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;

        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;

            default:
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
        }
}