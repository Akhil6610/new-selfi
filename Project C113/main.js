function preload() {
}

function setup() {
canvas = createCanvas(300, 300);
canvas.position (800,250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw() {
image(video, 0, 0, 640, 480);
}

function take_snapshot() {
save('My_Selfie.png')
}