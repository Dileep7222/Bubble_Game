let score = 0;
let timer = 6;
let hit=0;


function MakeBubble() {
    let bubbles = "";
    for (let i = 1; i < 113; i++) {
      let random = Math.floor(Math.random() * 10);
      bubbles += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#container").innerHTML = bubbles;
}

MakeBubble()
function runTimer() {
    let  time=setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(time)
            document.querySelector("#container").innerHTML=`<h3 id="gameOver">Time Out Game Over</h3>`
    }
}, 1000);
}
runTimer();

function newHit(){
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML=hit;
}
newHit()
function setScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
    
}

    let hitVal=document.querySelector("#container");
    hitVal.addEventListener("click",function(val){
        let hitNum=val.target.textContent;
        if(hitNum==hit){
            setScore();
            MakeBubble()
            newHit();
        }
        else{
            document.querySelector("#container").innerHTML=`<h3 id="wrongHit">Wrong Hit Game Over</h>  `
        }
    })
  
