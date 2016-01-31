class CharBehaviour extends Sup.Behavior {
  
  update() {
    
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies())
    
    let {width, height} = Sup.Game.getScreenRatio();
    
    let velocity = this.actor.arcadeBody2D.getVelocity()
    
    if(this.actor.arcadeBody2D.getTouches().left) {
      velocity.x = 0
    } else if (Sup.Input.isKeyDown("LEFT")) {
      velocity.x = -0.05
      this.actor.spriteRenderer.setAnimation("LeftMovement", false);
    }
    else if (Sup.Input.isKeyDown("RIGHT")) {
      velocity.x = 0.05
      this.actor.spriteRenderer.setAnimation("RightMovement", false);
    } else if (Sup.Input.isKeyDown("UP")) {
      velocity.y = 0.05
      this.actor.spriteRenderer.setAnimation("UpMovement", false);
    } else if (Sup.Input.isKeyDown("DOWN")) {
      velocity.y = -0.05
      this.actor.spriteRenderer.setAnimation("DownMovement", false);
    } else {
      velocity.x = 0
      velocity.y = 0
      this.actor.spriteRenderer.setAnimation("NoMovement")
    }
    
    this.actor.arcadeBody2D.setVelocity(velocity)
      
  }
}
Sup.registerBehavior(CharBehaviour);

Sup.Input.goFullscreen()

Sup.loadScene("Main");

/*
class GameBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    
  }
}
Sup.registerBehavior(GameBehavior);
*/