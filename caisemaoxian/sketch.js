
let bubbles=[];

function setup() {
  createCanvas(800, 800);


for (let i = 0; i < 50; i++) {
  let x=random(width);
  let y=random(height);
  let r=random(10,30);
let col=color(255);
let col_s=color(random(255),random(255),random(255),128);

  bubbles[i]=new Bubble(x,y,r,col,col_s);

}
}

function mousePressed(){
  var bb=new Bubble(mouseX,mouseY,20);
  bubbles.push(bb);
}
function mouseMoved(){

}

function draw() {
  //background(255);
  for (let i = 0; i < bubbles.length; i++) {
    
    bubbles[i].move();
    bubbles[i].show();
  }


}

