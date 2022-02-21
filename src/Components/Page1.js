import React from "react";
import Sketch from "react-p5";

export const Page1 = () => {
  // let isBlack = true;

  function setup(p5, parentRef) {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
      parentRef
    );
    p5.background(p5.color("black"));
    // p5.createButton("Change Background");
  }
  let bgcolor = "";

  function draw(p5) {
    p5.background(0);

    bgcolor = p5.color(p5.random(0, 170), p5.random(0, 170), p5.random(0, 170));
    p5.fill(bgcolor);
    p5.noStroke();

    for (let i = 1; i < 100; i++) {
      p5.rotateX(p5.frameCount * 0.0000001);
      p5.rotateY(p5.frameCount * 2);
      star(p5, 100, -i, 5, 70, 3);
    }

    p5.push();
    p5.translate(p5.width * 0.5, p5.height * 0.5);
    p5.rotate(p5.frameCount / 50.0);
    star(p5, 100, 5, 80, 100, 40);
    p5.pop();
    p5.push();
    p5.translate(p5.width * 0.5, p5.height * 0.5);
    p5.rotate(p5.frameCount / -100);

    star(p5, 100, 5, 30, 70, 5);
    p5.pop();
    p5.push();
    p5.translate(p5.width * 0.8, p5.height * 0.5);
    p5.rotate(p5.frameCount / -100.0);
    star(p5, 90, 80, 50, 60, 9);
    p5.pop();

    p5.push();
    p5.translate(p5.width * 1.2, p5.height * 0.9);
    p5.rotate(p5.frameCount / -30);
    star(p5, 200, 50, 30, 90, 11);
    p5.pop();
  }

  function star(p5, x, y, radius1, radius2, npoints) {
    let angle = Math.PI / npoints;
    let halfAngle = angle / 2.0;
    p5.beginShape();
    for (let a = 0; a < Math.PI; a += angle) {
      let sx = x + Math.cos(a) * radius2;
      let sy = y + Math.sin(a) * radius2;
      p5.vertex(sx, sy);
      sx = x + Math.cos(a + halfAngle) * radius1;
      sy = y + Math.sin(a + halfAngle) * radius1;
      p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
  }
  return <Sketch setup={setup} draw={draw} />;
};
