var tree ;
var treeImg;
var swordImg;
var charaterImg;
var backgroundImg;
var sword;
hungerNum = 9;
var hunger ;
var a;
var b;
var ground;
var PC;
function preload(){
 treeImg = loadImage("Tree.png");
swordImg = loadImage("sword.png");
charaterImg = loadImage("character.png");
backgroundImg = loadImage("background2.png")
}
function setup(){
    createCanvas(500,500);
    createEdgeSprites();
ground = createSprite(250,480,1000,20);
ground.visible = false;
tree = createSprite(250,400,20,20);
tree.addImage("tree", treeImg)
tree.scale = 0.2;
PC = createSprite(20,380,20,30);

 hunger = createSprite(400,100,90,30);
 a = createSprite(100,100,10,10);
a.velocityX = 5;
a.visible = false;

tree.collide(ground);


}
function draw(){
background(backgroundImg);

fill("red");
text ("hunger:"+ hungerNum,400,50);
if(a.isTouching(hunger)&& hungerNum > 0){
    hunger.width -= 10;
    a.destroy();
    a = createSprite(100,100,10,10);
    a.velocityX = 5;
    a.visible = false;
    hungerNum = hungerNum-1;
}
PC.velocityX = 0;
PC.velocityY = 0;
PC.collide(ground);
if (keyDown(RIGHT_ARROW)){
PC.velocityX = 3;


}
if (keyDown(LEFT_ARROW)){
    PC.velocityX = -3;
    
    
    }
    if(keyDown(UP_ARROW)){
PC.velocityY = -4;
        
    }
    
    PC.velocityY = PC.velocityY + 2

    
if(keyCode === 67){
tree.destroy();
Sword();


}






drawSprites();
}

function Sword(){
    sword = createSprite(250,430,20,20);
sword.addImage("sword", swordImg);
sword.scale = 0.08;

if (sword.isTouching(PC)){

    PC.addImage("PC",charaterImg);
    PC.scale = 0.2;
    sword.destroy();
    
    }


}