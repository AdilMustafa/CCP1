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

var pyr; // pyramid variable

var isJumping; // character jumping variable

var gameChar_x; // character x location variable
var gameChar_y; // character y location variable
var floorPos_y; // floor position variable
var scrollPos; // scroll position variable
var gameChar_world_x; // game world x variable

var isLeft; // allows interactions if is left
var isRight; // allows interactions if is right
var isFalling; // allows interactions if falling
var isPlummeting; // allows interactions if plumeting

var clouds_x; // cloud x loaction variable

var pyramids_x; //pyramid  x loaction variable
var cactus_x; //cactus  x loaction variable
var collectables; // collectables variable

var game_score; // game score variable
var flagpole; // flag pole variable
var flagpole2; // the other flag pole variable
var lives; // lives variable

var platforms; // platforms variable


var enemies;


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
    
    pyr = loadImage('../../assets/Level_1/p.png')

    
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
        
    floorPos_y = 495;
    lives=4;
    startGame()
        
        c1 = createSprite(200,200)
        c1.addAnimation('normal','../../assets/Scooter/Scooter__1.png','../../assets/Scooter/Scooter__2.png',
                        '../../assets/Scooter/Scooter__3.png','../../assets/Scooter/Scooter__4.png',
                       '../../assets/Scooter/Scooter__5.png','../../assets/Scooter/Scooter__6.png',
                       '../../assets/Scooter/Scooter__7.png','../../assets/Scooter/Scooter__8.png',
                       '../../assets/Scooter/Scooter__9.png')
        
        e1 = createSprite(200,200)
        e1.addAnimation('normal','../../assets/Level_1/en2.png')
        
        bg=loadImage('../../assets/Level_1/bg_1.png')
        bullets = new Group();
    

    
     

    }


    this.draw = function () {
       
         //game lives
    if(gameChar_y > height && lives > 0){
    startGame()
    }
    
	//animation(bg, width / 2, height / 2)
    background(bg)
        
        
    if(keyDown('a'))
    {
        isLeft = true;
        console.log("isLeft " + isLeft);
        
    }

    if(keyDown('d'))
    {
        isRight= true;
        console.log("isRight " + isRight);
    }
    


    if(keyDown('w') && !isPlummeting)
        {
          if(!isFalling){
            gameChar_y = gameChar_y-100;
            isJumping=true;
            jump.play();
            console.log("isJumping " + isJumping);
          }
            
       
    }
    if(keyWentUp('a'))
    {
        isLeft = false;
        console.log("isLeft " + isLeft);
    }
       
    if(keyWentUp('d'))
    {
        isRight= false;
        console.log("isRight " + isRight);
    }
    
    
     if(keyWentUp('w'))
    {
        isJumping=false;
        console.log("isJumping " + isJumping);
    }
   

	noStroke();
	fill(0,155,0);
    push()
    translate(scrollPos,0)
    
	rect(0, floorPos_y, width, height/4); 
    

    drawGroundT();
    drawStones();
    drawSandT();
    drawCactus();
    drawClouds();
    drawpyramids()
    
    
	// Draw canyons.
   for(var i =0; i < canyons.length; i++)
   {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i])
   }
    
    for(var i =0; i < 20; i++)
   {
        drawLeftsideCanyon();
        checkLeftCanyon()
   }

	// Draw collectable items.
     for(var i =0; i < collectables.length; i++)
     {
         if(collectables[i].isFound==false)
         {
             drawCollectable(collectables[i]);
             checkCollectable(collectables[i]);
         }
    }
  
    renderFlagpole()    

    if  (flagpole.isReached==false)
    {
        checkFlagpole()
    }
        
    renderFlagpole2()
    
    if  (flagpole2.isReached==false)
    {
        checkFlagpole2()
    }
    
    
    
    for(var i =0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
    

    
    for(var i = 0; i < enemies.length; i++){
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].isContact(gameChar_world_x, gameChar_y))
        {
            startGame();
            break
        }
        
        
        
    }
    
    pop()
    
    
    for (var i = 0; i < lives; i++){
        animation(h1,30 + i *45,50)
    }
	
	drawGameChar();
    
    
    fill(0)
    noStroke();
    
    text("Score: " + game_score,20,20)
    text("Lives: " + lives,100,20)

    
    //game over & level complete
    if(lives < 1)
    {
        fill(0,0,0,100)
        rect(0,0,width,height)
        fill(0)
        text("Game Over (Refresh the Page to Try Again)", width/2-30,height/2,100)  
        return
    }
    
    
    
    if(flagpole.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
    if(flagpole2.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
   
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 4;
		}
		
        else
		{
			scrollPos += 4;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 4;
		}
		
        else
		{
			scrollPos -= 4; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
     if(gameChar_y < floorPos_y )
    {
        
        
        
        var isContact = false;
        
        
        for(var i = 0; i < platforms.length; i++)
        {
            if(platforms[i].platformContact(gameChar_world_x , gameChar_y))
            {
                isContact = true;
                break
            }
        }
        
        if(isContact==false)
        {
        gameChar_y +=3;
        isFalling=true;
        console.log("isFalling " + isFalling)
        }
        
        
        else 
        {
            isFalling = false
        }
        
    }
    
    
    else
    {
        isFalling=false;  
    }
  
     
    
    if(flagpole.isReached != true)
    {
        checkFlagpole()
        
    }
    
        if(flagpole2.isReached != true)
    {
        checkFlagpole()
    }
        
        

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    }
    
    




function drawGameChar()
{
    
        c1.position.x = gameChar_x+30;
        c1.position.y = gameChar_y-30;
        drawSprite(c1);
    
	   //----- character's arms and legs code -----\\    
            stroke(0)
            strokeWeight(2)
            line(gameChar_x+15,gameChar_y-55,gameChar_x+12,gameChar_y-49);
            line(gameChar_x+15,gameChar_y-55,gameChar_x+22,gameChar_y-49);
            strokeWeight(1);

        //----- character's body code -----\\ 

            //body    
            strokeWeight(1);
            fill(0);
            ellipse(gameChar_x+15,gameChar_y-55,7,17);

            //face + hands + feet
            fill(255);
            ellipse(gameChar_x+15,gameChar_y-67,15,15);
            rect(gameChar_x+20,gameChar_y-49,5,3);
            rect(gameChar_x+5,gameChar_y-49,5,3);
            strokeWeight(2)
    
        
    
     
}


function drawCanyon(t_canyon)
{
  
    noStroke()
    fill(204, 153, 102)
      
    rect(t_canyon.x_pos,t_canyon.y_pos,t_canyon.width,t_canyon.height)
    
    fill(255,255,255)
    triangle(t_canyon.x_pos+10,t_canyon.y_pos+61,t_canyon.x_pos+30,
             t_canyon.y_pos+61,t_canyon.x_pos+20,t_canyon.y_pos+41)
    
    
    triangle(t_canyon.x_pos+70,t_canyon.y_pos+61,t_canyon.x_pos+90,
             t_canyon.y_pos+61,t_canyon.x_pos+80,t_canyon.y_pos+41)
    
}



// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

      //character falls down the canyon
    if (gameChar_world_x >=t_canyon.x_pos 
        && gameChar_world_x <= t_canyon.x_pos + t_canyon.width 
        && gameChar_y >= 494)
    {
        gameChar_y +=15;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
    
};



function drawLeftsideCanyon(l_canyon){
    
    var l_canyon_xpos = -102.4;
    var l_canyon_ypos = 494;
    var l_canyon_width = 102.4;
    var l_canyon_height = 82;
 
    for(var i = 0; i < 20; i++){
     noStroke()
    fill(205,133,63)
      
    rect(l_canyon_xpos,l_canyon_ypos,l_canyon_width,l_canyon_height)
    
    fill(255,255,255)
    triangle(l_canyon_xpos+10,l_canyon_ypos+81,l_canyon_xpos+30,
             l_canyon_ypos+81,l_canyon_xpos+20,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+40,l_canyon_ypos+81,l_canyon_xpos+60,
             l_canyon_ypos+81,l_canyon_xpos+50,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+70,l_canyon_ypos+81,l_canyon_xpos+90,
             l_canyon_ypos+81,l_canyon_xpos+80,l_canyon_ypos+61)
    
    l_canyon_xpos -= 102.4;
    }
}

function checkLeftCanyon(l_canyon) //this is used to create canyons for the left side
{
    var l_canyon_xpos = -102.4;
    var l_canyon_width = 102.4;
for(var i = 0; i < 20; i++){
      //character falls down the canyon
    
    l_canyon_xpos -= 102.4;
    
    if (gameChar_world_x >=l_canyon_xpos 
        && gameChar_world_x <= l_canyon_xpos + l_canyon_width 
        && gameChar_y >= 494)
    {
        gameChar_y +=0.5;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
}};

function drawCollectable(t_collectable)
{
     //---------- Collectable Item Code----------\\
   
        
        fill(250,250,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,
                t_collectable.size*3,t_collectable.size*3,100)
        
        fill(220,220,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size*2)
        
        fill(200,200,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size)
        
    

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
     //--- code for picking up collectable ---\\
    var d = (dist(gameChar_world_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos));
    
    if (d < 50){
        t_collectable.isFound = true;
        game_score+=10;
        coin.play();
    }
}

function drawGroundT(){
    //----------  Ground Texture Code ----------\\
	
	stroke(0);
	strokeWeight(2);
	fill(236,240,240);
	rect(groundT.x_pos, groundT.y_pos , groundT.width*10, groundT.height);
	
	fill(153, 102, 51);
	strokeWeight(2)
	stroke(98,62,0);
	rect(groundT.x_pos, groundT.y_pos+20 , groundT.width*10, groundT.height+39); 
    
}

function drawStones(){
    
    fill(255, 243, 204);
	strokeWeight(1);
	stroke(0);
    var stone_xpos1 = 1;
    var stone_xpos2 = 21;
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos1,stone.y_pos,8,13);
	ellipse(stone_xpos1,stone.y_pos+23,13,10);
    stone_xpos1 +=40
    }
    
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos2,stone.y_pos,13,10);
	ellipse(stone_xpos2,stone.y_pos+23,8,13);
    stone_xpos2 +=40

 
    }
}


