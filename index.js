const myCanvas = document.querySelector("canvas");
const ctx = myCanvas.getContext("2d")
document.querySelector("#game-board").style.display = "none";

myCanvas.style.border;

let gameOver = false
let animateId;

//Input
let button = document.querySelector("#answer");
let buttonTry = document.querySelector("#enter");

buttonTry.onclick = () => {
    if (button.value === "3" && health > 0) {
      checkState = true;
        island2 = true   
        button.value = ""
    }
    else if (button.value === "5" && island2 === true && health > 0) {
      checkState = true;
        island3 = true   
        button.value = ""
    }
    else if (button.value === "8" && island3 === true && health > 0) {
      checkState = true;
        island4 = true   
        button.value = ""
    } 
    else {
      if (health === 1) {
        healthImg.src = ""
        health = 0;
        damage =  true;
        button.value = ""
      }
      if (health === 2) {
        healthImg.src = "./Image/Health/health1.png"
        health = 1;
        damage =  true;
        button.value = ""
      }
      if (health === 3) {
        healthImg.src = "./Image/Health/health2.png"
        health = 2;
        damage =  true;
        button.value = ""
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
  gameOver = true;
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
document.querySelector('.but-enter').onmousedown = () => {
document.querySelector('.but-enter').style.backgroundImage = "url('./Image/submit/bu2.png')"
}
document.querySelector('.but-enter').onmouseup = () => {
  document.querySelector('.but-enter').style.backgroundImage = "url('./Image/submit/bu1.png')"
  }


window.onload = () => {
  
    document.getElementById('start-button').onclick = () => {
      startGame();          
      document.querySelector(".game-intro").style.display = "none";
      document.querySelector("#game-board").style.display = 'block';   
      setInterval(function(){ 
        if (numSta < 8) {
        numSta += 1;
        }
       }, 15000);          
    };
}
 

function animate () {    
    //ctx.clearRect(0, 0, bgWidth, bgWidth);

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

    
    //Fade in
    // ctx.globalAlpha = bgOp;
    // if (bgOp < 1) {
      // if (animateId % 5 === 0) {
        //     bgOp += 0.1;        
        // }}
        // ctx.drawImage(boatImg, bgXpos + 190, bgYpos + 520, 60, 80);
        // ctx.globalAlpha = 1;
        
   
        
        
    
    
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
    gameOver = true;
  }
      

      if(!gameOver){
        animateId = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(animateId)
      }

};

    


function startGame() {
    animate()         
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'a') {       
      isMovingLeft = true  
      isNotMoving = false;  
      wasRight = 0;
      wasLeft = 1;                
    }
    if (event.key === 'd') {       
      isMovingRight = true    
      isNotMoving = false; 
      wasRight = 1;
      wasLeft = 0;      
    }
    if (event.key === 'w') {       
        isMovingUp = true
        isNotMoving = false; 
    }
    if (event.key === 's') {      
        isMovingDown = true   
        isNotMoving = false;               
    }        
  })
  document.addEventListener('keyup', () => {     
    isMovingLeft = false
    isMovingRight = false
    isMovingUp = false
    isMovingDown = false   
    isNotMoving = true;       
  })
