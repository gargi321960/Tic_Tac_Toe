let boxes=document.querySelectorAll(".box");
let turn =true;
let resetBtn=document.querySelector(".reset_btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let games = document.querySelector(".game");
msgContainer.style.display="none";
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
 
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          disableBoxes();
         setTimeout(showWinner,1000,pos1Val);
          return true;
        }
      }
    }
  };
  


  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.style.display="";
    resetBtn.style.display = "none";
    games.style.display = "none";
    disableBoxes();
  };
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.style.display="";
    resetBtn.style.display = "none";
    games.style.display = "none";
    disableBoxes();
  };
 
boxes.forEach((box) =>{
    box.addEventListener("click",() =>
    {
        if(turn)
        {
            box.style.color="brown";
            box.innerHTML="x";
            turn = false;
            box.disabled = true;
        }
        else{
            box.style.color="black";
            box.innerHTML="0";
            turn = true;
            box.disabled = true;
        }
        count++;
        let isWinner = checkWinner();
        
        if (count === 9 && !isWinner) {
            setTimeout(gameDraw,1000);
          }
    });
   

   
});
resetBtn.addEventListener("click", () =>{
    turn=true;
    count = 0;

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
});
newGameBtn.addEventListener("click", () =>{
    turn=true;
    count = 0;

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
     
      }
      games.style.display="";
      resetBtn.style.display="";
      msgContainer.style.display="none";
});