function drawSandT(){
    


    
    var SandT_xpos1 = 0;
    var SandT_xpos2 = 102.4;
    
 
    for(var i = 0; i < 200; i++){
    noStroke()
	fill(222,184,135);
	rect(SandT_xpos1,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos1+=204.8;
    }
    

    for(var i = 0; i < 200; i++){
    noStroke()
	fill(245,222,179);
	rect(SandT_xpos2,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos2+=204.8;
    }
        
}





function renderFlagpole(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos,floorPos_y - 300);

    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function renderFlagpole2(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole2.x_pos, floorPos_y, flagpole2.x_pos,floorPos_y - 300);
 
    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function checkFlagpole(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole.x_pos,floorPos_y));
    if (d < 25){
        flagpole.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        game_score+=100;
        complete.play()
    }
}

function checkFlagpole2(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole2.x_pos,floorPos_y));
    if (d < 25){
        flagpole2.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        rect(flagpole.x_pos-4690,floorPos_y - -10,30,30)
        game_score+=100;
        complete.play()
    }
}



function startGame(){

    gameChar_x = 51;
	gameChar_y = floorPos_y;
    
    gameChar_y2 = gameChar_y+1;
    
    cactusPos_x = 800;
	cactusPos_y = floorPos_y;
    

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

    
      game_score=0;
    
    lives -=1;
    if(lives < 3){
        death.play()
    }
    
    if(lives < 1){gameover.play();
    }
    
    cactus_x = [200,800,1200,1500,2600];
    
    clouds_x=[300,600,1200,1500,2100,2400,2700,3000];
    
    l_canyons = {x_pos:102.4,y_pos:494,width:102.4,height:82}
    
    pyramids_x=[1024,1600,2200];
    
    cloud = {x_pos:300,y_pos:150,size:50}
    
    stone = {x_pos:0,y_pos:535}
    
    pyramid = {x_pos:1024,y_pos:200}
    
    SandT = {x_pos:102.4,y_pos:495,width:102.4,height:19}
    
    groundT = {x_pos:0,y_pos:495,width:1024,height:20}
    
    flagpole = {x_pos:3000,isReached:false}
    
    flagpole2 = {x_pos:-1690,isReached:false}
    
    canyons=[
            {x_pos:435,y_pos:494,width:102.4,height:82},
            {x_pos:900,y_pos:494,width:102.4,height:82},
            {x_pos:1000,y_pos:494,width:102.4,height:82},
            {x_pos:1100,y_pos:494,width:102.4,height:82},
            {x_pos:1620,y_pos:494,width:102.4,height:82}, 
            {x_pos:1720,y_pos:494,width:102.4,height:82},
            {x_pos:1820,y_pos:494,width:102.4,height:82}, 
            {x_pos:1920,y_pos:494,width:102.4,height:82},
            {x_pos:2020,y_pos:494,width:102.4,height:82},
            {x_pos:2120,y_pos:494,width:102.4,height:82},
            {x_pos:2220,y_pos:494,width:102.4,height:82},
            {x_pos:2320,y_pos:494,width:102.4,height:82},
            {x_pos:2420,y_pos:494,width:102.4,height:82},
            ];
    
    collectables = 
            [                  
            //right side collectables
            {x_pos:100,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:325,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:600,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:965,y_pos:  floorPos_y - 50,size:10,isFound:false},
            {x_pos:1065,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1165,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 170,size:10,isFound:false},
            {x_pos:1915,y_pos: floorPos_y - 120,size:10,isFound:false},
            {x_pos:2015,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2115,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2195,y_pos: floorPos_y - 165,size:10,isFound:false},
            {x_pos:2315,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:2450,y_pos: floorPos_y - 30,size:10,isFound:false},

            //left side collectables    
            {x_pos:-50,y_pos: floorPos_y - 25,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -235,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -335,size:10,isFound:false},
            {x_pos:-430,y_pos: floorPos_y -35,size:10,isFound:false},
            {x_pos:-490,y_pos: floorPos_y -95,size:10,isFound:false},
            {x_pos:-160,y_pos: floorPos_y -65,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -115,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -215,size:10,isFound:false},
            {x_pos:-680,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -185,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -245,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -305,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -365,size:10,isFound:false},
            {x_pos:-1480,y_pos: floorPos_y -55,size:10,isFound:false},
            ]
  
    platforms = [];
    
            //right side platforms
            platforms.push(createPlatform(950,floorPos_y-30,20))
            platforms.push(createPlatform(1050,floorPos_y-30,20))
            platforms.push(createPlatform(1150,floorPos_y-30,20))
            platforms.push(createPlatform(1650,floorPos_y-50,20))
            platforms.push(createPlatform(1650,floorPos_y-150,20))
            platforms.push(createPlatform(1900,floorPos_y-100,20))
            platforms.push(createPlatform(2000,floorPos_y-80,20))
            platforms.push(createPlatform(2100,floorPos_y-80,20))
            platforms.push(createPlatform(2180,floorPos_y-140,20))
            platforms.push(createPlatform(2300,floorPos_y-50,20))

            //left side platforms 
            platforms.push(createPlatform(-102.4,floorPos_y,100))
            platforms.push(createPlatform(-140,floorPos_y-210,30))
            platforms.push(createPlatform(-140,floorPos_y-310,30))
            platforms.push(createPlatform(-450,floorPos_y-10,20))
            platforms.push(createPlatform(-520,floorPos_y-60,20))
            platforms.push(createPlatform(-200,floorPos_y-40,30))
            platforms.push(createPlatform(-300,floorPos_y-90,30))
            platforms.push(createPlatform(-300,floorPos_y-190,30))
            platforms.push(createPlatform(-690,floorPos_y-80,50))
            platforms.push(createPlatform(-820,floorPos_y-100,20))
            platforms.push(createPlatform(-890,floorPos_y-160,20))
            platforms.push(createPlatform(-820,floorPos_y-220,20))
            platforms.push(createPlatform(-890,floorPos_y-280,20))
            platforms.push(createPlatform(-820,floorPos_y-340,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1700,floorPos_y,20))

    
    enemies = [];
            enemies.push(new Enemy(220,floorPos_y,80))
            enemies.push(new Enemy(370,floorPos_y,80))
            enemies.push(new Enemy(620,floorPos_y,80))
            enemies.push(new Enemy(730,floorPos_y,80))
            enemies.push(new Enemy(1250,floorPos_y,5))
            enemies.push(new Enemy(1350,floorPos_y,5))
            enemies.push(new Enemy(1450,floorPos_y,5))
            enemies.push(new Enemy(1550,floorPos_y,1))
            enemies.push(new Enemy(-400,floorPos_y-210,400))
            enemies.push(new Enemy(-950,floorPos_y-210,400))
        
    
    
}


