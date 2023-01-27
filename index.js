const myCanvas = document.querySelector("canvas");
const ctx = myCanvas.getContext("2d")
document.querySelector(".game-intro").style.display = "none";

myCanvas.style.border;

//Game Over
let gameOver = 0
let animateId;

let gameOverScr = new Image();
gameOverScr.src = "./Image/gameOver.png"
let numOver = 0;

//Input
let button = document.querySelector("#answer");
let buttonTry = document.querySelector("#enter");
buttonTry.onclick = () => {
    if (button.value === "3" && island2 === false && health > 0) {
      checkState = true;
        island2 = true   
        correctSd.play()
        riseSd.play()
        button.value = ""
    }
    else if (button.value === "5" && island2 === true && island3 === false && health > 0) {
      checkState = true;
        island3 = true   
        correctSd.play()
        riseSd.play()
        button.value = ""
    }
    else if (button.value === "7" && island3 === true && island4 === false && health > 0) {
      checkState = true;
        island4 = true  
        correctSd.play() 
        riseSd.play()
        button.value = ""
    } 
    else if (button.value === "6" && island4 === true && health > 0) {      
        gameOver = 3;  
        correctSd.play()
        story2Sd.play()   
        button.value = ""
    } 
    else {
      if (health === 1) {
        healthImg.src = ""
        health = 0;
        damage =  true;
        button.value = ""
        wrongSd.play();
      }
      if (health === 2) {
        healthImg.src = "./Image/Health/health1.png"
        health = 1;
        damage =  true;
        button.value = ""
        wrongSd.play();
      }
      if (health === 3) {
        healthImg.src = "./Image/Health/health2.png"
        health = 2;
        damage =  true;
        button.value = ""
        wrongSd.play();
      }      
    }
}

//Boat
 let imgBoat = 1;
const boatImg = new Image();

//Frame
let numFrame = 0;
const imgFrame = new Image();

//Stamina
let numSta = 0;
const imgSta = new Image();

//Totem
let numTotem = 0;
const imgTotem = new Image();

//Chest
let numChest = 0;
const imgChest = new Image();

//Check
let numCheck = 0;
const imgCheck = new Image();
let checkState = false;

//Health
const healthImg = new Image();
healthImg.src = "./Image/Health/health3.png"
health = 3;
if (health === 0) {
  gameOver = 2;
}

//Dialog
let diagNum = 0;
const diagImg = new Image();
let diagShow = false;
let diagOp = 0;

//Background 
const bgImg = new Image();
bgImg.src = "./Image/1st-island.png"
const bgIsl2 = new Image();
bgIsl2.src = "./Image/2nd-island.png"
const bgIsl3 = new Image();
bgIsl3.src = "./Image/3rd-island.png"
const bgIsl4 = new Image();
bgIsl4.src = "./Image/4th-island.png"
let island1 = true;
let island2 = false;
let island3 = false;
let island4 = false;
const bgWidth = 1400;
const bgHeight = bgWidth / 1.166666666666667;
let bgXpos = -58;
let bgYpos = -250;
let bgOp = 0.1;
let isl2Op = 0;
let isl3Op = 0;
let isl4Op = 0;
let isMovingRight = false;
let isMovingLeft = false;
let isMovingUp = false;
let isMovingDown = false;
let isNotMoving = true;

//Character
const CharIdle = new Image();
CharIdle.src = "./Image/Character/CharIdle/idle0.png"
let imgChar = 0;
let imgCharRun = 0;
let imgCharDmg = 0;
let xLimit = 140;
let wasRight = 0;
let wasLeft = 0;
let damage = false;
const shadow = new Image();
shadow.src = "./Image/Character/Shadow.png"

//Gameplay Buttons
document.querySelector('.but-enter').onmousedown = () => {
document.querySelector('.but-enter').style.backgroundImage = "url('./Image/submit/bu2.png')"
clickSd.play();
}
document.querySelector('.but-enter').onmouseup = () => {
  document.querySelector('.but-enter').style.backgroundImage = "url('./Image/submit/bu1.png')"
}

//Menu intro
let buttonMenu = document.querySelector("#buttons-menu");

