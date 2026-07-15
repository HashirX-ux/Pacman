# Project Journal

**Project Name:** Pacman  
**Start Date:** 2026-014-07  
**Status:** In Progress

## Overview
Pacman is a web playable game that is built using HTML, CSS and Javascript. I did't used any js libs amd its really simple to play :D

## Recent Entries

### 2026-014-07 - First Journal Entry

**What I did today:**

So I am gonna start working on the map for my game cause its the one of the most essential things. I will start by configuring my html file: 
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/76060256-d0fb-4a03-acfd-6a15207d3122" />
<br>
Now lets add some colors using css: 
<img width="1280" height="1021" alt="image" src="https://github.com/user-attachments/assets/72ea2985-ecdc-44a4-9c73-5c54c9662863" />
<br>
<br>
The board variable is gonna referance canvas tag: 
<br>
<img width="581" height="369" alt="image" src="https://github.com/user-attachments/assets/a248c844-8586-437d-967d-caa5097f08cb" />
<br>
For canvas I am gonna divide that into tiles. So for my map, I have 21 rows and 19 columns. Each tile is gonna be 32 x 32. So my width will be 19 x 32 and the height wil be 21 x 32.. 
<br>
As for my abocve description, I am gonna use these variables: 
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/70230e5c-d3ea-483b-aff5-a3059d9b86e6" />
<br>
32 px is kinda huge ik but the images I am gonna sue should alogn with that.. So I jsut loaded the document wiht the same pixelation measurements and so far so good for now.. 
<br>
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/3dd1cc10-80f0-4016-bd96-6f1b2bdffcce" />
<br>
Now I am gonna be adding the images for the characters in the js file.. So these are gonna be the referances for ny characters that I am gonna use as villans 
<br>
<img width="610" height="368" alt="image" src="https://github.com/user-attachments/assets/feb07e3d-7475-4d65-8a8f-6774640f12e7" />
<br>
Now for my main character turn.. and I am gonna add the referances for the left, right, Up and Down images..<br> 
<img width="452" height="242" alt="image" src="https://github.com/user-attachments/assets/918af2a0-c30d-425f-9550-51ee4b254b0d" />
<br>
So I am gonna be using these image assests for my character.. 
<img width="405" height="597" alt="image" src="https://github.com/user-attachments/assets/61307479-250f-46c7-a2d4-f5b5c11724fe" />
Now I wanna render the images in my folder that I have found online on some repos. Since these Images are saved on mu fodler, I am gonna be rendering them by loading Images function and will use "./" to tell the js that its in this fodler that I am working on.. 
<br>
<img width="742" height="525" alt="image" src="https://github.com/user-attachments/assets/2d802fb7-cd7b-4c74-8697-2fbe3a625ccc" />
<br>
Now I am gonna be working on the pacman Images as for I did the same for my "Guys" Images .. 
<img width="778" height="458" alt="image" src="https://github.com/user-attachments/assets/4747bddf-df54-42e8-b865-b492a145dc7d" />
<br>
Srsly dude .. TS is ragebaiting me for no reason dude I hate this. A SINGLE "I" ??????? SRSLY ??? Took me like 2 mins and I looked through the whole code man 
<br>
<img width="1280" height="674" alt="image" src="https://github.com/user-attachments/assets/da2563de-a587-42a8-adab-5780ee8a431a" />
<br>
Now I am gonna start creating the actual map that I am gonna use for this.. and surely I am NOT gonna type ts out ... So I a little Ai for the map.. 
<br>
<img width="515" height="718" alt="image" src="https://github.com/user-attachments/assets/369f6e56-a115-49b0-b115-5d4ab2850794" />
I do havw wrote the configurations.. 
<br>
<img width="692" height="112" alt="image" src="https://github.com/user-attachments/assets/0d7d06f3-792b-4810-9e47-648ef0b161be" />
<br>
So everythime we see a symbol suppose X we are gonna create a wall block and I need a data structure to store all of these wall block So i am gonna use a set.. Set cuz it can only has unique values.. 
<br>
<img width="758" height="571" alt="image" src="https://github.com/user-attachments/assets/6874227b-510f-4ec8-9502-6793046bd22f" />
<br>
Since I only have one Pacman.. So no need for a collection..
<br>
<img width="508" height="228" alt="image" src="https://github.com/user-attachments/assets/e4b76ad2-2951-4a47-9c46-5134ea4eb3a5" />
<br>
The next thing I am gonna do Is to actually go thro the tile map.. 
<br>
<img width="743" height="264" alt="image" src="https://github.com/user-attachments/assets/cb5f4f32-6ace-413c-9a9c-e484181d4ffa" />
Can't calculate ts tbh... 
<img width="846" height="425" alt="image" src="https://github.com/user-attachments/assets/5c8f4dc1-c38c-4dfe-b87f-c0285dccd77c" />
<br>
My math is not mathing gng.. Stupid brain has stopped working for some reason.. 
<br>
<img width="806" height="506" alt="image" src="https://github.com/user-attachments/assets/3dd00aeb-3d0f-4f32-a1ce-163f99cd57f7" />
<br>
Ok gng .. we are going somewhere I guess.. 
<img width="699" height="340" alt="image" src="https://github.com/user-attachments/assets/22580042-ef71-4c98-bc2a-a7a9b16fd12e" />
<br>
No idea tf am I doing with my life ................
<img width="957" height="323" alt="image" src="https://github.com/user-attachments/assets/0b5c2821-ae73-4a59-8fd7-fa4f61b24226" />
<br>
Looks cute isnt it? 
<img width="329" height="84" alt="image" src="https://github.com/user-attachments/assets/426367d5-ec27-45de-8e2a-d25848428730" />
<br>
I don't think If I am doing it correct way but I do think this should't throw any errors: 
<img width="905" height="504" alt="image" src="https://github.com/user-attachments/assets/dd1d798c-6deb-4342-ad18-3a6cdc86a03f" />
<br>
These configurations looks correct as I am gonna iterate them by their tag names which are p, r and etc for the map
<img width="833" height="661" alt="image" src="https://github.com/user-attachments/assets/0664f996-66a4-4e3a-aca7-569e78f22e6f" />
<br>
<br>
YES THEY ARE YOU SLUMMM!!!!!!!!!!!!!!
<img width="849" height="408" alt="image" src="https://github.com/user-attachments/assets/24c16a88-3683-4d10-b8cd-4289e0e52d60" />
<br>
Don't know what to do right now gng .. I am soo coocked. My brain is not braining.. IDK what to assign to the x value for the increment thro the map bty the food so Am I cooked? Probably
<br>
<img width="804" height="263" alt="image" src="https://github.com/user-attachments/assets/abc5725f-111e-4ec6-a32d-742e272bdab4" />
<br>
Since My brain long time ago, I couldn't just code so i unlocked my ASIAN EGNETICS AND BOOMM.. I failed again and gng the result in incremet the x and y cordinated by 14 and psecify their vlaues as the iterate tho the map by food referance.. 
<br>
<img width="650" height="63" alt="image" src="https://github.com/user-attachments/assets/d59910e7-1366-4b3b-9875-e1b0d78c85ea" />
<br>
So the widht and height of the food itslef is gonna be 4 px by 4 px so this is x and y gng.. I needed to switcxh positions so it could iterate easily.. So Now I am gonna call my map function and will print the size of each set.. Needs a little but of loading logic but for now I see it fine. 
<br>
<img width="490" height="163" alt="image" src="https://github.com/user-attachments/assets/a878571b-6914-49fe-b159-0a70dc4d55db" />
<br>
Obviously gng.. This is gonna happen again an again until my 2 braincells get cooked also.. 
<img width="1280" height="603" alt="image" src="https://github.com/user-attachments/assets/09eae09f-3c75-4b8c-85ed-a97f81ae5672" />
<br>
Ladies and Gentlemen we have another one... Git ts is messing with me leftover 2 braincells 
<br>
<img width="1280" height="835" alt="image" src="https://github.com/user-attachments/assets/c0e966e9-cabe-45e4-89ea-a3385116e832" />
Guess I am cooked fr gng pray for me.. 
<img width="1096" height="408" alt="image" src="https://github.com/user-attachments/assets/ed208e3a-cdf5-4ed0-aa89-40707537ac44" />
<br>
IT WAS JSUT AN "S"??? ARE YOU SRS?? I missed an s for the wall so it had to be walls BRUHHH
<img width="208" height="72" alt="image" src="https://github.com/user-attachments/assets/31d55262-be99-49df-9c16-11a5d5ec0cc2" />
<br>
I am gonna throw fr this time.. TS is getting in my brain fr even tho I dont have one .. 
<img width="1280" height="823" alt="image" src="https://github.com/user-attachments/assets/b822a712-16db-4d87-b47c-5956d1860871" />
<br>
Obviously I named them wrong. My dumb aahb didn't realised that these were wrong names that I used. Absolute bruh
<img width="1060" height="516" alt="image" src="https://github.com/user-attachments/assets/4a999d24-9676-4d05-8b2b-c0a7da7b3e52" />
<br>
Obviously I named all of my Guys wrong .. Totally my thing tbh
<img width="550" height="730" alt="image" src="https://github.com/user-attachments/assets/3e5ddf4e-c24b-4dc6-a171-02963a197110" />
<br>
FINALLYYY !!!! IT TOOK FOREEVER BRUHH 
<img width="1279" height="739" alt="image" src="https://github.com/user-attachments/assets/88ca1086-747b-4308-b27d-84338e367900" />
So in accordance to my measurements and calculations that I mentioned above.. We have 196 walls and 184 food and 4 ghosts.. 
<img width="127" height="169" alt="image" src="https://github.com/user-attachments/assets/51dcbecc-2e78-400a-9830-885defa42def" />
<br>
Gonna comment this Cause I dont really want this in my console for now .. 
<img width="648" height="186" alt="image" src="https://github.com/user-attachments/assets/100c68cb-fed8-4e4e-bf8f-bc9e3171bcad" />
<br>
Now I am gonna start the drawing part for the map and its configurations + measurements... So this function called "updatw" has to get called several number of times .. for frames per second.. 
<img width="460" height="350" alt="image" src="https://github.com/user-attachments/assets/0a1f5a34-2528-4489-ad0e-79d2f2cf51f3" />
<br>
So 1 sec -> 1000ms so every 15ms I am gonna call this function in order to run frames for this.. 
<img width="488" height="163" alt="image" src="https://github.com/user-attachments/assets/ce228f37-2a24-4a40-b52f-106e49330bcc" />
<br>
to make this easier.. lets say we have these frames for x and y position, So the game is repeating move --> draw --> move --> draw so So within 15ms its gonna call a new fram of move and draw and so loop goes in accordance to the frame rate.. 
<br>
And I got Confused on ts again on ts.. tbh I My brain has just stopped working for some reason ..
<br>
<br>
So I am gonna draw the x, y and width and height position by using this function.. 
<img width="999" height="191" alt="image" src="https://github.com/user-attachments/assets/41178c60-9579-40ff-9928-4b6f58db1cde" />
<br> 
So Now I have specified the positions of the characters, Now that I have created ts in 6 DAMN HRS!!!! ABSOLUTE BRUIHHHHHHHHHHH... Cant believe dude .. 
<img width="789" height="677" alt="image" src="https://github.com/user-attachments/assets/433634aa-5553-4552-aba4-d23c7e332779" />
<br>
These are gonna be the real pain in the ABS..
<img width="1280" height="544" alt="image" src="https://github.com/user-attachments/assets/cdd484a2-83e9-44dc-9ea3-af6e50d79ad8" />
<br>
Goona try my best to resolve...
<br>
Bro I wrote "value" instead of "values".. THAT STUPID "S" WAS RAGE VAITING ME FOR NOOOOOOOO REASONNNNNNNNN!!!!!
<img width="382" height="181" alt="image" src="https://github.com/user-attachments/assets/3a98a50f-5bbc-4985-a097-3b1d714dc77b" />
<br>
Walls TIME GNG....
<img width="706" height="238" alt="image" src="https://github.com/user-attachments/assets/f26d3b46-ce19-4e7b-b59f-8490c04dc5d0" />
<br>
Not this TIME BOR... I HAVE PLAYED THESE GAMES BEFOREEEEE!!
<img width="490" height="174" alt="image" src="https://github.com/user-attachments/assets/ae66ccf3-f31b-423c-a9bd-26247d31751a" />
Now I am gonna add the walls and their specified positions in accordance to my map.. 
<img width="1076" height="188" alt="image" src="https://github.com/user-attachments/assets/cba19684-0a61-4851-b1ba-f911e2afa129" />
<br>
FIRST TRY BABY!!! LETS GOOOO:
<img width="596" height="643" alt="image" src="https://github.com/user-attachments/assets/1a640125-bf56-4c80-97ed-5b8c99938693" />
<br>
Now here comes the hard part.. I DONT have the "FOOD" that My pacman is gonna eat So i am just gonna use rectangle for that purpose gng..and in accordance to that I am gonna use the colors rectangle....
<img width="481" height="69" alt="image" src="https://github.com/user-attachments/assets/31ad1631-d790-493f-9968-d68ec5fcb737" />
<br>
Now I am gonna iterate thro the set.. 
<img width="496" height="112" alt="image" src="https://github.com/user-attachments/assets/f00e11b9-4453-4187-ae1d-8d59915a025c" />
<br>
Guess I am gonna use the last 2 brain cells of mine debugging ts.. I am tired at this point tbh.. 
<img width="1280" height="301" alt="image" src="https://github.com/user-attachments/assets/8dad1650-bcec-4d89-8856-ecd4586869ee" />
<br>
FOUND IT GNG ... TOOK 3 WHOLE MINUTES BRUHH.. I accidently wrote fillStyle as a function and there is not such a function and there should be fillRect instead of that bs.. 
<img width="1280" height="301" alt="image" src="https://github.com/user-attachments/assets/c7d7d13c-357d-4289-a8eb-9c2e45fc1014" />
<br>
LESSS GOOOO GNG WE HAVE THE FOOOOOOOOOOOOOOOOOOOOOOOODDDDDD!!!!
<img width="636" height="678" alt="image" src="https://github.com/user-attachments/assets/013c9abc-23ac-4aca-a016-66f99c048c05" />
<br>
You know the Bets part??? YOU CAN CHANGE THE MAAPPPPP
<img width="394" height="685" alt="image" src="https://github.com/user-attachments/assets/a82af9a4-474c-40ce-851f-83997ca3ffa0" />
<br>
And DEFINATLY I didn't typed ts out gng.. I used ai for the mapp.. Cmon gng not typin ts tbh
<img width="436" height="709" alt="image" src="https://github.com/user-attachments/assets/ce378951-bc8f-4ec7-98ad-eac9b03853b9" />
<br>
Now I am gonna add a "move: function after the draw function so I am quickly get my hands on that.. Since I have 18 tiles to the right that means that to the left I gotta go for the megative x and for the Right I am gonna be movind to the positive direction and same goes for the y direction gng HOLY.. ASIAN GENETICS 