function createPlatform(x,y,length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
           fill(230, 176, 0)
            stroke(0)
            rect(this.x, this.y,this.length , 20)
        },
        
        platformContact: function(gc_x, gc_y){
        
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d= this.y - gc_y;
                if(d >= 0 && d < 3)
                {
                   return true;
                }
                    
            }
            return false;
            
        }
        
    }
    return p; 
}

function Enemy(x,y,range)
{
    
    this.x = x;
    this.y = y;
    this.range = range;
    this.current_x = x;
    this.incr = 2.75
    
    
 
    
    this.draw = function()
    {
        
        e1.position.x = this.current_x;
        e1.position.y = this.y -40;
        drawSprite(e1);
        
        
    }
    
    this.update = function()
    {
        this.current_x += this.incr
        
        if(this.current_x < this.x)
        {
         this.incr = 2.75;   
        }
        
        else if(this.current_x > this.x + this.range)
        {
            this.incr = -2.75;
        }
    }
    this.isContact = function(gc_x, gc_y) // returns true if contact is made
    {
        var d = dist(gc_x,gc_y, this.current_x, this.y)
        
        if(d < 25){
            return true
        }
        return false
    }
    
}

function drawCactus(){
    //---------- Tree Code ----------\\
	for(var i =0; i < cactus_x.length; i++){

	image(cac,cactus_x[i]+20,cactusPos_y-90);

        
    }
}

function drawClouds(){
    //---------- Cloud Code ----------\\
     for(var i =0; i < clouds_x.length; i++){
	

	animation(cld,clouds_x[i]+25,cloud.y_pos-5);

    }
    
}
    
    
function drawpyramids(){
     
    //---------- pyramid Code ----------\\
    for(var i =0; i < pyramids_x.length; i++){
	 image(pyr,pyramid.x_pos/2,260)
    
    }
}


}

