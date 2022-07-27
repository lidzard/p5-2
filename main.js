function preload()
{

}
function setup()
{
canvas = createCanvas(600, 500);
canvas.center();
cam = createCapture(VIDEO);
cam.hide();
}
function draw()
{

image(cam, 0, 0, 600, 500);
noFill();
stroke("red");
strokeWeight(20);
rect(50, 50, 500, 400);
fill("black")
circle(50, 50, 50)
circle(550, 50, 50)
circle(550, 450, 50)
circle(50, 450, 50)
}

function takeSnap()
{
    save("
    cam.png");
    console.log("snap taken");
}