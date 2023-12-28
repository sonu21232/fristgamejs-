
var timer = 60; 
var score = 0;
var hitrn = 0;
function  makeBubble(){
var  clutter = "";
for( var i =1; i <= 85 ; i++){
    var bc = Math.round(Math.random()*10);
   clutter += `<div class="bubble">${bc}</div>`;
}
    
document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer() {
 var timerInt = setInterval(function(){
    if (timer>0){
    timer --;
    document.querySelector("#timerval").textContent=timer;
    }
    else{

        clearInterval(timerInt);
    }
    


}, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
document.querySelector("#hitmake").textContent=hitrn;    
} 

function increaseScore() {
    score +=10; 
 document.querySelector("#scoreval").textContent=score;

    
}


document.querySelector("pbtm")
.addEventListener("click",function(dets){
   var clicke=(Number(dets.target.textContent));
   if (clicke==hitrn) {
    makeBubble();
    getNewHit();
    
   }
});
makeBubble();
runTimer(); 
getNewHit();