function Scene3() {

    this.setup = function () {
        
    floorPos_y = 495;
    lives=4;
    startGame()
        
        c3 = createSprite(200,200)
        c3.addAnimation('normal','../../assets/MotorBike/MotorBike__1.png','../../assets/MotorBike/MotorBike__2.png',
                        '../../assets/MotorBike/MotorBike__3.png','../../assets/MotorBike/MotorBike__4.png',
                       '../../assets/MotorBike/MotorBike__5.png')
        
        e1 = createSprite(200,200)
        e1.addAnimation('normal','../../assets/Level_1/en2.png')
        
        bg=loadImage('../../assets/Level_1/bg_1.png')
        bullets = new Group();
    

    
     

    }


    this.draw = function () {
       
         //game lives
    if(gameChar_y > height && lives > 0){
    startGame()
    }
    
	//animation(bg, width / 2, height / 2)
    background(bg)
        
        
    if(keyDown('a'))
    {
        isLeft = true;
        console.log("isLeft " + isLeft);
        
    }

    if(keyDown('d'))
    {
        isRight= true;
        console.log("isRight " + isRight);
    }
    


    if(keyDown('w') && !isPlummeting)
        {
          if(!isFalling){
            gameChar_y = gameChar_y-100;
            isJumping=true;
            jump.play();
            console.log("isJumping " + isJumping);
          }
            
       
    }
    if(keyWentUp('a'))
    {
        isLeft = false;
        console.log("isLeft " + isLeft);
    }
       
    if(keyWentUp('d'))
    {
        isRight= false;
        console.log("isRight " + isRight);
    }
    
    
     if(keyWentUp('w'))
    {
        isJumping=false;
        console.log("isJumping " + isJumping);
    }
   

	noStroke();
	fill(0,155,0);
    push()
    translate(scrollPos,0)
    
	rect(0, floorPos_y, width, height/4); 
    

    drawGroundT();
    drawStones();
    drawSandT();
    drawCactus();
    drawClouds();
    drawpyramids()
    
    
	// Draw canyons.
   for(var i =0; i < canyons.length; i++)
   {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i])
   }
    
    for(var i =0; i < 20; i++)
   {
        drawLeftsideCanyon();
        checkLeftCanyon()
   }

	// Draw collectable items.
     for(var i =0; i < collectables.length; i++)
     {
         if(collectables[i].isFound==false)
         {
             drawCollectable(collectables[i]);
             checkCollectable(collectables[i]);
         }
    }
  
    renderFlagpole()    

    if  (flagpole.isReached==false)
    {
        checkFlagpole()
    }
        
    renderFlagpole2()
    
    if  (flagpole2.isReached==false)
    {
        checkFlagpole2()
    }
    
    
    
    for(var i =0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
    

    
    for(var i = 0; i < enemies.length; i++){
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].isContact(gameChar_world_x, gameChar_y))
        {
            startGame();
            break
        }
        
        
        
    }
    
    pop()
    
    
    for (var i = 0; i < lives; i++){
        animation(h1,30 + i *45,50)
    }
	
	drawGameChar();
    
    
    fill(0)
    noStroke();
    
    text("Score: " + game_score,20,20)
    text("Lives: " + lives,100,20)

    
    //game over & level complete
    if(lives < 1)
    {
        fill(0,0,0,100)
        rect(0,0,width,height)
        fill(0)
        text("Game Over (Refresh the Page to Try Again)", width/2-30,height/2,100)  
        return
    }
    
    
    
    if(flagpole.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
    if(flagpole2.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
   
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		
        else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		
        else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
     if(gameChar_y < floorPos_y )
    {
        
        
        
        var isContact = false;
        
        
        for(var i = 0; i < platforms.length; i++)
        {
            if(platforms[i].platformContact(gameChar_world_x , gameChar_y))
            {
                isContact = true;
                break
            }
        }
        
        if(isContact==false)
        {
        gameChar_y +=3;
        isFalling=true;
        console.log("isFalling " + isFalling)
        }
        
        
        else 
        {
            isFalling = false
        }
        
    }
    
    
    else
    {
        isFalling=false;  
    }
  
     
    
    if(flagpole.isReached != true)
    {
        checkFlagpole()
        
    }
    
        if(flagpole2.isReached != true)
    {
        checkFlagpole()
    }
        
        

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    }
    
    




function drawGameChar()
{
    
        c3.position.x = gameChar_x+20;
        c3.position.y = gameChar_y-10;
        drawSprite(c3);
    
	   //----- character's arms and legs code -----\\    
            stroke(0)
            strokeWeight(2)
            line(gameChar_x+15,gameChar_y-35,gameChar_x+12,gameChar_y-19);
            line(gameChar_x+15,gameChar_y-35,gameChar_x+22,gameChar_y-19);
            strokeWeight(1);

        //----- character's body code -----\\ 

            //body    
            strokeWeight(1);
            fill(0);
            ellipse(gameChar_x+15,gameChar_y-35,7,17);

            //face + hands + feet
            fill(255);
            ellipse(gameChar_x+15,gameChar_y-47,15,15);
            rect(gameChar_x+20,gameChar_y-19,5,3);
            rect(gameChar_x+5,gameChar_y-19,5,3);
            strokeWeight(2)
    
        
    
     
}


function drawCanyon(t_canyon)
{
  
    noStroke()
    fill(204, 153, 102)
      
    rect(t_canyon.x_pos,t_canyon.y_pos,t_canyon.width,t_canyon.height)
    
    fill(255,255,255)
    triangle(t_canyon.x_pos+10,t_canyon.y_pos+61,t_canyon.x_pos+30,
             t_canyon.y_pos+61,t_canyon.x_pos+20,t_canyon.y_pos+41)
    
    
    triangle(t_canyon.x_pos+70,t_canyon.y_pos+61,t_canyon.x_pos+90,
             t_canyon.y_pos+61,t_canyon.x_pos+80,t_canyon.y_pos+41)
    
}



// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

      //character falls down the canyon
    if (gameChar_world_x >=t_canyon.x_pos 
        && gameChar_world_x <= t_canyon.x_pos + t_canyon.width 
        && gameChar_y >= 494)
    {
        gameChar_y +=15;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
    
};



function drawLeftsideCanyon(l_canyon){
    
    var l_canyon_xpos = -102.4;
    var l_canyon_ypos = 494;
    var l_canyon_width = 102.4;
    var l_canyon_height = 82;
 
    for(var i = 0; i < 20; i++){
     noStroke()
    fill(205,133,63)
      
    rect(l_canyon_xpos,l_canyon_ypos,l_canyon_width,l_canyon_height)
    
    fill(255,255,255)
    triangle(l_canyon_xpos+10,l_canyon_ypos+81,l_canyon_xpos+30,
             l_canyon_ypos+81,l_canyon_xpos+20,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+40,l_canyon_ypos+81,l_canyon_xpos+60,
             l_canyon_ypos+81,l_canyon_xpos+50,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+70,l_canyon_ypos+81,l_canyon_xpos+90,
             l_canyon_ypos+81,l_canyon_xpos+80,l_canyon_ypos+61)
    
    l_canyon_xpos -= 102.4;
    }
}

function checkLeftCanyon(l_canyon) //this is used to create canyons for the left side
{
    var l_canyon_xpos = -102.4;
    var l_canyon_width = 102.4;
for(var i = 0; i < 20; i++){
      //character falls down the canyon
    
    l_canyon_xpos -= 102.4;
    
    if (gameChar_world_x >=l_canyon_xpos 
        && gameChar_world_x <= l_canyon_xpos + l_canyon_width 
        && gameChar_y >= 494)
    {
        gameChar_y +=0.5;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
}};

function drawCollectable(t_collectable)
{
     //---------- Collectable Item Code----------\\
   
        
        fill(250,250,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,
                t_collectable.size*3,t_collectable.size*3,100)
        
        fill(220,220,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size*2)
        
        fill(200,200,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size)
        
    

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
     //--- code for picking up collectable ---\\
    var d = (dist(gameChar_world_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos));
    
    if (d < 50){
        t_collectable.isFound = true;
        game_score+=10;
        coin.play();
    }
}

function drawGroundT(){
    //----------  Ground Texture Code ----------\\
	
	stroke(0);
	strokeWeight(2);
	fill(236,240,240);
	rect(groundT.x_pos, groundT.y_pos , groundT.width*10, groundT.height);
	
	fill(153, 102, 51);
	strokeWeight(2)
	stroke(98,62,0);
	rect(groundT.x_pos, groundT.y_pos+20 , groundT.width*10, groundT.height+39); 
    
}

function drawStones(){
    
    fill(255, 243, 204);
	strokeWeight(1);
	stroke(0);
    var stone_xpos1 = 1;
    var stone_xpos2 = 21;
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos1,stone.y_pos,8,13);
	ellipse(stone_xpos1,stone.y_pos+23,13,10);
    stone_xpos1 +=40
    }
    
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos2,stone.y_pos,13,10);
	ellipse(stone_xpos2,stone.y_pos+23,8,13);
    stone_xpos2 +=40

 
    }
}


function drawSandT(){
    
 

    
    var SandT_xpos1 = 0;
    var SandT_xpos2 = 102.4;
    
 
    for(var i = 0; i < 200; i++){
    noStroke()
	fill(222,184,135);
	rect(SandT_xpos1,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos1+=204.8;
    }
    

    for(var i = 0; i < 200; i++){
    noStroke()
	fill(245,222,179);
	rect(SandT_xpos2,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos2+=204.8;
    }
        
}





function renderFlagpole(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos,floorPos_y - 300);

    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function renderFlagpole2(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole2.x_pos, floorPos_y, flagpole2.x_pos,floorPos_y - 300);
 
    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function checkFlagpole(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole.x_pos,floorPos_y));
    if (d < 25){
        flagpole.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        game_score+=100;
        complete.play()
    }
}

function checkFlagpole2(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole2.x_pos,floorPos_y));
    if (d < 25){
        flagpole2.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        rect(flagpole.x_pos-4690,floorPos_y - -10,30,30)
        game_score+=100;
        complete.play()
    }
}



