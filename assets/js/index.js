var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].setAttribute("src", `assets/images/dice${randomNumber1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `assets/images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "&#x1F6A9; Player 1 Wins"
}
else if(randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins &#x1F6A9;"
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}