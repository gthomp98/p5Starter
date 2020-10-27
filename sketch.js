let planets=[];

function setup() {
  createCanvas(500,500);
  populatePlanetArray(200);
  //noLoop();
}

function draw(){
  background(255);
  planets.forEach(planet => {
    planet.render();
    planet.step();
  });
  let totalArea = planets.filter(planet => planet.ill && planet.position.x > 250)
  .reduce((total,planet) => total + pow(planet.radius,2)*PI,0)

  //console.log(totalArea)
}

function populatePlanetArray(_indexNumber){
  for(let i=0; i<_indexNumber; i++){
    planets.push(new Planet())
  }
}