function startGame(){

    gameChar_x = 51;
	gameChar_y = floorPos_y;
    
    gameChar_y2 = gameChar_y+1;
    
    cactusPos_x = 800;
	cactusPos_y = floorPos_y;
    

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

    
      game_score=0;
    
    lives -=1;
    if(lives < 3){
        death.play()
    }
    
    if(lives < 1){gameover.play();
    }
    
    cactus_x = [200,800,1200,1500,2600];
    
    clouds_x=[300,600,1200,1500,2100,2400,2700,3000];
    
    l_canyons = {x_pos:102.4,y_pos:494,width:102.4,height:82}
    
    pyramids_x=[1024,1600,2200];
    
    cloud = {x_pos:300,y_pos:150,size:50}
    
    stone = {x_pos:0,y_pos:535}
    
    pyramid = {x_pos:1024,y_pos:200}
    
    SandT = {x_pos:102.4,y_pos:495,width:102.4,height:19}
    
    groundT = {x_pos:0,y_pos:495,width:1024,height:20}
    
    flagpole = {x_pos:3000,isReached:false}
    
    flagpole2 = {x_pos:-1690,isReached:false}
    
    canyons=[
            {x_pos:435,y_pos:494,width:102.4,height:82},
            {x_pos:900,y_pos:494,width:102.4,height:82},
            {x_pos:1000,y_pos:494,width:102.4,height:82},
            {x_pos:1100,y_pos:494,width:102.4,height:82},
            {x_pos:1620,y_pos:494,width:102.4,height:82}, 
            {x_pos:1720,y_pos:494,width:102.4,height:82},
            {x_pos:1820,y_pos:494,width:102.4,height:82}, 
            {x_pos:1920,y_pos:494,width:102.4,height:82},
            {x_pos:2020,y_pos:494,width:102.4,height:82},
            {x_pos:2120,y_pos:494,width:102.4,height:82},
            {x_pos:2220,y_pos:494,width:102.4,height:82},
            {x_pos:2320,y_pos:494,width:102.4,height:82},
            {x_pos:2420,y_pos:494,width:102.4,height:82},
            ];
    
    collectables = 
            [                  
            //right side collectables
            {x_pos:100,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:325,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:600,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:965,y_pos:  floorPos_y - 50,size:10,isFound:false},
            {x_pos:1065,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1165,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 170,size:10,isFound:false},
            {x_pos:1915,y_pos: floorPos_y - 120,size:10,isFound:false},
            {x_pos:2015,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2115,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2195,y_pos: floorPos_y - 165,size:10,isFound:false},
            {x_pos:2315,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:2450,y_pos: floorPos_y - 30,size:10,isFound:false},

            //left side collectables    
            {x_pos:-50,y_pos: floorPos_y - 25,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -235,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -335,size:10,isFound:false},
            {x_pos:-430,y_pos: floorPos_y -35,size:10,isFound:false},
            {x_pos:-490,y_pos: floorPos_y -95,size:10,isFound:false},
            {x_pos:-160,y_pos: floorPos_y -65,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -115,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -215,size:10,isFound:false},
            {x_pos:-680,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -185,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -245,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -305,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -365,size:10,isFound:false},
            {x_pos:-1480,y_pos: floorPos_y -55,size:10,isFound:false},
            ]
  
    platforms = [];
    
            //right side platforms
            platforms.push(createPlatform(950,floorPos_y-30,20))
            platforms.push(createPlatform(1050,floorPos_y-30,20))
            platforms.push(createPlatform(1150,floorPos_y-30,20))
            platforms.push(createPlatform(1650,floorPos_y-50,20))
            platforms.push(createPlatform(1650,floorPos_y-150,20))
            platforms.push(createPlatform(1900,floorPos_y-100,20))
            platforms.push(createPlatform(2000,floorPos_y-80,20))
            platforms.push(createPlatform(2100,floorPos_y-80,20))
            platforms.push(createPlatform(2180,floorPos_y-140,20))
            platforms.push(createPlatform(2300,floorPos_y-50,20))

            //left side platforms 
            platforms.push(createPlatform(-102.4,floorPos_y,100))
            platforms.push(createPlatform(-140,floorPos_y-210,30))
            platforms.push(createPlatform(-140,floorPos_y-310,30))
            platforms.push(createPlatform(-450,floorPos_y-10,20))
            platforms.push(createPlatform(-520,floorPos_y-60,20))
            platforms.push(createPlatform(-200,floorPos_y-40,30))
            platforms.push(createPlatform(-300,floorPos_y-90,30))
            platforms.push(createPlatform(-300,floorPos_y-190,30))
            platforms.push(createPlatform(-690,floorPos_y-80,50))
            platforms.push(createPlatform(-820,floorPos_y-100,20))
            platforms.push(createPlatform(-890,floorPos_y-160,20))
            platforms.push(createPlatform(-820,floorPos_y-220,20))
            platforms.push(createPlatform(-890,floorPos_y-280,20))
            platforms.push(createPlatform(-820,floorPos_y-340,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1700,floorPos_y,20))

    
    enemies = [];
            enemies.push(new Enemy(220,floorPos_y,80))
            enemies.push(new Enemy(370,floorPos_y,80))
            enemies.push(new Enemy(620,floorPos_y,80))
            enemies.push(new Enemy(730,floorPos_y,80))
            enemies.push(new Enemy(1250,floorPos_y,5))
            enemies.push(new Enemy(1350,floorPos_y,5))
            enemies.push(new Enemy(1450,floorPos_y,5))
            enemies.push(new Enemy(1550,floorPos_y,1))
            enemies.push(new Enemy(-400,floorPos_y-210,400))
            enemies.push(new Enemy(-950,floorPos_y-210,400))
        
    
    
}


function createPlatform(x,y,length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
           fill(230, 176, 0)
            stroke(0)
            rect(this.x, this.y,this.length , 20)
        },
        
        platformContact: function(gc_x, gc_y){
        
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d= this.y - gc_y;
                if(d >= 0 && d < 3)
                {
                   return true;
                }
                    
            }
            return false;
            
        }
        
    }
    return p; 
}

function Enemy(x,y,range)
{
    
    this.x = x;
    this.y = y;
    this.range = range;
    this.current_x = x;
    this.incr = 2.75
    
    
 
    
    this.draw = function()
    {
        
        e1.position.x = this.current_x;
        e1.position.y = this.y -40;
        drawSprite(e1);
        
        
    }
    
    this.update = function()
    {
        this.current_x += this.incr
        
        if(this.current_x < this.x)
        {
         this.incr = 2.75;   
        }
        
        else if(this.current_x > this.x + this.range)
        {
            this.incr = -2.75;
        }
    }
    this.isContact = function(gc_x, gc_y) // returns true if contact is made
    {
        var d = dist(gc_x,gc_y, this.current_x, this.y)
        
        if(d < 25){
            return true
        }
        return false
    }
    
}

function drawCactus(){
    //---------- Tree Code ----------\\
	for(var i =0; i < cactus_x.length; i++){

	image(cac,cactus_x[i]+20,cactusPos_y-90);

        
    }
}

function drawClouds(){
    //---------- Cloud Code ----------\\
     for(var i =0; i < clouds_x.length; i++){
	

	animation(cld,clouds_x[i]+25,cloud.y_pos-5);

    }
    
}
    
    
function drawpyramids(){
     
    //---------- pyramid Code ----------\\
    for(var i =0; i < pyramids_x.length; i++){
	 image(pyr,pyramid.x_pos/2,260)
    
    }
}


}


