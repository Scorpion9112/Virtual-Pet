//Create variables here
var Dog,dogHappy
var Database
var foodS,foodStock
function preload(){
  dl = loadImage("images/dogImg.png");
  dl2=loadImage("images/dogImg1.png")
}

function setup(){
  createCanvas(500, 500);
  database=firebase.database()
  var foodStock=database.ref('Food')
  foodStock.on('value',readStock)
  dog=createSprite(250,250,200,200)
  dog.addImage(dl)
  dog.scale=.5
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dl2)
}
}
function readStock(data){
  foodS=data.val()
  }
function writeStock(x){
  if(x<=0){
x=0;
  }    
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
})
}



