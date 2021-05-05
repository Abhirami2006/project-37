var gameState = 0;
var canvas;
var PLAY = 1;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  
}
