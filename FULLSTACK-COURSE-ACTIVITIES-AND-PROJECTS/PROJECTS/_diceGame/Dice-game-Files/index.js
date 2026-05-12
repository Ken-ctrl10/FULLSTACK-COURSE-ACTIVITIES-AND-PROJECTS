let randnum1 = Math.floor(Math.random() * 6) + 1;
let randnum2 = Math.floor(Math.random() * 6) + 1;

let player1 = document.querySelector('.dice .img1');
let player2 = document.querySelector('.dice .img2');

player1.setAttribute('src', `./images/dice${randnum1}.png`);
player2.setAttribute('src', `./images/dice${randnum2}.png`);

if(randnum1 > randnum2){
  document.querySelector('h1').textContent = "Player 1 Wins!";
} else if(randnum2 > randnum1){
  document.querySelector('h1').textContent = "Player 2 Wins!";
} else {
  document.querySelector('h1').textContent = "It's a Draw!";
}