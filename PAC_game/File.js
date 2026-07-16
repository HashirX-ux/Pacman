// Board-size
let board; 
const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const boardWidth = colCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;


//char-images
let blueGuyImg;
let orangeGuyImg;
let redGuyImg;
let pinkGuyImg; 
//PacMan-img
let PacmanUpimg;
let PacmanDownimg;
let PacmanLeftimg;
let PacmanRightimg;
let wall_img;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // ts mainly is used for drawing on the board...

    LoadImages();
    LoadMap();
    // console.log(walls.size);
    // console.log(foods.size);  
    // console.log(ghosts.size);

    //Now the actual drawing part and I dont know what heck am I GONNA DOOO GNG
    //Page Loader so gonna add some direction keys.. 
    update();      
    // press on the and let go and key automatically comes back up
    document.addEventListener("keyup", movePacman);

}

// Tile-Map configurations: 
// X = wall, O = skip, P = pac man, ' ' = food
// Ghosts: b = blue, o = orange, p = pink, r = red 

//Modifiable Map.. 
//I DID'T TYPED THE MAP GNG.. I USED AI FOR THE MAP ONLY !!! 
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO", 
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
]; 


const walls = new Set(); 
const foods = new Set();
const ghosts = new Set();
let pacman;

function LoadImages() {
    // Guys Images 
    wall_img = new Image();
    wall_img.src = "./wall.png"

    blueGuyImg = new Image();
    blueGuyImg.src= "./blueGhost.png";

    redGuyImg = new Image();
    redGuyImg.src= "./redGhost.png"

    pinkGuyImg = new Image();
    pinkGuyImg.src = "./pinkGhost.png"

    orangeGuyImg = new Image();
    orangeGuyImg.src = "./orangeGhost.png" 

    // PacMan Images 
    PacmanLeftimg = new Image();
    PacmanLeftimg.src = "./pacmanLeft.png"

    PacmanRightimg = new Image();
    PacmanRightimg.src = "./pacmanRight.png"

    PacmanUpimg = new Image();
    PacmanUpimg.src = "./pacmanUp.png"

    PacmanDownimg = new Image();
    PacmanDownimg.src = "./pacmanDown.png"
}


