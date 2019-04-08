var scores, roundscores, activePlayer;
scores = [0, 0];
roundscores = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; 

document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; 
    
});







//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'



























