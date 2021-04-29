var database
var gameState=0;
var form,game,player,playerCount;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game=new Game();
  game.getState()
  game.start();
}

function draw(){

  
}