function Scene4() {
    
    this.setup = function () {
        
    floorPos_y = 495;
    lives=4;
    startGame()
        
        c2 = createSprite(200,200)
        c2.addAnimation('normal',
                    '../../assets/HamsterBall/HamsterBall3_1.png','../../assets/HamsterBall/HamsterBall3_2.png',
                   '../../assets/HamsterBall/HamsterBall3_3.png','../../assets/HamsterBall/HamsterBall3_4.png',
                   '../../assets/HamsterBall/HamsterBall3_5.png','../../assets/HamsterBall/HamsterBall3_6.png',
                   '../../assets/HamsterBall/HamsterBall3_7.png','../../assets/HamsterBall/HamsterBall3_8.png',
                   '../../assets/HamsterBall/HamsterBall3_9.png','../../assets/HamsterBall/HamsterBall3_10.png',
                   '../../assets/HamsterBall/HamsterBall3_11.png','../../assets/HamsterBall/HamsterBall3_12.png',
                   '../../assets/HamsterBall/HamsterBall3_13.png','../../assets/HamsterBall/HamsterBall3_14.png',
                   '../../assets/HamsterBall/HamsterBall3_15.png','../../assets/HamsterBall/HamsterBall3_16.png',
                    '../../assets/HamsterBall/HamsterBall3_11.png','../../assets/HamsterBall/HamsterBall3_12.png',
                   '../../assets/HamsterBall/HamsterBall3_13.png','../../assets/HamsterBall/HamsterBall3_14.png',
                   '../../assets/HamsterBall/HamsterBall3_15.png','../../assets/HamsterBall/HamsterBall3_16.png',
                   '../../assets/HamsterBall/HamsterBall3_11.png','../../assets/HamsterBall/HamsterBall3_12.png',
                   '../../assets/HamsterBall/HamsterBall3_13.png','../../assets/HamsterBall/HamsterBall3_14.png',
                   '../../assets/HamsterBall/HamsterBall3_15.png','../../assets/HamsterBall/HamsterBall3_16.png',
                   '../../assets/HamsterBall/HamsterBall3_11.png','../../assets/HamsterBall/HamsterBall3_12.png',
                   '../../assets/HamsterBall/HamsterBall3_13.png','../../assets/HamsterBall/HamsterBall3_14.png',
                   '../../assets/HamsterBall/HamsterBall3_15.png','../../assets/HamsterBall/HamsterBall3_16.png',
                   '../../assets/HamsterBall/HamsterBall3_11.png','../../assets/HamsterBall/HamsterBall3_12.png',
                   '../../assets/HamsterBall/HamsterBall3_13.png','../../assets/HamsterBall/HamsterBall3_14.png',
                   '../../assets/HamsterBall/HamsterBall3_15.png','../../assets/HamsterBall/HamsterBall3_16.png')
        
        e1 = createSprite(200,200)
        e1.addAnimation('normal','../../assets/Level_1/en2.png')
        
        bg=loadImage('../../assets/Level_1/bg_1.png')
        bullets = new Group();
    

    
     

    }


    this.draw = function () {
       
         //game lives
    if(gameChar_y > height && lives > 0){
    startGame()
    }
    
	//animation(bg, width / 2, height / 2)
    background(bg)
        
        
    if(keyDown('a'))
    {
        isLeft = true;
        console.log("isLeft " + isLeft);
        
    }

    if(keyDown('d'))
    {
        isRight= true;
        console.log("isRight " + isRight);
    }
    


    if(keyDown('w') && !isPlummeting)
        {
          if(!isFalling){
            gameChar_y = gameChar_y-100;
            isJumping=true;
            jump.play();
            console.log("isJumping " + isJumping);
          }
            
       
    }
    if(keyWentUp('a'))
    {
        isLeft = false;
        console.log("isLeft " + isLeft);
    }
       
    if(keyWentUp('d'))
    {
        isRight= false;
        console.log("isRight " + isRight);
    }
    
    
     if(keyWentUp('w'))
    {
        isJumping=false;
        console.log("isJumping " + isJumping);
    }
   

	noStroke();
	fill(0,155,0);
    push()
    translate(scrollPos,0)
    
	rect(0, floorPos_y, width, height/4); 
    

    drawGroundT();
    drawStones();
    drawSandT();
    drawCactus();
    drawClouds();
    drawpyramids()
    
    
	// Draw canyons.
   for(var i =0; i < canyons.length; i++)
   {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i])
   }
    
    for(var i =0; i < 20; i++)
   {
        drawLeftsideCanyon();
        checkLeftCanyon()
   }

	// Draw collectable items.
     for(var i =0; i < collectables.length; i++)
     {
         if(collectables[i].isFound==false)
         {
             drawCollectable(collectables[i]);
             checkCollectable(collectables[i]);
         }
    }
  
    renderFlagpole()    

    if  (flagpole.isReached==false)
    {
        checkFlagpole()
    }
        
    renderFlagpole2()
    
    if  (flagpole2.isReached==false)
    {
        checkFlagpole2()
    }
    
    
    
    for(var i =0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
    

    
    for(var i = 0; i < enemies.length; i++){
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].isContact(gameChar_world_x, gameChar_y))
        {
            startGame();
            break
        }
        
        
        
    }
    
    pop()
    
    
    for (var i = 0; i < lives; i++){
        animation(h1,30 + i *45,50)
    }
	
	drawGameChar();
    
    
    fill(0)
    noStroke();
    
    text("Score: " + game_score,20,20)
    text("Lives: " + lives,100,20)

    
    //game over & level complete
    if(lives < 1)
    {
        fill(0,0,0,100)
        rect(0,0,width,height)
        fill(0)
        text("Game Over (Refresh the Page to Try Again)", width/2-30,height/2,100)  
        return
    }
    
    
    
    if(flagpole.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
    if(flagpole2.isReached == true)
    {
        fill(255,255,255,100)
        rect(0,0,width,height)
        fill(0)
        text("The level is Complete! (Now try to complete the game taking the other pathway)", width/2-30,height/2,100)  
        return
    }
    
    
   
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 8;
		}
		
        else
		{
			scrollPos += 8;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 8;
		}
		
        else
		{
			scrollPos -= 8; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
     if(gameChar_y < floorPos_y )
    {
        
        
        
        var isContact = false;
        
        
        for(var i = 0; i < platforms.length; i++)
        {
            if(platforms[i].platformContact(gameChar_world_x , gameChar_y))
            {
                isContact = true;
                break
            }
        }
        
        if(isContact==false)
        {
        gameChar_y +=3;
        isFalling=true;
        console.log("isFalling " + isFalling)
        }
        
        
        else 
        {
            isFalling = false
        }
        
    }
    
    
    else
    {
        isFalling=false;  
    }
  
     
    
    if(flagpole.isReached != true)
    {
        checkFlagpole()
        
    }
    
        if(flagpole2.isReached != true)
    {
        checkFlagpole()
    }
        
        

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    }
    
    




