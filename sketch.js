
var gameOver, gameOverImg;
var bg;
var knife, knifeImg;
var laser, laserImg;
var machine, machineImg;
var diamondImg, diamond;
var key1Img, key1;
var doorkey1;
var doortreasure1;
var ringImg, ring;
var moneyImg, money;
var sackImg, sack;
var treasure, CtreasureImg, OtreasureImg, EtreasureImg;
var notes, notesImg;
var potion, potionImg;
var potion2, potion2Img;
var potion3, potion3Img;
var musicImg, music;
var thief, thiefwalkingD, thiefstandingDR, thiefwalkingL, thiefstandingLR;
var thiefwalkingR, thiefstandingRR, thiefwalkingU, thiefstandingUR;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22;
var doorkey, door2, door3, door4, door5, door6, door7, doortreasure;

var score = 0;
var treasures = 0;
var lives = 3;
var PLAY;
var END;
var gameState = PLAY;



function preload(){
  gameOverImg = loadImage("gameOver.png");
  bg = loadImage("Map.jpg");
  knifeImg = loadImage("knife.png");
  laserImg = loadImage("laser.png");
  machineImg = loadImage("machine.png");
  diamondImg = loadImage("diamond.png");
  key1Img = loadImage("key.png");
  ringImg = loadImage("ring.png");
  moneyImg = loadImage("money.png");
  sackImg = loadImage("sack.png");
  CtreasureImg = loadImage("closetreasure.png");
  OtreasureImg = loadAnimation("opentreasure.png");
  EtreasureImg = loadAnimation("emptytreasure.png");
  notesImg = loadImage("notes.png");
  potionImg = loadImage("potion.png");
  potion2Img = loadImage("potion2.png");
  potion3Img = loadImage("potion3.png");
  musicImg = loadImage("music.png");
  thiefwalkingD = loadAnimation("thiefDL.png","thiefDR.png");
  thiefstandingDR = loadAnimation("thiefDR.png");
  thiefwalkingL = loadAnimation("thiefLL.png","thiefLR.png");
  thiefstandingLR = loadAnimation("thiefLR.png");
  thiefwalkingR = loadAnimation("thiefRL.png","thiefRR.png");
  thiefstandingRR = loadAnimation("thiefRR.png");
  thiefwalkingU = loadAnimation("thiefUL.png","thiefUR.png");
  thiefstandingUR = loadAnimation("thiefUR.png");

}

