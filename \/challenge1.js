
console.log('hi');

//Challenge 1: Age in Days
function ageindays(){
var birthyear=prompt('what year where u born my friend?');
var ageindays=(2020-birthyear)*365;
var h1=document.createElement('h2');
var textanswer=document.createTextNode('Your age in days is  '+" "+ageindays);
h1.appendChild(textanswer);
document.getElementById('flexbox').appendChild(h1);
h1.setAttribute('id','resettext')
}


function reset(){
    document.getElementById('resettext').remove();

}
//Challenge 2:Cat Generator
function catgenerator(){
    var image=document.createElement('img');
    image.src="download.jfif";
    document.getElementById('flexbox-container2').appendChild(image);
    
    
}
/*//Challenge 3 Stone paper Scissors

function rpsGame(Yourchoice){
var humanchoice,botchoice;

humanchoice=Yourchoice.id;
console.log(humanchoice);
botchoice=numbertoChoice(randtorpsint());
results=decidewinner(humanchoice,botchoice);//output=[0,1] or [1,0] or [0.5,0.5]
console.log(results);
message=finalmessage(results);//output  Returns object like {message:"You Won", color:"Green"}
rpsfrontend(humanchoice,botchoice,message);
}
function randtorpsint(){
    return Math.floor(Math.random()*3);
}
function numbertoChoice(number){
    return ['stone','paper','scissors'][number];
}
function decidewinner(Yourchoice,comuterChoice){
   var rpsdatabase= 'stone':{
        'scissors':1,'paper':0,'stone':0.5
    }
    'paper':{
        'scissors':0,'paper':0.5'stone':1
    }
    'scissors':{
        'scissors':0,'paper':0.5'stone':1
    }  

    var youscore=rpsdatabase[Yourchoice][comuterChoice];
    var ComputerScore=rpsdatabase[comuterChoice][Yourchoice];
return[youscore,ComputerScore]
}
function finalmessage([youscore,ComputerScore]){
    if(youscore===0){
        return{ 'message':"You lost",'color':'red'}
    }
    else if(youscore===0.5){
        return{ 'message':"You Tied",'color':'yellow'}
    }
    else{
        return{ 'message':"You Won",'color':'yellow'}
    }

        
    
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){ 
  var imdatabase={'stone':document.getElementById('stone').src;
  'paper':document.getElementById('paper').src;
  'scissors':document.getElementById('scissors').src;
}
document.getElementById('stone').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();


}*/



//Challenge 4 :-change the color of all buttons
let copybuttons = document.getElementsByTagName("button");
console.log("copybuttons", copybuttons);

   
    let all_buttons = Array.from(copybuttons);
    console.log("all_buttons", all_buttons);


console.log(all_buttons);

