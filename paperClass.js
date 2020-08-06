class Paper {
    constructor(x, y, r) {
       var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.x = x;
       this.y = y;
       this.r = r;
     this.body = Bodies.circle(this.x, this.y, this.r, options);
     this.image = loadImage("sprites/paper.png");
     World.add(world, this.body);
    

    }
    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.x, this.y, this.r );
       

    }
}