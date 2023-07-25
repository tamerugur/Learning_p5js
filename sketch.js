let stars = [];

class Star {
  constructor() {

    this.x = random(-windowWidth, windowWidth);
    this.y = random(-windowHeight, windowHeight);
    this.z = random(0,windowWidth);
    this.pz = this.z;
  }


  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, windowWidth);
    let sy = map(this.y / this.z, 0, 1, 0, windowHeight);

    let r = map(this.z, 0, windowWidth, 4, 0);

    let px = map(this.x / this.pz, 0, 1, 0, windowWidth);
    let py = map(this.y / this.pz, 0, 1, 0, windowHeight);

    this.pz = this.z;

    stroke(random(255), random(255), random(255));
    strokeWeight(r);
    line(px, py, sx, sy);

  }
  update() {
    this.z = this.z - 10;
    if(this.z < 1){
      this.z = windowWidth;
      this.x = random(-windowWidth, windowWidth);
      this.y = random(-windowHeight, windowHeight);
      this.pz = this.z;
    }
    
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10000; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  for(let i = 0; i < 10000; i++){
    stars[i].update();
    stars[i].show();
  }

}


