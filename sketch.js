var hungryDog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  happyDog = loadImage("images/doglmg.png");
  hungryDog = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  happyDog = createSprite(250,250,10,10);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happydog.addImage(hungryDog);
  }
  text("value:10",250,230);
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS-data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



