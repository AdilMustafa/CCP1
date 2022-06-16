//mahme029--Game

//Global variables for the constructor functions aswell as sliders.
var Enemiess = [];
var slider;
var slider1;
var slider2;
var mouseP = false;
var robots = [];
var militarry = [];
var dead;
var totalDeaths = [];
var sliderSound;
var song;
var laser;
var button;
var songButton;
var amp = new p5.Amplitude();
var wave = new p5.Oscillator();
var amp1 = new p5.Amplitude();
var wave1 = new p5.Oscillator();
var circle = []

var playing = false;

var cC





function preload() {

    song = loadSound("../../assets/Level_2/jump.wav");
    laser = loadSound("../../assets/Level_2/laser.wav")
    intro = loadSound("../../assets/Level_2/intro.wav")
    death = loadSound("../../assets/Level_2/death.wav")
    //    console.log("preload ready")
}



function setup() {


    //we create a canvas with width of 900 and height of 600
    cC = createCanvas(900, 550);
    //this is to ensure this links to the parental html File.
    cC.parent('lvl2');


    song = loadSound("../../assets/Level_2/jump.wav");
    laser = loadSound("../../assets/Level_2/laser.wav")
    intro = loadSound("../../assets/Level_2/intro.wav")
    death = loadSound("../../assets/Level_2/death.wav")




    //this is the setup of the slider which will ocntrol the frequency of the oscillator.
    //this is the setup of the slider which will ocntrol the frequency of the oscillator.



    //we initiallise the envelope here for the oscilator
    env = new p5.Env();
    env.setADSR(0.001, 0.01, 0.01, 0.001);
    env.setRange(0.8, 0);


    //we set the type of the oscillator here.
    wave = new p5.Oscillator();
    wave.start();
    wave.setType('triangle');
    wave.freq(500)
    wave.amp(env);


    //we initiallise the envelope here for the oscilator
    env1 = new p5.Env();
    env1.setADSR(0.001, 0.01, 0.01, 0.001);
    env1.setRange(0.8, 0);


    //we set the type of the oscillator here.
    wave1 = new p5.Oscillator();
    wave1.start();
    wave1.setType('sine');
    wave1.freq(20)
    wave1.amp(env1);



    //this forloop will add new Enemies into the Enemies array 10 times creating 10 new Enemiess with random mass between 1-3, if we want to have a static mass,we can leave the argument of the function empty.  
    for (var i = 0; i < 20; i++) {
        Enemiess.push(new Enemies(random(1, 3)))
    }


    //this for loop will create 3 new robots and add them into the robots Array using the push method.
    for (var j = 0; j < 3; j++) {
        robots.push(new Robot())

    }

    //this add new millitary to the array.
    for (var u = 0; u < 2; u++) {
        militarry.push(new Military())
    }
    //this work out how many Enemiess the robots have killed
    dead_robot = 0;
    dead_millitary = 0





}


function toggle() {

    env.play();

}

function togglePlaying() {
    if (!song.isPlaying() || !laser.isPlaying() || !intro.isPlaying() || !death.isPlaying()) {

        song.play();
        song.setVolume(0.5)
        laser.play();
        laser.setVolume(0.2)
        death.play();
        death.setVolume(0.5)



    }


}

