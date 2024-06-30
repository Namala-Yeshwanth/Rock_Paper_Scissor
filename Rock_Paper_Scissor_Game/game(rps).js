let userscore=0;
let compscore=0;
// choices ko access karne ke liye const de rhe hai
const choices=document.querySelectorAll(".choice");
// now to print the same in place of Play the game, we access msg
const msg=document.querySelector("#msg");  
// to change the score we access user-score & comp-score
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");


const genComputerchoice=()=>{
    const options=['rock','paper','scissors'];
    // math-class, random-method=> math.random() chooses any random number from 0 to 1
    // if we multiply with 3 then range is (0,2) 
    // Math.floor(Math.random()*3) will eliminate decimal value => 0,1,2
    const randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});
const playGame=(userchoice)=>{
    console.log("userchoice=", userchoice);
    // generate computer response-> modular(i.e. reusable functions)
    const compChoice=genComputerchoice();
    console.log("compChoice=",compChoice);
    if(userchoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock" && compChoice==="paper"){
                userWin=false;
        }else if(userchoice==="paper" && compChoice==="scissors"){
            userWin=false;
        }else if(userchoice==="scissors" && compChoice==="rock"){
            userWin=false;
        }
        showWinner(userWin, userchoice, compChoice);
    }
}
const showWinner=(userWin, userchoice, compChoice)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText=`You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userScore.innerText=userscore;
        compScore.innerText=compscore;
    }else{
        console.log("you lost!");
        msg.innerText=`You lost, ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        userScore.innerText=userscore;
        compScore.innerText=compscore;
    }
} //now to print this on webpage we change innerText of msg

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw, Play again";
    msg.style.backgroundColor="#081b31";
}
