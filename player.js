class Player{
    constructor(z){
       this.player;
       this.xdir = 30;
       this.ydir = 250;
       this.zdir = z

       this.playermodel = loadModel("spaceCraft.obj",true);
    }

    fall(){
      if(this.ydir < 250){
        this.ydir += 3;
      }else if(this.ydir === 250){
        this.ydir += 0;
      }
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }

    display(){
      colorMode(RGB);
      push();
      scale(0.8);
      translate(this.xdir,this.ydir,this.zdir);
      rotateX(millis()/500)
      fill(100,100,100);
      stroke(51);      
      model(this.playermodel);
      pop();
    }
}