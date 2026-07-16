// Board-size
let board; 
const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const boardWidth = colCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

// Additional features.. .
//scared ghosts config: 
const PowerPellets = new Set();
let scaredGhosts = false;

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

//Game map 
//each pixel = 32 x 32
//total columns = 21
//total rows = 19
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

//Directions list for the movement of the ghosts
//Up and down and left and right directions...
//Used later for the direction control... 
const directions = ['U', 'D', 'L', 'R'];
let score = 0;
let lives = 3;
let gameOver = false;

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
    //getting a random direction for the ghosts 
    for(let ghost of ghosts.values()){
        //4 cuz we have 4 directions DUHH .. 
        const newDirection = directions[Math.floor(Math.random() * 4)];
        //Movewment for the randoom movement for the ghosts 
        ghost.updateDirection(newDirection);
    }  
    
    update();      
    // press on the and let go and key automatically comes back up
    document.addEventListener("keyup", movePacman);

}
    
// Tile-Map configurations: 
// X = wall, O = skip, P = pac man, ' ' = food
// Ghosts: b = blue, o = orange, p = pink, r = red 

//Modifiable Map.. 
//I DID'T TYPED THE MAP GNG.. I USED AI FOR THE MAP ONLY !!! 


function LoadImages() {
    // wall image laod 
    wall_img = new Image();
    wall_img.src = "./wall.png"
    
    //Guys Images 
    //Blue guy image load ..
    blueGuyImg = new Image();
    blueGuyImg.src= "./blueGhost.png";

    //Red Guy image load ..
    redGuyImg = new Image();
    redGuyImg.src= "./redGhost.png"

    //Pink Guy image load..
    pinkGuyImg = new Image();
    pinkGuyImg.src = "./pinkGhost.png"

    //orange guy image load.. 
    orangeGuyImg = new Image();
    orangeGuyImg.src = "./orangeGhost.png" 

    // PacMan Images loading 
    // Pacman left image loadd..
    PacmanLeftimg = new Image();
    PacmanLeftimg.src = "./pacmanLeft.png"

    //Pacman Right image load..
    PacmanRightimg = new Image();
    PacmanRightimg.src = "./pacmanRight.png"

    //Pacman Up image load..
    PacmanUpimg = new Image();
    PacmanUpimg.src = "./pacmanUp.png"

    //Pacman Down image laod.. 
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
    //Stopping the loop for the gameOver section to exit the game..
    if(gameOver) {
        // return once cause we dont call settime out and hence we stop calling the update 
        return;
    } 
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


    //Setting the main pen to red...
    context.fillStyle = "red";
    context.font = "14px sans-serif";
    if(gameOver) {
        //Defining the text for the game over and tile size right and tile size down.. 
        context.fillText("Game Over: " + String(score), tileSize/2, tileSize/2);
    }
    else {
        context.fillText("x" + String(lives) + ' ' + String(score), tileSize/2, tileSize/2);
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
    
    for(let ghost of ghosts.values()) {

        //Check the colooision of the ghost and the pacman 
        if(colloision(ghost, pacman)) {
            //lives Counting for the pacman..
            lives -= 1;
            if(lives == 0) {
                gameOver = true;
                return; 
                //After the game is over need to stop the loop...
            }
        //Function for Resetting the positions of the pacman and the ghosts after the colloision..
            resetPositions();
        }

        //Error config for the 9th row if they get stuck..Force em out.. 
        if(ghost.y == tileSize * 9 && ghost.direction != 'U' && ghost.direction != 'D') {
            ghost.updateDirection('U');  //For the upper motion of the ghosts..:D
        }


         ghost.x += ghost.velocityX;
         ghost.y += ghost.velocityY;
         
         //Defining the wall colloisions for the ghosts.. 
         for(let wall of walls.values()) {
            if(colloision(ghost, wall) || ghost.x <= 0 || ghost.x + ghost.width >= boardWidth) {
                // for the x colloisions ..
                ghost.x -= ghost.velocityX;
                // for the y colloisions..
                ghost.y -= ghost.velocityY; 
                

                //colloision system for the ghosts..
                //Changing the directions for the ghosts everytime they colloide
                const newDirection  = directions[Math.floor(Math.random()* 4)]
                //Updating the new direction.. 
                ghost.updateDirection(newDirection);
            }
         }
    }

    //Check the colloisions with the food for out Main character PACMANN..
    let foodEaten = null;
    //iterating thro the food and defining the colloision.. 
    for(let food of foods.values()) {
        if(colloision(pacman, food)) {
            foodEaten = food;
            score += 10;
            break;
        }
    }
    foods.delete(foodEaten); 


    //Going to the next level after eating all of the food...
    if(foods.size == 0) {
        //loadMap reloads the food and resets it to the max amount...
        LoadMap();
        //resetting the positions by calling the reset for the pacman and the ghosts or guy GUYSS
        resetPositions();// dede wfewfewf ewfe
    }


}
    
    //Keyboard control config:  
    //Direction Config for the keys...
function movePacman(e){
    //Gonna reset the game after the user dies 3 time (NOT LITERALLY!)
    //reset game after 3 deaths..
    //resetting the food after the 3 deaths and the game over.. 
    if (gameOver){
        LoadMap();
    //reset the positons of the pacman and the ghosts...
        resetPositions();
    //reset the lives after the game over..
    lives = 3;
    //resetting the score back to zero. 
        score = 0;
    //gameOver bask to the false...
        gameOver = false; 
    //call the update after everything resets to update everything .. HOLY ASIAN GENES ..
        update();
        return;//deed
    }
    //Upper Key config:
    if(e.code == "ArrowUp" || e.code == "KeyW") {
        pacman.updateDirection('U'); 
    }
    //lower/Down Key config:
    else if(e.code == "ArrowDown" || e.code == "KeyS"){
        pacman.updateDirection('D');
    }
    //Left Key config:
    else if(e.code == "ArrowLeft" || e.code == "KeyA") {
        pacman.updateDirection('L');
    }
    //Right Key config: 
    else if(e.code == "ArrowRight" || e.code == "KeyD") {
        pacman.updateDirection('R');    
    }

    //Updating the image of the pacman in accordance to the direction its moving in..
    if(pacman.direction == 'U') {
        //Upper Image for the pacman...
        pacman.image = PacmanUpimg;
    }
    else if(pacman.direction == 'D'){
        //Down Image for the pacman....
        pacman.image = PacmanDownimg;
    }
    else if(pacman.direction == 'L') {
        //Left Image for the pacman... 
        pacman.image = PacmanLeftimg;
    }
    else if(pacman.direction == 'R') {
        //Right Image for the pacman 
        pacman.image = PacmanRightimg;
    }
}

//Colloision systen of the walls.... 
function colloision(a, b){
    //formula for the colloision system.. 
    return  a.x < b.x + b.width && 
            a.x + a.width > b.x &&
            a.y < b.y + b.height && 
            a.y + a.height > b.y;
}

//Function for resetting the positons for the pacman and the ghosts..
function resetPositions() {
    //Pacman reset config....
    pacman.reset();
    pacman.velocityX = 0;
    pacman.VelocityY = 0;

    for (let ghost of ghosts.values()) {
         ghost.reset();
         //Giving each new ghost a new direction after the reset.. 
          const newDirection = directions[Math.floor(Math.random() * 4)];
          //Updating the direction... 
          ghost.updateDirection(newDirection);
    }

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
        this.direction = direction;// efwf fw wfw
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


   //Adding a reset function for resetting the positions for the pacman and the ghosts...
   //Resetting the X and Y positions back to the starting X and Y... 
   reset() {
    this.x = this.startX;
    this.y = this.startY;
   }

}




