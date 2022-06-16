//for this sketck, created a walking stick, when you click on the canvas, this activates envelops and changes animations for affect.
var song;
var mgr;
var weapon2;
var controls;
var direction = 0.5;
var WP;
var WS2;
var amp = new p5.Amplitude();
var wave = new p5.Oscillator();
var mopedS = false;
var volume = 0.1
var mic;
var val = 0
var backimg;
var cC
var next
var isPressed=false;

function preload() {

    //this preloads all the stores images for the animation into the variable WP
    WP = loadAnimation('../../assets/Scooter/Scooter_Title_1.png', '../../assets/Scooter/Scooter_Title_2.png',
        '../../assets/Scooter/Scooter_Title_3.png', '../../assets/Scooter/Scooter_Title_4.png',
        '../../assets/Scooter/Scooter_Title_4.png', '../../assets/Scooter/Scooter_Title_6.png',
        '../../assets/Scooter/Scooter_Title_7.png');

    next = loadAnimation('../../assets/Continue/continue.png')
    //this load the controls animation on the top left of the canvas
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Mic.png');

    //we load the background image which we will use based on volume input
    day = loadImage('../../assets/background/day.jpg')
    backimg = loadImage('../../assets/background/wallpaper.jpg')


    //we preload sound for future interactivity
    moped = loadSound('../../assets/sound/moped.wav');
    intro = loadSound('../../assets/sound/intro.wav');

}

function setup() {
    //we create a canvas with width of 900 and height of 600
    cC = createCanvas(900, 600);
    //this is to ensure this links to the parental html File.
    cC.parent('veh1');

    //create a new screen manager and store it to mgr
    mgr = new SceneManager();

    //we add scence one which is a constructor function containing all objects related to the first scene
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)

    mgr.showNextScene();


    //we initiallise the envelope here for the oscilator. We also set up the envelope ADSR(Attach,Decay,sustain and Release). We also set a range.
    env = new p5.Env();
    env.setADSR(0.001, 0.002, 1, 0.001);
    env.setRange(1, 1);


    //we setup the wave which we will input the envelope for affect of sound. p5.sound has multiple sound oscillator types forexample; sine,sawtooth,triangle....
    wave = new p5.Oscillator();
    //we start the wave and set the type to sine. can be changes by simply changing the string of the parameter of setType.
    wave.start();
    wave.setType('sine');
    wave.freq(150)
    //the waves amplitude will use the new envelope created which will allow us to set different attack decay times
    wave.amp(env);


    //this variable will be used to store input value of sound from the mic. the values are between 0-1. we will use this in the future for affect.
    mic = new p5.AudioIn();
    //we start the input of sound.
    mic.start();

    //we do the same thing as scene one for scene 2. we load all the images so it will be ready when running the programme.
    W2 = createSprite(width / 2, height / 2)
    W2.addAnimation('normal', '../../assets/Scooter/Scooter_1.png', '../../assets/Scooter/Scooter_2.png',
        '../../assets/Scooter/Scooter_3.png', '../../assets/Scooter/Scooter_4.png',
        '../../assets/Scooter/Scooter_5.png', '../../assets/Scooter/Scooter_6.png',
        '../../assets/Scooter/Scooter_7.png', '../../assets/Scooter/Scooter_8.png',
        '../../assets/Scooter/Scooter_9.png')


}

function draw() {
    //this will draw both scenes
    mgr.draw();
}

//this constructor function will be used for the first scene
function SceneOne() {
    this.setup=function(){
        isPressed=false
    }

    this.draw = function () {

        //we set the background to black and we load the WP. this is the animation of the first scene. Then we we will call the second scene animation
        background(0);
        animation(WP, width / 2, height / 2)
        animation(next, width / 2, 580);

    }

}

//constructor function for scene2
function SceneTwo() {
    this.setup=function(){
        isPressed=true
    }

    this.draw = function () {
        //we set the background to a global variable called val which iniially=0 but will change upon different factors.
        background(val)

        //we display the controls animation for scene2

        animation(controls, 200, 150);
        //key pressed function which will allow interactivity based on the corosponding keys. the p5.scenemanager library allows us to maximise interactivity with this built in feature.
        //rotates anticlockwise
        if (keyDown('r')) {
            W2.rotation -= 3;
        }
        //resets rotation
        if (keyDown('t')) {
            W2.rotation = 0;

        }
        //zooms into the animation
        if (keyDown('z')) {
            camera.zoom += 0.01;
            wave.freq(180)
        }
        //zoomz out and changed the wave freuquency
        if (keyDown('x')) {
            camera.zoom -= 0.01;
            wave.freq(130)
        }
        //resets xoom
        if (keyDown('c')) {
            camera.zoom = 1;


        }


        if (keyWentUp('q')) {
            direction += 0.1;

        }

        if (keyWentUp('e')) {
            direction -= 0.1;

        }

        //direction text on the top right of the canvas s
        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()
        stroke(255)



        //this is so the main animation follows the mouseX and mouseY values on the canvas.
        W2.attractionPoint(direction, mouseX, mouseY);
        //we initialise the maximum speed
        W2.maxSpeed = 5


        drawSprites();
        if(isPressed==true){
        //we call the volume function here only is is pressed is true
        Volume();}

    }

}

function Volume() {
    
    //this local variable will be used to get the of sound input from the mic function above. If the volume input is higher than 0.01, we change the background(VAL) to VAL=day. day is object which contains the image of a new background. When the volume is above 0.01, we activate the moped sound using moped.play() .
    var vol = mic.getLevel()
    if (vol > 0.01) {
        val = day;
        moped.play();
        moped.setVolume(volume)
        stroke(255)
        text("Engine Running During Evening", width / 2 - 20, 20);


    }
    //if the value is below 0, we set the value of the background back to 0 (Meaning no sound input)
    else {
        val = val
    }
    //if the volume is above 0.5(Higher volume input than the first image), we set a new background by calling the new back variable(backImg)
    if (vol >= 0.8) {
        val = backimg
        moped.play();
        moped.setVolume(volume = 0.1)
        stroke(255)
        text("Engine Running During Night", width / 2 - 20, 20);


    }
    //if the input is less than 0.2, we stop the moped noise so it is as if the engine is off.
    if (vol < 0.2) {
        val = 0
        moped.stop();
    }

}


function keyPressed() {
    switch (key) {
        case '1':
            mgr.showScene(SceneOne);
            intro.play();

            break;

        case '2':
            mgr.showScene(SceneTwo);
            intro.stop();


            break;
    }


}



//to interact with this. make noise into the mic. depending how loud you are, the engine will run however different scened will appear based on the volume input.
//buttons also make sound using envelopes.