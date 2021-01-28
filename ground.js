class Ground{
constructor(a,b,c,d){
    this.width = c
    this.height= d
  var option = {
      isStatic:true
  }
    this.body = Bodies.rectangle(a,b,this.width,this.height,option);
 World.add(world,this.body);
}
display(){
    var position = this.body.position
 rectMode(CENTER)
 fill(255);
 rect(position.x,position.y,this.width,this.height);
}
}
