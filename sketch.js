var gameState=0;
var playerCount;
var database;
var allPlayers;
var distance=0;

var form,game,player;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
}




