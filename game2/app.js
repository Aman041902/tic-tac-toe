let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newg = document.querySelector("#new");
let msg = document.querySelector(".msg");
let w = document.querySelector("#win");

let turn0 = true;
let patterns = [[0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [6,7,8],
   [3,4,5]
 ];
 
 boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText = "O";
      turn0 = false;
      box.style.backgroundColor="red";
    }
    else{
      box.innerText = "X";
      turn0 = true;
      box.style.backgroundColor="blue";
    }
    box.disabled = true;

    check();
  });
    
 });

 const diableb = () => {
  for(box of boxes){
    box.disabled = true;
  }
 }

 const enableb = () => {
  for(box of boxes){
    box.style.backgroundColor="";
    box.disabled = false;
    box.innerText = "";
  }
 }

 const show = (winner) => {
  win.innerText = `Congratulations , Winner is ${winner}`;
  msg.classList.remove("hide");
  diableb();
 }

 const check = () =>{
  for(pattern of patterns){

    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;

    if(p1!= "" && p2!= "" && p3!= ""){
      if(p1 === p2 && p1 ===p3){
        show(p1);
      }
    }



  };

  
 };

 const resetg = () =>{
  turn0 = true;
  enableb();
  msg.classList.add("hide");
  
 }

 newg.addEventListener("click",resetg);
 resetbtn.addEventListener("click",resetg);