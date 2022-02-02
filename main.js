function setup(){
    canvas = createCanvas(600,600);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.size(600,600);
    video.position(100,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet has been loaded');
}

function gotPoses(results){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}

function darw(){
    background("#5196e3");
    textSize(differnce);
    fill("red");
    text('Shubha', 50,500);
    document.getElementById("square_sides").innerHTML = "Font size of the text will be = "+difference+"px";

}