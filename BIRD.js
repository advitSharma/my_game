class BIRD{
    constructor(){
     this.body =createSprite (100,100,15,15);
     this.body.velocityX = 9
     this.body.y = random(100,600)
     this.body.scale=0.3
     //this.body.debug = true;
     this.body.lifetime = 150
     this.body.addAnimation("birdFlying",birdAnimation);
    }
    
    display(){
        drawSprites();
          
    }
    
    }