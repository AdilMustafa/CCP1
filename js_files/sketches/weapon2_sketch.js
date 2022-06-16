//press 2 to start
//press space bar to set up the aiming
//shoot the centre. if you miss you can try again


//we create global variables for the animations.
var song;
var mgr;
var weapon2;
var controls;
var direction = 0.5;
var WP;
var WS2;
var val = 0
var volHist = []
var cC
var isPressed=false;

function preload() {
    //we preload the animatimation so it is ready to run when the html page is run. We call each indavidual animation in order. each animations are located in the assetts/SlingShot folder. we store the animation cinto the variable WP

    WP = loadAnimation('../../assets/SlingShot/SlingShotTitle_1.png', '../../assets/SlingShot/SlingShotTitle_2.png',
        '../../assets/SlingShot/SlingShotTitle_3.png', '../../assets/SlingShot/SlingShotTitle_3.png', '../../assets/SlingShot/SlingShotTitle_2.png', '../../assets/SlingShot/SlingShotTitle_1.png');

    //si    milarly to WP, we load the controls animation created using Pixel art creator and store it to the variable controls.
    controls = loadAnimation('../../assets/Controls/PNG/Controls_Wep5.png');

    //we prelouad each saved sound so it is ready to run when neccesary. each sound is stored in different variable names so we can call them in the future independantly.
    song = loadSound('../../assets/sound/intro1.wav');
    
    aim = loadImage('../../assets/background/headshot2.png')
    dead = loadImage('../../assets/background/dead2.png')
    ammo0 = loadImage('../../assets/background/Sling_Ammo_0.png')
    ammo1 = loadImage('../../assets/background/Sling_Ammo_1.png')
    ammo2 = loadImage('../../assets/background/Sling_Ammo_2.png')


}


function setup() {
    //we create a canvas with the dimension of 900 in the x axis and 600 pixels in the y axis.

    cC = createCanvas(900, 600);
    cC.parent('wep2')

    //we call the new SceneManager function in the setup and we add our scenes to mgr
    mgr = new SceneManager();
    //shows scene 1
    mgr.addScene(SceneOne);
    //shows scene 2
    mgr.addScene(SceneTwo);
    //used to show scenes
    mgr.showNextScene();


    //we create a variable called w2 and use the scene manager library to create a new sprite and locate it to the scenter of the canvas
    W2 = createSprite(width / 2, height / 2);
    //we add animation to w2,
    W2.addAnimation('normal', '../../assets/SlingShot/SlingShot_1.png', '../../assets/SlingShot/SlingShot_2.png',
        '../../assets/SlingShot/SlingShot_3.png', '../../assets/SlingShot/SlingShot_3.png',
        '../../assets/SlingShot/SlingShot_2.png', '../../assets/SlingShot/SlingShot_1.png')

    //we also load the sounds here so we are certain it is ready for use.
    pull = loadSound('../../assets/sound/slingshot.wav');
    sling1 = loadSound('../../assets/sound/slingshot2.wav')
    sling2 = loadSound('../../assets/sound/slingshot1.wav')
    headshot = loadSound('../../assets/sound/headshot.wav');
    tryagain = loadSound('../../assets/sound/again.wav');

    //we create an amplitude variable which we will use for our Envelopes(p5.Sound Library);
    amp = new p5.Amplitude();
    song.play();
    song.setVolume(0.4)

}

function draw() {
    //we minimised the call function which will call all corosponding mgr function(sceneOme,sceneTwo)
    mgr.draw();
}


function SceneOne() {
    //this is the setup of the first scene animation. This is the firt scene users will see when they select any of the javascript animations on our weapons or vehicle pages
    this.setup = function () {
        //we call the song function which is related to introduction song which will be played when a user first selects any javascript animations.
        song.play();
        isPressed=false
    }


    this.draw = function () {
        //set the backfround to black so when we load other background based on user input, it will change.
        background(0);
        //we call the WP function which will display the WP animation on the centre of the canvas
        animation(WP, width / 2, height / 2);

    }

}


