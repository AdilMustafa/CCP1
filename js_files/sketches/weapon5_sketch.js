//press 2 to start, press psace bar to set up the aim direction,Before shooting, selects up or down arrouw to choose  weapon magazine by pressing up or down arrow . it will shoot different amos. Press space bar to start again

//we create our global variable here
var mgr;
var Potion;
var a1;
var a2;
var direction = 0.5;
var next;
var controls;
var cC;
var val = 0
var val2
var weapons;
var volHist = [];
var isPressed=false


function preload() {

    //---------------------ANIMATION PRELOAD-----------------------//
    a1 = loadAnimation('../../assets/GenericWeapon/GenericGunTitle_1.png', '../../assets/GenericWeapon/GenericGunTitle_2.png',
        '../../assets/GenericWeapon/GenericGunTitle_3.png', '../../assets/GenericWeapon/GenericGunTitle_4.png',
        '../../assets/GenericWeapon/GenericGunTitle_5.png');
    next = loadAnimation('../../assets/Continue/continue.png')
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Wep5.png')

    //------------------------IMAGE PRELOAD-------------------------//
    aim = loadImage('../../assets/background/headshot2.png')
    dead = loadImage('../../assets/background/dead2.png')
    ammo0 = loadImage('../../assets/background/Gen_Ammo_0.png')
    ammo1 = loadImage('../../assets/background/Gen_Ammo_1.png')
    ammo2 = loadImage('../../assets/background/Gen_Ammo_2.png');
    
    
    song = loadSound('../../assets/sound/intro1.wav');


}

function setup() {
    //we create a canvas and we link it to the parent HTML,
    cC = createCanvas(900, 600);
    cC.parent('wep5');

    //we create a new scene manager and we add sceneOne and SceneTwo
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.showNextScene();


    //we create a new sprite by addding it to a variable called a2. we centre it at the middle of the canvas and we load each images through the assetes folders to load different states of each animation transformation.
    a2 = createSprite(width / 2, height / 2)
    a2.addAnimation('../../assets/GenericWeapon/GenericGun_1.png', '../../assets/GenericWeapon/GenericGun_2.png',
        '../../assets/GenericWeapon/GenericGun_3.png', '../../assets/GenericWeapon/GenericGun_4.png',
        '../../assets/GenericWeapon/GenericGun_5.png', '../../assets/GenericWeapon/GenericGun_3.png',
        '../../assets/GenericWeapon/GenericGun_4.png', '../../assets/GenericWeapon/GenericGun_5.png',
        '../../assets/GenericWeapon/GenericGun_3.png', '../../assets/GenericWeapon/GenericGun_4.png',
        '../../assets/GenericWeapon/GenericGun_5.png', '../../assets/GenericWeapon/GenericGun_3.png',
        '../../assets/GenericWeapon/GenericGun_4.png', '../../assets/GenericWeapon/GenericGun_5.png');


    ///////-----------LOAD SOUND FILES AND ENVELOPES------------//
    gun1 = loadSound('../../assets/sound/gun1.wav');
    headshot = loadSound('../../assets/sound/headshot.wav');
    tryagain = loadSound('../../assets/sound/again.wav');
    gun2 = loadSound('../../assets/sound/gun2.wav');

    //we recieve the amplitude of the sound and store it in the variable amp
    amp = new p5.Amplitude();



}

function draw() {
    //we draw our animations.
    mgr.draw();
}

//scene one of the weapons animation
function SceneOne() {
    this.setup=function(){
        song.play();
        isPressed=false
    }
    //limited animation however we use a1, which is our page one animation showing our weapon and we use a black background
    this.draw = function () {
        background(0);
        animation(a1, width / 2, height / 2)
    }
}