//this is a standard p5 function used to draw (run) everything on a canvas
function draw() {


    //we set the background initially to black but will change based upon factors.
    background(0);
    //we set the frequency according the the value of sliderFreq. If the oscillator is playing, we set the background to 100(grey) or if not, we return it to black. this all depend on the oscillator button(Button1). when the mouse is triggered over the button, the function toggle is run. in the draw function below, we adjust the freq value
    wave.freq(440)
    wave1.freq(440)



    //text for the sliders on top left
    stroke(255);
    fill(255)

    noStroke();
    noStroke();
    fill(255);
    text("number of death by ROBOT(distingued by the flash laser affect) = " + dead_robot, 10, 10);
    text("number of death by MILLITARY = " + dead_millitary, 10, 30);
    text("PRESS UP ARROW TO ADD NEW ENEMIES",10,50);
    text("PRESS DOWN ARROW TO REMOVE ENEMIES",10,70)





    //for loop which acess the Enemiess in the array;
    for (var i = 0; i < Enemiess.length; i++) {
        //if the mouse is pressed, it created a new local vairable called wind and we give it a vector of vector.x=0 and vector.y=0.01;the wind variable is the used to calculate the difference between its mousX and y location. 



        //we created a local variable called friction and we copy the speed so it doesnt affect all the other Enemiess[i].speed. this function will be used to slow the movrmrnt of the Enemiess by multiplying the current Enemies speed to a small number.
        var friction = Enemiess[i].speed.copy();
        friction.mult(-1);
        friction.normalize();
        friction.mult(0.03);

        //this will run the Enemies functions as it calls the run functions containing the sub elements.
        Enemiess[i].applyForce(friction);

        //we run all the Enemiess which are in the array by acessing the array first. We then use i to acess which elemt and in this case is all of them. then we run its functions by simply calling.run() as this is a function containing all the other sub functions.
        Enemiess[i].run();

        if (Enemies[i] == 2) {
            text("less than 2", 0, 100);
            console.log("its running")
        }



    }


    //created a  for loop so we can run the constructor function for robots. we use new as we create multiple new robots. each with different properties but similar functions.
    for (j = 0; j < robots.length; j++) {
        //instead of having to call each functions, i have simplified it and used this.run() function which contains other functions eg this.move and this.checkCollisions();
        robots[j].run();


    }
    //this draws out the millitary function 

    for (var m = 0; m < militarry.length; m++) {
        militarry[m].run();
    }
    //this will play the sound function. this function purpose is to create a rectangle on the centre of the screen to demonstrate the change it sound using shapes.
    sound();
}

