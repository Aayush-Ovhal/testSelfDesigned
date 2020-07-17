class Checkpoint{
    constructor(){
       this.x = 20;
       this.y = 1300;
       this.z = -2000;

       this.distance = 0;

    }

    display(){

      push();
      imageMode(CENTER);
      image(this.moon,this.x,this.y,400,400);
      pop();

      console.log("displayed");
    }
}

// moon
// mars 
// jupiter
// saturn 
// uranus
// neptune;
// pluto