function setup() {
  createCanvas(1200,700);

  /*gameOver = createSprite(580,350);
  gameOver.addImage('gameOver.png', gameOverImg);
  gameOver.scale = 0.9;
  gameOver.visible = true;*/

  thief = createSprite(570,630);
  thief.addAnimation("thiefUR.png", thiefstandingUR);
  thief.scale = 0.7;
  thief.setCollider("circle",0,0,20);

  knife = createSprite(400,165);
  knife.addImage("knife.png", knifeImg);
  knife.scale = 0.2;
  knife.debug = true;
  knife.setCollider("rectangle",0,0,300,100);
 
  laser = createSprite(834,108);
  laser.addImage("laser.png", laserImg);
  laser.scale = 0.3;

  laser1 = createSprite(834,118);
  laser1.addImage("laser.png", laserImg);
  laser1.scale = 0.3;

  laser2 = createSprite(834,128);
  laser2.addImage("laser.png", laserImg);
  laser2.scale = 0.3;

  machine  = createSprite(974,110);
  machine.addImage("machine.png", machineImg);
  machine.scale = 0.2;

  diamond = createSprite(random(473,670),352);
  diamond.addImage("diamond.png", diamondImg);
  diamond.scale = 0.1;
  diamond.setCollider("rectangle", 0,0, 40,40);
  diamond.visible = false;

  ring = createSprite(random(473,670),282);
  ring.addImage("ring.png", ringImg);
  ring.scale = 0.1;
  ring.setCollider("rectangle", 0,0, 40,40);
  ring.visible = false;
  
  key1 = createSprite(410,80,0,0);
  key1.addImage("key.png", key1Img);
  key1.scale = 0.1;
  key1.visible = false;

  money = createSprite(random(473,670),215);
  money.addImage("money.png", moneyImg);
  money.scale = 0.2;
  money.setCollider("rectangle", 0,0, 40,40);
  money.visible = false;

  sack = createSprite(250,480);
  sack.addImage("sack.png", sackImg);
  sack.scale = 0.3;
  sack.setCollider("rectangle", 0,0, 70,70);

  treasure = createSprite(470,150);
  treasure.addImage("closetreasure.png", CtreasureImg);
  treasure.scale = 0.3;

  notes = createSprite(910,250);
  notes.addImage("notes.png", notesImg);
  notes.scale = 0.3;
  notes.setCollider("rectangle", 0,0, 35,35);

  potion = createSprite(920,340);
  potion.addImage("potion.png", potionImg);
  potion.scale = 0.2;
  potion.setCollider("rectangle", 0,0, 50,50);

  potion2 = createSprite(720,490);
  potion2.addImage("potion2.png", potion2Img);
  potion2.scale = 0.2;
  potion2.setCollider("rectangle", 0,0, 40,40);

  potion3 = createSprite(220,260);
  potion3.addImage("potion3.png", potion3Img);
  potion3.scale = 0.1;
  potion3.setCollider("rectangle", 0,0, 40,40);

  music = createSprite(886,430);
  music.addImage("music.png", musicImg);
  music.scale = 0.1;

  doorkey = createSprite(312,283,75,10);
  doorkey.shapeColor = rgb(222, 7, 28);
  door2 = createSprite(790,281,45,10);
  door2.shapeColor = "blue";
  door3 = createSprite(792,378,45,10);
  door3.shapeColor = "blue";
  door4 = createSprite(696,450,10,35);
  door4.shapeColor = "blue";
  door5 = createSprite(441,450,10,35);
  door5.shapeColor = "blue";
  door6 = createSprite(440,307,10,30);
  door6.shapeColor = "blue";
  door7 = createSprite(696,258,10,30);
  door7.shapeColor = "blue";
  doortreasure = createSprite(696,116,10,35);
  doortreasure.shapeColor = rgb(222, 7, 28);

  wall1 = createSprite(372,47,390,10);
  wall1.shapeColor = 0;
  wall2 = createSprite(760,47,260,10);
  wall2.shapeColor = 0;
  wall3 = createSprite(825,520,265,10);
  wall3.shapeColor = 0;
  wall4 = createSprite(313,520,270,10);
  wall4.shapeColor = 0;
  wall5 = createSprite(182,285,10,475);
  wall5.shapeColor = 0;
  wall6 = createSprite(952,308,10,434);
  wall6.shapeColor = 0;
  wall7 = createSprite(440,170,10,238);
  wall7.shapeColor = 0;
  wall8 = createSprite(440,375,10,100);
  wall8.shapeColor = 0;
  wall9 = createSprite(440,375,10,100);
  wall9.shapeColor = 0;
  wall10 = createSprite(442,495,10,50);
  wall10.shapeColor = 0;
  wall11 = createSprite(696,495,10,50);
  wall11.shapeColor = 0;
  wall12 = createSprite(696,70,10,50);
  wall12.shapeColor = 0;
  wall13 = createSprite(696,187,10,100);
  wall13.shapeColor = 0;
  wall14 = createSprite(696,353,10,150);
  wall14.shapeColor = 0;
  wall15 = createSprite(572,189,255,10);
  wall15.shapeColor = 0;
  wall16 = createSprite(572,378,255,10);
  wall16.shapeColor = 0;
  wall17 = createSprite(725,378,85,10);
  wall17.shapeColor = 0;
  wall18 = createSprite(887,378,140,10);
  wall18.shapeColor = 0;
  wall19 = createSprite(887,281,140,10);
  wall19.shapeColor = 0;
  wall20 = createSprite(727,281,70,10);
  wall20.shapeColor = 0;
  wall21 = createSprite(227,281,90,10);
  wall21.shapeColor = 0;
  wall22 = createSprite(397,283,90,10);
  wall22.shapeColor = 0;
  wall23 = createSprite(919,67,10,85);
  wall23.shapeColor = 0;
  wall23.rotation = 125;
  wall24 = createSprite(480,497,10,85);
  wall24.shapeColor = 0;
  wall24.rotation = 125;
  wall24 = createSprite(660,496,10,85);
  wall24.shapeColor = 0;
  wall24.rotation = 50;
  
  knife.velocityX = 5;
}



function draw() {
  background(bg); 
  
 
 
  drawSprites();
 
  realdraw();

  fill(255);
  textSize(20);
  text("Score: "+ score, 1000, 90);

  fill(255);
  textSize(20);
  text("Treasures: "+ treasures, 1000, 120);

  fill(255);
  textSize(20);
  text("Lives: "+ lives , 1000, 150);
}



function lifeover(){ 
  lives = lives - 1; 
  if(lives>=1) { 
  gameState = PLAY; 
} else if(lives<=0){
  gameState = END; } }

