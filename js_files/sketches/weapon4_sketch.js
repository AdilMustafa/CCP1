//press w to activate the aiming, hit the centre for kill

//we create our global variables here
var mgr;
var Potion;
var a1;
var a2;
var a3;
var next;
var direction = 0.5;
var next;
var controls;
var cC;
var volHist = [];
var val = 0
var voice = false;
var isPressed=false;


function preload() {
    //---------------ANIMATIONS PRELOAD--------------////

    //we preload our first scene animations here
    a1 = loadAnimation('../../assets/axe/axe_title1.png', '../../assets/axe/axe_title2.png', '../../assets/axe/axe_title3.png', '../../assets/axe/axe_title4.png', '../../assets/axe/axe_title5.png', '../../assets/axe/axe_title6.png', '../../assets/axe/axe_title7.png');

    a3 = loadAnimation('../../assets/background/axe_1.png', '../../assets/background/axe_2.png', '../../assets/background/axe_3.png',
        '../../assets/background/axe_4.png', '../../assets/background/axe_5.png', '../../assets/background/axe_6.png',
        '../../assets/background/axe_7.png', '../../assets/background/axe_8.png', '../../assets/background/axe_9.png',
        '../../assets/background/axe_10.png', '../../assets/background/axe_11.png', '../../assets/background/axe_12.png',
        '../../assets/background/axe_13.png', '../../assets/background/axe_14.png', '../../assets/background/axe_15.png',
        '../../assets/background/axe_16.png', '../../assets/background/axe_16.png', '../../assets/background/axe_16.png',
        '../../assets/background/axe_16.png', '../../assets/background/axe_16.png', '../../assets/background/axe_16.png',
        '../../assets/background/axe_16.png', '../../assets/background/axe_16.png', '../../assets/background/axe_16.png');
    //this is the animation used in the first scene with a1.
    next = loadAnimation('../../assets/Continue/continue.png')
    //this animation will be used in scene 2.
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Wep2.png');



    //-------------SOUND PRELOAD-----------/////
    aim = loadImage('../../assets/background/practise.jpg')
    dead = loadImage('../../assets/background/dead2.png')
    middle = loadImage('../../assets/background/middle.png')
    song = loadSound('../../assets/sound/intro1.wav');


}



function setup() {
    //we create the canvas with 900,600 pixels
    cC = createCanvas(900, 600);
    //this canvas will be linked to the parent HTML;
    cC.parent('wep4');

    //we create a new scene manager which will add SceneOne and SceneTwo
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();


    a2 = createSprite(width / 2, height / 2)
    a2.addAnimation('../../assets/axe/axe1.png', '../../assets/axe/axe2.png', '../../assets/axe/axe3.png', '../../assets/axe/axe4.png', '../../assets/axe/axe5.png', '../../assets/axe/axe6.png', '../../assets/axe/axe7.png', '../../assets/axe/axe8.png', '../../assets/axe/axe9.png', '../../assets/axe/axe10.png', '../../assets/axe/axe11.png', '../../assets/axe/axe12.png', '../../assets/axe/axe13.png', '../../assets/axe/axe14.png', '../../assets/axe/axe15.png', '../../assets/axe/axe16.png', '../../assets/axe/axe17.png', '../../assets/axe/axe18.png', '../../assets/axe/axe19.png', '../../assets/axe/axe20.png', '../../assets/axe/axe21.png', '../../assets/axe/axe22.png', '../../assets/axe/axe23.png', '../../assets/axe/axe24.png', '../../assets/axe/axe25.png', '../../assets/axe/axe26.png', '../../assets/axe/axe27.png', '../../assets/axe/axe28.png', '../../assets/axe/axe29.png', '../../assets/axe/axe30.png', '../../assets/axe/axe31.png', '../../assets/axe/axe32.png');

    axe = loadSound('../../assets/sound/axe.wav');
    tryagain = loadSound('../../assets/sound/again.wav');
    arrow = loadSound('../../assets/sound/arrow.wav');


    //this variable will be used to store input value of sound from the mic. the values are between 0-1. we will use this in the future for affect.
    //mic = new p5.AudioIn();
    //we start the input of sound.
    //mic.start();


}

function draw() {
    //we draw our animation here
    mgr.draw();
}


function SceneOne() {
    this.setup = function () {
        //this will play the intro song at the beggining of the scene
        song.play();
    }
    this.draw = function () {
        //scene one draw function
        background(0);
        animation(a3, width / 2, height / 2);
        animation(next, width / 2, 580)

    }

}


function SceneTwo() {

    //scenetwo setup function
    this.setup = function () {
        isPressed=true;

    }
    //scene 2 draw function
    this.draw = function () {
        //we set the background to val. initially it equals to 0 but will change upon user interactions.
        background(val);

        //we draw the controls animation which will be located on the top left of the canvas.
        animation(controls, 200, 150);

        //-------------KEYDOWN EVENTS----------///

        //rotates the animation
        if (keyDown('r')) {
            a2.rotation -= 3;
        }
        //restes animation
        if (keyDown('t')) {
            a2.rotation = 0;

        }
        //zoom in
        if (keyDown('z')) {
            camera.zoom += 0.01;

        }
        //zoom out

        if (keyDown('x')) {
            camera.zoom -= 0.01;

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

        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()


//allows animation to folow mouse
        a2.attractionPoint(direction, mouseX, mouseY);
        a2.maxSpeed = 5

        drawSprites()


    }


}


function keyPressed() {
    switch (key) {
        case '1':
            mgr.showScene(SceneOne);
            song.play();
            isPressed=false;
            break;

        case '2':
            mgr.showScene(SceneTwo);
            song.stop()
            isPressed=true;
            break;

    }

    if (keyCode == 87) {
        val = aim;

    }

    if (keyCode == 32) {
        val = 0
    }





}

function mousePressed() {
    if(isPressed==true){
    axe.play();
    tryagain.play();
    //call the Hit function when the mosue is pressed.
    Hit();
    }

}

function Hit(){
    
    if (mouseX >= width / 2 - 50 && mouseX < width / 2 + 50 && mouseY >= 265 && mouseY < 337) {
        val = middle;
        arrow.play();
        tryagain.stop()

    }
    
}