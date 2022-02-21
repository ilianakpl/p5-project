import Sketch from "react-p5";

export const Page2 = () => {
  let mouseThreshold = 20; // how close can your mouse get to a shape before it moves
  let moveDistance = 10; // how far shapes move away from your mouse
  let snowflakes = []; // array to hold snowflake objects

  function setup(p5, parentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(parentRef);
    p5.fill(240);
    p5.noStroke();

    setGradient(p5.color(0, 0, 0), p5.color(75, 0, 130), p5);
  }

  function setGradient(c1, c2, p5) {
    p5.noFill();
    for (var y = 0; y < p5.height; y++) {
      var inter = p5.map(y, 0, p5.height, 0, 1);
      var c = p5.lerpColor(c1, c2, inter);
      p5.stroke(c);
      p5.line(0, y, p5.width, y);
    }
  }

  function draw(p5) {
    let t = p5.frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (let i = 0; i < p5.random(5); i++) {
      let newFlake = new snowflake(p5);
      newFlake.initiate(t);
      snowflakes.push(new snowflake(p5)); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      // flake.initiate(t); // update snowflake position
      flake.update(t, p5); // update snowflake position
      flake.display(); // draw snowflake
    }
  }

  // snowflake class
  function snowflake(p5) {
    // initialize coordinates

    this.initialangle = p5.random(0, 2 * Math.PI);
    this.size = p5.random(5, 10);

    this.posX = 0;
    this.posY = p5.random(-50, 0);
    this.isEnd = false;

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));

    this.initiate = function (time) {
      let w = 0.6; // angular speed
      let angle = w * 5 + this.initialangle;
      // let angle = w * time + this.initialangle;
      this.posX = p5.width / 2 + this.radius * p5.sin(angle);
    };

    this.update = function (time) {
      let tempX;
      let tempY;

      let w = 0.6; // angular speed
      let angle = w * 5 + this.initialangle;

      let mouseDistance = p5.int(
        p5.dist(this.posX, this.posY, p5.mouseX, p5.mouseY)
      ); // check the distance from your mouse to the shape

      let isPos = p5.mouseX - this.posX;

      if (mouseDistance <= mouseThreshold) {
        // if your mouse gets closer than the threshold...
        p5.lerp(this.posX, 0.2 * time, 0.1);
        this.isEnd = true;
      } else if (this.isEnd === false) {
        // normal, start
        this.posX = p5.width / 2 + this.radius * p5.sin(angle);

        // different size snowflakes fall at slightly different y speeds
        this.posY += p5.pow(this.size, 0.5);
      } else if (this.isEnd) {
        this.posX = this.posX;
        this.posY += p5.pow(this.size, 0.5);
      }

      // delete snowflake if past end of screen
      if (this.posY > p5.height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };

    this.display = function () {
      p5.ellipse(this.posX, this.posY, this.size);
      p5.fill(255);
    };
  }

  return <Sketch setup={setup} draw={draw} />;
};
