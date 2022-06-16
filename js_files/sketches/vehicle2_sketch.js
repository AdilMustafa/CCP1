//we set our new global variables here
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
var isPressed=false;

function preload() {


    //-----------------ANIMATION PRELOAD---------------//
    WP = loadAnimation('../../assets/HamsterBall/HamsterBallTitle_1.png', '../../assets/HamsterBall/HamsterBallTitle_2.png',
        '../../assets/HamsterBall/HamsterBallTitle_3.png', '../../assets/HamsterBall/HamsterBallTitle_4.png',
        '../../assets/HamsterBall/HamsterBallTitle_5.png', '../../assets/HamsterBall/HamsterBallTitle_6.png',
        '../../assets/HamsterBall/HamsterBallTitle_7.png', '../../assets/HamsterBall/HamsterBallTitle_8.png',
        '../../assets/HamsterBall/HamsterBallTitle_9.png', '../../assets/HamsterBall/HamsterBallTitle_10.png',
        '../../assets/HamsterBall/HamsterBallTitle_10.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_8.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_10.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_8.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_10.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_8.png', '../../assets/HamsterBall/HamsterBallTitle_9.png',
        '../../assets/HamsterBall/HamsterBallTitle_10.png');
    next = loadAnimation('../../assets/Continue/continue.png')
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Click.png');

    //-----------PRELOAD THE SOUND FILES-----------------//
    buzz = loadSound('../../assets/sound/buzz.wav');
    bomb = loadSound('../../assets/sound/explosion.wav  ');
    explosion = loadImage('../../assets/background/explosion.jpg')

}


function setup() {
    //we create a canvas and link it to the parental HTML

    cC = createCanvas(900, 600);
    cC.parent('veh2');

    //create a new Scene manager which will use SceneOne and SceneTwo
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();



    //we initiallise the envelope here for the oscilator
    env = new p5.Env();
    env.setADSR(0.001, 0.001, 0.001, 0.001);
    env.setRange(0.1, 1);

    //we create a new oscilattor using the p5.sound library and we set they wave type to sawtooth; the Frewueny and wave type can be changed to prefferd choice of anyone
    wave = new p5.Oscillator();
    wave.start();
    wave.setType('sawtooth');
    wave.freq(100)
    wave.amp(env);

    //we create a new animation which will be centred in the middle of the canvas
    W2 = createSprite(width / 2, height / 2)
    W2.addAnimation('normal',
        '../../assets/HamsterBall/HamsterBall_1.png', '../../assets/HamsterBall/HamsterBall_2.png',
        '../../assets/HamsterBall/HamsterBall_3.png', '../../assets/HamsterBall/HamsterBall_4.png',
        '../../assets/HamsterBall/HamsterBall_5.png', '../../assets/HamsterBall/HamsterBall_6.png',
        '../../assets/HamsterBall/HamsterBall_7.png', '../../assets/HamsterBall/HamsterBall_8.png',
        '../../assets/HamsterBall/HamsterBall_9.png', '../../assets/HamsterBall/HamsterBall_10.png',
        '../../assets/HamsterBall/HamsterBall_11.png', '../../assets/HamsterBall/HamsterBall_12.png',
        '../../assets/HamsterBall/HamsterBall_13.png', '../../assets/HamsterBall/HamsterBall_14.png',
        '../../assets/HamsterBall/HamsterBall_15.png', '../../assets/HamsterBall/HamsterBall_16.png',
        '../../assets/HamsterBall/HamsterBall_11.png', '../../assets/HamsterBall/HamsterBall_12.png',
        '../../assets/HamsterBall/HamsterBall_13.png', '../../assets/HamsterBall/HamsterBall_14.png',
        '../../assets/HamsterBall/HamsterBall_15.png', '../../assets/HamsterBall/HamsterBall_16.png',
        '../../assets/HamsterBall/HamsterBall_11.png', '../../assets/HamsterBall/HamsterBall_12.png',
        '../../assets/HamsterBall/HamsterBall_13.png', '../../assets/HamsterBall/HamsterBall_14.png',
        '../../assets/HamsterBall/HamsterBall_15.png', '../../assets/HamsterBall/HamsterBall_16.png',
        '../../assets/HamsterBall/HamsterBall_11.png', '../../assets/HamsterBall/HamsterBall_12.png',
        '../../assets/HamsterBall/HamsterBall_13.png', '../../assets/HamsterBall/HamsterBall_14.png',
        '../../assets/HamsterBall/HamsterBall_15.png', '../../assets/HamsterBall/HamsterBall_16.png',
        '../../assets/HamsterBall/HamsterBall_11.png', '../../assets/HamsterBall/HamsterBall_12.png',
        '../../assets/HamsterBall/HamsterBall_13.png', '../../assets/HamsterBall/HamsterBall_14.png',
        '../../assets/HamsterBall/HamsterBall_15.png', '../../assets/HamsterBall/HamsterBall_16.png')







}

