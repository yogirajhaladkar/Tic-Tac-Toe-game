let Boxs = document.querySelectorAll(".box");
let resteBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");




let turn_X = true;
const winPatS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

const resetGame = () =>{
    turn_X = true;
    enbleBox();
    msgContainer.classList.add("hide");
    
    
}

const disableBox = () =>{
    for (let box of Boxs){
        box.disabled=true;
    }
}

const enbleBox = () =>{
    for (let box of Boxs){
        box.disabled=false;
        box.innerText ="";
    }
}


Boxs.forEach((box)=> {
    box.addEventListener("click" ,() =>{
        if(turn_X === true){
            box.innerText="X";
            turn_X=false;
        }
        else{
            box.innerText="O";
            turn_X=true;
        }
        box.disabled=true;
        checkWinner();
    });
});



const shoWinner = (winner) => {
    msg.innerText=`congrats , winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};


const checkWinner = ()=>{
    for  (let pat of winPatS){
        let pos1val = Boxs[pat[0]].innerText;
        let pos2val = Boxs[pat[1]].innerText;
        let pos3val = Boxs[pat[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val ){
                shoWinner(pos1val);
            }
        }



    }
}

newGameBtn.addEventListener("click",resetGame);
resteBtn.addEventListener("click",resetGame);