//click a to start the engine, then click s to increase speed, press the mouse for a final affect.

//we create our global variables here
var song;
var mgr;
var weapon2;
var controls;
var direction = 0.5;
var WP;
var WS2;
var cC
var next
var val = 0
var volHist = [];
var isPressed=false

function preload() {

    //------------------------PRELOAD ANIMATION--------------------//

    WP = loadAnimation('../../assets/MotorBike/MotorBikeTitle_1.png', '../../assets/MotorBike/MotorBikeTitle_2.png',
        '../../assets/MotorBike/MotorBikeTitle_3.png', '../../assets/MotorBike/MotorBikeTitle_4.png',
        '../../assets/MotorBike/MotorBikeTitle_5.png', '../../assets/MotorBike/MotorBikeTitle_6.png',
        '../../assets/MotorBike/MotorBikeTitle_7.png', '../../assets/MotorBike/MotorBikeTitle_8.png',
        '../../assets/MotorBike/MotorBikeTitle_9.png', '../../assets/MotorBike/MotorBikeTitle_10.png',
        '../../assets/MotorBike/MotorBikeTitle_11.png', '../../assets/MotorBike/MotorBikeTitle_12.png',
        '../../assets/MotorBike/MotorBikeTitle_13.png', '../../assets/MotorBike/MotorBikeTitle_14.png',
        '../../assets/MotorBike/MotorBikeTitle_15.png', '../../assets/MotorBike/MotorBikeTitle_16.png',
        '../../assets/MotorBike/MotorBikeTitle_17.png', '../../assets/MotorBike/MotorBikeTitle_18.png',
        '../../assets/MotorBike/MotorBikeTitle_19.png', '../../assets/MotorBike/MotorBikeTitle_20.png',
        '../../assets/MotorBike/MotorBikeTitle_21.png');

    controls = loadAnimation('../../assets/Controls/PNG/Controls_Veh3.png');
    next = loadAnimation('../../assets/Continue/continue.png')


    //------------------PRELOAD SOUND FILES----------//

    moped = loadSound('../../assets/sound/motor2.wav');
    stop = loadSound('../../assets/sound/stop.wav');
    intro = loadSound('../../assets/sound/intro1.wav')
    buzz = loadSound('../../assets/sound/buzz.wav');
    bomb = loadSound('../../assets/sound/explosion.wav');
    war = loadSound('../../assets/sound/war.wav');
    accident = loadSound('../../assets/sound/accident.wav');
    pulse = loadSound('../../assets/sound/pulse.wav');
    start = loadSound('../../assets/sound/v3.wav');


    //----------------PRELOAD IMAGE-----------------//
    explosion = loadImage('../../assets/background/fireCar.jpg')
    backimg = loadImage('../../assets/background/race1.png')
    city = loadImage('../../assets/background/city.png');

}




function setup() {
    //we create a canvas and link it to the parental HTML
    cC = createCanvas(900, 600);
    cC.parent('veh3');

    //we create a new Scenemanager with sceneone and scenetwo
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();


    //we initiallise the envelope here for the oscilator
    env = new p5.Env();
    env.setADSR(0.001, 0.001, 0.001, 0.001);
    env.setRange(0.1, 1);

    //we create a new oscillator and store it in the variable called wave. this wave can be changed on prefered wave type.
    wave = new p5.Oscillator();
    wave.start();
    wave.setType('sawtooth');
    wave.freq(100)
    wave.amp(env);

    //we create our animation and store it in w2. this will be in the centre of the canvas.
    W2 = createSprite(width / 2, height / 2)
    W2.addAnimation('normal',
        '../../assets/MotorBike/MotorBike_1.png', '../../assets/MotorBike/MotorBike_2.png',
        '../../assets/MotorBike/MotorBike_3.png', '../../assets/MotorBike/MotorBike_4.png',
        '../../assets/MotorBike/MotorBike_5.png')


    //we get the amplitude using the p5.sound library. this will be used to create a new shape later on
    amp = new p5.Amplitude();

}

function draw() {
    //this function calls the scenes into draw();
    mgr.draw();
}

