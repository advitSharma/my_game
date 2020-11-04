class Log{
constructor(){
 this.body =createSprite (100,100,20,20);
 this.body.velocityX = 7+score/2
 this.body.y = random(100,600)
 this.trainingLog = loadImage("log_train.png")
 this.body.scale=0.4
 //this.body.debug = true;
 this.body.setCollider("rectangle",0,0,200,200);
 this.body.lifetime = 150
}

display(){
    drawSprites();
    this.body.addImage("log",this.trainingLog);   
}

}