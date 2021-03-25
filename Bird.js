class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x>15){
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
 //console.log(this.trajectory)
 for(var i=0; i<this.trajectory.length; i++){
  image(this.img, this.trajectory[i][0], this.trajectory[i][1]);
}
  }
}