function realdraw(){


  if(gameState === PLAY){

    if(keyWentDown(DOWN_ARROW)){
      thief.velocityY=3;
      thief.addAnimation("walking_D", thiefwalkingD);
      thief.changeAnimation("walking_D");
    }
    else if(keyWentUp(DOWN_ARROW)){
      thief.velocityY=0;
      thief.addAnimation("standing_D", thiefstandingDR);
      thief.changeAnimation("standing_D");
      }  
     if(keyWentDown(UP_ARROW)){
       thief.velocityY=-3;
       thief.addAnimation("walking_U", thiefwalkingU);
       thief.changeAnimation("walking_U");
     }
     else if(keyWentUp(UP_ARROW)){
       thief.velocityY=0;
       thief.addAnimation("standing_U", thiefstandingUR);
       thief.changeAnimation("standing_U");
     }
     if(keyWentDown(RIGHT_ARROW)){
       thief.velocityX=3;
       thief.addAnimation("walking_R", thiefwalkingR);
       thief.changeAnimation("walking_R");
     }
     else if(keyWentUp(RIGHT_ARROW)){
       thief.velocityX=0;
       thief.addAnimation("standing_R", thiefstandingRR);
       thief.changeAnimation("standing_R");
     }
     if(keyWentDown(LEFT_ARROW)){
       thief.velocityX=-3;
       thief.addAnimation("walking_L", thiefwalkingL);
       thief.changeAnimation("walking_L");
     }
     else if(keyWentUp(LEFT_ARROW)){
       thief.velocityX=0;
       thief.addAnimation("standing_L", thiefstandingLR);
       thief.changeAnimation("standing_L");
     }
     
      thief.collide(treasure);
     
      knife.bounceOff(wall7);
      knife.bounceOff(wall5);

     
     if(thief.isTouching(diamond)){
       diamond.remove();
       score = score + 4;
     }
   
     if(thief.isTouching(key1)){
       key1.remove();
       doortreasure.destroy();
       doortreasure1 = createSprite(696,116,10,35);
       doortreasure1.shapeColor = "blue";
       treasure.addAnimation("opentreasure.png",OtreasureImg)
       treasure.changeAnimation("opentreasure.png");
     }
   
     if(thief.isTouching(treasure)){
       treasure.addAnimation("emptytreasure.png",EtreasureImg);
       treasure.changeAnimation("emptytreasure.png");
       treasure.x = 464;
       treasure.y = 160;
       treasures += 190;
     }

     treasure.debug = false;
     treasure.setCollider("rectangle",0,0, 40,40)

     if(thief.isTouching(ring)){
       ring.remove();
       score = score + 3;
     }
   
     if(thief.isTouching(notes)){
       background("lightblue");
       text("Hint:",600,350);
       notes.remove();
       doorkey.destroy();
       doorkey1 = createSprite(312,283,75,10);
       doorkey1.shapeColor = "blue";
       key1.visible = true;
       score = score + 5;
     }

     if(thief.isTouching(money)){
       money.remove();
       treasures += 60;
     }
     if(thief.isTouching(music)){
       music.remove();
       score = score + 2;
     }  
     if(thief.isTouching(sack)){
       sack.remove();
       treasures += 5;
     } 
     if(thief.isTouching(potion)){
       potion.remove();
       score = score + 5;
       money.visible = true;
     }  
     if(thief.isTouching(potion3)){
       ring.visible = true;
       potion3.remove();
       score = score + 6;
     }  
     if(thief.isTouching(potion2)){
       potion2.remove();
       score = score + 2;
       diamond.visible = true;
     }

     if (thief.isTouching(doorkey)){
      thief.bounceOff(doorkey);
     }
   
     if (thief.isTouching(doortreasure)){
      thief.bounceOff(doortreasure);
     }
     
     
     if (thief.isTouching(wall1)||thief.isTouching(wall2)||
     thief.isTouching(wall3)||thief.isTouching(wall4)||
     thief.isTouching(wall5)||thief.isTouching(wall6)||
     thief.isTouching(wall7)||thief.isTouching(wall8)||
     thief.isTouching(wall9)||thief.isTouching(wall10)||
     thief.isTouching(wall11)||thief.isTouching(wall12)||
     thief.isTouching(wall13)||thief.isTouching(wall14)||
     thief.isTouching(wall15)||thief.isTouching(wall16)||
     thief.isTouching(wall17)||thief.isTouching(wall18)||
     thief.isTouching(wall19)||thief.isTouching(wall20)||
     thief.isTouching(wall21)||thief.isTouching(wall22)||
     thief.isTouching(wall23)||thief.isTouching(wall24)){
     thief.collide(wall1);
     thief.collide(wall2);
     thief.collide(wall3);
     thief.collide(wall4);
     thief.collide(wall5);
     thief.collide(wall6);
     thief.collide(wall7);
     thief.collide(wall8);
     thief.collide(wall9);
     thief.collide(wall10);
     thief.collide(wall11);
     thief.collide(wall12);
     thief.collide(wall13);
     thief.collide(wall14);
     thief.collide(wall15);
     thief.collide(wall16);
     thief.collide(wall17);
     thief.collide(wall18);
     thief.collide(wall19);
     thief.collide(wall20);
     thief.collide(wall21);
     thief.collide(wall22);
     thief.collide(wall23);
     thief.collide(wall24);
     }

     laser.debug = true;
     laser.setCollider("rectangle",0,0,900,10);

     laser1.debug = true;
     laser1.setCollider("rectangle",0,0,900,10);

     laser2.debug = true;
     laser2.setCollider("rectangle",0,0,900,10);

    if(thief.collide(laser)||thief.collide(laser1)||thief.collide(laser2)||thief.collide(knife)){
      lifeover();
      gameState = END;
    }
    }
    else if(gameState === END){
     thief.velocityX = 0;
     thief.velocityY = 0;
     knife.velocityX = 0;

     gameOver.visible = true;
    }
  }

  