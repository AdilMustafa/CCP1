//press 2 to start, press psace bar to set up the aim direction,Before shooting, selects up or down arrouw to choose  weapon magazine by pressing up or down arrow . it will shoot different amos. Press space bar to start again

var cC;
var a1;


function preload() {
    //we preload our image so its ready when executing the image
    a1 = loadImage('../../assets/background/LevelSelect.png');
}



function setup() {
//we create a canvas which link to its parental HTML
    cC = createCanvas(900,550);
    cC.parent('ls')
    
    
    //we create our new scene manager
    mgr = new SceneManager();
    mgr.addScene(SceneOne)
    mgr.addScene(SceneTwo)
    mgr.addScene(SceneThree)
 mgr.showNextScene();




}

function draw() {
    //we draw our scenes onto the canvas
    mgr.draw();
}


function SceneOne() {
    this.draw = function () {
        //this will show the first scene of game selection. we use animaton a1 to do so
        background(0);
        image(a1,0,0)

    }

}


function SceneTwo() {
    this.draw = function () {
        
        //set the background to black for scene two
        background(0)
          fill(255)
        text("Work In Progress",width/2,height/2)
        noFill()

    }
    

}

function SceneThree() {


    this.draw = function () {
        background(200)

    }

}


function keyPressed() {
    switch (key) {
        case '1':
            mgr.showScene(SceneOne);
            break;

        case '2':
            mgr.showScene(SceneTwo);
            break;
            
        case '3':
            mgr.showScene(SceneThree);
            break;
            
    }

}
