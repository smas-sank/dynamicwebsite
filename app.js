let uscore=0,cscore =0;
function score(){
    let user=document.querySelector("#user-score");
    user.innerHTML=uscore;
    let comp=document.querySelector("#comp-score");
    comp.innerHTML=cscore;
}
let uchoice,cchoice;
let uRock=document.querySelector("#rock");
uRock.addEventListener("click",(evt)=>{
    uchoice="rock";
    compChoice();
});
let uPaper=document.querySelector("#paper");
uPaper.addEventListener("click",(evt)=>{
    uchoice="paper";
    compChoice();
});
let uScissor=document.querySelector("#scissors");
uScissor.addEventListener("click",(evt)=>{
    uchoice="scissor";
    compChoice();
});

function compChoice(){
    let arr=["rock","paper","scissor"];
    cchoice=arr[Math.floor(Math.random()*3)];
    check();
}
function check(){
    if(uchoice=="rock" && cchoice=="paper"){
        cscore++;
    }
    else if(uchoice=="rock" && cchoice=="scissor"){
        uscore++;
    }
    else if(uchoice=="paper" && cchoice=="scissor"){
        cscore++;
    }
    else if(uchoice=="paper" && cchoice=="rock"){
        uscore++;
    }
    else if(uchoice=="scissor" && cchoice=="rock"){
        cscore++;
    }
    else if(uchoice=="scissor" && cchoice=="paper"){
        uscore++;
    }
    score();
}