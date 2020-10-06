class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
  }

 display(){
   var pos = this.body.position;
    console.log(this.body.speed);
   if(this.body.speed < 4){
    super.display();
   }
   else{
    World.remove(world,this.body)

    
   
   }
   
 }



};
  