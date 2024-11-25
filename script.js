let userScore=0,compScore =0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
const genCompChoice= ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame=() => {
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText=`You win! ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
        uscore.innerText=userScore;
    } else {
        compScore++; 
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        cscore.innerText=compScore;
    }
};
const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice ==  "rock"){
            userWin = compChoice=="paper"?false:true;
        } else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        } else {
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};