//-----------------------NEW EnemiesS---------------------//
function Enemies(m) {

    //created a variable which takes a boolean parameter as we would use this when a Enemies[]interacts with current Enemies(this),
    var intersect = false;
    var initialLocation = undefined;


    //below are the main properties for the Enemiess including its speed,mass exc......//
    this.speed = createVector(random(-5, 2), random(-5, 2));
    this.loc = initialLocation || createVector(random(width), random(height));
    this.acceleration = createVector(0, 0);
    this.mass = m || 3;
    this.diam = this.mass * 10;
    this.r = this.diam / 2;
    this.maxMass = 13
    this.agingRate = random(0.003, 0.015);
    this.lifespan = 350;
    this.intersect = false;



    //this.run function will be used in the draw loop to call the other sub functions instead of calling them out one by one. Its simply a container for all the other functions.

    //--!!!!!!!!!----To run other functions, simply uncomment them and it should run smoothly------!!!!!//

    this.run = function () {

        this.draw();
        this.move();
        this.checkBorders();
        this.checkCollisions();
        this.aging();
        this.boardersHit();
        this.fineTuning();




    }


    //this.draw function will be used to contain all the physical drawing elemnts. Minimumal code in the draw function to maximise the use of constructor functions (Enemies() && Robot())
    this.draw = function () {

        //this conditional statement checks if this.intersect is true. if so it will turn red and have a white outer stroke to distingush they are interacting. This will then return grey as the argument returns false from the checkCollision function.
        if (this.intersect == true) {
            stroke(255)
            fill(255, 0, 0);


        }
        //if this.intersect==false, then it will remain grey and we will have no stroke. 
        else {
            if (this.intersect == false) {
                noStroke()
                fill(255, 0, this.lifespan)
            }
        }

        //the diam will slowly increase by this.mass. we did not put this in the forloop as this does not depend on any conditions.
        this.diam = this.mass * 10;
        ellipse(this.loc.x, this.loc.y, this.diam, this.diam);

    }

    //this function adds movemet to the Enemiess on the canvas by adding acceleration. this will allow the Enemiess to slow down when they collide in the future. 

    this.move = function () {
        this.speed.add(this.acceleration);
        this.loc.add(this.speed);
        this.acceleration.mult(0.1);
    }


    //this function creates boundaries for the Enemiess so they rebound and change speed based on where they interact(x or y axis); i have also added an outcome which will reduce the Maxmass by -1 if this Enemies hits the boarders. if so, the maxMass will decrase by 1 reducing the time period on the canvas.

    this.checkBorders = function () {

        //this.boarders hit is an object which will turn true if the conditional statements are met. if the conditions are not met, it will remain false.
        this.boarderHit = false;
        if (this.loc.x > width - this.diam / 2) {
            this.loc.x = width - this.diam / 2;
            this.speed.x *= -1;
            this.maxMass -= 1;
            this.lifespan -= 200
            //conditions are met so this.boarderhit becomes true
            this.boarderHit = true;
        } else if (this.loc.x < this.diam / 2) {
            this.speed.x *= -1;
            this.loc.x = this.diam / 2;
            this.maxMass -= 1;
            this.lifespan -= 200;
            //conditions are met so this.boarderhit becomes true
            this.boarderHit = true;
        }
        if (this.loc.y > height - this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = height - this.diam / 2
            this.maxMass -= 1;
            this.lifespan -= 200;
            //conditions are met so this.boarderhit becomes true
            this.boarderHit = true;
        } else if (this.loc.y < this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = this.diam / 2
            this.maxMass -= 1;
            this.lifespan -= 200;
            //conditions are met so this.boarderhit becomes true
            this.boarderHit = true;

        }

    }

    //this function checks if the Enemies hits the boarding using the checkBoarder function. i have used a boolean to which becomes true if the Enemiess hit the width or height
    this.boardersHit = function () {


        //if the Enemies hits the boarders(==true), then the Enemies lifespan will decrase. i will use that to change the colour of the Enemiess by decrement its colour by -50
        if (this.boarderHit == true) {
            this.lifespan -= 50

        }
    }

    //function for applying force for this.Enemies.
    this.applyForce = function (f) {
        var adjustedForce = f.copy();
        adjustedForce.div(this.mass);
        this.acceleration.add(adjustedForce);
    }

    //this function will check if the current Enemiess in intersecting with other Enemiess in the Enemiess[] array.
    this.checkCollisions = function () {

        //we initialise the intersect variable to false which will then be true if the conditional statement is met below:

        //we create a for loop which will run through all the Enemies object including there location.
        for (var i = 0; i < Enemiess.length; i++) {

            this.intersect = false
            //we create a local variable which will work out the distance between the current Enemiess location and the other Enemiess[i].loc(location);
            var d = dist(this.loc.x, this.loc.y, Enemiess[i].loc.x, Enemiess[i].loc.y);

            //this conditional statemetn is to check if the distance between 2 Enemiess is less than the current Enemies radius(this.diam/2);.if so, we create a variavle called v and we use the p5.Vector.sub vector function to work out the distance.
            if (d < this.diam / 2 + 20) {
                v = p5.Vector.sub(Enemiess[i].loc, this.loc);
                //we need to normalise it to 1 so its look smooth
                v.normalize();
                //we apply force (v) and set the magnitude to 0.8 and we change this.intersect
                Enemiess[i].applyForce(v);
                //we set the magnitude to 0.8
                v.setMag(0.8);
                //we set all of the Enemiess.intersect to be true if the argument is met
                Enemiess[i].intersect = true;
                //we reduce lifespan of the Enemies so i can use this and create an affect which will allow the Enemiess to fade away loosing energy(color)
                this.lifespan -= 0.01



            }
        }
    }

    //this functions checks the age of the Enemiess. if it goes greater of equal to 6, then we will remove the Enemies from the array by using .splice which is an array function. this is so we dont slow our system as large sum of data stored in an array can cause the system to run slow.

    this.aging = function () {
        //we increment the mass by this.aging rate. this creates the affect in which as the Enemiess stay longer on the screen, the bigger they get. They get bigger based on a random mass between 0.003,0.0015.
        this.mass += this.agingRate;


        //we acess the Enemiess array and we check if each Enemiess.mass is greater than this.maxMass object. if so,we remove the Enemiess from the array using the splice function specificlly used for arrays. this creates the affect where if the size is biiger than the macimum mass, we instantly kill it.
        for (var i = 0; i < Enemiess.length; i++) {
            if (Enemiess[i].mass >= Enemiess[i].maxMass) {

                //we use i as this checks if the mass is in boundaries in the Enemiess. if so, we remove it.
                Enemiess.splice(i, 1);
                death.play();



            }
        }
    }


    //function to fine tune the locations

    this.fineTuning = function () {

        //this is the fine tuning which which initially allow the location to be either random .
        if (initialLocation !== undefined) {
            this.loc.x = initialLocation.x;
            this.loc.y = initialLocation.y;
        }

    }



}

