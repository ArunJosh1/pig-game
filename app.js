/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var round=0;
var current=0;
var score=[0,0];
var win=49;
var gameplay;
function init()
{
    document.getElementById('name-0').textContent="arun";
document.getElementById('name-1').textContent="rahul";
document.getElementById('score-1').textContent=0;
document.getElementById('score-0').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.querySelector('.dice').style.display='none';
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
round=0;
current=0;
score=[0,0];
gameplay=true;
}
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gameplay)
   {
    var rollDice=Math.floor(Math.random()*6+1);
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+rollDice+".png";
    if(rollDice!==1){
        round+=rollDice;
        document.querySelector('#current-'+current).textContent=round;
        winner();
    }
    else{
       nextPlayer();
    }
   }
   else alert('press on new game');
   
});
document.querySelector('.btn-hold').addEventListener('click',function()
{

    if(gameplay && score[current]+round>win)
    {
        winner();
    }
    else if(gameplay)
    {
        nextPlayer();
    }
    else
    {
        alert('press on new game');
    }
    
});
document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});
function nextPlayer()
{
    // next player
    document.querySelector('.dice').style.display='none';
    score[current]+=round;
    document.querySelector('#current-'+current).textContent=0;
    document.getElementById('score-'+current).textContent=score[current];
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    round=0;
    document.querySelector('#score-'+current).textContent=score[current];
    current===0?current=1:current=0;
}
function winner()
{
    if(gameplay && score[current]+round>win)
    {
        score[current]+=round;
        document.getElementById('score-'+current).textContent=score[current];
        document.getElementById('current-'+current).textContent=0;
        document.getElementById('name-'+current).textContent='WINNER !';
        gameplay=false;
    }
}