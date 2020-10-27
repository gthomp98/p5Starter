class Planet {
    constructor(_indexNumber){
        this.position = createVector(random(0,500),random(0,500));
        this.speed = createVector(random(-2,2),random(-2,2));
        this.radius = random(5,20);
        this.ill = round(random(0,1));
        this.indexNumber = _indexNumber;

    }

    render(){
        this.ill ? fill(255,0,0) : fill(0,255,0);
        ellipse(this.position.x,this.position.y,this.radius *2);

        fill(0);
        textSize(12)
        textAlign(CENTER)
        text(this.indexNumber,this.position.x,this.position.y +5 )
    }
    step(){
        (this.position.x > width || this.position.x < 0) ?
        this.speed.x *= -1 : this.speed.x;

        this.position.x += this.speed.x;

        (this.position.y > width || this.position.y < 0) ?
        this.speed.y *= -1 : this.speed.y;

        this.position.y += this.speed.y;
    }
}