//scene one
function SceneOne() {
    this.setup=function(){
        isPressed=false
    }
    this.draw = function () {
        //this will display all the animation on the first scene. we set the background to black  and we use animation WP and next
        background(0);
        animation(WP, width / 2, height / 2)
        animation(next, width / 2, 580)
        //we stop any sound being played in this scene and also top any envelopes
        buzz.stop();
        env.triggerRelease();
    }

}


function SceneTwo() {
    this.setup = function () {
        //we play our background sound here 
        stop.play();
        isPressed=true


    }

    this.draw = function () {
        //WE set the backfround to val. the value of val will change based in user interaction.
        background(val)
        //we load our control animation which will be located on the top left of the canvas(SceneTwo)
        animation(controls, 200, 180)


        //we create our sound chape with a red stroke(). we use the begin shape function to do so
        stroke(255, 0, 0);
        beginShape()
        noFill()

        //we calculate the y value in this for loop as the sound will alter in the y axis which we then map. we create a new shape using vertext which will use tha value of i(using the for loop) and then map it to value y.
        for (var i = 0; i < volHist.length; i++) {
            var y = map(volHist[i], 0, 1, height / 2 + 250, 0)
            vertex(i, y)
        }
        endShape();

        //removes the olders volume from the history when it reaches the width of the canvas. removes the first elemnt in the array.
        if (volHist.length > width) {
            volHist.splice(0, 1)
        }

        //we draw our white line which shows the end of the sound shape
        stroke(255);
        line(volHist.length, 0, volHist.length, height)



        //-----------KEY EVENTS----------//

        //rotate anti clockwise
        if (keyDown('r')) {
            W2.rotation -= 3;

        }
        //resets rotation
        if (keyDown('t')) {
            W2.rotation = 0;

        }

        //zooms into the animation and we change the volume of buzz
        if (keyDown('z')) {
            camera.zoom += 0.01;
            buzz.setVolume(0.2)

        }
        //zooms out and also changes the volume of buzz
        if (keyDown('x')) {
            camera.zoom -= 0.01;
            buzz.setVolume(0.05)
        }
        //resets zoom
        if (keyDown('c')) {
            camera.zoom = 1;

        }


        if (keyWentUp('q')) {
            direction += 0.1;

        }

        if (keyWentUp('e')) {
            direction -= 0.1;

        }
        
        //direction text which is on the top right of the canvas

        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()


//allows the animation to follow the mouse coordinates.
        W2.attractionPoint(direction, mouseX, mouseY);
        W2.maxSpeed = 5


        drawSprites()


    }


}

function Explosion(){
    //event of mouse pressed
    val = explosion
    bomb.play()
    buzz.setVolume(0.03)
    moped.stop();
    stop.setVolume(0.2);
    war.setVolume(1)
    accident.play();
    pulse.loop();
    fill(0)
    text("EXPLOSION", width / 2, height / 2)
    
}

function Sound(){
    //if a is pressed, this will change the background to a sunny scene and we will start the enigne
    if (keyCode == 65) {

        val = backimg
        stop.setVolume(0.2)
        moped.play();
        moped.setVolume(0.8)
        intro.play();
        intro.setVolume(0.2)

    }
//this will change background when s is pressed and the engine will be running faster as its on the motorway
    if (keyCode == 83) {
        val = city
        moped.play();
        moped.setVolume(1)
        stop.play();
        stop.setVolume(0.8);
    }
   
}




function keyPressed() {
    switch (key) {
        case '1':
            //shows scene one when 1 is pressed
            mgr.showScene(SceneOne);
            moped.stop();
            isPressed=false


            break;


        case '2':
            //shows scene 2 when 2 is pressed
            mgr.showScene(SceneTwo);
            stop.play();
            stop.loop()
            war.loop();
            isPressed=true;



            break;
    }
if(isPressed==true){
    Sound();
}

}

function mousePressed() {
if(isPressed==true){
Explosion();
}
}




//when the mouse X is pressed on the canvas witdth, changes sound and background colour