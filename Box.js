class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      friction:2
    }
    super(x,y,width,height);
    fill("blue");
    this.Visiblity = 255;
    }



 display(){
  // console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 100, 100);
     pop();
   }
   
 }


}
