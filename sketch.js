var axe , axeAnimation,axe2Array=[];
var player ,score = 0;
var throwingSound;
var logsArray=[];
var birdAnimation;
var birdsArray=[];

function preload(){
axeAnimation = loadAnimation("frame_00_delay-0.03s.gif","frame_01_delay-0.03s.gif","frame_02_delay-0.03s.gif","frame_03_delay-0.03s.gif","frame_04_delay-0.03s.gif","frame_05_delay-0.03s.gif","frame_06_delay-0.03s.gif","frame_07_delay-0.03s.gif","frame_08_delay-0.03s.gif","frame_09_delay-0.03s.gif","frame_10_delay-0.03s.gif","frame_11_delay-0.03s.gif","frame_12_delay-0.03s.gif","frame_13_delay-0.03s.gif","frame_14_delay-0.03s.gif","frame_15_delay-0.03s.gif","frame_16_delay-0.03s.gif","frame_17_delay-0.03s.gif","frame_18_delay-0.03s.gif","frame_19_delay-0.03s.gif","frame_20_delay-0.03s.gif","frame_21_delay-0.03s.gif","frame_22_delay-0.03s.gif","frame_23_delay-0.03s.gif","frame_24_delay-0.03s.gif","frame_25_delay-0.03s.gif","frame_26_delay-0.03s.gif","frame_27_delay-0.03s.gif","frame_28_delay-0.03s.gif","frame_29_delay-0.03s.gif")
axeImage = loadImage ("axe.gif")
background2 = loadImage("download.jpg")   
throwingSound = loadSound("throwing_axe.mp3")
birdAnimation = loadAnimation("bird-1.gif","bird-2.gif","bird-3.gif","bird-4.gif","bird-5.gif","bird-6.gif","bird-7.gif","bird-8.gif")
hittingSound = loadSound("hitting.mp3")
 }

function setup() {
  createCanvas(displayWidth,displayHeight-120);
  
  axe = createSprite(displayWidth/2+580,200,50,50);
  axe.addAnimation("static",axeImage);
  
  axe.scale=0.30;
  player = createSprite(displayWidth/2+600,300,1,1);
  
}

function draw() {
  background(background2);
  axe.y = player.y;
  player.y = mouseY;
  if(keyDown("space")&&axe2Array.length===0){
    throwingSound.play();
    throwAxe()
  
  }
  textSize(30);
  stroke("orange")
  fill("purple")
  strokeWeight(5)
  text("SCORE:"+score,400,40);
  //destroy axe2 after some time
  for(var i=0;i<axe2Array.length;i++){
    if(axe2Array[i].x<100){
      axe2Array.pop(axe2Array[i])
    //  axe2Array[i].destroy();
    }
  }
  if(World.frameCount%60===0){
   log=new Log();
   logsArray.push(log.body);
   log.display();
  }
  for(var i=0;i<logsArray.length;i++){
    for(var j=0;j<axe2Array.length;j++){
    if(axe2Array[j].isTouching(logsArray[i])){
      axe2Array[j].destroy();
      axe2Array.pop(axe2Array[j])
      logsArray[i].destroy();
      hittingSound.play();
      score=score+1;
    }
  }
  }
  if(World.frameCount%60===0){
    bird=new BIRD();
   birdsArray.push(bird.body); 
    bird.display();
   }
   for(var i=0;i<birdsArray.length;i++){
    for(var j=0;j<axe2Array.length;j++){
    if(axe2Array[j].isTouching(birdsArray[i])){
      axe2Array[j].destroy();
      axe2Array.pop(axe2Array[j])
      birdsArray[i].destroy();
      hittingSound.play();
      score=score-1;
    }
  }
  }

  drawSprites();
}
function throwAxe(){
  var axe2 = createSprite(displayWidth/2+580,player.y,50,50);
  axe2.addAnimation("rolling",axeAnimation);
  axe2.velocityX=-30
  axe2.scale=0.30;
  //axe2.lifetime=100;
  axe2Array.push(axe2);
 // axe2.debug = true;
  axe2.setCollider("rectangle",0,0,150,150);
}