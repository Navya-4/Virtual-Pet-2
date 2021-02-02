//Create variables here

var dog,dogImg,dogImg2, happyDog;
var database;
var food, foodStock;

var database;

function preload()
{
  dogImg2 = loadImage ("images/dogImg1.png")
  dogImg = loadImage ("images/dogImg.png")
}

function setup() {
  database = firebase.database()
	createCanvas(500, 500);
  
  dog = createSprite (250,250,50,50)
  dog.scale = 0.2;
  dog.addImage (dogImg)

foodStock = database.ref("Food")
foodStock.on("value",readStock)

}


function draw() {  
background  ("beige")
if (keyWentDown (UP_ARROW)){
  writeStock(food)
  dog.addImage (dogImg2)
}
  
  drawSprites();
  //add styles here
text("Food Remaining :"+ food, 200,100)
text("Note: Press up arrow key to feed the dog", 150,400)

}

function readStock (data){
  
food = data.val()
  
}

function writeStock (x){
if (x <= 0){
  x = 0;
}
else {
  x = x-1;
}
database.ref ("/").update({
  Food : x
})
}

