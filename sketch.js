var fR,mR;
function setup() {
  createCanvas(800,400);
  fR= createSprite(400, 200, 150, 200);
  fR.debug=true;
  fR.shapeColor="green"
  //fR.velocityX=-1;

  mR= createSprite(200, 200, 50, 100);
  mR.debug=true;
  mR.shapeColor="green"
  //mR.velocityX=2;
}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

  console.log("distance between centers"+(mR.x-fR.x));
  console.log("sum of their half widths" +(mR.width+fR.width)/2);

  if((mR.x-fR.x)<=(mR.width+fR.width)/2 && (fR.x-mR.x)<=(mR.width+fR.width)/2
    && (mR.y-fR.y)<=(mR.height+fR.height)/2&& (fR.y-mR.y)<=(mR.height+fR.height)/2) {
    mR.shapeColor="red";
    fR.shapeColor="red";
  }else {
    mR.shapeColor="green";
    fR.shapeColor="green";
  }
  /*
 if((mR.x-fR.x)<=(mR.width+fR.width)/2 && (fR.x-mR.x)<=(mR.width+fR.width)/2) {
   mR.velocityX *= -1;
   fR.velocityX *= -1;
 }
if((mR.y-fR.y)<=(mR.height+fR.height)/2&& (fR.y-mR.y)<=(mR.height+fR.height)/2){
  mR.velocityY *= -1;
   fR.velocityY *= -1;
}*/
  drawSprites();
}