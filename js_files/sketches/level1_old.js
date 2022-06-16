var cC; //used to allow the canvas to load on the webpage

var s1b; //this variable is going to be used to preload the scene 1 background
var s2b; //this variable is going to be used to preload the scene 2 background
var s3b; //this variable is going to be used to preload the scene 3 background

var v1; // vehicle 1 variable
var v2; // vehicle 2 variable
var v3; // vehicle 3 variable

var c1; // character 1 variable
var c2; // character 2 variable
var c3; // character 3 variable

var e1; // enemy 1 variable

var bg; // background variable
var bg2; // background variable

var w1; // weapon 1 variable
var w2; // weapon 2 variable
var w3; // weapon 3 variable
var w4; // weapon 4 variable
var w5; // weapon 5 variable

var w6; // weapon 6 variable
var w7; // weapon 7 variable
var w8; // weapon 8 variable
var w9; // weapon 9 variable
var w10; // weapon 10 variable

var h1; // heart variable
var h2;

var cac; // cactus variable
var cld; // cloud variable

var bul; // bullet variable
var bullets;

function preload() 
{
    soundFormats('mp3','wav');
    
    
    s1b = loadImage('../../assets/Selector/Select1.png')
    s2b = loadImage('../../assets/Selector/Select2.png')
    s3b = loadImage('../../assets/Selector/Select3.png')
    
    bg = loadAnimation('../../assets/Level_1/bg1.png','../../assets/Level_1/bg2.png','../../assets/Level_1/bg3.png',
                      '../../assets/Level_1/bg4.png','../../assets/Level_1/bg5.png','../../assets/Level_1/bg6.png',
                      '../../assets/Level_1/bg7.png','../../assets/Level_1/bg8.png','../../assets/Level_1/bg9.png',
                      '../../assets/Level_1/bg10.png','../../assets/Level_1/bg11.png','../../assets/Level_1/bg12.png')
    
   
   
    
    coin = loadSound('../../assets/Level_1/coin.wav'); // source: https://freesound.org/people/MattiaGiovanetti/sounds/482083/
    
    jump = loadSound('../../assets/Level_1/jump.wav'); // source: https://freesound.org/people/LloydEvans09/sounds/187024/
    jump.setVolume(0.8);
    
    death = loadSound('../../assets/Level_1/death.wav'); // source: https://freesound.org/people/stumpbutt/sounds/381770/
    death.setVolume(1);
    
    gameover = loadSound('../../assets/Level_1/gameover.wav'); // Source: https://freesound.org/people/ScreamStudio/sounds/412168/
    gameover.setVolume(1);
    
    complete = loadSound('../../assets/Level_1/complete.wav'); // source: https://freesound.org/people/Leszek_Szary/sounds/171671/
    complete.setVolume(1);
    
    
    h1 = loadAnimation('normal','../../assets/Level_1/h1.png','../../assets/Level_1/h1.png','../../assets/Level_1/h1.png',
                       '../../assets/Level_1/h2.png','../../assets/Level_1/h2.png','../../assets/Level_1/h2.png',
                       '../../assets/Level_1/h3.png', '../../assets/Level_1/h3.png', '../../assets/Level_1/h3.png',
                       '../../assets/Level_1/h3.png','../../assets/Level_1/h3.png','../../assets/Level_1/h3.png',
                       '../../assets/Level_1/h2.png','../../assets/Level_1/h2.png','../../assets/Level_1/h2.png',
                        '../../assets/Level_1/h1.png','../../assets/Level_1/h1.png','../../assets/Level_1/h1.png',
                       '../../assets/Level_1/h5.png','../../assets/Level_1/h5.png','../../assets/Level_1/h5.png',
                       '../../assets/Level_1/h6.png','../../assets/Level_1/h6.png','../../assets/Level_1/h6.png',
                       '../../assets/Level_1/h6.png','../../assets/Level_1/h6.png','../../assets/Level_1/h6.png',
                       '../../assets/Level_1/h5.png','../../assets/Level_1/h5.png','../../assets/Level_1/h5.png',
                      '../../assets/Level_1/h1.png','../../assets/Level_1/h1.png','../../assets/Level_1/h1.png')
        
    cac = loadImage('../../assets/Level_1/cactus2.png')    
    
    cld = loadAnimation('normal','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                        '../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                        '../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                        '../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                        '../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                        '../../assets/Level_1/c1.png','../../assets/Level_1/c1.png','../../assets/Level_1/c1.png',
                       '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                        '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                        '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                        '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                        '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                        '../../assets/Level_1/c2.png','../../assets/Level_1/c2.png','../../assets/Level_1/c2.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png',
                       '../../assets/Level_1/c3.png','../../assets/Level_1/c3.png','../../assets/Level_1/c3.png')
    
    bul = loadImage('../../assets/Level_1/bullet.png')

    
}



