function main (){
     alert("Guess my number!");
    let answer = Math.floor(Math.random()*100)+1;
     alert("Answer = "+answer);
    let guess = 0;
   while (guess != answer) {

         guess = prompt("guess");
        
        if (guess == answer) alert("You win!");
        else if (guess > answer)alert("Too high!");
        else alert("Too low!");
   }
}