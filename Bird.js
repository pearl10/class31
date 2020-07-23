class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
     var place=this.body.position;
      

    super.display();
    if(this.body.speed>10 && place.x>200){
      var pos=[place.x,place.y];
      this.trajectory.push(pos)
    }
   
    for(var i =0;i<this.trajectory.length;i++){

      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
