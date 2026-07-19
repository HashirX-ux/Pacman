# PAC-MAN :D

a browser based Pac-Man clone i built with plain HTML, CSS and vanilla JS. No frameworks, no libraries, just canvas and a whole lotta trial and error lol.

started this as a "how hard can it actually be" project.. turns out pretty hard gng but here we are.

# Error Fixed gng.....
## --> Fixing the choppy movement...

The game was originally running on setTimeout(update 50) which meant both movement and drawing were locked to a fixed 50ms timer that doesnt actually sync with your monitors refresh rate so it looked stutery even tho the logic was tecnically fine... Swapping straight to requestanimationframe fixed the choppiness but broke the speed instead since rAF fires like 3x more often than the old timer did. Tried dividing the velocity down to compensate but that introduced non whole pixel movement which desynced everything from the 32px grid and broke collisions RIP that one ghost....

The actual fix was to stop tying movement speed to the render rate entirely.... draw() now runs every frame by requestnimationrame so it stays buttery smoothhhhh criminalllllll but move() only fires every 50ms using a timestamp check lastMoveTime and moveInterval keeping the original whole-pixel speed intact. Bascially the browser handles the smooth animation while the actual gameplay logic runs at the exact same pace it always did. Also fixed a small restart glitch where calling update() with no timestamp briefly broke the check on respawn. Movements smooth now and nothings glitching through walls anymore so calling this one solved....


## What it actually does...

1- classic Pac-Man gameplay on a 21x19 tile grid, all drawn on a single <canvas>
<br>
2- 4 ghosts blu orange pink red that move around randomly and bounce off walls
<br>
3- eat the dots get +10 points, watch a little popup float up when you do
<br>
4- 3 lives lose them all and its game over
<br>
5- high score gets saved in localstorage so it survives a refresh
<br>
6- screen shakes for a sec when a ghost gets you dramatic i know
<br>
7- press any arrow key after game over to reset and go again

## Visual stuff...
<img width="633" height="678" alt="image" src="https://github.com/user-attachments/assets/538885f1-3497-46d7-bb6b-8234f6a2b00d" />

once the gameplay worked i spent a stupid amount of time making it look like an actual arcade cabinet instead of a plain black box lol:

1- scrolling cyan grid in the background (its actually animated now, took me embarrassingly long to catch that typo)
<br>
2- vignette around the edges so your eyes go to the board
<br>
3- neon glow around the board that slowly pulses + cycles through colors
<br>
4- CRT style scanlines over the board
<br>
5- subtle screen flicker like an old monitor
<br>
6- neon "PAC-MAN" title up top that flickers on like a sign warming up, plus a lil wiggle
<br>
7- blinking "PRESS ARROW KEYS TO START" text

--> All of this is pure CSS animations, zero extra JS for the visuals.

## Controls...

`Arrow Keys` or `WASD` — thats it, thats the whole control scheme. move pacman around, dont run into a ghost.
<img width="749" height="709" alt="image" src="https://github.com/user-attachments/assets/b2238f38-cfca-41bb-a1d1-f61d9bd4c90f" />

## Running it locally...

1. clone the repo
```
git clone https://github.com/HashirX-ux/Pacman.git
```
2--> you'll also need these image assets chilling in the same folder as `index.html` (not gonna paste them in this readme obviously, but they better be in the repo lol):
1- `wall.png`
2- `blueGhost.png` `orangeGhost.png` `pinkGhost.png` `redGhost.png`
3- `pacmanUp.png` `pacmanDown.png` `pacmanLeft.png` `pacmanRight.png`

3. just open `index.html` in your browser lol. no build step, no npm install, no nothing. it's literally just a webpage, don't overthink it

## Files

1- `index.html` — the page itself just loads up the canvas + css + js nothing fancy
2- `File.js` — where all the actual brain of the game lives lol. movement collisions ghost AI score all of it
3- `File.css` — the grid background and all the neon/arcade glow-up effects (well whatever glow survived after the great performance fix era ..)


## Known issues / stuff i still wanna fix..

1- pacman stops dead at the tunnel openings on the sides instead of wrapping around to the other side like the real game does. classic tunnel teleport is still on the todo list
2- ghosts pick a random direction on every wall bump so sometimes they look a lil derpy standing in one spot for a sec, its not a bug its a feature (its a bug)
3- no mobile/touch controls yet, keyboard only for now

## Credits: 

built by me for Hack Club Horizons. the tile map layout was AI-generated since i could not for the life of me get the math right by hand, and i leaned on AI for some of the CSS animation syntax + fixing a bunch of my own typos along the way (turns out `box-shadow` and `box-sizing` are, in fact, different properties). everything else — the actual game logic, collision handling, all of it — i wrote and debugged myself.

thanks for checking it out, go eat some dots 
