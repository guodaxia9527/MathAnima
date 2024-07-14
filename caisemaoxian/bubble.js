class Bubble{
    constructor(x,y,r,col,col_s){
        this.x=x;
        this.y=y;
        this.r=r;
        this.col=col;
        this.col_stroke=col_s;

    }
    rollover(x,y){
        var dis=dist(x,y,this.x,this.y);
        if(dis<=this.r){
            return true;
        }
        return false;
    }
    move(){
        this.x=this.x+random(-5,5);
        this.y=this.y+random(-5,5);
        // if(this.r>0){
        //     this.r-=1;

        // }
    }
    show(){
        //noStroke();
        stroke(this.col_stroke);
        fill(this.col);
        ellipse(this.x,this.y,2*this.r);
    }
  }