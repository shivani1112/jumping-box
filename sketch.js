var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    jumpingBox = createSprite(random(20,750),300,50,50);
    jumpingBox.shapeColor = "white";
    jumpingBox.velocityX = -9;
    jumpingBox.velocityY= 9;


    //create box sprite and give velocity

    s1 = createSprite(100,550,200,30);
    s1.shapeColor = "yellow";
    s2 = createSprite(310,560,200,30);
    s2.shapeColor = "pink";
    s3 = createSprite(520,560,200,30);
    s3.shapeColor = "red";
    s4 = createSprite(730,560,200,30);
    s4.shapeColor = "blue"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    jumpingBox.bounceOff(edges);
    if(s1.isTouching(jumpingBox)&& jumpingBox.bounceOff(s1)){
        jumpingBox.shapeColor = "yellow";
        music.play();
    }
    if(s2.isTouching(jumpingBox)&& jumpingBox.bounceOff(s2)){
        jumpingBox.shapeColor = "pink";
       
       music.stop();
    }
    if(s3.isTouching(jumpingBox)&& jumpingBox.bounceOff(s3)){
        jumpingBox.shapeColor = "red";
    }
    if(s4.isTouching(jumpingBox)&& jumpingBox.bounceOff(s4)){
        jumpingBox.shapeColor = "blue";
    }
    
    //jumpingBox.bounceOff(s1);
    //jumpingBox.bounceOff(s2);
    //jumpingBox.bounceOff(s3);
    //jumpingBox.bounceOff(s4);    
    drawSprites();

//add condition to check if box touching surface and make it box

    jumpingBox.display();
    s1.display();
    s2.display();
    s3.display();
    s4.display();
}