function setup() {

    //we create a canvas with width of 900 and height of 600
    cC = createCanvas(900, 550);
    //this is to ensure this links to the parental html File.
    cC.parent('lvl1');
    
    e1 = createSprite(200,200)
    e1.addAnimation('../../assets/Level_1/en2.png')
    


    mgr = new SceneManager();

    //this allows the user navigate through each scene
    mgr.addScene(Scene1)
    mgr.addScene(Scene2)
    mgr.addScene(Scene3)
    mgr.addScene(Scene4)
    mgr.addScene(Scene5)
    mgr.addScene(Scene6)
    mgr.addScene(Scene7)
    mgr.addScene(Scene8)
    mgr.addScene(Scene9)
    mgr.addScene(Scene10)
    mgr.addScene(Scene11)
    mgr.addScene(Scene12)
    mgr.addScene(Scene13)
    mgr.addScene(Scene14)


    mgr.showNextScene();
    
    

}

function draw() {

    mgr.draw();
}



function Scene1() {
    this.setup = function () {
        
        //allows v1 to ve a sprite
        v1 = createSprite(200,200)
        //this applies this animation to the sprite
        v1.addAnimation('normal', '../../assets/Scooter/Scooter2_1.png', '../../assets/Scooter/Scooter2_2.png',
        '../../assets/Scooter/Scooter2_3.png', '../../assets/Scooter/Scooter2_4.png',
        '../../assets/Scooter/Scooter2_5.png', '../../assets/Scooter/Scooter2_6.png',
        '../../assets/Scooter/Scooter2_7.png', '../../assets/Scooter/Scooter2_8.png',
        '../../assets/Scooter/Scooter2_9.png')
        
        v2 = createSprite(200,200)
        v2.addAnimation('normal',
                    '../../assets/HamsterBall/HamsterBall2_1.png','../../assets/HamsterBall/HamsterBall2_2.png',
                   '../../assets/HamsterBall/HamsterBall2_3.png','../../assets/HamsterBall/HamsterBall2_4.png',
                   '../../assets/HamsterBall/HamsterBall2_5.png','../../assets/HamsterBall/HamsterBall2_6.png',
                   '../../assets/HamsterBall/HamsterBall2_7.png','../../assets/HamsterBall/HamsterBall2_8.png',
                   '../../assets/HamsterBall/HamsterBall2_9.png','../../assets/HamsterBall/HamsterBall2_10.png',
                   '../../assets/HamsterBall/HamsterBall2_11.png','../../assets/HamsterBall/HamsterBall2_12.png',
                   '../../assets/HamsterBall/HamsterBall2_13.png','../../assets/HamsterBall/HamsterBall2_14.png',
                   '../../assets/HamsterBall/HamsterBall2_15.png','../../assets/HamsterBall/HamsterBall2_16.png',
                    '../../assets/HamsterBall/HamsterBall2_11.png','../../assets/HamsterBall/HamsterBall2_12.png',
                   '../../assets/HamsterBall/HamsterBall2_13.png','../../assets/HamsterBall/HamsterBall2_14.png',
                   '../../assets/HamsterBall/HamsterBall2_15.png','../../assets/HamsterBall/HamsterBall2_16.png',
                   '../../assets/HamsterBall/HamsterBall2_11.png','../../assets/HamsterBall/HamsterBall2_12.png',
                   '../../assets/HamsterBall/HamsterBall2_13.png','../../assets/HamsterBall/HamsterBall2_14.png',
                   '../../assets/HamsterBall/HamsterBall2_15.png','../../assets/HamsterBall/HamsterBall2_16.png',
                   '../../assets/HamsterBall/HamsterBall2_11.png','../../assets/HamsterBall/HamsterBall2_12.png',
                   '../../assets/HamsterBall/HamsterBall2_13.png','../../assets/HamsterBall/HamsterBall2_14.png',
                   '../../assets/HamsterBall/HamsterBall2_15.png','../../assets/HamsterBall/HamsterBall2_16.png',
                   '../../assets/HamsterBall/HamsterBall2_11.png','../../assets/HamsterBall/HamsterBall2_12.png',
                   '../../assets/HamsterBall/HamsterBall2_13.png','../../assets/HamsterBall/HamsterBall2_14.png',
                   '../../assets/HamsterBall/HamsterBall2_15.png','../../assets/HamsterBall/HamsterBall2_16.png')
        
        v3 = createSprite(200,200)
        v3.addAnimation('normal',
        '../../assets/MotorBike/MotorBike1.png', '../../assets/MotorBike/MotorBike2.png',
        '../../assets/MotorBike/MotorBike3.png', '../../assets/MotorBike/MotorBike4.png',
        '../../assets/MotorBike/MotorBike5.png')
        
        
        
        
        

    }


    this.draw = function () {
        
        
        
        background(s1b)
        
        //fill(255)
        //text("x = " + mouseX,20,20)
        //text("y = " + mouseY,20,40)
        //noFill()
        
        // used to keep the sprite in a specific spot
        v1.position.x = 155;
        v1.position.y = 390;
        
        v2.position.x = 735;
        v2.position.y = 370;
        
        v3.position.x = 455;
        v3.position.y = 390;
        
        
        //this function is used to draw the sprites
        drawSprite(v1);
        drawSprite(v2);
        drawSprite(v3);



    }

}