//<<<<<<<<<<<<<<<<<<<<CODE FOR ROBOT >>>>>>>>>>>>>>>>>>>>>>>>>//////////



//for Extension, i decided to a robot which will eat dead Enemiess around its location

//this is the robot constructor function. similar layout for cinsistency and ease of use.
function Robot() {

    //these are the robots main objects. we will use "this" instead of giving random values for functions
    this.loc = createVector(width / 2, height / 2)
    this.diam = 30;
    this.mass = 10;
    this.acceleration = createVector(random(0, 2), random(0, 2));
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 400;
    this.maxSize = 70;
    this.helmet = 255


    //similarly to Enemiess.this will run all the other sub functions.
    this.run = function () {
        this.draw();
        this.move();
        this.checkBorders();
        this.interact();
        this.eating();
        this.newBorn();
        this.selfCollision();
        this.boardersHit();





    }

    //this fuction will draw the robots using the the object properties(eg,this.diam,this.lifespan)
    this.draw = function () {
        fill(255, 100, 0)
        stroke(255)
        rect(this.loc.x + 7, this.loc.y, this.diam / 2, this.diam);
        fill(0, this.lifespan, 100)
        rect(this.loc.x, this.loc.y + 10, this.diam, this.diam);
        stroke(0, 200, this.lifespan)
        rect(this.loc.x + 10, this.loc.y + 10, this.diam / 4, this.diam);
        text("ALL ROBOTS AND MILLITARY SPWAN LOCATION", width / 2 - 120, height / 2 - 35)







    }
    //this function adds movemet to the robots on the canvas by adding acceleration. this will allow the robots to move continiously.
    this.move = function () {
        //we add this.acceleration to the speed using the add method for vecots.
        this.speed.add(this.acceleration);
        this.loc.add(this.speed);
        this.acceleration.mult(0);
    }

    this.applyForce = function (f) {
        var adjustedForce = f.copy();
        adjustedForce.div(this.mass);
        this.acceleration.add(adjustedForce);
    }


    //this will check if the robots are in the boarder similarly to Enemiess
    this.checkBorders = function () {

        //we created two objects to check if the robots have hit the walls. initially we set the boolean to false as we assume they spawn not hititing the wall. 
        this.boardersHit_y = false;
        this.boardersHit_x = false;

        //this conditional statement checks if the robot x location is greter than the width of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        if (this.loc.x > width - this.diam / 2) {
            this.loc.x = width - this.diam / 2;
            this.speed.x *= -1;
            this.boardersHit_x = true;


            //this conditional statement checks if the robot x location is less than the width of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.
        } else if (this.loc.x < this.diam / 2) {
            this.speed.x *= -1;
            this.loc.x = this.diam / 2;
            this.maxMass -= 1;
            this.boardersHit_x = true;

            //this conditional statement checks if the robot y location is greter than the height of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        }
        if (this.loc.y > height - this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = height - this.diam / 2
            this.maxMass -= 1;
            this.boardersHit_y = true;

            //this conditional statement checks if the robot y location is less than the height of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        } else if (this.loc.y < this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = this.diam / 2
            this.maxMass -= 1;
            this.boardersHit_y = true;

        }

    }



    //this function will check if the robots is near dieing Enemiess we will remove any Enemiess which is in the radius of this.loc and robots[i].loc.
    this.interact = function () {
        this.robotHit = false;


        //for loop will run through the Enemiess array
        for (var i = 0; i < Enemiess.length; i++) {
            //local vatiable which will contain the distance
            d = dist(Enemiess[i].loc.x, Enemiess[i].loc.y, this.loc.x, this.loc.y)
            //conditional statement which will remove Enemiess from the array if they are close. Also robotHit becomes true;
            if (d < Enemiess[i].diam / 2 + this.diam / 2 + 40) {
                Enemiess.splice(i, 1);
                this.robotHit = true;
                dead_robot += 1;

            }
        }

    }

    //this function is used to create a belly fattining affect. the more Enemiess the robot eats, the bigger it becomes. // this conditional statement checks if th eEnemiess is hit by a robot. if so, we create a flash affect quickly to represent a death of a Enemies

    this.eating = function () {
        //from the (this.interact function), we set a boolean to true if a Enemiess is withing range. from there we used that information and created a new function which will increase the diameter of the robots by 8 pixels. However, the bigger and unhealthy it becomes, the lifespan of the robots also goes down.

        if (this.robotHit == true) {
            this.diam += 8
            this.lifespan -= 100;
            background(255)
            //we call the laser function as the robot has already eaten the closest Enemies
            this.laser();
            laser.play();
            laser.setVolume(random(0.3))



        }
    }
    //this function is called wheenver a Enemies is killed. creates a laser affect
    this.laser = function () {
        for (var i = 0; i < Enemiess.length; i++) {
            stroke(255, 100, 0)
            line(this.loc.x, this.loc.y, Enemiess[i].loc.x, Enemiess[i].loc.y);

        }
    }
    this.newBorn = function () {


        //the for loop us used to check through each constuctor function in the robots array.
        for (var i = 0; i < robots.length; i++) {
            //this conditional statement checks if each robots diam>=70. if so we remove it from the array and push a new Robot constructor function in. i have used robots[i].diam insteaad of this.diam as so each indavidual robot can indavidually remove and add robots instead og having a leading robot.
            if (robots[i].diam >= 70) {
                //this removes any robots with a diam greater than or equal to 70
                robots.splice(i, 1);
                //we push new robots by calling the robot function and out it into the robots array. this array is 
                robots.push(new Robot())


            }
        }
    }

    //this function is to detect if any of the robots are within range with eachover.

    this.selfCollision = function () {
        for (var i = 0; i < robots.length; i++) {
            //we create a variable called distance and we give it the values which work out the distance (using dist function)between the current location of the robot and the distance between other robots.
            distance = dist(this.loc.x, this.loc.y, robots[i].loc.x, robots[i].loc.y)

            //if the distance variable is less than the current diamaeter of the robot,we will work out the difference using the p5.Vector.sub function. 
            if (distance < this.diam + 15) {
                v = p5.Vector.sub(robots[i].loc, this.loc);
                //we normalise it so it remains 1
                v.normalize();
                //we apply the force (v). V is the value which we used to work out the difference.
                robots[i].applyForce(v);
                //set the magnitude to 0.8
                v.setMag(0.8);


            }
        }
    }

    //this function checks if the boarders are hit. 
    this.boardersHit = function () {

        //this function will add a new Enemies whenever the robots his the end of the canvas. the arguments for the conditional statemtns are provided from the this.checkBoarders() function. if they do hit, we will add new Enemiess 
        if (this.boardersHit_y == true || this.boardersHit_x == true) {

            //we push new Enemiess into the array when the robot hits the walls.
            Enemiess.push(new Enemies());

            //the song will play
            song.play()
            song.setVolume(0.1)


        }
    }

}

