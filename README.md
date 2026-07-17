# PAC-MAN 

a browser based Pac-Man clone i built with plain HTML, CSS and vanilla JS. No frameworks, no libraries, just canvas and a whole lotta trial and error lol.

started this as a "how hard can it actually be" project.. turns out pretty hard gng but here we are.

## What it actually does...

1- classic Pac-Man gameplay on a 21x19 tile grid, all drawn on a single `<canvas>`
2- 4 ghosts (blue, orange, pink, red) that move around randomly and bounce off walls
3- eat the dots, get +10 points, watch a little popup float up when you do
4- 3 lives, lose them all and its game over
5- high score gets saved in `localStorage` so it survives a refresh
6- screen shakes for a sec when a ghost gets you (dramatic i know)
7- press any arrow key after game over to reset and go again

## Visual stuff...

once the gameplay worked i spent a stupid amount of time making it look like an actual arcade cabinet instead of a plain black box lol:

1- scrolling cyan grid in the background (its actually animated now, took me embarrassingly long to catch that typo)
2- vignette around the edges so your eyes go to the board
3- neon glow around the board that slowly pulses + cycles through colors
4- CRT style scanlines over the board
5- subtle screen flicker like an old monitor
6- neon "PAC-MAN" title up top that flickers on like a sign warming up, plus a lil wiggle
7- blinking "PRESS ARROW KEYS TO START" text

all of this is pure CSS animations, zero extra JS for the visuals.

## Controls...

`Arrow Keys` or `WASD` — thats it, thats the whole control scheme. move pacman around, dont run into a ghost.

## Running it locally...

1. clone the repo
```
git clone https://github.com/HashirX-ux/Pacman.git
```
2. you'll need these image assets sitting in the same folder as `index.html` (not included in this readme obviously but should be in the repo):
   - `wall.png`
   - `blueGhost.png`, `orangeGhost.png`, `pinkGhost.png`, `redGhost.png`
   - `pacmanUp.png`, `pacmanDown.png`, `pacmanLeft.png`, `pacmanRight.png`
3. just open `index.html` in your browser. no build step, no npm install, nothing. its literally just a webpage

## Files

| File | What it does |
|---|---|
| `index.html` | the page itself, loads the canvas + css + js |
| `File.js` | all the game logic, movement, collisions, ghost AI, score |
| `File.css` | grid background + all the neon/arcade visual effects |

## Known issues / stuff i still wanna fix

- pacman stops dead at the tunnel openings on the sides instead of wrapping around to the other side like the real game does. classic tunnel teleport is still on the todo list
- ghosts pick a random direction on every wall bump so sometimes they look a lil derpy standing in one spot for a sec, its not a bug its a feature (its a bug)
- no mobile/touch controls yet, keyboard only for now

## Credits: 

built by me for Hack Club Horizons. the tile map layout was AI-generated since i could not for the life of me get the math right by hand, and i leaned on AI for some of the CSS animation syntax + fixing a bunch of my own typos along the way (turns out `box-shadow` and `box-sizing` are, in fact, different properties). everything else — the actual game logic, collision handling, all of it — i wrote and debugged myself.

thanks for checking it out, go eat some dots 🟡
