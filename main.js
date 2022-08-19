function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

song="";

function preload()
{
    song=loadSound("music.mp3" , "music2.mp3");
}

function draw()
{
image(video, 0,0,600,530);
}