function drawGameChar()
{
    
        c2.position.x = gameChar_x+20;
        c2.position.y = gameChar_y-55;
        drawSprite(c2);
    
	   //----- character's arms and legs code -----\\    
            stroke(0)
            strokeWeight(2)
            line(gameChar_x+15,gameChar_y-35,gameChar_x+12,gameChar_y-19);
            line(gameChar_x+15,gameChar_y-35,gameChar_x+22,gameChar_y-19);
            strokeWeight(1);

        //----- character's body code -----\\ 

            //body    
            strokeWeight(1);
            fill(0);
            ellipse(gameChar_x+15,gameChar_y-35,7,17);

            //face + hands + feet
            fill(255);
            ellipse(gameChar_x+15,gameChar_y-47,15,15);
            rect(gameChar_x+20,gameChar_y-19,5,3);
            rect(gameChar_x+5,gameChar_y-19,5,3);
            strokeWeight(2)
    
        
    
     
}


function drawCanyon(t_canyon)
{
  
    noStroke()
    fill(204, 153, 102)
      
    rect(t_canyon.x_pos,t_canyon.y_pos,t_canyon.width,t_canyon.height)
    
    fill(255,255,255)
    triangle(t_canyon.x_pos+10,t_canyon.y_pos+61,t_canyon.x_pos+30,
             t_canyon.y_pos+61,t_canyon.x_pos+20,t_canyon.y_pos+41)
    
    
    triangle(t_canyon.x_pos+70,t_canyon.y_pos+61,t_canyon.x_pos+90,
             t_canyon.y_pos+61,t_canyon.x_pos+80,t_canyon.y_pos+41)
    
}



// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

      //character falls down the canyon
    if (gameChar_world_x >=t_canyon.x_pos 
        && gameChar_world_x <= t_canyon.x_pos + t_canyon.width 
        && gameChar_y >= 494)
    {
        gameChar_y +=15;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
    
};



function drawLeftsideCanyon(l_canyon){
    
    var l_canyon_xpos = -102.4;
    var l_canyon_ypos = 494;
    var l_canyon_width = 102.4;
    var l_canyon_height = 82;
 
    for(var i = 0; i < 20; i++){
     noStroke()
    fill(205,133,63)
      
    rect(l_canyon_xpos,l_canyon_ypos,l_canyon_width,l_canyon_height)
    
    fill(255,255,255)
    triangle(l_canyon_xpos+10,l_canyon_ypos+81,l_canyon_xpos+30,
             l_canyon_ypos+81,l_canyon_xpos+20,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+40,l_canyon_ypos+81,l_canyon_xpos+60,
             l_canyon_ypos+81,l_canyon_xpos+50,l_canyon_ypos+61)
    
    triangle(l_canyon_xpos+70,l_canyon_ypos+81,l_canyon_xpos+90,
             l_canyon_ypos+81,l_canyon_xpos+80,l_canyon_ypos+61)
    
    l_canyon_xpos -= 102.4;
    }
}

function checkLeftCanyon(l_canyon) //this is used to create canyons for the left side
{
    var l_canyon_xpos = -102.4;
    var l_canyon_width = 102.4;
for(var i = 0; i < 20; i++){
      //character falls down the canyon
    
    l_canyon_xpos -= 102.4;
    
    if (gameChar_world_x >=l_canyon_xpos 
        && gameChar_world_x <= l_canyon_xpos + l_canyon_width 
        && gameChar_y >= 494)
    {
        gameChar_y +=0.5;
        isPlummeting=true;
        console.log("isPlummeting " + isPlummeting)
    } 
}};

function drawCollectable(t_collectable)
{
     //---------- Collectable Item Code----------\\
   
        
        fill(250,250,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,
                t_collectable.size*3,t_collectable.size*3,100)
        
        fill(220,220,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size*2)
        
        fill(200,200,0)
        ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size)
        
    

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
     //--- code for picking up collectable ---\\
    var d = (dist(gameChar_world_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos));
    
    if (d < 50){
        t_collectable.isFound = true;
        game_score+=10;
        coin.play();
    }
}

function drawGroundT(){
    //----------  Ground Texture Code ----------\\
	
	stroke(0);
	strokeWeight(2);
	fill(236,240,240);
	rect(groundT.x_pos, groundT.y_pos , groundT.width*10, groundT.height);
	
	fill(153, 102, 51);
	strokeWeight(2)
	stroke(98,62,0);
	rect(groundT.x_pos, groundT.y_pos+20 , groundT.width*10, groundT.height+39); 
    
}

function drawStones(){
    
    fill(255, 243, 204);
	strokeWeight(1);
	stroke(0);
    var stone_xpos1 = 1;
    var stone_xpos2 = 21;
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos1,stone.y_pos,8,13);
	ellipse(stone_xpos1,stone.y_pos+23,13,10);
    stone_xpos1 +=40
    }
    
    for(var i = 0; i < 500; i++){
    ellipse(stone_xpos2,stone.y_pos,13,10);
	ellipse(stone_xpos2,stone.y_pos+23,8,13);
    stone_xpos2 +=40

 
    }
}


function drawSandT(){
    


    
    var SandT_xpos1 = 0;
    var SandT_xpos2 = 102.4;
    

    for(var i = 0; i < 200; i++){
    noStroke()
	fill(222,184,135);
	rect(SandT_xpos1,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos1+=204.8;
    }
    

    for(var i = 0; i < 200; i++){
    noStroke()
	fill(245,222,179);
	rect(SandT_xpos2,SandT.y_pos,SandT.width,SandT.height);
    
    SandT_xpos2+=204.8;
    }
        
}





function renderFlagpole(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos,floorPos_y - 300);

    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function renderFlagpole2(){
    
    push()
    stroke(0)
    strokeWeight(2)
    line(flagpole2.x_pos, floorPos_y, flagpole2.x_pos,floorPos_y - 300);
 
    

    if(flagpole.isReached){
        fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - 300,30,30)

    }
    else{
         fill(255,0,0)
        rect(flagpole2.x_pos,floorPos_y - -10,30,30)

        
    }
    
    
    pop()
         
}


function checkFlagpole(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole.x_pos,floorPos_y));
    if (d < 25){
        flagpole.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        game_score+=100;
        complete.play()
    }
}

function checkFlagpole2(){
        var d = (dist(gameChar_world_x,gameChar_y,flagpole2.x_pos,floorPos_y));
    if (d < 25){
        flagpole2.isReached= true;
         fill(255,0,0)
        rect(flagpole.x_pos,floorPos_y - 300,30,30)
        rect(flagpole.x_pos-4690,floorPos_y - -10,30,30)
        game_score+=100;
        complete.play()
    }
}