//constructor function for millitary
function Military() {

    //these are the robots main objects. we will use "this" instead of giving random values for functions
    this.loc = createVector(width / 2, height / 2)
    this.diam = 30;
    this.mass = 10;
    this.acceleration = createVector(random(0, 0), random(0, 0));
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 400;
    this.maxSize = 70;
    this.helmet = 255


    //similarly to Enemiess.this will run all the other sub functions.
    this.run = function () {
        this.draw();
        this.move();
        this.checkBorders();
        this.interact();
        this.eating();
        this.selfCollision();
        this.shield();



    }

    //this fuction will draw the robots using the the object properties(eg,this.diam,this.lifespan)
    this.draw = function () {

        fill(100, this.lifespan, this.lifespan)
        stroke(255);
        strokeWeight(2)
        //legs
        line(this.loc.x, this.loc.y - 25, this.loc.x - 7, this.loc.y - 6);
        line(this.loc.x, this.loc.y - 25, this.loc.x + 7, this.loc.y - 6);
        strokeWeight(1);

        //body
        ellipse(this.loc.x, this.loc.y - 25, 7, 17);

        //face 

        ellipse(this.loc.x, this.loc.y - 37, 15, 15);






    }
    //this function adds movemet to the robots on the canvas by adding acceleration. this will allow the robots to move continiously.
    this.move = function () {
        //we add this.acceleration to the speed using the add method for vecots.
        this.speed.add(this.acceleration);
        this.loc.add(this.speed);
        this.acceleration.mult(0);
    }

    this.applyForce = function (f) {
        var adjustedForce = f.copy();
        adjustedForce.div(this.mass);
        this.acceleration.add(adjustedForce);
    }


    //this will check if the robots are in the boarder similarly to Enemiess
    this.checkBorders = function () {

        //we created two objects to check if the robots have hit the walls. initially we set the boolean to false as we assume they spawn not hititing the wall. 
        this.boardersHit_y = false;
        this.boardersHit_x = false;

        //this conditional statement checks if the robot x location is greter than the width of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        if (this.loc.x > width - this.diam / 2) {
            this.loc.x = width - this.diam / 2;
            this.speed.x *= -1;
            this.boardersHit_x = true;


            //this conditional statement checks if the robot x location is less than the width of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.
        } else if (this.loc.x < this.diam / 2) {
            this.speed.x *= -1;
            this.loc.x = this.diam / 2;
            this.maxMass -= 1;
            this.boardersHit_x = true;

            //this conditional statement checks if the robot y location is greter than the height of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        }
        if (this.loc.y > height - this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = height - this.diam / 2
            this.maxMass -= 1;
            this.boardersHit_y = true;

            //this conditional statement checks if the robot y location is less than the height of the canvas. if so we alter the speed and change the correspondin boolean into true. if the conditions are not met, the booleans remain false.

        } else if (this.loc.y < this.diam / 2) {
            this.speed.y *= -1;
            this.loc.y = this.diam / 2
            this.maxMass -= 1;
            this.boardersHit_y = true;

        }

    }

    //this function will create a shield like affect whenever a robot hits a wall
    this.shield = function () {
        //first we acess all the robots in the robots array so we can indaviduallly check which robot is hitting a wall.
        for (var i = 0; i < robots.length; i++) {

            //if the millitary is hitting eather the x or y boarder, each Enemies in the array will create a shild in its current x and y location
            if (this.boardersHit_y == true || this.boardersHit_x == true) {
                stroke(255)
                fill(0, 255, 100, 100)
                ellipse(this.loc.x + i, this.loc.y + i + 10, 100);
                fill(255, 100, 10, 10)
                ellipse(this.loc.x + 20, this.loc.y + 10, 50)

            }
        }
    }

    //this function will check if the robots is near dieing Enemiess we will remove any Enemiess which is in the radius of this.loc and robots[i].loc.
    this.interact = function () {
        this.armyHit = false;


        //for loop will run through the Enemiess array
        for (var i = 0; i < Enemiess.length; i++) {
            //local vatiable which will contain the distance
            d = dist(Enemiess[i].loc.x, Enemiess[i].loc.y, this.loc.x, this.loc.y)
            //conditional statement which will remove Enemiess from the array if they are close. Also robotHit becomes true;
            if (d < Enemiess[i].diam / 2 + this.diam / 2) {
                Enemiess.splice(i, 1);
                dead_millitary += 1;
                this.armyHit = true;

            }
        }

    }

    //this function is used to create a belly fattining affect. the more Enemiess the robot eats, the bigger it becomes. // this conditional statement checks if th eEnemiess is hit by a robot. if so, we create a flash affect quickly to represent a death of a Enemies

    this.eating = function () {
        //from the (this.interact function), we set a boolean to true if a Enemiess is withing range. from there we used that information and created a new function which will increase the diameter of the robots by 8 pixels. However, the bigger and unhealthy it becomes, the lifespan of the robots also goes down.

        if (this.armyHit == true) {
            this.diam += 8
            this.lifespan -= 100;





        }
    }


    //this function is to detect if any of the robots are within range with eachover.

    this.selfCollision = function () {
        for (var i = 0; i < militarry.length; i++) {
            //we create a variable called distance and we give it the values which work out the distance (using dist function)between the current location of the robot and the distance between other robots.
            distance = dist(this.loc.x, this.loc.y, militarry[i].loc.x, militarry[i].loc.y)

            //if the distance variable is less than the current diamaeter of the robot,we will work out the difference using the p5.Vector.sub function. 
            if (distance < this.diam + 15) {
                v = p5.Vector.sub(militarry[i].loc, this.loc);
                //we normalise it so it remains 1
                v.normalize();
                //we apply the force (v). V is the value which we used to work out the difference.
                militarry[i].applyForce(v);
                //set the magnitude to 0.8
                v.setMag(0.8);


            }
        }
    }




}




