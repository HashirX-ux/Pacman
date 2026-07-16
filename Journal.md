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
<br>
Now I am gonna use somme physics and some maths..  4 frames would be 1 tile size so I am gonna change the x and y position each frame so each frame is gonma get updates by that..Niw I am gona create velicity in the x and velocity in the y.. 
<img width="415" height="192" alt="image" src="https://github.com/user-attachments/assets/1c564659-4ded-47f0-8860-e8b347d56af6" />
<br>
Now I am gonna create another function which is gonna update the direction and its gnna take a char to represent the direction .. 
Now I am gonn aput the direction in the update direction function.. 
<img width="557" height="181" alt="image" src="https://github.com/user-attachments/assets/ea0a9419-5f0e-4c4f-bf23-e7f2b618dcd1" />
<br>
Math has stopped mathing gng.. .:((((
<img width="449" height="165" alt="image" src="https://github.com/user-attachments/assets/e7e89bd9-742d-48ce-830b-64af91563321" />
<br>
Direction control is really easy and its just simple maths.. I am just gonna specify the pacman direction by the up, down left and right keys so that would be easy to understand and play :D
<img width="807" height="390" alt="image" src="https://github.com/user-attachments/assets/a813c5d5-899b-49d2-814d-7b2301917938" />
<br>
So Far so good gng ..
<img width="753" height="275" alt="image" src="https://github.com/user-attachments/assets/6bb4cd30-f50b-4d6a-8164-6d6f3aaabbc5" />
<br>
Now for the horizontal directions.. 
<img width="833" height="221" alt="image" src="https://github.com/user-attachments/assets/07be3437-5cc4-4c9a-aed8-ef0a2d4fecef" />
<br>
Now we are gonna call the updatedirection function and then update velocity and we need to press some keys for that
<br>
Gonna call a function called movepacman and its gonnna ge called everytime we press on the ket and LET go ..
<img width="759" height="96" alt="image" src="https://github.com/user-attachments/assets/0e8bbcf3-2cb4-4e38-adad-7f04ec098cfd" />
<br>
TIME TO READ SOME DOCUMENTATION GNG CUZ I CANT UNDERSTAND SH..
<img width="421" height="150" alt="image" src="https://github.com/user-attachments/assets/5b6d09c6-0825-40f8-acdc-6b73f597534a" />
<br>
At this point i dont even know tf am I writing .. BRUHHHH
<img width="305" height="56" alt="image" src="https://github.com/user-attachments/assets/548a2200-deb2-4c41-9771-408b25ece1f7" />
<br>
This single small ahh K was gonna ruin my code.. You need to precisly say this KeyW for the W key and ArrowUp for the upper arrow..Ts was about to rage bait me gng but I survived YAYAYA...
<img width="205" height="84" alt="image" src="https://github.com/user-attachments/assets/87450206-7870-41c6-8372-5249676ec520" />
<br>
Direction control for the keys gng... So far so good.. just specifying the directions ... 
<img width="721" height="145" alt="image" src="https://github.com/user-attachments/assets/76a20315-349d-4731-9ff8-937fc2d73780" />
<br>
The key singls for the game control by the keyboard is done gng.. Looks good to me.. 
<img width="726" height="407" alt="image" src="https://github.com/user-attachments/assets/4d1fd5b9-7c94-41d6-8a10-360a82befe4b" />
<br>
Now we need to update the x and y position and in order to do so in a function called move.. So this single function is gonna handle ALL the movement in my game.. Cuz I cant do math for more ones gng.. faaahhh!!
<img width="252" height="128" alt="image" src="https://github.com/user-attachments/assets/0cd23364-829e-44a8-9d8f-dfec452bac5a" />
<br>
Here is how its gonna work: 
<img width="505" height="128" alt="image" src="https://github.com/user-attachments/assets/6a6aa723-3d71-458b-96bf-fbbe96c629bb" />
<br>
So the cycle is move --> draw --> set timeout --> update again.. 
<img width="869" height="164" alt="image" src="https://github.com/user-attachments/assets/72e9d6f3-adc0-48c4-9582-473efa5901a4" />
<br>
Obviously ts Aint leaning me with rage baiting.. 
<img width="1280" height="404" alt="image" src="https://github.com/user-attachments/assets/81f6c4f0-7e43-4ea9-a4a8-a519fc6dba05" />
<br>
So BASCIALLY I GOTFO TO PUT THAT "e" in the parameter parantheses and thats why its shwoing thet e is not defined... BRUH 
<img width="304" height="43" alt="image" src="https://github.com/user-attachments/assets/6d1668e4-446c-45d2-85df-ad85c5a0f11e" />
<br>
And OFCOURSE WE HAVE MORE
<img width="1265" height="379" alt="image" src="https://github.com/user-attachments/assets/52ffa149-adc2-4e53-98a6-d342965299e7" />
<br>
Found it gng.. Dont listen to music while you CODEEEEE
<img width="180" height="320" alt="image" src="https://github.com/user-attachments/assets/7c7ebcff-3413-453c-b204-25016a42f123" />
<br>
Ok gng we have gotten somewhere atleast.. it looks ugly af.. 
<img width="576" height="604" alt="image" src="https://github.com/user-attachments/assets/cc6109bc-2488-4330-8461-9d711b63218b" />
<br>
So Everytime I am gonna cal the draw I need to clear the canvas So I am gonna create some function for that.. 
<img width="734" height="73" alt="image" src="https://github.com/user-attachments/assets/05093148-a3c4-4234-b4f5-7c1bd0e0af8a" />
<br>
YAYAYAYATYAYAY IT WORKED GNG ...now it moves properly..
<img width="371" height="176" alt="image" src="https://github.com/user-attachments/assets/049b9186-7c82-4da9-a971-8bb88e81f127" />
<br>
Now there is a problem. My Pacman goes thro thhe walls so I am gonna use a specific formula for the intersection between 2 rectangles.. Evry image --> rectangle so..Now searched the formula and i dont evne know how tf it even works and I am just gonna copy paste that.. idk GNG don't blame me for this.. 2 brain cells cant understant shi..
<img width="334" height="164" alt="image" src="https://github.com/user-attachments/assets/c997d2c2-5a30-42e5-bc11-98aff88ab5e4" />
<br>
So as the pacman hits the walls its gonna "stepback" and then again the function calls.. 
<img width="521" height="253" alt="image" src="https://github.com/user-attachments/assets/da0ff333-9987-446a-ba17-f220d0ece8b3" />
<br>
There is still and that is my pacman stop mid session as I hit any key along the barrier.. 
<img width="605" height="405" alt="image" src="https://github.com/user-attachments/assets/93cf3c27-e0c4-4022-bc58-0641f4d422cd" />
<br>
The problem is I only want to change the directions If there is not a wall in the way soo.. Check for the colloision and if the colloision happens we take a step back.. 
<img width="524" height="259" alt="image" src="https://github.com/user-attachments/assets/0b1bc0be-9498-4d0e-a924-9bdb8165ad6e" />
<br>
Now that we know which wall we are gonna colide into once we find the colloision so we can just call return and its gonna exit the function and I guess thats how it all works gng.. 
<img width="667" height="345" alt="image" src="https://github.com/user-attachments/assets/06416693-744d-4c39-948a-0782187b9914" />
<br>
HOLYY SHEEEEEESH AM I COOCKED??
<img width="894" height="782" alt="image" src="https://github.com/user-attachments/assets/cdea033e-5c8e-411d-aedf-a6081a205986" />
<br>
So I just forgot to add "this" before velocity and ts just sooo annoyingggg
<img width="373" height="104" alt="image" src="https://github.com/user-attachments/assets/bb1ef039-640e-40f7-814d-5654127fcc6b" />
<br>
IT WORKS AND IF YOUR CODE WORKS DONT'T TOUCH ITTTTTTT
<img width="587" height="579" alt="image" src="https://github.com/user-attachments/assets/d27d0217-6438-45f9-90cd-4ec43ee472cc" />
<br>
Now I need to update my pacman to face the direction its movin in gng .. 
<img width="456" height="124" alt="image" src="https://github.com/user-attachments/assets/f3c16f04-d8f4-42a1-be19-b29f275703e2" />
<br>
And Obviously I messed it up again.. 
<img width="1280" height="975" alt="image" src="https://github.com/user-attachments/assets/8278f852-d0da-4c47-97a0-4664b27d8bab" />
<br>
BRUH I had used different variable name for the image ... TOTDALLY RGAE BAITINGGGG
<img width="311" height="189" alt="image" src="https://github.com/user-attachments/assets/8d10acd8-7267-4ea4-8fe1-5ac4fc1848db" />
<br>
YAYAY NOT IT WORKSSSSSS.. even tho I know nothing about the formula.. :(
<img width="273" height="423" alt="image" src="https://github.com/user-attachments/assets/5b45b076-3f7f-4347-a7cb-bd3092591c33" />
<br>
Now for the ghosts I wanna get them move in a random direction So I am gonna define a list of directions..and I accidently put my variables down but i want to put them after variables so lets fiiixxxx thth...and here we have the direction list.. 
<img width="687" height="108" alt="image" src="https://github.com/user-attachments/assets/41435a69-0b0e-4a24-aa8e-0ad14699dd91" />
<br>
Now I am gonna assign each ghost a random direction.. So i googled this function called "floor"
<img width="324" height="67" alt="image" src="https://github.com/user-attachments/assets/d5f3e690-cce1-44b6-80d9-6f9758b19197" />
<br>
The "4" is cuz I have 4 directions and this is the size of the direction and I wanted to get rid of the decimal points so I used floor whcih we use to round down and its pretty simple.. 
<img width="920" height="171" alt="image" src="https://github.com/user-attachments/assets/d43d0788-702b-46e3-91b7-f3c1f9d9e568" />
<br>
NOW I have assigned the ghosts to move in the random direction.. 
<img width="866" height="217" alt="image" src="https://github.com/user-attachments/assets/16122082-7efc-46ed-9159-3caf60886dc8" />
<br>
Now for the x ands y movemetn for the ghosts.. 
<img width="725" height="252" alt="image" src="https://github.com/user-attachments/assets/54cfcc8e-ec5c-4343-9344-dd9b61895f97" />
<br>
OBVIOUSLY THIS STUPID "M" i HAD TO WRITE Math intead if math ARE YOU SRS???? 
<img width="854" height="244" alt="image" src="https://github.com/user-attachments/assets/a9c8aa6e-e826-4d16-8231-7e58971d2dc7" />
<br>
They move but the walls for the ghosts are not defined.. 
<img width="651" height="450" alt="image" src="https://github.com/user-attachments/assets/4aca577f-f951-4e7e-b756-3eaf03b3958b" />
<br>
Now I am gonna check for the wall colloisions for the ghosts .. 
<img width="604" height="261" alt="image" src="https://github.com/user-attachments/assets/532cb4d8-9fe0-4d81-a845-5c44b91c7c23" />
<br>
Now after the colloision its gonna take a step back but but the issue is its gonna repeat that and try move forword and step back again so its gonna become a loop so I want the ghost to chnage the direction of the ghosts everytime its hits the wall.. 
<img width="924" height="335" alt="image" src="https://github.com/user-attachments/assets/2686b948-80f3-44df-b39a-301e65b3dafd" />
<br>
I am pretty sure I am about to pass out now.. 
<img width="818" height="206" alt="image" src="https://github.com/user-attachments/assets/81ba4e74-b2a0-4aa0-98d6-034218dcfaae" />
<br>
It finally works now gng 
<img width="639" height="660" alt="image" src="https://github.com/user-attachments/assets/21544182-a6a5-451b-b2f1-6ec47ca4446b" />
<br>
Now I wnna do is make the ghost reverse their turn as soon as the hit the barrier and that gonna change the course..
<img width="778" height="72" alt="image" src="https://github.com/user-attachments/assets/d0b976cb-b65f-42e3-ba48-1e5a76a6006e" />
<br>
Now According to my map my ghost get stuck on the row 9 as they collide with the left and right barrier so I gotta fix that...I am gonna add another check to see if the ghost is in 9th row and if it is I am gonna force it out of it by going up..
<img width="1064" height="167" alt="image" src="https://github.com/user-attachments/assets/3c470875-515c-4303-a21a-83d46c44ea08" />
<br>
<img width="516" height="86" alt="image" src="https://github.com/user-attachments/assets/e4a3155c-4fc9-4b99-9fe6-f9c34821591a" />
<br>
Now I gotta handle the colloisions between the pacman and the ghost So I need to update the score and the lives abd whether the game is over or not so lets gettttt ththththt
<img width="572" height="164" alt="image" src="https://github.com/user-attachments/assets/05b50d3f-d08c-48d5-87a3-da97a8006c34" />
<br
So we iterate thro the food and if there is a colloision we eat the food and we will gain 10 points.. and to remove the food after we ahve eaten it we wil do food eaten.. 
<img width="761" height="343" alt="image" src="https://github.com/user-attachments/assets/7b446c6c-26ad-42e1-a754-f7a1e91715d9" />
<br>
Now I am gonna set pen to red.. 
<img width="51" height="17" alt="image" src="https://github.com/user-attachments/assets/7dd12e4a-e0f6-49b6-b58d-c423efa60940" />
<br>
Guess it worked gng.. 
<img width="623" height="269" alt="image" src="https://github.com/user-attachments/assets/e2ee1ff0-fc94-4331-ac23-0cbc1642ec76" />
<br>
The next thing I wanna do is to make pacman colloide witth the a ghost.. So gonna Check the colooision of the ghost and the pacman So after colloision I want to reset the positions of the pacman and the ghosts.. 
<img width="523" height="286" alt="image" src="https://github.com/user-attachments/assets/565f768f-cea2-4691-a650-63e3d715970a" />
<br>
Now for the ghost reset positions.. and gonna update that after the reset on the random directions.. 
<img width="911" height="247" alt="image" src="https://github.com/user-attachments/assets/f46410cc-0bce-49c0-9c40-8257343d3ff9" />
<br>
Gang I am gonna chke my self fr.. I am doing these really stupid mistakes gng .. HELPP
<img width="1278" height="379" alt="image" src="https://github.com/user-attachments/assets/9fe5aa6b-0990-4810-81b4-db22d8d6afa2" />
<br>
BRO HOW MANY ARE THERE??? 
<img width="899" height="262" alt="image" src="https://github.com/user-attachments/assets/5d2bdb46-d4c3-4d7a-bed1-638d9c72bb77" />
<br>
Gang I forgot my directions is a list not a functions and anow it works perfectly fineee ayayayayayaya... 
<img width="663" height="702" alt="image" src="https://github.com/user-attachments/assets/eb856efc-6916-476f-96ca-3fb0c786ff94" />
<br>
So after I got zero I want to get game over for the text after getting hit form the ghosts.. 
<img width="592" height="239" alt="image" src="https://github.com/user-attachments/assets/d19257f9-319f-427e-90b3-7ad28b115bde" />
<br>
Now After the count of 3 I wanna reset the game so I am gonna do that ...Also if the player somehow eats all the food then I have to increase the level so .. 
<img width="626" height="408" alt="image" src="https://github.com/user-attachments/assets/56ebb638-6331-489a-a7c7-6da2cd642e3e" />
<br>
Opps I guess the shaking is bugged lol .. 
<img width="656" height="632" alt="image" src="https://github.com/user-attachments/assets/921ec9ea-a698-4569-9d6d-c97e1c3df19c" />
<br>