function Scene2() {

    this.setup = function () {
        
        w1 = createSprite(width / 2, height / 2)
        w1.addAnimation('normal', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png')
        
        
        w2 = createSprite(width/2,height/2)
        w2.addAnimation('normal','../../assets/SlingShot/SlingShot1_1.png','../../assets/SlingShot/SlingShot1_2.png',
                    '../../assets/SlingShot/SlingShot1_3.png','../../assets/SlingShot/SlingShot1_3.png',
                    '../../assets/SlingShot/SlingShot1_2.png','../../assets/SlingShot/SlingShot1_1.png')
        
        
        w3 = createSprite(width/2,height/2)
        w3.addAnimation('../../assets/Potion/potion_1.png','../../assets/Potion/potion_2.png',
                        '../../assets/Potion/potion_3.png','../../assets/Potion/potion_4.png',
                        '../../assets/Potion/potion_5.png','../../assets/Potion/potion_6.png',
                        '../../assets/Potion/potion_7.png','../../assets/Potion/potion_8.png',
                        '../../assets/Potion/potion_9.png','../../assets/Potion/potion_10.png',
                        '../../assets/Potion/potion_10.png','../../assets/Potion/potion_11.png',
                        '../../assets/Potion/potion_12.png','../../assets/Potion/potion_13.png',
                        '../../assets/Potion/potion_14.png','../../assets/Potion/potion_15.png',
                        '../../assets/Potion/potion_16.png','../../assets/Potion/potion_17.png',
                        '../../assets/Potion/potion_18.png','../../assets/Potion/potion_19.png');
        
        
        w4 = createSprite(width / 2, height / 2)
        w4.addAnimation('../../assets/axe/axe_1.png', '../../assets/axe/axe_2.png', '../../assets/axe/axe_3.png', '../../assets/axe/axe_4.png',
                    '../../assets/axe/axe_5.png', '../../assets/axe/axe_6.png', '../../assets/axe/axe_7.png', '../../assets/axe/axe_8.png', '../../assets/axe/axe_9.png', '../../assets/axe/axe_10.png', '../../assets/axe/axe_11.png', '../../assets/axe/axe_12.png', '../../assets/axe/axe_13.png', '../../assets/axe/axe_14.png', '../../assets/axe/axe_15.png', '../../assets/axe/axe_16.png', '../../assets/axe/axe_17.png', '../../assets/axe/axe_18.png', '../../assets/axe/axe_19.png', '../../assets/axe/axe_20.png', '../../assets/axe/axe_21.png', '../../assets/axe/axe_22.png', '../../assets/axe/axe_23.png', '../../assets/axe/axe_24.png', '../../assets/axe/axe_25.png', '../../assets/axe/axe_26.png', '../../assets/axe/axe_27.png', '../../assets/axe/axe_28.png', '../../assets/axe/axe_29.png', '../../assets/axe/axe_30.png', '../../assets/axe/axe_31.png', '../../assets/axe/axe_32.png');
        
        
        w5 = createSprite(width / 2, height / 2)
        w5.addAnimation('../../assets/GenericWeapon/genericGun__1.png', '../../assets/GenericWeapon/genericGun__2.png',
        '../../assets/GenericWeapon/genericGun__3.png', '../../assets/GenericWeapon/genericGun__4.png',
        '../../assets/GenericWeapon/genericGun__5.png', '../../assets/GenericWeapon/genericGun__3.png',
        '../../assets/GenericWeapon/genericGun__4.png', '../../assets/GenericWeapon/genericGun__5.png',
        '../../assets/GenericWeapon/genericGun__3.png', '../../assets/GenericWeapon/genericGun__4.png',
        '../../assets/GenericWeapon/genericGun__5.png', '../../assets/GenericWeapon/genericGun__3.png',
        '../../assets/GenericWeapon/genericGun__4.png', '../../assets/GenericWeapon/genericGun__5.png');
     

    }


    this.draw = function () {
       
        background(s2b)
        
//        fill(255)
//        text("x = " + mouseX,20,20)
//        text("y = " + mouseY,20,40)
//        noFill()
        
        
        
        w1.position.x = 120;
        w1.position.y = 250;
        
        w2.position.x = 440;
        w2.position.y = 232;
        
        w3.position.x = 715;
        w3.position.y = 212;
        
        w4.position.x = 290;
        w4.position.y = 430;
        
        w5.position.x = 610;
        w5.position.y = 450;
        
        drawSprite(w1)
        drawSprite(w2)
        drawSprite(w3)
        drawSprite(w4)
        drawSprite(w5)
        
        

    }


}

function Scene3() {

    this.setup = function () {
        
        w6 = createSprite(width / 2, height / 2)
        w6.addAnimation('normal', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_4.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_3.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_2.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png', '../../assets/WalkingStick/PNG/walkingStick_1.png')
        
        
        w7 = createSprite(width/2,height/2)
        w7.addAnimation('normal','../../assets/SlingShot/SlingShot1_1.png','../../assets/SlingShot/SlingShot1_2.png',
                    '../../assets/SlingShot/SlingShot1_3.png','../../assets/SlingShot/SlingShot1_3.png',
                    '../../assets/SlingShot/SlingShot1_2.png','../../assets/SlingShot/SlingShot1_1.png')
        
        
        w8 = createSprite(width/2,height/2)
        w8.addAnimation('../../assets/Potion/potion_1.png','../../assets/Potion/potion_2.png',
                        '../../assets/Potion/potion_3.png','../../assets/Potion/potion_4.png',
                        '../../assets/Potion/potion_5.png','../../assets/Potion/potion_6.png',
                        '../../assets/Potion/potion_7.png','../../assets/Potion/potion_8.png',
                        '../../assets/Potion/potion_9.png','../../assets/Potion/potion_10.png',
                        '../../assets/Potion/potion_10.png','../../assets/Potion/potion_11.png',
                        '../../assets/Potion/potion_12.png','../../assets/Potion/potion_13.png',
                        '../../assets/Potion/potion_14.png','../../assets/Potion/potion_15.png',
                        '../../assets/Potion/potion_16.png','../../assets/Potion/potion_17.png',
                        '../../assets/Potion/potion_18.png','../../assets/Potion/potion_19.png');
        
        
        w9 = createSprite(width / 2, height / 2)
        w9.addAnimation('../../assets/axe/axe_1.png', '../../assets/axe/axe_2.png', '../../assets/axe/axe_3.png', '../../assets/axe/axe_4.png',
                    '../../assets/axe/axe_5.png', '../../assets/axe/axe_6.png', '../../assets/axe/axe_7.png', '../../assets/axe/axe_8.png', '../../assets/axe/axe_9.png', '../../assets/axe/axe_10.png', '../../assets/axe/axe_11.png', '../../assets/axe/axe_12.png', '../../assets/axe/axe_13.png', '../../assets/axe/axe_14.png', '../../assets/axe/axe_15.png', '../../assets/axe/axe_16.png', '../../assets/axe/axe_17.png', '../../assets/axe/axe_18.png', '../../assets/axe/axe_19.png', '../../assets/axe/axe_20.png', '../../assets/axe/axe_21.png', '../../assets/axe/axe_22.png', '../../assets/axe/axe_23.png', '../../assets/axe/axe_24.png', '../../assets/axe/axe_25.png', '../../assets/axe/axe_26.png', '../../assets/axe/axe_27.png', '../../assets/axe/axe_28.png', '../../assets/axe/axe_29.png', '../../assets/axe/axe_30.png', '../../assets/axe/axe_31.png', '../../assets/axe/axe_32.png');
        
        
        w10 = createSprite(width / 2, height / 2)
        w10.addAnimation('../../assets/GenericWeapon/genericGun__1.png', '../../assets/GenericWeapon/genericGun__2.png',
        '../../assets/GenericWeapon/genericGun__3.png', '../../assets/GenericWeapon/genericGun__4.png',
        '../../assets/GenericWeapon/genericGun__5.png', '../../assets/GenericWeapon/genericGun__3.png',
        '../../assets/GenericWeapon/genericGun__4.png', '../../assets/GenericWeapon/genericGun__5.png',
        '../../assets/GenericWeapon/genericGun__3.png', '../../assets/GenericWeapon/genericGun__4.png',
        '../../assets/GenericWeapon/genericGun__5.png', '../../assets/GenericWeapon/genericGun__3.png',
        '../../assets/GenericWeapon/genericGun__4.png', '../../assets/GenericWeapon/genericGun__5.png');
     

    }


    this.draw = function () {
       
        background(s3b)
        
        
        w6.position.x = 80;
        w6.position.y = 230;
        
        w7.position.x = 450;
        w7.position.y = 210;
        
        w8.position.x = 800;
        w8.position.y = 200;
        
        w9.position.x = 250;
        w9.position.y = 420;
        
        w10.position.x = 640;
        w10.position.y = 450;
        
        drawSprite(w6)
        drawSprite(w7)
        drawSprite(w8)
        drawSprite(w9)
        drawSprite(w10)
        

    }


}

function Scene4() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(0,255,255)

    }


}