function SceneTwo() {
    this.setup=function(){
        song.stop()
        isPressed=true }

    this.draw = function () {
        //we set the background to val(Val currently =0(Black))
        background(val)

        //we draw our controls animation on the top left of the canvas with the ammo animations on the bottom left of the canvas
        animation(controls, 200, 175)
        image(ammo0, 700, 450);


        //we create a variable  called volume which uses the p5.sound library to recives amplitude volume of sound being played. we then store it into an array called volHist(volume history).
        var volume = amp.getLevel();
        volHist.push(volume);


        //we create the sound affect shape using the begingShape function and we use stroke(RED) for outline
        stroke(255, 0, 0);
        beginShape()
        noFill()

        //we calculate the y value in this for loop as the volume will only be presented using the y axis
        for (var i = 0; i < volHist.length; i++) {
            //we acess the volume history array using a forloop and we map it. Next we use vertext to point the shapes beginning and end using i and y(i==start of the array)
            var y = map(volHist[i], 0, 1, height / 2 + 200, 0)
            vertex(i, y)
        }
        endShape();


        //this conditional statement checks if the list is greater than the length of the canvas width, if so we start removing(using splice method) older stored records from the beggining of the array to free up more space
        if (volHist.length > width) {
            volHist.splice(0, 1)
        }

        //-------------------CENTRED WNHITE LINE--------------//
        stroke(255);
        line(volHist.length, 0, volHist.length, height)




        ////-------KEY EVENTS--------//

        //rotated anticlockwise by 3
        if (keyDown('r')) {
            a2.rotation -= 3;

        }
        //restets rotation
        if (keyDown('t')) {
            a2.rotation = 0;

        }

        //zooms into the animation
        if (keyDown('z')) {
            camera.zoom += 0.01;

        }
        //zooms out
        if (keyDown('x')) {
            camera.zoom -= 0.01;

        }
        //resets animation
        if (keyDown('c')) {
            camera.zoom = 1;

        }
        //this loads which animation for ammo is selcted. if a is selected, image of ammo1 will show
        if (keyDown('a')) {
            image(ammo1, 700, 450)
        }
        //else if s is selected, image of ammo 2 will show
        if (keyDown('s')) {
            image(ammo2, 700, 450)
        }



        if (keyWentUp('q')) {
            direction += 0.1;

        }

        if (keyWentUp('e')) {
            direction -= 0.1;

        }
        //direction text on top right of the canvas
        fill(255)
        text("direction = " + direction, 820, 20)
        noFill()

        //allows the animation to follow the mouse coordinates
        a2.attractionPoint(direction, mouseX, mouseY);
        a2.maxSpeed = 5

        drawSprites()


    }

}


function Ammo() {
    //if w is pressed, this will show an image of an aim
    if (keyCode == 87) {
        val = aim
    }
    //this will select ammo 1
    if (keyCode == 65) {
        //select ammo 1
        weapons = gun1
    }
    //select ammo 2

    if (keyCode == 83) {

        weapons = gun2


    }
}


function Hit() {


    //we create a variable called hit and set this boolean variable to false as we have not yet hit the target.
    var hit = false



    //this conditional statemnt checks if the mouse is pressed withing the head area of the headshot. if so, we set the variable hit to true which will call other functions.

    if (mouseX > 451 && mouseX < 637 && mouseY > 47 && mouseY < 155) {
        hit = true;
        console.log("headshot made")

    }



    //this will call the headshot sound when hit is equal to true. it will also replace the background to black and change the image back to original.
    if (hit == true) {
        headshot.play()
        headshot.setVolume(1);
        weapons.setVolume(0.4)
        val = 0
        val = dead
    }
    //if it doesnt hit, we plat the try again sound affect.
    if (hit == false) {
        tryagain.play()
    }

}



function mousePressed() {
    if(isPressed==true){
    weapons.play()
    Hit()
    }


}

function keyPressed() {
    switch (key) {
        //of key 1 is pressed, this switches to the first scene
        case '1':
            mgr.showScene(SceneOne);
            song.play();
            isPressed=false
            break;

        case '2':
            //switches to scene 2
            mgr.showScene(SceneTwo);
            song.stop();
            isPressed=true
            break;
    }
    //we call the weapon function when key is pressed
    Ammo()

}