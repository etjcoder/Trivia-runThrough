
$("#question-1").hide()
$("#question-2").hide()
$("#question-3").hide()
$("#start").on("click", start)


timer = 10;
score = 0;

var intervalId;
var clockRunning = false;

function end() {

    time = 10;
    score = 0;
    $("#time-left").text(time)
    $("#score").text(score)
}

function nextQuestion(){ 


}



function start() {

    if(!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        $("#question-1").show()
    }
}

function decrement() {

    time--;
    
    if (time === 0) {
        console.log("You've lost!")
        end()
    }
    $("#time-left").text(time);

}

$("#submit-q3").on("submit", function(){

    console.log(this.val())
    console.log($(this).val())
    console.log(lastName.val())
    console.log($("#question-3").val())
    console.log($("#submit-q3").val())

})


function end() {

    clearInterval(intervalId)


}