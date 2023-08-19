let timer = 60;
const timer_html = document.getElementById("Timer");
const Guess_Sec = document.getElementById("Guess");
const Btn_part = document.getElementsByClassName("part-2-bubbles")[0];
let Scores = document.getElementById("Score");
var GuessNum;
let score = 0;
setInterval(function(){
    if(timer > 0){
        --timer;
        timer_html.innerHTML = timer;
    }
    else{
        Btn_part.innerHTML = 
        `<div class="GameOVer">
        <h1 class="Game">Game Over</h1>
        <h2 class="score">Score : ${Scores.innerHTML}</h2>
    </div>`
     
    }

} , 1000);

function bubblecreator(){
    for(let i =0; i<144;i++){
       let GuessNum2 = Math.floor(Math.random() * 10);
       let tempLiteral = `<div class="bubble">${GuessNum2}</div>`;
       Btn_part.innerHTML += tempLiteral;
    }
}

randomNum = ()=>{
 GuessNum = Math.floor(Math.random() * 10);
 Guess_Sec.innerHTML = GuessNum;
}    
Btn_part.addEventListener("click" , function(details){
    let clicked = details.target.textContent;
    if(clicked == GuessNum){
        Pointgain();
        randomNum();
        Btn_part.innerHTML = "";
        bubblecreator();
    }
    else{
        alert("WRONG NUMBER")
    }
})
function Pointgain(){
 score = score + 10;
 Scores.innerHTML = score;
}
randomNum();
bubblecreator();
