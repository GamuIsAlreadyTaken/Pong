

let solidObjects;

let barraL;
let barraR;
let bola;
let powerup;
let time;
function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
    fill(255);
    textSize(700);
    textAlign(CENTER, CENTER);
    ellipseMode(CORNER);


    barraL = new Pad(20, 140, [83, 87]);
    barraR = new Pad(width - 60, 140, [40, 38]);

    bola = new Ball(300, 200, -50, 0, barraL);

    solidObjects = [barraL, barraR];
    powerup = new PowerUp();

}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function draw() {

    blendMode(BLEND);
    background(0);
    rect(width / 2, 0, 20, height);
    blendMode(DIFFERENCE);

    barraL.move();
    barraR.move();
    bola.move();
    powerup.collide();
    


    bola.points(barraL, barraR);

    barraL.draw();
    barraR.draw();
    bola.draw();
    powerup.draw();



}