function sound() {
    //this function will create the animation in the centre which adjust its diameter based upon the volume.

    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 50, 90);
    fill(255)
    ellipse(width / 2 + 5, height / 2 + 25, diam + 30)
    fill(255, 0, 0)
    rect(width / 2 - 20, height / 2, diam, diam)
}








//----------------P5 Functions-------------------//////////////

function keyPressed() {



    //when the up arrow is pressed, we will add 1 Enemies to the array
    for (var j = 0; j < 1; j++) {
        if (keyCode == UP_ARROW) {
            Enemiess.push(new Enemies());
            //we play the envelope when we press the up arrow.
            env.play();



            //            console.log("adding")
        }
    }



    //when we press the down arrow, a single Enemies would be renoved

    for (var i = 0; i < Enemiess.length; i++) {
        if (keyCode == DOWN_ARROW) {

            //we use i as this checks if the mass is in boundaries in the Enemiess. if so, we remove it.
            Enemiess.splice(i, 1);
            //we play env1 when we press the down key
            env1.play()




        }
    }
    //when space bar is pressed, the class object .massMax will increment by 10 allowing longer life on the screen
    for (var a = 0; a < Enemiess.length; a++) {
        if (keyCode == 65) {
            Enemiess[a].maxMass += 10;
            stroke(255)
            fill(255)
            //            console.log(Enemiess[a].maxMass)
        }
    }


}

//(FAEEM)