let buttonPlay = new Image()
buttonPlay.src = './Image/play.png'
let playPress = 0
let playTitle = new Image()
playTitle.src = './Image/Title.png'

let buttonSkip = new Image()
buttonSkip.src = './Image/ButtonPlay/skipstory.png'
let skipTitle = new Image()
skipTitle.src = './Image/ButtonPlay/Skip.png'

//Story Cutscenes Beggining
let story1 = new Image();
story1.src = "./Image/Story/st1.png"
let numSt1 = 0;
let st1check = true

let story2 = new Image();
story2.src = "./Image/Story/st2.png"
let numSt2 = 0;
let st2check = false

let story3 = new Image();
story3.src = "./Image/Story/st3.png"
let numSt3 = 0;
let st3check = false

let stOver = false

//Story Cutscenes Ending
let storyEnd1 = new Image();
storyEnd1.src = "./Image/Story/endSt1.png"
let numEnd1 = 0;
let end1check = false;

let storyEnd2 = new Image();
storyEnd2.src = "./Image/Story/endSt2.png"
let numEnd2 = 0;
let end2check = false;

let storyEnd3 = new Image();
storyEnd3.src = "./Image/Story/endSt3.png"
let numEnd3 = 0;
let end3check = false;

let stOverEnd = false

//Game Over Restart
let gameOverR = false;

//Sounds
const clickSd = new Audio("./Sound/click.wav")
const story1Sd = new Audio("./Sound/Story1.mp3")
const gameplaySd = new Audio("./Sound/gameplay.wav")
const correctSd = new Audio("./Sound/correct.wav")
correctSd.volume = 0.2;
const wrongSd = new Audio("./Sound/wrong.wav")
wrongSd.volume = 0.4;
const riseSd = new Audio("./Sound/Rise.wav")
riseSd.volume = 0.04;
const stepSd = new Audio("./Sound/steps.wav")
stepSd.volume = 0.08;
const story2Sd = new Audio("./Sound/Story2.mp3")
story2Sd.volume = 0.2;
const speakSd = new Audio("./Sound/speak.mp3")
speakSd.volume = 0.15;
const menuSd = new Audio("./Sound/menu.wav")
menuSd.volume = 0.15;

//Instructions
inst = document.querySelector(".inst")
inst.style.display = "none"
//Interval Stamina
let staminaInter;


//Press Play
document.querySelector('.but-play').onmousedown = function()  {
  document.querySelector('.but-play').style.backgroundImage = "url('./Image/ButtonPlay/playBut2.png')"
  playPress += 1  
  clickSd.play();
}
document.querySelector('.but-play').onmouseup = function() {
  gameOver = 1;
  setTimeout(function(){ 
    st1check = false
    st2check = true
   }, 12000); 
   setTimeout(function(){ 
    st3check = true
    st2check = false
   }, 25000); 
   setTimeout(function(){ 
    st3check = false
    stOver = true
    gameplaySd.play()
   }, 38000); 
   buttonMenu.style.display = "none";
  document.querySelector('.but-play').style.backgroundImage = "url('./Image/ButtonPlay/playBut1.png')"
  cancelAnimationFrame(animateId)
  animateStory();
  story1Sd.play()
  gameplaySd.pause()
  gameplaySd.currentTime = 0
  gameplaySd.volume = 0.05;
  story1Sd.volume = 0.2;
  story2Sd.pause();
  story2Sd.currentTime = 0;
  numSta = 0;
  health = 3
  
}
document.querySelector('.but-skip').onmousedown = function()  {
  gameOver = 1;
  inst.style.display = "flex"
  buttonMenu.style.display = "none";
  gameplaySd.play()
  gameplaySd.volume = 0.2;
  cancelAnimationFrame(animateId)
  startGame()
  story2Sd.pause();
  story2Sd.currentTime = 0;
  story1Sd.pause();
  story1Sd.currentTime = 0;
  gameplaySd.currentTime = 0
  gameplaySd.volume = 0.2;
  numSta = 0;
  health = 3
  
}

