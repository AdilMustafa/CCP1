//click on the right side of the canvas to drink posion. your life will decrease which is demonstrated ny the health bar.
//click on the left side and you will gain health using posion.

//we create global variable for this specific animation.

var mgr;
var Potion;
var p1;
var p2;
var direction = 0.5
var next;
var controls;
var cC;
var volHist = []
var health = 255
var diam = 70
var val = 0
var life = []
var killing = false;
var isPressed=false;

function preload() {
    //---------------PRELOAD ANIMATIONS-----------------////
    //we preload animation 1 and stor it to p1. We will then use it to call this variable in scene 1
    p1 = loadAnimation('../../assets/Potion/potion_title1.png', '../../assets/Potion/potion_title2.png');
    //this preloads the controls animation which we will locate on the top left of the screen in scene2
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Click.png');

    //----------------PRELOAD SOUND FILES---------------///
    song = loadSound('../../assets/sound/intro1.wav');

}



function setup() {
    //we create a canvas with the dimenstion 900(width),600(height)
    cC = createCanvas(900, 600);
    //this links it to the parent HTML
    cC.parent('wep3');


    //-------------LOAD SOUND FILES-------///
    potion = loadSound('../../assets/sound/potion1.wav');
    potion2 = loadSound('../../assets/sound/potion2.wav');
    over = loadSound('../../assets/sound/over.wav');
    poisoned = loadImage('../../assets/background/poisoned.jpg')
    healthImg = loadImage('../../assets/background/health.png')




    //new scene manager functions
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();

    //we create a new sprite in the sentre of the canvas(450,300)
    p2 = createSprite(width / 2, height / 2);
    //we add the primary animation by locating through the folder and acessing the potion. The folder contains multiple state pof the animations which creates a life like aniamtions.
    p2.addAnimation('../../assets/Potion/potion1.png', '../../assets/Potion/potion2.png', '../../assets/Potion/potion3.png', '../../assets/Potion/potion4.png', '../../assets/Potion/potion5.png', '../../assets/Potion/potion6.png', '../../assets/Potion/potion7.png', '../../assets/Potion/potion8.png', '../../assets/Potion/potion9.png', '../../assets/Potion/potion10.png', '../../assets/Potion/potion10.png', '../../assets/Potion/potion11.png', '../../assets/Potion/potion12.png', '../../assets/Potion/potion13.png', '../../assets/Potion/potion14.png', '../../assets/Potion/potion15.png', '../../assets/Potion/potion16.png', '../../assets/Potion/potion17.png', '../../assets/Potion/potion18.png', '../../assets/Potion/potion19.png');


    //we create a variable called amp which uses p5.sound library to get the amiplitude of the current sound.
    amp = new p5.Amplitude();



}

function draw() {

    //we will draw our animation here.
    mgr.draw();

    if (health > 10) {
        life.splice(0, 1)
    }


}


function SceneOne() {
    this.setup=function(){
        isPressed=false;
        song.play()
    }

    this.draw = function () {
        background(0);
        animation(p1, width / 2, height / 2)

    }

}


function SceneTwo() {
    this.setup = function () {
        //we stop the intro song in scene 2.
        song.stop()
        isPressed=true

    }



    this.draw = function () {
        //set the background to val(val is currently is 0(Black))
        background(val);
        //we call the health function in scene 2 draw only as we do not want it to run in other scenes.
        Health();

        //we load the control animation on the top left of the canvas.
        animation(controls, 200, 150)

        //we create a variable call volume which uses the p5.sound library to get sound input(Volume);
        var volume = amp.getLevel();
        //we add the volume to the VolHIst array which will be used to store and identify each level.
        volHist.push(volume);

        //we create the Volume dancer below by using beginShape functions
        stroke(255, 0, 0);
        beginShape()
        noFill()

        //we calculate the y value in this for loop as the volume is presented on the Y axis not X
        for (var i = 0; i < volHist.length; i++) {
            var y = map(volHist[i], 0, 1, height / 2 + 200, 0)
            vertex(i, y)
        }
        endShape();

        //removes the olders volume when the length of the shape get bigger than the width of the canvas
        if (volHist.length > width)
            //we use splice to remove the first elemt of the array
            volHist.splice(0, 1)
        //we create a white line which tracks the length of the shape from the top of the screen to the bottom.
        stroke(255);
        line(volHist.length, 0, volHist.length, height)

        //if key r is pressed, the animation will rotate -3 degrees anticlockwise
        if (keyDown('r')) {
            p2.rotation -= 3;

        }
        //this will reset its rotation
        if (keyDown('t')) {
            p2.rotation = 0;

        }

        //will zoom into the animation.
        if (keyDown('z')) {
            camera.zoom += 0.01;

        }
        //zoom out
        if (keyDown('x')) {
            camera.zoom -= 0.01;

        }
        //reset zoom
        if (keyDown('c')) {
            camera.zoom = 1;

        }
        if (keyWentUp('q')) {
            direction += 0.1;

        }

        if (keyWentUp('e')) {
            direction -= 0.1;

        }
        //this provides direction information onthe top left of the canvas.
        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()

        //allows the animation to move around with the mouse;
        p2.attractionPoint(direction, mouseX, mouseY);
        p2.maxSpeed = 5
        drawSprites()





    }

}


function Health() {
    //this function stores all the information for health which hhas been called ion (this.draw(SceneTwo)).

    //we have created a variable called health which is equal to 255. this is so we can adjust its shade of the current colour chase for fututre interaction
    fill(0, health, 0)
    for (var i = 0; i < 5; i++) {
        ellipse(width - 100 * i - 50, 80, diam / 2)
        life.push()

    }
    //if the health is greater than 255, we display the full health text 
    if (health >= 255) {
        stroke(health)
        text("FULL HEALTH", width / 2 + 170, 40);
        val = 0
    }
}




function keyPressed() {
    switch (key) {
        case '1':
            //if key 1 is pressed, it will show scene 1 and the intro song will play
            mgr.showScene(SceneOne);
            song.play()
            break;

        case '2':
            //however, if 2 is pressed, this will show scene 2 and stop the intro song.
            mgr.showScene(SceneTwo);
            song.stop()
            break;

    }


}

function Killing1(){
        //mouse pressed function 
    killing = false;
    if (mouseX > width / 2&&isPressed==true) {
        killing = true;
        potion.play();
        health -= 50
        val = 150
    }

    if (health < 5) {
        over.play();
        val = poisoned

    }

    if (mouseX < width / 2&&isPressed==true) {
        val = 255
        health += 50
        potion2.play();
    }
}


function mousePressed() {
    Killing1()
    
}

function mouseReleased() {
    val = 0
}