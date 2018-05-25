//variables needed 

var rightAnswers = 0;
var wrongAnswers = 0;
var i = -1;
//There are 5 questions 

var questions = [{
    question: "The world’s fastest growing plant is a species of what?",
    answers: ["Bamboo", "Hybiscus", "Red Vine", "Canabis"],
    correctAnswer: "Bamboo"
}, {
    question: "What is the common term for a list of things a person would like to do before they die?",
    answers: ["Shopping List", "To Do List", "Bucket List", "Life Budget List"],
    correctAnswer: "Bucket List"
}, {
    question: "How many sides, in total, would three triangles and three rectangles have?",
    answers: ["16", "21", "9", "NaN"],
    correctAnswer: "21"
}, {
    question: "Which type entertainment has cars but no roads, curves but no figure, and white knuckles??",
    answers: ["Drive-In Movie", "Camping", "Bird Watching", "Roller Coaster"],
    correctAnswer: "Roller Coaster"
}, {
    question: "Which Tasmanian marsupial is known for its fiery temper? ?",
    answers: ["Captin Kangaroo", "Tasmanian Devil", "Howard the Duck", "Pepe Le Pew"],
    correctAnswer: "Tasmanian Devil"
}, {
    question: "How many bones does an adult human have?",
    answers: ["312", "226", "140", "206"],
    correctAnswer: "206"
}]
// console.log(questions[3].question);
//only displays one question with 4 possible answers 

$("#next").click(function () {
    i = i + 1;
    //if all 5 questions displayed and there is still time on clock 
    if (i > 5) {
        console.log("Game Over!");
    }
    else {
        var displayQuestion = questions[i].question;
        var displayAnswers = questions[i].answers;
        $("#question").html(displayQuestion);
        $("#answer1").html(displayAnswers[0]);
        $("#answer2").html(displayAnswers[1]);
        $("#answer3").html(displayAnswers[2]);
        $("#answer4").html(displayAnswers[3]);
    };
})

//player selects answer by clicking on button with the class of .button (A,B,C, or D).    
$('.button').click(function(){
    var answerChosen = $(this).attr('value');
    console.log(answerChosen);
    console.log(questions[i].answers[answerChosen]);
    if (questions[i].answers[answerChosen] === questions[i].correctAnswer){
        console.log("Yes");
        //$('.alert').alert(questions[i].correctAnswer +" is correct!");
    }
      else {
        console.log("No");
      }
})

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


// $.each(questions, function(key, value){
//     console.log(key, ":", value)
// })


//Player has 15 seconds to answer each question correctly

//If player answers correctly there is a screen that congratulates them and next question displays after a few seconds

//If player chooses wrong answer then a tell the player they are wrong and show the right answer, then display the next question after a few seconds

//If the time runs out then tell the player that time is up and display the correct answer then display a new question after a few seconds

//Game ends when all questions have been asked

//show an end screen with the amount of right and wrong answers and button to restart
