function setup() {
  // put setup code here
createCanvas(800, 400);
background(240);
strokeWeight(5);
angleMode(DEGREES);

}

function draw() {
fill (180);
beginShape();
vertex(50, 100);
vertex(100, 150);
vertex(280, 130);
vertex(295, 115);
vertex(300, 70);
vertex(340, 130);
vertex(420, 150);
vertex(460, 180);
vertex(405, 190);
vertex(450, 200);
vertex(350, 220);
vertex(310, 250);
vertex(315, 220);
vertex(200, 210);
vertex(190, 220);
vertex(180, 210);
vertex(100, 175);
vertex(50, 210);
vertex(75, 162);
vertex(50, 100);
endShape();
fill(0)
noStroke();
ellipse(410, 165, 12, 9)

noFill();
stroke(0);
strokeWeight(2);
arc(350, 180, 30, 30, 125, 255);
arc(340, 180, 30, 30, 125, 255);
arc(330, 180, 30, 30, 125, 255);
}