//On load
window.onload = () => {    
      animateMenu();          
      document.querySelector(".game-intro").style.display = "none";
      document.querySelector("#game-board").style.display = 'block';      
       document.querySelector("#buttons").style.display = "none"   
       
}

//Animators
function endStory     () {
  animateId = requestAnimationFrame(endStory)   
  gameplaySd.volume = 0; 
  inst.style.display = "none"
  

   ctx.globalAlpha = numEnd1;
   if (numEnd1 < 1) {
   if (end1check === true) {    
    if (animateId % 1 === 0) {
      numEnd1 += 0.02;        
    }}} 
    ctx.drawImage(storyEnd1, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = numEnd2;
   if (numEnd2 < 1) {
   if (end2check === true) {    
    if (animateId % 1 === 0) {
      numEnd2 += 0.02;        
    }}} 
    ctx.drawImage(storyEnd2, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = numEnd3;
   if (numEnd3 < 1) {
   if (end3check === true) {    
    if (animateId % 1 === 0) {
      numEnd3 += 0.02;        
    }}} 
    ctx.drawImage(storyEnd3, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    if (stOverEnd === true) {                     
      buttonMenu.style.display = "block";
      gameOver = 0      
      buttonPlay.src = './Image/play.png'
      playPress = 0    
      playTitle.src = './Image/Title.png'     
      buttonSkip.src = './Image/ButtonPlay/skipstory.png'     
      skipTitle.src = './Image/ButtonPlay/Skip.png'
      gameOverR = false;
//Boat
  imgBoat = 1;
//Frame
 numFrame = 0;
//Stamina
 numSta = 0;
//Totem
 numTotem = 0;
//Chest
 numChest = 0;
//Check
 numCheck = 0;
 checkState = false;
//Health
healthImg.src = "./Image/Health/health3.png"
health = 3;
//Dialog
 diagNum = 0;
 diagShow = false;
 diagOp = 0;
//Background 

bgIsl2.src = "./Image/2nd-island.png"
bgIsl3.src = "./Image/3rd-island.png"
bgIsl4.src = "./Image/4th-island.png"

 island1 = true;
 island2 = false;
 island3 = false;
 island4 = false;


 bgXpos = -58;
 bgYpos = -250;
 bgOp = 0.1;
 isl2Op = 0;
 isl3Op = 0;
 isl4Op = 0;

 isMovingRight = false;
 isMovingLeft = false;
 isMovingUp = false;
 isMovingDown = false;
 isNotMoving = true;

//Character
CharIdle.src = "./Image/Character/CharIdle/idle0.png"
 imgChar = 0;
 imgCharRun = 0;
 imgCharDmg = 0;
 xLimit = 140;
 wasRight = 0;
 wasLeft = 0;
 damage = false;

shadow.src = "./Image/Character/Shadow.png"

//Menu intro
buttonPlay.src = './Image/play.png'
 playPress = 0
playTitle.src = './Image/Title.png'

buttonSkip.src = './Image/ButtonPlay/skipstory.png'
skipTitle.src = './Image/ButtonPlay/Skip.png'

//Story Cutscenes Beggining
story1.src = "./Image/Story/st1.png"
 numSt1 = 0;
 st1check = true

story2.src = "./Image/Story/st2.png"
 numSt2 = 0;
 st2check = false

story3.src = "./Image/Story/st3.png"
 numSt3 = 0;
 st3check = false

 stOver = false

//Story Cutscenes Ending
storyEnd1.src = "./Image/Story/endSt1.png"
 numEnd1 = 0;
 end1check = false;

storyEnd2.src = "./Image/Story/endSt2.png"
 numEnd2 = 0;
 end2check = false;

storyEnd3.src = "./Image/Story/endSt3.png"
 numEnd3 = 0;
 end3check = false;

 stOverEnd = false

      cancelAnimationFrame(animateId); 
      buttonMenu.style.display = "block";
      animateMenu() 
    }
}
function animateStory () {
  
  animateId = requestAnimationFrame(animateStory) 

  ctx.globalAlpha = numSt1;
   if (numSt1 < 1) {
   if (st1check === true) {    
    if (animateId % 1 === 0) {
      numSt1 += 0.02;        
    }}} 
    ctx.drawImage(story1, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = numSt2;
   if (numSt2 < 1) {
   if (st2check === true) {    
    if (animateId % 1 === 0) {
      numSt2 += 0.02;        
    }}} 
    ctx.drawImage(story2, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = numSt3;
   if (numSt3 < 1) {
   if (st3check === true) {    
    if (animateId % 1 === 0) {
      numSt3 += 0.02;        
    }}} 
    ctx.drawImage(story3, 0, 0, 600, 600);
    ctx.globalAlpha = 1;

    if (stOver) {
      stOver = false
      story1Sd.pause();
      inst.style.display = "flex"
      story1Sd.currentTime = 0;
      cancelAnimationFrame(animateId)
      startGame()
    }
}
function animateMenu  () {
    if (numSta > 0) {
    numSta = 0;
  }
  animateId = requestAnimationFrame(animateMenu)   
  buttonMenu.style.display = "block";  
  inst.style.display = "none"
  ctx.clearRect(0, 0, bgWidth, bgWidth);
  ctx.drawImage(playTitle, 50, -25, 500, 300); 
  if(playPress === 0) {
  ctx.drawImage(buttonPlay, 160, 300, 300, 200);  
  } else if (playPress === 1) {
  ctx.drawImage(buttonPlay, 160, 320, 300, 200);
  }   
  ctx.drawImage(buttonSkip, 185, 505, 240, 80);  
  
}
function animateOver  () {
  animateId = requestAnimationFrame(animateOver)  
  inst.style.display = "none" 
   ctx.globalAlpha = numOver;
   if (numOver < 1) {
   if (gameOver === 2) {    
    if (animateId % 10 === 0) {
      numOver += 0.1;        
    }}} 
  ctx.drawImage(gameOverScr, -50, -15, 700, 700);  

  document.querySelector("#buttons").style.display = "none" 
    
    if (gameOverR === true) {            
      buttonMenu.style.display = "block";
      gameOver = 0      
      buttonPlay.src = './Image/play.png'
      playPress = 0    
      playTitle.src = './Image/Title.png'     
      buttonSkip.src = './Image/ButtonPlay/skipstory.png'     
      skipTitle.src = './Image/ButtonPlay/Skip.png'
      gameOverR = false;
//Boat
  imgBoat = 1;
//Frame
 numFrame = 0;
//Stamina
 numSta = 0;
//Totem
 numTotem = 0;
//Chest
 numChest = 0;
//Check
 numCheck = 0;
 checkState = false;
//Health
healthImg.src = "./Image/Health/health3.png"
health = 3;
//Dialog
 diagNum = 0;
 diagShow = false;
 diagOp = 0;
//Background 
 island1 = true;
 island2 = false;
 island3 = false;
 island4 = false;


 bgXpos = -58;
 bgYpos = -250;
 bgOp = 0.1;
 isl2Op = 0;
 isl3Op = 0;
 isl4Op = 0;

 isMovingRight = false;
 isMovingLeft = false;
 isMovingUp = false;
 isMovingDown = false;
 isNotMoving = true;

//Character
CharIdle.src = "./Image/Character/CharIdle/idle0.png"
 imgChar = 0;
 imgCharRun = 0;
 imgCharDmg = 0;
 xLimit = 140;
 wasRight = 0;
 wasLeft = 0;
 damage = false;

//Menu intro
 playPress = 0

//Story Cutscenes Beggining
 numSt1 = 0;
 st1check = true

 numSt2 = 0;
 st2check = false

 numSt3 = 0;
 st3check = false

 stOver = false

//Story Cutscenes Ending
 numEnd1 = 0;
 end1check = false;

 numEnd2 = 0;
 end2check = false;

 numEnd3 = 0;
 end3check = false;

 stOverEnd = false

      cancelAnimationFrame(animateId);
      buttonMenu.style.display = "block";
      animateMenu() 
    }
    
}
function animate      () {
    //ctx.clearRect(0, 0, bgWidth, bgWidth);    
    story1Sd.volume = 0;
    

    document.querySelector("#buttons").style.display = "flex"   
    ctx.drawImage(bgImg, bgXpos, bgYpos, bgWidth, bgHeight);

    //Boat
    ctx.drawImage(boatImg, bgXpos, bgYpos + 70, bgWidth, bgHeight);
    if (animateId % 12 === 0) {        
        imgBoat += 1;
        if (imgBoat > 4) {
            imgBoat = 1;
        }        
    }
    boatImg.src = "./Image/BoatSpr/Boat" + imgBoat + ".png"

   //Island 2
    ctx.globalAlpha = isl2Op;
    if (isl2Op < 1) {
   if (island2 === true) {    
    if (animateId % 5 === 0) {
        isl2Op += 0.1;        
    }}} 
    ctx.drawImage(bgIsl2, bgXpos, bgYpos, bgWidth, bgHeight);    
    
    //Island 3
    ctx.globalAlpha = isl3Op;
    if (isl3Op < 1) {
    if (island3 === true) {    
     if (animateId % 5 === 0) {
         isl3Op += 0.1;        
    }}}
    ctx.drawImage(bgIsl3, bgXpos, bgYpos, bgWidth, bgHeight);

     //Island 4
    ctx.globalAlpha = isl4Op;
    if (isl4Op < 1) {
    if (island4 === true) {    
     if (animateId % 5 === 0) {
         isl4Op += 0.1;        
    }}} 
    ctx.drawImage(bgIsl4, bgXpos, bgYpos, bgWidth, bgHeight);
    ctx.globalAlpha = 1;

    //Totems
    ctx.globalAlpha = isl3Op;
    if (isl3Op < 1) {
    if (island4 === true) {    
     if (animateId % 5 === 0) {
         isl3Op += 0.1;        
    }}} 
    ctx.drawImage(imgTotem, bgXpos, bgYpos+90, bgWidth, bgHeight);
    if (animateId % 12 === 0) {        
        numTotem += 1;
        if (numTotem > 5) {
          numTotem = 1;
        }        
    }
    imgTotem.src = "./Image/Totem/tot" + numTotem + ".png"
    
    //Chest
    ctx.globalAlpha = isl4Op;
    if (isl4Op < 1) {
    if (island4 === true) {    
     if (animateId % 5 === 0) {
         isl4Op += 0.1;        
    }}} 
    ctx.drawImage(imgChest, bgXpos, bgYpos+79, bgWidth, bgHeight);
    if (animateId % 12 === 0) {        
      numChest += 1;
        if (numChest > 3) {
          numChest = 1;
        }
        
    }
    imgChest.src = "./Image/Chest/chest" + numChest + ".png"

    // Character
    ctx.globalAlpha = .5;
    ctx.drawImage(shadow, 298.5, 285, 40, 40);
    ctx.globalAlpha = 1;

    if (isNotMoving && wasRight === 0 && wasLeft === 0) {
      ctx.drawImage(CharIdle, 300, 285, 40, 40);
      wasRight = 1
      if (animateId % 7 === 0) {        
              imgChar += 1;
              if (imgChar > 3) {
                imgChar = 0;
              }
              
          }
      CharIdle.src = "./Image/Character/CharIdle/idle" + imgChar + ".png"
       }
    if (isNotMoving && wasRight === 1) {
   ctx.drawImage(CharIdle, 300, 285, 40, 40);
   if (animateId % 7 === 0) {        
           imgChar += 1;
           if (imgChar > 3) {
             imgChar = 0;
           }           
       }
   CharIdle.src = "./Image/Character/CharIdle/idle" + imgChar + ".png"
    }
    if (isNotMoving && wasLeft === 1) {
      ctx.drawImage(CharIdle, 300, 285, 40, 40);
      if (animateId % 7 === 0) {        
              imgChar += 1;
              if (imgChar > 3) {
                imgChar = 0;
              }
              
          }
      CharIdle.src = "./Image/Character/CharIdleLeft/idle" + imgChar + ".png"
       }
    if (isMovingRight) {
      ctx.drawImage(CharIdle, 300, 285, 40, 40);
      if (animateId % 7 === 0) {        
        imgCharRun += 1;
              if (imgCharRun > 5) {
                imgCharRun = 0;
              }
              
          }
      CharIdle.src = "./Image/Character/CharRunRight/run" + imgCharRun + ".png"
       }
    if (isMovingLeft) {
        ctx.drawImage(CharIdle, 300, 285, 40, 40);
        if (animateId % 7 === 0) {        
          imgCharRun += 1;
                if (imgCharRun > 5) {
                  imgCharRun = 0;
                }
                
            }
        CharIdle.src = "./Image/Character/CharRunLeft/run" + imgCharRun + ".png"
         }
    if (isMovingUp && wasLeft === 1) {
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 7 === 0) {        
            imgCharRun += 1;
                  if (imgCharRun > 5) {
                    imgCharRun = 0;
                  }
                  
              }
        CharIdle.src = "./Image/Character/CharRunLeft/run" + imgCharRun + ".png"
            }
    if (isMovingUp && wasRight === 1) {
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 7 === 0) {        
            imgCharRun += 1;
                  if (imgCharRun > 5) {
                    imgCharRun = 0;
                  }
                  
              }
          CharIdle.src = "./Image/Character/CharRunRight/run" + imgCharRun + ".png"
           }
    if (isMovingDown && wasRight === 1) {
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 7 === 0) {        
              imgCharRun += 1;
                    if (imgCharRun > 5) {
                      imgCharRun = 0;
                    }
                    
                }
            CharIdle.src = "./Image/Character/CharRunRight/run" + imgCharRun + ".png"
             }
    if (isMovingDown && wasLeft === 1) {
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 7 === 0) {        
              imgCharRun += 1;
                    if (imgCharRun > 5) {
                      imgCharRun = 0;
                    }
                    
                }
            CharIdle.src = "./Image/Character/CharRunLeft/run" + imgCharRun + ".png"
             }
    if (damage === true && wasRight === 1) {
        isMovingLeft = false
        isMovingRight = false
        isMovingUp = false
        isMovingDown = false   
        isNotMoving = false; 
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 8 === 0) {        
            imgCharDmg += 1;
            if (imgCharDmg > 2) {
                      damage = false
                      imgCharDmg = 0;
                      isNotMoving = true;
              }
              
          }
            CharIdle.src = "./Image/Character/CharDmgR/dmg" + imgCharDmg + ".png"
          }
    if (damage === true && wasLeft === 1) {
        isMovingLeft = false
        isMovingRight = false
        isMovingUp = false
        isMovingDown = false   
        isNotMoving = false; 
          ctx.drawImage(CharIdle, 300, 285, 40, 40);
          if (animateId % 8 === 0) {        
            imgCharDmg += 1;
            if (imgCharDmg > 2) {
                      damage = false
                      imgCharDmg = 0;
                      isNotMoving = true;
              }
              
          }
            CharIdle.src = "./Image/Character/CharDmgL/dmg" + imgCharDmg + ".png"
          }

    if (island2 === true && island3 === false) {
        xLimit = 325;
    }  
    if (island3 === true && island4 === false) {
        xLimit = 515;
    }  
    if (island4 === true) {
        xLimit = 715;
    }  

    if (isMovingLeft && bgXpos < 20) {
        bgXpos += 1.2;
    }
    else if (isMovingRight && bgXpos > -xLimit) {
        bgXpos -= 1.2;
    } 
    else if (isMovingUp && bgYpos < -240) {
        bgYpos += 1;
    }
    else if (isMovingDown && bgYpos > -275) {
        bgYpos -= 1;
    }

    //Check
    if (checkState === true) {        
          ctx.drawImage(imgCheck, 350, 510, 75, 75);
          if (animateId % 3 === 0) {        
            numCheck += 1;
            if (numCheck > 24) {
              checkState = false     
              numCheck = 0;                 
              }
              
          }
          imgCheck.src = "./Image/Check/check" + numCheck + ".png"
    }

   //Dialog    
    if (bgXpos < -365 && bgXpos > -395 && bgYpos < -265) {
      diagShow = true;
    }
    else {
      diagShow = false;      
    }
    if (diagShow === false) {
      ctx.globalAlpha = diagOp;
      ctx.drawImage(diagImg, 120, 400, 350, 350);
      if (animateId % 8 === 0) {        
        diagNum += 1;
          if (diagNum > 3) {
            diagNum = 0;
          }
          if (diagOp > 0) {              
              diagOp -= 0.2;        
             } 
             if (diagOp < 0) {              
              diagOp = 0;        
             } 
      }
      diagImg.src = "./Image/Dialog/diag" + diagNum + ".png"
      ctx.globalAlpha = 1;
      speakSd.pause()
      speakSd.currentTime = 0
      speakSd.loop = true
    }
    if (diagShow === true) {
    ctx.globalAlpha = diagOp;
    ctx.drawImage(diagImg, 120, 400, 350, 350);
    if (animateId % 8 === 0) {        
      diagNum += 1;
        if (diagNum > 3) {
          diagNum = 0;
        }
        if (diagOp < 1) {              
           
            diagOp += 0.3;        
           } 
           speakSd.play()
           speakSd.loop = false
    }
    diagImg.src = "./Image/Dialog/diag" + diagNum + ".png"
    ctx.globalAlpha = 1;
    }

  //Frame
  ctx.drawImage(imgFrame, 12, 15, 100, 100);
  if (animateId % 8 === 0) {        
      numFrame += 1;
      if (numFrame > 3) {
        numFrame = 0;
      }
      
  }
  imgFrame.src = "./Image/Frame/frame" + numFrame + ".png"

  //Health
  ctx.drawImage(healthImg, 115, 15, 130, 40);  
  
  //Stamina
  ctx.drawImage(imgSta, 80, 40, 350, 350);  
  imgSta.src = "./Image/Stamina/sta" + numSta + ".png"

  if (numSta === 8 || health === 0) {
    gameOver = 2;
  }
  
  //Game Over
  if(gameOver === 1){
        animateId = requestAnimationFrame(animate)
  } 
  else if(gameOver === 2 && gameOverR === false){
        cancelAnimationFrame(animateId)    
        clearInterval(staminaInter)
        numOver = 0;
        staminaInter = null;
        animateId = 0
        animateOver()            
        gameplaySd.pause();
        gameplaySd.currentTime = 0;
        setTimeout(function(){ 
          gameOverR = true;          
         }, 10000); 
  } 
  else if (gameOver === 3) {
        cancelAnimationFrame(animateId)
        clearInterval(staminaInter)
        numOver = 0;
        staminaInter = null;
        endStory()
        end1check = true
        document.querySelector("#buttons").style.display = "none"  
        setTimeout(function(){ 
          end1check = false
          end2check = true
         }, 12000); 
         setTimeout(function(){ 
          end3check = true
          end2check = false
         }, 25000); 
         setTimeout(function(){ 
          end3check = false
          stOverEnd = true
         }, 38000); 
  }

}  
function startGame    () {
  animate()   
  staminaInter  = setInterval(function(){ 
    if (numSta < 8) {
    numSta += 1;
    }
   }, 15000); 

}

//Keys
document.addEventListener('keydown', event => {  
    if (event.key === 'a') { 
      stepSd.play()
  stepSd.loop = true      
      isMovingLeft = true  
      isNotMoving = false;  
      wasRight = 0;
      wasLeft = 1;                
    }
    if (event.key === 'd') {     
      stepSd.play()
  stepSd.loop = true  
      isMovingRight = true    
      isNotMoving = false; 
      wasRight = 1;
      wasLeft = 0;      
    }
    if (event.key === 'w') {    
      stepSd.play()
  stepSd.loop = true   
        isMovingUp = true
        isNotMoving = false; 
    }
    if (event.key === 's') {   
      stepSd.play()
  stepSd.loop = true   
        isMovingDown = true   
        isNotMoving = false;               
    }    
    if (event.key === 'l') {      
      gameOver = 2;               
  }         
})
document.addEventListener('keyup', () => {   
  
  stepSd.loop = false
    isMovingLeft = false
    isMovingRight = false
    isMovingUp = false
    isMovingDown = false   
    isNotMoving = true;       
})
