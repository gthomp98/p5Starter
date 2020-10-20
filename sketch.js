class Planet {


    constructor() {
    this.position = createVector(random(0,500),random(0,500));
    this.radius   = random(5,22);
    this.speed = createVector(random(-2.5,2.5),random(-2.5,2.5));
      this.fast     = round(random(0,1));
    }
  
    render() {
      
      this.fast ? fill(255,0,0) : fill(0,0,255);
      ellipse(this.position.x,this.position.y,this.radius*2);
      

    }
  
    step() {
  
      (this.position.x > width || this.position.x<0) ?
      this.speed.x *= -1 :
      this.speed.x = this.speed.x;
      this.position.x = this.position.x +this.speed.x;

      (this.position.y > height || this.position.y<0) ?
      this.speed.y *= -1 :
      this.speed.y = this.speed.y;

      this.position.y = this.position.y +this.speed.y;
  
    }
  
  }
  
  let planets=[];
  
  function setup(){
    createCanvas(500,500);
    makePlanetArray(50);
    //noLoop();
  }
  
  
  function draw() {
    background(0,0,0)
    planets.forEach(planet => {
      planet.render();
      planet.step();
    });

    let numOnRight = planets.filter(planet=>planet.position.x > width/2);
    let total = numOnRight.reduce((totalArea,planet)=> totalArea + (pow(planet.radius,2)*PI))
    console.log(total);
  }
  
  function makePlanetArray(_numOfPlanets) {
    for (let i=0; i <_numOfPlanets; i++) {
      planets.push(new Planet())
    }
  }