function Scene5() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(0,0,255)

    }


}


function Scene6() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(255,255,0)

    }


}

function Scene7() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(0,0,0)

    }


}

function Scene8() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(100,0,100)

    }


}

function Scene9() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(255,100,0)

    }


}

function Scene10() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(0,255,150)

    }


}

function Scene11() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(0,255,100)

    }


}

function Scene12() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(100,255,200)

    }


}

function Scene13() {

    this.setup = function () {
     

    }


    this.draw = function () {
       
        background(200,255,50)

    }


}

function Scene14() {
    
       this.setup = function () {
     

    }


    this.draw = function () {
       
        background(200,0,50)

    }
    

}




function keyPressed() {
    switch (key) {
        case '1':
            mgr.showScene(Scene1);
            break;

        case '2':
            mgr.showScene(Scene2);
            break;
            
        case '3':
            mgr.showScene(Scene3);
            break;
            
        case '4':
            mgr.showScene(Scene14);
            break;
            
        case 'Y':
            mgr.showScene(Scene4);
            break;
            
        case 'U':
            mgr.showScene(Scene5);
            break;
            
        case 'I':
            mgr.showScene(Scene6);
            break;
            
        case 'O':
            mgr.showScene(Scene7);
            break;
            
        case 'P':
            mgr.showScene(Scene8);
            break;
            
        case 'G':
            mgr.showScene(Scene9);
            break;
            
        case 'H':
            mgr.showScene(Scene10);
            break;
            
        case 'J':
            mgr.showScene(Scene11);
            break;
            
        case 'K':
            mgr.showScene(Scene12);
            break;
            
        case 'L':
            mgr.showScene(Scene13);
            break;
            
    }

}

