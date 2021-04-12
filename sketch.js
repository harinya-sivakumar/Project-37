var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    question.hide();
    quiz.play();
  }
}

//Output

//gameState = 0

//Question:- What starts and ends with the letter ‘E’, but has only one letter?
//1. Everyone
//2. Envelope
//3. Estimate
//4. Example

//gameState = 1

//Result of the Quiz :
//   * NOTE: The contestants who answered correctly are highlighted in green! *
