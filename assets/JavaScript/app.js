//hides the questions and choices until "start" gets clicked
$(".qanda").hide();
$("#imgGif").hide();

var rightAnswers = 0;
var wrongAnswers = 0;

//variable for the questions array
var i = 0;
var rightAnswerRandom = 0;
var counter = 60;
var clockRunning = false;
var intervalId;
var converted;

var rightAnswerGifs = ['assets/images/breakingbad.gif', 'assets/images/winbaby.gif', 'assets/images/owl.gif', 'assets/images/elk.gif', 'assets/images/animals.gif'];

var wrongAnswerGifs = ['assets/images/annoy.gif', 'assets/images/obama.gif', 'assets/images/wrong.gif'];

//There are 5 questions 

var questions = [{
    question: "The world’s fastest growing plant is a species of what?",
    answers: ["Bamboo", "Hybiscus", "Red Vine", "Canabis"],
    correctAnswer: "Bamboo"
}, {
    question: "How many gallons of water does Crater Lake hold?",
    answers: ["300,000", "3.5 million", "4.6 million", "1.2 million"],
    correctAnswer: "4.6 million"
}, {
    question: "Mammoth Cave in Kentucky has how many mapped miles?",
    answers: ["1000", "400", "66", "150"],
    correctAnswer: "400"
}, {
    question: "How many dinosaur bones have been discovered in the Grand Canyon?",
    answers: ["135", "None", "1,572", "6,826"],
    correctAnswer: "None"
}, {
    question: "Which Tasmanian marsupial is known for its fiery temper? ?",
    answers: ["Captin Kangaroo", "Tasmanian Devil", "Howard the Duck", "Pepe Le Pew"],
    correctAnswer: "Tasmanian Devil"
}, {
    question: "How many bones does an adult human have?",
    answers: ["312", "226", "140", "206"],
    correctAnswer: "206"
}]

var stopwatch = {

  time: 0,
 
    start: function(){
    
    if (!clockRunning) {
      
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
      
    }
  },

  count: function() {
    stopwatch.time--;

    converted = stopwatch.timeConverter(stopwatch.time);
    $('#quiz-time-left').html("Time Left: " + converted);

    //stops time when counter reaches 0:00
    if(converted === "00:00"){
      
      setTimeout(function (){
        $(".qanda").hide();
        $('#timeUp').html("Time's Up!");
        $('#timeUp').show();
    },1000);
      timerStop();
         
  }
  },
  //converts seconds to minutes and seconds
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = + minutes;
    }

    return minutes + ":" + seconds;
  }
}
//only displays one question with 4 possible answers 

function displayQuestions() {
    var displayQuestion = questions[i].question;
    var displayAnswers = questions[i].answers;
    $("#question").html(displayQuestion);
    $("#answer1").html(displayAnswers[0]);
    $("#answer2").html(displayAnswers[1]);
    $("#answer3").html(displayAnswers[2]);
    $("#answer4").html(displayAnswers[3]);
}

function timerStop() {
    clearInterval(intervalId);
}
// setTimeout("checkTime()", 1000);
//runs random gifs if answers are right
function questionAnswerGifsRight (){
    rightAnswerRandom = Math.floor(Math.random()* rightAnswerGifs.length);
    document.getElementById('imgGif').src= rightAnswerGifs[rightAnswerRandom];   
}
//runs random gifs if answers are wrong
function questionAnswerGifsWrong (){
    wrongAnswerRandom = Math.floor(Math.random()* wrongAnswerGifs.length);
    document.getElementById('imgGif').src= wrongAnswerGifs[wrongAnswerRandom];   
}
//displays the questions after start is pressed
$('#start').click(function () {
    timerStop();
    clockRunning = false;
    stopwatch.time= 30;
    i = 0;
    displayQuestions();

    $('.qanda').show();
    $('#timeUp').hide();
    $('#allDone').hide();

    $('#quiz-time-left').text("Time Left: 00:30")
    rightAnswers = 0;
    $('#rAnswers').text(rightAnswers);
    wrongAnswers = 0;
    $('#wAnswers').text(wrongAnswers);
    stopwatch.start();
 });
    
//player selects answer by clicking on button with the class of .button (A,B,C, or D).    
$('.answer').click(function () {

    var answerChosen = $(this).attr('value');
    console.log(answerChosen);
    console.log(questions[i].answers[answerChosen]);
    //if the answer chosen is correct
    if (questions[i].answers[answerChosen] === questions[i].correctAnswer) {
        console.log("Yes");
        rightAnswers++;
        $('#rAnswers').text(rightAnswers);
        //checks to see if there is another question
        if (i < questions.length-1){
            i=i+1;
            displayQuestions();
            questionAnswerGifsRight();
            $("#imgGif").show();
        }
        //if there are no more questions
        else{
            console.log("All Done!");
            timerStop();
            $(".qanda").hide();
            $('#allDone').html("All Done!");
            $('#allDone').show();

        }
    }
    //if answer is wrong
    else {
        console.log("No");
        wrongAnswers++;
        $('#wAnswers').text(wrongAnswers);
        if (i < questions.length-1){
            i=i+1;
            displayQuestions(questions.length);
            questionAnswerGifsWrong();
            $("#imgGif").show();
        }
        else{
            console.log("All Done!");
            timerStop();
            $(".qanda").hide();

        }
    }
    
})



// setInterval(function() {
      
//   // var minutes = Math.floor(counter/60);
//   // var seconds = counter % 60;
//   // counter--;
//    if (counter >= 0) {
//       span = document.getElementById("quiz-time-left");
    
//       span.innerHTML = "Time Left: " + minutes + ":" + seconds;
//    }
//    if (counter === 0) {
//       alert('sorry, out of time');
//       clearInterval(counter);
//     }
//   }, 1000);






// $("#a").click(function () {
//     console.log(questions[i].answers[0]);
//     if (questions[i].answers[0] === questions[i].correctAnswer)
//         console.log("Yes");
//     else {
//         console.log("No");
//     }
// })
// $("#b").click(function () {
//     console.log(questions[i].answers[1])
//     if (questions[i].answers[1] === questions[i].correctAnswer)
//         console.log("Yes");
//     else {
//         console.log("No");
//     }

// })
// $("#c").click(function () {
//     console.log(questions[i].answers[2])
//     if (questions[i].answers[2] === questions[i].correctAnswer)
//         console.log("Yes");
//     else {
//         console.log("No");
//     }

// })
// $("#d").click(function () {
//     console.log(questions[i].answers[3])
//     if (questions[i].answers[3] === questions[i].correctAnswer)
//         console.log("Yes");
//     else {
//         console.log("No");
//     }

// })

// })


//Player has 15 seconds to answer each question correctly
var timer

//If player answers correctly there is a screen that congratulates them and next question displays after a few seconds

//If player chooses wrong answer then a tell the player they are wrong and show the right answer, then display the next question after a few seconds

//If the time runs out then tell the player that time is up and display the correct answer then display a new question after a few seconds

//Game ends when all questions have been asked

//show an end screen with the amount of right and wrong answers and button to restart
