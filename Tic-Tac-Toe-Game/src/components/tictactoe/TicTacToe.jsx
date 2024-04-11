import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()


let data = ["","","","","","","","",""]

const TicTacToe = () => {

  const [count,setCount] = useState(0);
  const [lock,setLock] = useState(false);
  const titleRef = useRef(null);
  const boxesref = useRef(null);
  // const toggle = (e, num) => {
  //   if (lock) {
  //     return;
  //   }
  
  //   const updatedData = [...data]; // Create a copy of the data array
  //   if (count % 2 === 0) {
  //     updatedData[num] = "X"; // Update the data array
  //     setCount((prev) => prev + 1);
  //   } else {
  //     updatedData[num] = "O"; // Update the data array
  //     setCount((prev) => prev + 1);
  //   }
  
  //   // Set the updated data array to state
  //   data = updatedData;
  
  //   // Render the appropriate image based on the value in the data array
  //   if (data[num] === "X") {
  //     e.target.innerHTML = `<img src='${cross}'>`;
  //   } else {
  //     e.target.innerHTML = `<img src='${circle}'>`;
  //   }
  // };
  const handlereset = (e) =>{
   
    window.location.reload();
  }
  const toggle = (e,num)=>{
    if(lock){
      return 0;
    }
    if(count%2==0){
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "X";
      setCount((prev)=> prev+1)
    }
    else{
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "O";
      setCount((prev)=> prev+1)
    }
  checkWin();
};
  const checkWin = () =>{
    if(data[0] === data[1] && data[1] === data[2] && data[2] !==""){
        won(data[0])
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !==""){
      won(data[3])
  }
  else if(data[6] === data[7] && data[7] === data[8] && data[8] !==""){
    won(data[8])
  }
  else if(data[0] === data[3] && data[3] === data[6] && data[6] !==""){
    won(data[0])
  }
  else if(data[1] === data[4] && data[4] === data[7] && data[7] !==""){
    won(data[1])
  }
  else if(data[2] === data[5] && data[5] === data[8] && data[8] !==""){
    won(data[2])
  }
 
  else if(data[0] === data[4] && data[4] === data[8] && data[8] !==""){
    won(data[4])
  }
  else if(data[2] === data[4] && data[4] === data[6] && data[6] !==""){
    won(data[6])
  }
}

  const won = (winner)=>{
    setLock(true)
    if(winner === "X"){
      titleRef.current.innerHTML = `Congratulation: <img className="w-[50px]" src='${cross}'> won`
      jsConfetti.addConfetti({
        confettiRadius:2,
        confettiNumber:600,
      })
    }
    else{
      titleRef.current.innerHTML= `Congratulation: <img className="w-[50px]" src='${circle}'> won`
      jsConfetti.addConfetti({
        confettiRadius:2,
        confettiNumber:600,
      })
    }
  }
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <h1 ref={titleRef} className="text-[35px] w-[100%] text-white mb-[15px] md:mb-[]  md:text-[50px] text-nowrap flex flex-shrink-[1] flex-nowrap gap-[15px]">
          Tic Tac Toe Game in <span className="text-[#26ffcb] ">React</span>
        </h1>
        <div className="board flex justify-center items-center ">
          <div className="row1">
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,0)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,1)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,2)}></div>
          </div>
          <div className="row2">
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,3)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,4)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,5)}></div>
          </div>
          <div className="row3">
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,6)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,7)}></div>
            <div className="boxes" ref={boxesref} onClick={(e)=>toggle(e,8)}></div>
          </div>
        </div>
        <button
          className="w-[200px] h-[60px] border-none text-[26px]
         text-[#26ffcb] cursor-pointer bg-[#1f3540] my-[20px]  rounded-[50px]"
         onClick={(e)=>handlereset()}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