function draw() {
    //we draw our scenes in the draw function
    mgr.draw();

}


function SceneOne() {
    this.setup=function(){
        isPressed=false
    }
    this.draw = function () {
        //we set the background of scene one to black as this wont be altered anytime. we also draw animation WP in the centre of the canvas along side with the Next animation.
        background(0);
        animation(WP, width / 2, height / 2)
        animation(next, width / 2, 580);
        //we stop any sound being played from other scnenes
        buzz.stop();
        //we stop the envelope
        env.triggerRelease();
    }

}

//scene two constructor function
function SceneTwo() {
    this.setup=function(){
        isPressed=true;
    }

    //we draw
    this.draw = function () {
        //we set the background to val(this will change based on user interaction)
        background(val)
        //we draw controls animation on the top left of the canvas
        animation(controls, 200, 150)


        //----------KEY EVENTS------------//
        //will rotate anti-clockwise
        if (keyDown('r')) {
            W2.rotation -= 3;
        }

        //will reset rotation
        if (keyDown('t')) {
            W2.rotation = 0;
        }
        //will zoom in and changed the volume of the buzz sound file (Volume).
        if (keyDown('z')) {
            camera.zoom += 0.01;
            buzz.setVolume(0.2)
        }

        //will zoom out and change the buzz sound file (Volume).
        if (keyDown('x')) {
            camera.zoom -= 0.01;
            buzz.setVolume(0.05)
        }

        //resters zoom
        if (keyDown('c')) {
            camera.zoom = 1;

        }

        if (keyWentUp('q')) {
            direction += 0.1;

        }

        if (keyWentUp('e')) {
            direction -= 0.1;

        }

        //direction text on the top right of the canvas
        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()


        //this allows the animation to follow the mosueX and mouseY cooridantes.
        W2.attractionPoint(direction, mouseX, mouseY);
        W2.maxSpeed = 5

        drawSprites()

    }

}




function keyPressed() {
    switch (key) {
        //shows sceneone
        case '1':
            mgr.showScene(SceneOne);
            isPressed=false

            break;


        case '2':
            //shows scenetwo
            mgr.showScene(SceneTwo);
            isPressed=false


            break;

    }

}

function Explosion() {
    //this conditional statement checks if the value of mousX is greater than the width/2. if so we play the bomb sound affect and change the backgrounf(Val) to another image if its true. if not we return back to black screen.
    if (mouseX > width / 2) {
        val = explosion
        bomb.play()
        buzz.setVolume(0.03)
    }
    if (mouseX < width / 2) {
        val = (100)
        buzz.play();
        buzz.setVolume(0.1)
    }
}

function mousePressed() {
    if(isPressed==true){
    Explosion();}

}

function mouseReleased() {
    val = 0
}




//when the mouse X is pressed on the canvas witdth, changes sound and background colour