function startGame(){

    gameChar_x = 51;
	gameChar_y = floorPos_y;
    
    gameChar_y2 = gameChar_y+1;
    
    cactusPos_x = 800;
	cactusPos_y = floorPos_y;
    

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

    
      game_score=0;
    
    lives -=1;
    if(lives < 3){
        death.play()
    }
    
    if(lives < 1){gameover.play();
    }
    
    cactus_x = [200,800,1200,1500,2600];
    
    clouds_x=[300,600,1200,1500,2100,2400,2700,3000];
    
    l_canyons = {x_pos:102.4,y_pos:494,width:102.4,height:82}
    
    pyramids_x=[1024,1600,2200];
    
    cloud = {x_pos:300,y_pos:150,size:50}
    
    stone = {x_pos:0,y_pos:535}
    
    pyramid = {x_pos:1024,y_pos:200}
    
    SandT = {x_pos:102.4,y_pos:495,width:102.4,height:19}
    
    groundT = {x_pos:0,y_pos:495,width:1024,height:20}
    
    flagpole = {x_pos:3000,isReached:false}
    
    flagpole2 = {x_pos:-1690,isReached:false}
    
    canyons=[
            {x_pos:435,y_pos:494,width:102.4,height:82},
            {x_pos:900,y_pos:494,width:102.4,height:82},
            {x_pos:1000,y_pos:494,width:102.4,height:82},
            {x_pos:1100,y_pos:494,width:102.4,height:82},
            {x_pos:1620,y_pos:494,width:102.4,height:82}, 
            {x_pos:1720,y_pos:494,width:102.4,height:82},
            {x_pos:1820,y_pos:494,width:102.4,height:82}, 
            {x_pos:1920,y_pos:494,width:102.4,height:82},
            {x_pos:2020,y_pos:494,width:102.4,height:82},
            {x_pos:2120,y_pos:494,width:102.4,height:82},
            {x_pos:2220,y_pos:494,width:102.4,height:82},
            {x_pos:2320,y_pos:494,width:102.4,height:82},
            {x_pos:2420,y_pos:494,width:102.4,height:82},
            ];
    
    collectables = 
            [                  
            //right side collectables
            {x_pos:100,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:325,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:600,y_pos:  floorPos_y - 25,size:10,isFound:false},
            {x_pos:965,y_pos:  floorPos_y - 50,size:10,isFound:false},
            {x_pos:1065,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1165,y_pos: floorPos_y - 50,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:1665,y_pos: floorPos_y - 170,size:10,isFound:false},
            {x_pos:1915,y_pos: floorPos_y - 120,size:10,isFound:false},
            {x_pos:2015,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2115,y_pos: floorPos_y - 100,size:10,isFound:false},
            {x_pos:2195,y_pos: floorPos_y - 165,size:10,isFound:false},
            {x_pos:2315,y_pos: floorPos_y - 70,size:10,isFound:false},
            {x_pos:2450,y_pos: floorPos_y - 30,size:10,isFound:false},

            //left side collectables    
            {x_pos:-50,y_pos: floorPos_y - 25,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -235,size:10,isFound:false},
            {x_pos:-120,y_pos: floorPos_y -335,size:10,isFound:false},
            {x_pos:-430,y_pos: floorPos_y -35,size:10,isFound:false},
            {x_pos:-490,y_pos: floorPos_y -95,size:10,isFound:false},
            {x_pos:-160,y_pos: floorPos_y -65,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -115,size:10,isFound:false},
            {x_pos:-260,y_pos: floorPos_y -215,size:10,isFound:false},
            {x_pos:-680,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -125,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -185,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -245,size:10,isFound:false},
            {x_pos:-870,y_pos: floorPos_y -305,size:10,isFound:false},
            {x_pos:-800,y_pos: floorPos_y -365,size:10,isFound:false},
            {x_pos:-1480,y_pos: floorPos_y -55,size:10,isFound:false},
            ]
  
    platforms = [];
    
            //right side platforms
            platforms.push(createPlatform(950,floorPos_y-30,20))
            platforms.push(createPlatform(1050,floorPos_y-30,20))
            platforms.push(createPlatform(1150,floorPos_y-30,20))
            platforms.push(createPlatform(1650,floorPos_y-50,20))
            platforms.push(createPlatform(1650,floorPos_y-150,20))
            platforms.push(createPlatform(1900,floorPos_y-100,20))
            platforms.push(createPlatform(2000,floorPos_y-80,20))
            platforms.push(createPlatform(2100,floorPos_y-80,20))
            platforms.push(createPlatform(2180,floorPos_y-140,20))
            platforms.push(createPlatform(2300,floorPos_y-50,20))

            //left side platforms 
            platforms.push(createPlatform(-102.4,floorPos_y,100))
            platforms.push(createPlatform(-140,floorPos_y-210,30))
            platforms.push(createPlatform(-140,floorPos_y-310,30))
            platforms.push(createPlatform(-450,floorPos_y-10,20))
            platforms.push(createPlatform(-520,floorPos_y-60,20))
            platforms.push(createPlatform(-200,floorPos_y-40,30))
            platforms.push(createPlatform(-300,floorPos_y-90,30))
            platforms.push(createPlatform(-300,floorPos_y-190,30))
            platforms.push(createPlatform(-690,floorPos_y-80,50))
            platforms.push(createPlatform(-820,floorPos_y-100,20))
            platforms.push(createPlatform(-890,floorPos_y-160,20))
            platforms.push(createPlatform(-820,floorPos_y-220,20))
            platforms.push(createPlatform(-890,floorPos_y-280,20))
            platforms.push(createPlatform(-820,floorPos_y-340,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1500,floorPos_y-30,20))
            platforms.push(createPlatform(-1700,floorPos_y,20))

    
    enemies = [];
            enemies.push(new Enemy(220,floorPos_y,80))
            enemies.push(new Enemy(370,floorPos_y,80))
            enemies.push(new Enemy(620,floorPos_y,80))
            enemies.push(new Enemy(730,floorPos_y,80))
            enemies.push(new Enemy(1250,floorPos_y,5))
            enemies.push(new Enemy(1350,floorPos_y,5))
            enemies.push(new Enemy(1450,floorPos_y,5))
            enemies.push(new Enemy(1550,floorPos_y,1))
            enemies.push(new Enemy(-400,floorPos_y-210,400))
            enemies.push(new Enemy(-950,floorPos_y-210,400))
        
    
    
}


function createPlatform(x,y,length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
           fill(230, 176, 0)
            stroke(0)
            rect(this.x, this.y,this.length , 20)
        },
        
        platformContact: function(gc_x, gc_y){
        
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d= this.y - gc_y;
                if(d >= 0 && d < 3)
                {
                   return true;
                }
                    
            }
            return false;
            
        }
        
    }
    return p; 
}

function Enemy(x,y,range)
{
    
    this.x = x;
    this.y = y;
    this.range = range;
    this.current_x = x;
    this.incr = 2.75
    
    
 
    
    this.draw = function()
    {
        
        e1.position.x = this.current_x;
        e1.position.y = this.y -40;
        drawSprite(e1);
        
        
    }
    
    this.update = function()
    {
        this.current_x += this.incr
        
        if(this.current_x < this.x)
        {
         this.incr = 2.75;   
        }
        
        else if(this.current_x > this.x + this.range)
        {
            this.incr = -2.75;
        }
    }
    this.isContact = function(gc_x, gc_y) // returns true if contact is made
    {
        var d = dist(gc_x,gc_y, this.current_x, this.y)
        
        if(d < 25){
            return true
        }
        return false
    }
    
}

function drawCactus(){
    //---------- Tree Code ----------\\
	for(var i =0; i < cactus_x.length; i++){

	image(cac,cactus_x[i]+20,cactusPos_y-90);

        
    }
}

function drawClouds(){
    //---------- Cloud Code ----------\\
     for(var i =0; i < clouds_x.length; i++){
	

	animation(cld,clouds_x[i]+25,cloud.y_pos-5);

    }
    
}
    
    
function drawpyramids(){
     
    //---------- pyramid Code ----------\\
    for(var i =0; i < pyramids_x.length; i++){
	 image(pyr,pyramid.x_pos/2,260)
    
    }
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
            mgr.showScene(Scene4);
            break;
        
            
    }

}