// Iterating function of the tile maps... 
function LoadMap() {
    walls.clear();
    foods.clear();
    ghosts.clear(); 

    
    for(let r = 0; r < rowCount; r++){
        for(let c = 0; c < colCount; c++) {
            const row = tileMap[r];
            const tileMapChar = row[c]

            // Scaling everything by the tile size: 
            const x = c*tileSize;
            const y = r*tileSize;

        
            //Blocking-Wall
            if(tileMapChar == "X") {
                const wall = new Block(wall_img, x, y, tileSize, tileSize);
                walls.add(wall);
            }
            //Blue guy config:
            else if(tileMapChar == "b") {
                const ghost  = new Block(blueGuyImg, x, y, tileSize, tileSize );
                ghosts.add(ghost);
            }
            //Orange Guy config:
            else if(tileMapChar == "o") {
                const ghost = new Block(orangeGuyImg, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            //Pink Guy config: 
            else if(tileMapChar == "p"){
                const ghost = new Block (pinkGuyImg, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            //Red Guy config: 
            else if(tileMapChar == 'r'){
                const ghost = new Block(redGuyImg, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            //Pacman config:
            else if(tileMapChar == 'P'){     
                pacman = new Block(PacmanRightimg, x, y, tileSize, tileSize);
        }
            //Empty Configuration is also important gng.. 
            //This is exactly where my brain stopped working and I could'd to basic math gng ..
            else if(tileMapChar == ' ') {
                const food = new Block(null,x + 14, y + 14, 4, 4);
                foods.add(food);
            }
        }
    }
}   

function update() {
    move();
    draw(); //Time for every cycle --> 50ms move and draw motion.. 
    setTimeout(update, 50); 
} 

// FPS config --> 20FPS --> 1000ms / 20 * 50 per px changing frames so its move and draw cycle ..
// Each px --> 32 x 32 
function draw() {
    //clearing the canvas after the draw.. 
    context.clearRect(0, 0, board.width, board.height); 
    // Defining drawing positions of the board... 
    //setinterval --> Once define  
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);
    //Specifying the images of the ghosts by iterating them thro the iterable.. 
    for(let guy of ghosts.values()) {
        context.drawImage(guy.image, guy.x, guy.y, guy.width, guy.height);
    }
    //Specifying the images for the walls: 
    for(let wall of walls.values()) {
        context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
    }
    //Specifying the color for the rectangle:
    context.fillStyle = "red";
    //Iterating tho the set..  
    for(let food of foods.values()) {
        context.fillRect(food.x, food.y, food.width, food.height);
    }
} 

//Movement handling function of the game...
function move() {
    pacman.x += pacman.velocityX;
    pacman.y += pacman.velocityY; 
    
    //Checking the wall colloisions.. 
    for(let wall of walls.values()) {
        if(colloision(pacman, wall)) {
            //pacman stepping back.. 
            pacman.x -= pacman.velocityX;
            pacman.y -= pacman.velocityY;
            break;
        }
    }

}

    
    //Keyboard control config:  
    //Direction Config for the keys...
function movePacman(e){
    if(e.code == "ArrowUp" || e.code == "KeyW") {
        pacman.updateDirection('U'); 
    }
    else if(e.code == "ArrowDown" || e.code == "KeyS"){
        pacman.updateDirection('D');
    }
    else if(e.code == "ArrowLeft" || e.code == "KeyA") {
        pacman.updateDirection('L');
    }
    else if(e.code == "ArrowRight" || e.code == "KeyD") {
        pacman.updateDirection('R');    
    }

    //Updating the image of the pacman in accordance to the direction its moving in..
    if(pacman.direction == 'U') {
        pacman.image = pacmanUpImage;
        
    }
}

//Colloision systen of the walls.... 
function colloision(a, b){
    return  a.x < b.x + b.width && 
            a.x + a.width > b.x &&
            a.y < b.y + b.height && 
            a.y + a.height > b.y;
}


class Block {
    constructor(image, x, y, width, height){
    this.image = image;
    this.x  = x; 
    this.y = y;
    this.width = width;
    this.height = height;
//Saving starting the X and Y position for the Guys and pacman 
    this.startX = x;
    this.startY = y;  
    
    this.direction = 'R';
    // No chnage in the position in current time 
    this.velocityX = 0;
    this.velocityY = 0;
   }
   
   // updating the direction.... 
     updateDirection(direction) {
        //Saving the previous direction.... 
        const prevDirection = this.direction; 
        this.direction = direction;
        this.updateVelocity();
        //Check for the colloision and if the colloision happens we take a step back
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Iterating thro the set of walls... 
        for(let wall of walls.values()) {
            if(colloision(this, wall)) {
                //Direction Variations for the GNG :D
                this.x -= this.velocityX;
                this.y -= this.velocityY; 
                this.direction = prevDirection; 
                this.updateVelocity();
                //We don't need to chk cause we know which wall we are gonna collidde
                
            }
        }
   } 


   // Direction Control of the Pacman 
   //updating the velocity....
   updateVelocity() {
    if(this.direction == 'U') {
        this.velocityX = 0; //Since not moving in x direction 
        this.velocityY = -tileSize/4;
    }
    else if(this.direction == 'D'){
        this.velocityX = 0;
        this.velocityY = tileSize/4;
    }
    else if(this.direction == 'L'){ //directions
        this.velocityX = -tileSize/4;
        this.velocityY = 0; //No Motion in the Y direction ...
    }
    else if(this.direction == 'R') {
        this.velocityX = tileSize/4; //Since right is ALWAYS POSITIVEEEE 
        this.velocityY = 0; 
    }
   }


}