function SceneTwo() {
    //scene two of the animation
    this.setup = function () {
        isPressed=true

    }

    this.draw = function () {
        //we set the background argument to a varible called val as this will change based on user input (interaction)
        background(val);
        stroke(255)
        textSize(30)

        //we load the controls animation on the top left corner of the screen
        animation(controls, 200, 175);
        //we also load the ammo animations at the bottom right of the canvas.
        image(ammo0, 700, 450)


        //we create  a variable called volume which will use the p5.sound library to get amplitude level.
        var volume = amp.getLevel();
        //we will add the current volume level into the volHist array to store and record for future use.
        volHist.push(volume);



        stroke(255, 0, 0);
        beginShape()
        noFill()
        //we calculate the y value in this for loop and map it 
        for (var i = 0; i < volHist.length; i++) {
            var y = map(volHist[i], 0, 1, height / 2 + 200, 0)
            vertex(i, y)
        }
        endShape();

        //removes the older volume history from the array. this is so we dont slow the programme and the volume remains updated.
        if (volHist.length > width) {
            volHist.splice(0, 1)
        }
        //we draw a white line using the colHist array.
        stroke(255);
        line(volHist.length, 0, volHist.length, height)


        //if the user press 'r' || 'R', the animation will rotate anticlockwise by negative 3
        if (keyDown('r')) {
            W2.rotation -= 3;

        }
        //if hey t is clicked, it will reset the rotation of the animation.
        if (keyDown('t')) {
            W2.rotation = 0;

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

        //-------------------------AMMO SELECTION-------------------//////

        //when a is clicked, we load the animation amo image which we then will use to select bullet
        if (keyDown('a')) {
            image(ammo1, 700, 450);
            console.log("key pressed")
        }


        //is s is clicked, we will load the ammo 2 animation. this will also be used to activate the right sound for bullets.
        if (keyDown('s')) {
            image(ammo2, 700, 450)
        }
        //increased direction

        if (keyWentUp('q')) {
            direction += 0.1;
        }

        //decrease direction
        if (keyWentUp('e')) {
            direction -= 0.1;

        }

        //this allows the animation to follw the users mouseX and mouseY direction.
        W2.attractionPoint(direction, mouseX, mouseY);
        //we set the max speed to 5
        W2.maxSpeed = 5


        drawSprites()


    }

}

function keyPressed() {
    switch (key) {

        //if key 1 is pressed, this will allow the users to switch between scenes.
        case '1':
            mgr.showScene(SceneOne);
            //this will play the intro song when key one is pressed.This will also show scene 1
            song.play();
            isPressed=false;

            break;

        case '2':
            //if key 2 is pressed, this will show the second scene by calling the second scene function. we alsi stop the intro song only when key 2 is pressed.
            mgr.showScene(SceneTwo);
            song.stop();
            isPressed=true;


            break;

    }
    //if key 'w' os pressed, this will show the background with aim assist. we do this by changing the value of val which we have used in background(val).
    if (keyCode == 87) {
        val = aim
    }

    if (keyCode == 65) {
        //similarly to val, we also use pull variable to select users preferred grenade. in this instance, when key a is pressed, a slingshot sound affect will be chosen however not played. will only be played in the mousePressed function.
        pull = sling1
    }
    //similarly to val, we also use pull variable to select users preferred grenade. in this instance, when key s is pressed, a slingshot sound affect will be chosen however not played. will only be played in the mousePressed function.
    if (keyCode == 83) {
        pull = sling2
    }





}


function Hit(){

    //we create a variable called hit and set this boolean variable to false as we have not yet hit the target.
    var hit = false

        //we play the pull vsriable only when we press the mouse. vThe variable will be defined by users selectin g grenade using key 'A'||'S'.
    if(isPressed==true){
    pull.play()}

    //this conditional statemnt checks if the mouse is pressed withing the head area of the headshot. if so, we set the variable hit to true which will call other functions.

    if (mouseX > 451 && mouseX < 637 && mouseY > 47 && mouseY < 155) {
        hit = true;

    }



    //this will call the headshot sound when hit is equal to true. it will also replace the background to black and change the image back to original.
    if (hit == true&&isPressed==true) {
        headshot.play()
        val = 0
        val = dead
    }
    //if it doesnt hit, we plat the try again sound affect.
    if (hit == false&&isPressed==true) {
        tryagain.play()
    }
    
}


function mousePressed() {
    //simiplified the headshot affec t by creating a function containg all its elemnets and calling it in the mousePressed function as it is only activated when mouse id pressed.
    Hit()


}