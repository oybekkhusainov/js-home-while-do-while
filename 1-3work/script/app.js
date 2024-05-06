let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randomNumber;
let randomLetter;

let choosenLetter;

do{
    choosenLetter = prompt("Enter lettter");
    randomNumber = Math.floor(Math.random() * 26)
    randomLetter = alphabet[randomNumber];
    console.log(randomLetter, choosenLetter)
}while(randomLetter != choosenLetter)

let numberOfRandomLetter = randomLetter.charCodeAt(0);



while(numberOfRandomLetter < 123){
    console.log(String.fromCharCode(numberOfRandomLetter));
    numberOfRandomLetter++
}