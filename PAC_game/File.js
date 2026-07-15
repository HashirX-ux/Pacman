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
    update();      

}

// Tile-Map configurations: 
// X = wall, O = skip, P = pac man, ' ' = food
// Ghosts: b = blue, o = orange, p = pink, r = red 
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


            //Blocking Wall
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
    draw();
    //Time for every cycle --> 50ms move and draw motion.. 
    setTimeout(update, 50)
} 

// FPS config --> 20FPS --> 1000ms / 20 * 50 per px changing frames so its move and draw cycle ..
// Each px --> 32 x 32 
function draw() {
    //
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height)
    //setinterval --> Once 
}


class Block {
    constructor(image, x, y, width, height){
    this.image = image;
    this.x  = x; 
    this.y = y;
    this.width = width;
    this.height = height;
// Saving starting the X and Y position for the Guys and pacman 
    this.startX = x;
    this.startY = y;
   }
}