function buttoncolorchange(buttonthingy){
    if(buttonthingy.value==='red'){
        buttonsred();
    }else if(buttonthingy.value==='green'){
        buttonsgreen();

    }else if(buttonthingy.value==='yellow'){
        buttonsyellow();
    }else if(buttonthingy.value==='resetcolors'){
        buttonsreset();

    }else if(buttonthingy.value==='random'){
        buttonsrandom();
    }

} function buttonsred(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'reset');
    }
}
function buttonsyellow(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'btnbtn-warning');
    }
}function buttonsgreen(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,'btnbtn-success');
    }
}/*function buttonsreset(){
    for(let j=0;j<copybuttons.length;j++){
        copybuttons[j].classList.replace(copybuttons[j].className,all_buttons[j].className);
       
    }
    
}*/
function buttonsrandom(){
    var choices=['reset','btnbtn-danger','btnbtn-success','btnbtn-warning','clickme'];
    for(let i=0;i<copybuttons.length;i++){
    copybuttons[i].classList.replace(copybuttons[i].className,choices[Math.floor(Math.random()*5)]);
    }
}
//challenge 5
window.onload=function(){
document.querySelector("#hit1").addEventListener("click",blackjackhit);
document.querySelector("#deal").addEventListener("click",blackjackdeal);
document.querySelector('#stand').addEventListener("click",Dealerlogic);
let blackjackGame={
    'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
};

const YOU=blackjackGame['you'];
const DEALER=blackjackGame['dealer'];
function blackjackhit(){
    
    document.querySelector('#blackjack-result').textContent='Lets Play!';
    document.querySelector('#blackjack-result').style.color='black';
   let card=Randomcard();
   console.log(card);
    showcard(card,YOU);
    updatescore(card,YOU);
    showscore(YOU);
}
function showcard(card,activeplayer){
    if(activeplayer['score']<=21){
    const pop= new Audio('sounds/pop.mp3');
    var cardimage=document.createElement('img');
    cardimage.src=`images/${card}.png`;
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    pop.play();
    }
}
function blackjackdeal(){
    computewinner();
    scoreboard();
    
let youimages=document.querySelector('#your-box').querySelectorAll('img');
let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img');
for(let i=0;i<youimages.length;i++){
    youimages[i].remove();
}
for(let i=0;i<dealerimages.length;i++){
    dealerimages[i].remove();
}
YOU['score']=0;
DEALER['score']=0;
document.querySelector('#your-blackjack-result').textContent=0;
document.querySelector('#dealer-blackjack-result').textContent=0;
document.querySelector('#your-blackjack-result').style.color='white';
document.querySelector('#dealer-blackjack-result').style.color='white';
}
function Randomcard(){
let randomindex=Math.floor(Math.random()*13);
return blackjackGame['cards'][randomindex];
}

function updatescore(card,activeplayer){
    if(card=='A'){
        if(activeplayer['score']+blackjackGame['cardsmap'][card][1]<=21){
            activeplayer['score']+=blackjackGame['cardsmap'][card][1];
        }else{
            activeplayer['score']+=blackjackGame['cardsmap'][card][0];
        }
        
    }else{
activeplayer['score']+=blackjackGame['cardsmap'][card];
}
}
function showscore(activeplayer){
    
if(activeplayer['score']>21){
    document.querySelector(activeplayer['scorespan']).textContent='BURST!';
    document.querySelector(activeplayer['scorespan']).style.color='red';
}
else{
document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
}
}
function Dealerlogic(){
    let cardi=Randomcard();
    showcard(cardi,DEALER);
    updatescore(cardi,DEALER);
    showscore(DEALER);
}
function computewinner(){
    let winner;
    if(YOU['score']<=21){
       if(YOU['score']>DEALER['score'] || DEALER['score']>21){
         console.log('you won!');
         wonactions();
         winner=YOU;

     }else if(YOU['score']<DEALER['score']){
        console.log('you lost');
        lostactions();
        winner=DEALER;

     }else if(YOU['score']===DEALER['score']){
      console.log('YOU DREW');
      drewactions();
     } 
    }
   else if(YOU['score']>21 && DEALER['score']<=21){
    console.log('you lost');
    lostactions();
    winner=DEALER;
    
}   else if(YOU['score']>21 && DEALER['score']>21){
    drewactions();
    console.log('you drew');
    
}
console.log('winner is',winner);

return winner;

}
function wonactions(){
    document.querySelector('#blackjack-result').textContent='You Won!';
         document.querySelector('#blackjack-result').style.color='red';
         let winsound=new Audio('sounds/win.mp3');
         winsound.play();
}
function lostactions(){
    document.querySelector('#blackjack-result').textContent='You Lose!';
         document.querySelector('#blackjack-result').style.color='red';
         let lostsound=new Audio('sounds/lose.mp3');
         lostsound.play();
}
function drewactions(){
    document.querySelector('#blackjack-result').textContent='You Drew!';
         document.querySelector('#blackjack-result').style.color='red';
         let drewsound=new Audio('sounds/lose.mp3');
         drewsound.play();
}let a=0;let b=0;let d=0;
function scoreboard(){
    let winner1=computewinner();
    if(winner1===YOU){
        
        document.querySelector('#wins').textContent=++a;

    }else if(winner1===DEALER){
        document.querySelector('#loses').textContent=++b;

    }else{
        document.querySelector('#draws').textContent=++d; 
    }

}
};