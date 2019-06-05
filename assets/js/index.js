var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = `assets/images/dice${randomNumber1}.png`;
var randomImage2 = `assets/images/dice${randomNumber2}.png`;

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

img1.setAttribute("src", randomImage1);
img2.setAttribute("src", randomImage2);

var h1 = document.getElementsByTagName("h1")[0];

if(randomNumber1 > randomNumber2) {
    h1.innerHTML = "&#x1F6A9; Player 1 Wins"
}
else if(randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins &#x1F6A9;"
}
else {
    h1.innerHTML = "Draw!"
}