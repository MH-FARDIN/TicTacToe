let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let turn0 = true;
let result = document.querySelector(".result");
let winner = document.querySelector(".winner");
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let resetgame = () => {
    turn0 = true;
    enabox();
    result.classList.add("hide")
}




boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked")
        if(turn0){
            box.innerText = "O"
            turn0 = false 
            
        }else{
            box.innerText = "X"
            turn0 = true

        }
        box.disabled = true;
        // box.style.backgroundColor = "White"
        // box.style.color = "#b0413e"
wincheck();
    })
})


const disbox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const msg = (wnr) => {
    result.innerText = `Congratulation, Winner is ${wnr}`;
    result.classList.remove("hide")
    disbox();
}

const wincheck = () =>{
    for(let pattern of win){

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    
        if (val1 != "" && val2 != "" && val3 != "") {
            if(val1 == val2 && val2 == val3){
                console.log("winner", val1)
                msg(val1) 
            }
        }
        
}}
resetBtn.addEventListener("click",resetgame)