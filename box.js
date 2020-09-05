class Box {
    constructor(x, y, width, height,c,n) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.c = c;
      this.n = n;
      this.visibility = 100
      World.add(world, this.body);
      this.l = 0;
    }
    
    display(){
      
     if(this.body.speed < 8 && this.l === 0){
      //Settings
      var ang = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(ang);
      rectMode(CENTER);
      //adding text and rect
      textSize(10);
      fill(this.c);
      rect(0,0, this.width, this.height);
      fill("black");
      text(this.n,-10,10);
      pop();
      
    }else{
     //remove and block diappearing the blocks
      World.remove(world,this.body);
      push();
      if(this.visibility < 0 && this.visibility > -105){
        score++
      }
      if(this.l === 0){
        block++
      }
      this.visibility = this.visibility - 10;
      if(this.visibility > 50){
      fill("rgba(255,255,255,0.5)");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
      this.l = 1;
      pop();
      
      }
    }
  }
  