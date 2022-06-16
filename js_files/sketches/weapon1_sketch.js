//we create global variables for the animations.
var song;
var mgr;
var WalkingStick;
var slider
var vol = 1
var WS;
var WS2;
var ws3;
var direction = 0.5;
var next;
var controls;
var cC;
var direction
var val = 0
var volume = 1
var amp;
var volHist = []
var isPressed=false;

function preload() {


    //-----------------LOADING ALL AN INIMATIONS------------////

    //we preload the animatimation so it is ready to run when the html page is run. We call each indavidual animation in order. each animations are located in the assetts/SlingShot folder. we store the animation cinto the variable WP
    WS2 = loadAnimation('../../assets/WalkingStick/PNG/WS_1.png', '../../assets/WalkingStick/PNG/WS_1.png', '../../assets/WalkingStick/PNG/WS_1.png', '../../assets/WalkingStick/PNG/WS_1.png', '../../assets/WalkingStick/PNG/WS_1.png', '../../assets/WalkingStick/PNG/WS_2.png', '../../assets/WalkingStick/PNG/WS_2.png', '../../assets/WalkingStick/PNG/WS_2.png', '../../assets/WalkingStick/PNG/WS_2.png', '../../assets/WalkingStick/PNG/WS_2.png', '../../assets/WalkingStick/PNG/WS_3.png', '../../assets/WalkingStick/PNG/WS_3.png', '../../assets/WalkingStick/PNG/WS_3.png', '../../assets/WalkingStick/PNG/WS_3.png', '../../assets/WalkingStick/PNG/WS_3.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png', '../../assets/WalkingStick/PNG/WS_4.png');

    //we  load the continue aimation and store it to next variable. we will use this in our firt scene with our ws2 animations
    next = loadAnimation('../../assets/Continue/continue.png');
    //we will load animations for control which will be visible in scene 2.
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Click.png');
    backimg = loadImage('../../assets/background/dead.png')


    //-------------ALL SOUND FILES HERE--------////
    song = loadSound('../../assets/sound/intro1.wav');
    //    shots = loadSound('../../assets/sound/flame.wav');


}



function setup() {

    cC = createCanvas(900, 600);
    cC.parent('wep1');

    //we call the new SceneManager function in the setup and we add our scenes to mgr
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();


    //we create a variable called ws3 and use the scene manager library to create a new sprite and locate it to the scenter of the canvas

    ws3 = createSprite(width / 2, height / 2);
    //we add animation to w2,
    ws3.addAnimation('normal', '../../assets/WalkingStick/PNG/walkingStick1.png', '../../assets/WalkingStick/PNG/walkingStick1.png', '../../assets/WalkingStick/PNG/walkingStick1.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick4.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick3.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick2.png', '../../assets/WalkingStick/PNG/walkingStick1.png', '../../assets/WalkingStick/PNG/walkingStick1.png', '../../assets/WalkingStick/PNG/walkingStick1.png');




    //we get amplitude using p5.sound library. we store the values in amp
    amp = new p5.Amplitude();


    //we initiallise the envelope here for the oscilator
    env = new p5.Env();
    env.setADSR(0.001, 0.002, 1, 0.001);
    env.setRange(1, 1);

    //this is our wave for sound. we can change our wave type by simply changing our string argument in 'wave.setType' to 'sawtooth'....
    wave = new p5.Oscillator();
    wave.start();
    wave.setType('sine');
    wave.freq(150)
    wave.amp(env);

    //load sound for the flames
    shots = loadSound('../../assets/sound/flame.wav');

}

function draw() {
    //we minimised the call function which will call all corosponding mgr function(sceneOme,sceneTwo)
    mgr.draw();
}


function keyPressed() {
    if (key == 'f') {
        //        if key is equal to f,we increase the volume by 0.1
        vol += 0.1
    }
    //if key is equal to g, we reduce vol by negative 0.1
    if (key == 'g') {
        vol -= 0.1
    }
}

function SceneOne() {
    this.setup = function () {
        song.play()
        song.setVolume(0.5)
       
    }


    this.draw = function () {

        background(0);
        animation(WS2, width / 2, height / 2)
        animation(next, width / 2, height / 10)

    }

}


function SceneTwo() {
    //this is the setup of the first scene animation. This is the firt scene users will see when they select any of the javascript animations on our weapons or vehicle pages

    this.setup = function () {
          isPressed=true

    }


    this.draw = function () {
        //set the backfround to black so when we load other background based on user input, it will change.
        background(val);
        //we call the WP function which will display the WP animation on the centre of the canvas
        animation(controls, 200, 150);
      

        //we create a variable called volume which recieves the volume. we then push the result into a volHist array
        var volume = amp.getLevel();
        volHist.push(volume);
        stroke(255, 0, 0);
        beginShape()
        noFill()

        //we calculate the y value in this for loop. we create the centre sound line affect here:
        for (var i = 0; i < volHist.length; i++) {
            //we acess the Volhist array and create a variable called y for the y value.
            var y = map(volHist[i], 0, 1, height / 2 + 200, 0)
            vertex(i, y)
        }
        endShape();

        //removes the olders volume history
        if (volHist.length > width) {
            volHist.splice(0, 1)
        }
        stroke(255);
        line(volHist.length, 0, volHist.length, height);

        //if the user press 'r' || 'R', the animation will rotate anticlockwise by negative 3
        if (keyDown('r')) {
            ws3.rotation -= 3;
        }
        //if hey t is clicked, it will reset the rotation of the animation.
        if (keyDown('t')) {
            ws3.rotation = 0;
        }

        //if key z is pressed, the camera will zoom in by 0.01 pixels.
        if (keyDown('z')) {
            camera.zoom += 0.01;

        }

        //if key x is pressed, we will zoom out of the animation by 0.01
        if (keyDown('x')) {
            camera.zoom -= 0.01;

        }
        //key resets zoom
        if (keyDown('c')) {
            camera.zoom = 1;
        }

        if (keyWentUp('f')) {
            vol += 0.1;
        }

        if (keyWentUp('g')) {
            vol -= 0.01;
        }

        if (keyWentUp('q')) {
            direction += 0.1;
        }

        if (keyWentUp('e')) {
            direction -= 0.1;
        }

        //this displays the text direction on the top left of the screen
        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()
        //this allows the animation to follow the mouseX and mouseY direction
        ws3.attractionPoint(direction, mouseX, mouseY);
        //we set the maximum speed to 3.
        ws3.maxSpeed = 5

        drawSprites()
    }
}





function keyPressed() {
    
    switch (key) {
        case '1':
            //if key '1' is pressed, we trigger song.play and we show the first scene.
            song.play();
            mgr.showScene(SceneOne);
            isPressed=false

            break;

        case '2':
            //similarly to key 1, for key 2, we show scene2 and we stop the song
            mgr.showScene(SceneTwo);
            song.stop();
            isPressed=true;
            break;

    }

}

function mousePressed() {
    if (mouseX > width / 10&&isPressed==true) {
        shots.play();
        val = backimg

    }




}




function mouseReleased() {
    val = 0
}