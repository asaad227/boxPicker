
const btn1 = document.querySelector(".box1")
const btn2 = document.querySelector(".box2")
const btn3 = document.querySelector(".box3")
const btn4 = document.querySelector(".box4")
const btn5 = document.querySelector(".box5")
const btn6 = document.querySelector(".box6")
const btn7 = document.querySelector(".box7")
const btn8 = document.querySelector(".box8")
const btn9 = document.querySelector(".box9")
const show = document.querySelector(".total");
const roundIn = document.querySelector(".roundIn");
const roundSubmit = document.querySelector(".roundSubmit");
const playerName = document.querySelector(".nameDisplay");
const nameIn = document.querySelector(".nameIn");
const nameIn2 = document.querySelector(".nameIn2")
const roundSubmit2 = document.querySelector(".roundSubmit2");
const playerName2 = document.querySelector(".nameDisplay2");
const show2 = document.querySelector(".total2");
const roundIn2 = document.querySelector(".roundIn2");
const win = document.querySelector(".win");
const player2Name = document.querySelector(".player2Name")
const player1Name = document.querySelector(".player1Name")
const howMany = document.querySelector(".howMany")
const abra = document.querySelector(".abra");


var result = [];
var result2 = [];
var count = [];


console.log(count)
function round(){
  playerName.innerHTML = `Player Name: ${nameIn.value[0].toUpperCase()+nameIn.value.slice(1)}`
  document.querySelector(".round").innerHTML = `Round: ${roundIn.value}`
  
}

function round2(){
  playerName2.innerHTML = `Player Name: ${nameIn2.value[0].toUpperCase()+nameIn2.value.slice(1)}`
  roundIn2.value = `${roundIn.value}`
  document.querySelector(".round2").innerHTML = `Round: ${roundIn2.value}`
}

function boxes(){ 
  const num = roundIn.value;
  const num2 = roundIn2.value;
  if(num > num2){
    if(count.length >= num){
      alert(show.innerHTML = `Please reset boxes for player2`)
        }else{
          count.push(1)
          const randomBox = Math.floor(Math.random()*4)
          const randomClass = Math.floor(Math.random()*4)
          if(randomBox === randomClass){
           result.push(10)
           btn1.className = "boxG"
          }else{
            btn1.className = "boxP"
          }
         
        } 
       
        btn1.disabled = true;
       const final = result.reduce((acc, curr)=> acc + curr, 0);
       show.innerHTML = `Score: ${final}` 
  }else{
    if(count.length >= num2 ){
      winner()
        }else{
          count.push(1)
          const randomBox = Math.floor(Math.random()*4)
          const randomClass = Math.floor(Math.random()*4)
          if(randomBox === randomClass){
           result2.push(10)
           btn1.className = "boxG"
          }else{
            btn1.className = "boxP"
          }
         
        } 
       
        btn1.disabled = true;
       const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
       show2.innerHTML = `Score: ${final2}` 
  }
                              
    }

    function boxes2(){ 
      const num = roundIn.value;
      const num2 = roundIn2.value;
      if(num > num2){
        if(count.length >= num){
          alert(show.innerHTML = `Please reset boxes for player2`)
            }else{
              count.push(1)
              const randomBox = Math.floor(Math.random()*4)
              const randomClass = Math.floor(Math.random()*4)
              if(randomBox === randomClass){
               result.push(10)
               btn2.className = "boxG"
              }else{
                btn2.className = "boxP"
              }
             
            } 
           
            btn2.disabled = true;
           const final = result.reduce((acc, curr)=> acc + curr, 0);
           show.innerHTML = `Score: ${final}` 
      }else{
        if(count.length >= num2 ){
          winner()
            }else{
              count.push(1)
              const randomBox = Math.floor(Math.random()*4)
              const randomClass = Math.floor(Math.random()*4)
              if(randomBox === randomClass){
               result2.push(10)
               btn2.className = "boxG"
              }else{
                btn2.className = "boxP"
              }
             
            } 
           
            btn2.disabled = true;
           const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
           show2.innerHTML = `Score: ${final2}` 
      }
                                  
        }

        function boxes3(){ 
          const num = roundIn.value;
          const num2 = roundIn2.value;
          if(num > num2){
            if(count.length >= num){
           
              const final = result.reduce((acc, curr)=> acc + curr, 0);
              alert(show.innerHTML = `Please reset boxes for player2`)
                }else{
                  count.push(1)
                  const randomBox = Math.floor(Math.random()*4)
                  const randomClass = Math.floor(Math.random()*4)
                  if(randomBox === randomClass){
                   result.push(10)
                   btn3.className = "boxG"
                  }else{
                    btn3.className = "boxP"
                  }
                 
                } 
               
                btn3.disabled = true;
               const final = result.reduce((acc, curr)=> acc + curr, 0);
               show.innerHTML = `Score: ${final}` 
          }else{
            if(count.length >= num2 ){
            winner()
                }else{
                  count.push(1)
                  const randomBox = Math.floor(Math.random()*4)
                  const randomClass = Math.floor(Math.random()*4)
                  if(randomBox === randomClass){
                   result2.push(10)
                   btn3.className = "boxG"
              }else{
                btn3.className = "boxP"
                  }
                 
                } 
               
                btn3.disabled = true;
               const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
               show2.innerHTML = `Score: ${final2}` 
          }
                                      
            }

            function boxes4(){ 
              const num = roundIn.value;
              const num2 = roundIn2.value;
              if(num > num2){
                if(count.length >= num){
            
                  const final = result.reduce((acc, curr)=> acc + curr, 0);
                  alert(show.innerHTML = `Please reset boxes for player2`)
                    }else{
                      count.push(1)
                      const randomBox = Math.floor(Math.random()*4)
                      const randomClass = Math.floor(Math.random()*4)
                      if(randomBox === randomClass){
                       result.push(10)
                       btn4.className = "boxG"
              }else{
                btn4.className = "boxP"
                      }
                     
                    } 
                   
                    btn4.disabled = true;
                   const final = result.reduce((acc, curr)=> acc + curr, 0);
                   show.innerHTML = `Score: ${final}` 
              }else{
                if(count.length >= num2 ){
                 winner()
                    }else{
                      count.push(1)
                      const randomBox = Math.floor(Math.random()*4)
                      const randomClass = Math.floor(Math.random()*4)
                      if(randomBox === randomClass){
                       result2.push(10)
                       btn4.className = "boxG"
              }else{
                btn4.className = "boxP"
                      }
                     
                    } 
                   
                    btn4.disabled = true;
                   const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                   show2.innerHTML = `Score: ${final2}` 
              }
                                          
                }

                function boxes5(){ 
                  const num = roundIn.value ;
                  const num2 = roundIn2.value ;
                  if(num > num2){
                    if(count.length >= num){
               
                      const final = result.reduce((acc, curr)=> acc + curr, 0);
                      alert(show.innerHTML = `Please reset boxes for player2`)
                        }else{
                          count.push(1)
                          const randomBox = Math.floor(Math.random()*4)
                          const randomClass = Math.floor(Math.random()*4)
                          if(randomBox === randomClass){
                           result.push(10)
                           btn5.className = "boxG"
              }else{
                btn5.className = "boxP"
                          }
                         
                        } 
                       
                        btn5.disabled = true;
                       const final = result.reduce((acc, curr)=> acc + curr, 0);
                       show.innerHTML = `Score: ${final}` 
                  }else{
                    if(count.length >= num2 ){
                      winner()
                        }else{
                          count.push(1)
                          const randomBox = Math.floor(Math.random()*4)
                          const randomClass = Math.floor(Math.random()*4)
                          if(randomBox === randomClass){
                           result2.push(10)
                           btn5.className = "boxG"
              }else{
                btn5.className = "boxP"
                          }
                         
                        } 
                       
                        btn5.disabled = true;
                       const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                       show2.innerHTML = `Score: ${final2}` 
                  }
                                              
                    }

                    function boxes6(){ 
                      const num = roundIn.value ;
                      const num2 = roundIn2.value;
                      if(num > num2){
                        if(count.length >= num){
                    
                          const final = result.reduce((acc, curr)=> acc + curr, 0);
                          alert(show.innerHTML = `Please reset boxes for player2`)
                            }else{
                              count.push(1)
                              const randomBox = Math.floor(Math.random()*4)
                              const randomClass = Math.floor(Math.random()*4)
                              if(randomBox === randomClass){
                               result.push(10)
                               btn6.className = "boxG"
              }else{
                btn6.className = "boxP"
                              }
                             
                            } 
                           
                            btn6.disabled = true;
                           const final = result.reduce((acc, curr)=> acc + curr, 0);
                           show.innerHTML = `Score: ${final}` 
                      }else{
                        if(count.length >= num2 ){
                          winner()
                            }else{
                              count.push(1)
                              const randomBox = Math.floor(Math.random()*4)
                              const randomClass = Math.floor(Math.random()*4)
                              if(randomBox === randomClass){
                               result2.push(10)
                               btn6.className = "boxG"
                              }else{
                                btn6.className = "boxP"
                              }
                             
                            } 
                           
                            btn6.disabled = true;
                           const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                           show2.innerHTML = `Score: ${final2}` 
                      }
                                                  
                        }

                        function boxes7(){ 
                          const num = roundIn.value ;
                          const num2 = roundIn2.value ;
                          if(num > num2){
                            if(count.length >= num){
                       
                              const final = result.reduce((acc, curr)=> acc + curr, 0);
                              alert(show.innerHTML = `Please reset boxes for player2`)
                                }else{
                                  count.push(1)
                                  const randomBox = Math.floor(Math.random()*4)
                                  const randomClass = Math.floor(Math.random()*4)
                                  if(randomBox === randomClass){
                                   result.push(10)
                                   btn7.className = "boxG"
              }else{
                btn7.className = "boxP"
                                  }
                                 
                                } 
                               
                                btn7.disabled = true;
                               const final = result.reduce((acc, curr)=> acc + curr, 0);
                               show.innerHTML = `Score: ${final}` 
                          }else{
                            if(count.length >= num2 ){
                             winner()
                                }else{
                                  count.push(1)
                                  const randomBox = Math.floor(Math.random()*4)
                                  const randomClass = Math.floor(Math.random()*4)
                                  if(randomBox === randomClass){
                                   result2.push(10)
                                   btn7.className = "boxG"
                                  }else{
                                    btn7.className = "boxP"
                                  }
                                 
                                } 
                               
                                btn7.disabled = true;
                               const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                               show2.innerHTML = `Score: ${final2}` 
                          }
                                                      
                            }

                            function boxes8(){ 
                              const num = roundIn.value ;
                              const num2 = roundIn2.value ;
                              if(num > num2){
                                if(count.length >= num){
                               
                                  const final = result.reduce((acc, curr)=> acc + curr, 0);
                                  alert(show.innerHTML = `Please reset boxes for player2`)
                                    }else{
                                      count.push(1)
                                      const randomBox = Math.floor(Math.random()*4)
                                      const randomClass = Math.floor(Math.random()*4)
                                      if(randomBox === randomClass){
                                       result.push(10)
                                       btn8.className = "boxG"
                                      }else{
                                        btn8.className = "boxP"
                                      }
                                     
                                    } 
                                   
                                    btn8.disabled = true;
                                   const final = result.reduce((acc, curr)=> acc + curr, 0);
                                   show.innerHTML = `Score: ${final}` 
                              }else{
                                if(count.length >= num2 ){
                                 winner()
                                    }else{
                                      count.push(1)
                                      const randomBox = Math.floor(Math.random()*4)
                                      const randomClass = Math.floor(Math.random()*4)
                                      if(randomBox === randomClass){
                                       result2.push(10)
                                       btn8.className = "boxG"
              }else{
                btn8.className = "boxP"
                                      }
                                     
                                    } 
                                   
                                    btn8.disabled = true;
                                   const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                                   show2.innerHTML = `Score: ${final2}` 
                              }
                                                          
                                }

                                function boxes9(){ 
                                  const num = roundIn.value ;
                                  const num2 = roundIn2.value ;
                                  if(num > num2){
                                    if(count.length >= num){
                                 
                                      const final = result.reduce((acc, curr)=> acc + curr, 0);
                                      alert(show.innerHTML = `Please reset boxes for player2`)
                                        }else{
                                          count.push(1)
                                          const randomBox = Math.floor(Math.random()*4)
                                          const randomClass = Math.floor(Math.random()*4)
                                          if(randomBox === randomClass){
                                           result.push(10)
                                           btn9.className = "boxG"
                                          }else{
                                            btn9.className = "boxP"
                                          }
                                         
                                        } 
                                       
                                        btn9.disabled = true;
                                       const final = result.reduce((acc, curr)=> acc + curr, 0);
                                       show.innerHTML = `Score: ${final}` 
                                  }else{
                                    if(count.length >= num2 ){
                                      winner()
                                      
                                        }else{
                                          count.push(1)
                                          const randomBox = Math.floor(Math.random()*4)
                                          const randomClass = Math.floor(Math.random()*4)
                                          if(randomBox === randomClass){
                                           result2.push(10)
                                           btn9.className = "boxG"
                                          }else{
                                            btn9.className = "boxP"
                                          }
                                         
                                        } 
                                       
                                        btn9.disabled = true;
                                       const final2 = result2.reduce((acc, curr)=> acc + curr, 0);
                                       show2.innerHTML = `Score: ${final2}` 
                                  }
                                                              
                                    }
 
   function store(){
    const final = result.reduce((acc, curr)=> acc + curr, 0);
    const final2 = result.reduce((acc, curr)=> acc + curr, 0);
    const user1 = {
      name: nameIn.value,
      total: final 
    }
    localStorage.setItem("user1", JSON.stringify(user1));
    const user2 = {
      name: nameIn2.value,
      total: final2 
    }
    localStorage.setItem("user2", JSON.stringify(user2));
   }

   function resetTable(){
    const final = result.reduce((acc, curr)=> acc + curr, 0);
   
    document.querySelector(".player2Details").style.display = "initial";
    document.querySelector(".player1Details").style.display = "none";
    document.querySelector(".reset").style.display = "none";
    document.querySelector(".heading").innerHTML =`Score: ${final} to beat. Good luck Player2!!`
    roundIn.style.display = "none";
    nameIn.style.display = "none";
    player1Name.style.display = "none";
    roundSubmit.style.display = "none"
    // roundIn2.style.display = "inline";

    nameIn2.style.display = "flex";
    roundSubmit2.style.display = "inline"
    player2Name.style.display = "flex";
    howMany.style.display = "none"
    btn1.className = "box1"
    btn1.disabled = false; 
    btn2.className = "box2"
    btn2.disabled = false; 
    btn3.className = "box3"
    btn3.disabled = false; 
    btn4.className = "box4"
    btn4.disabled = false; 
    btn5.className = "box5"
    btn5.disabled = false; 
    btn6.className = "box6"
    btn6.disabled = false; 
    btn7.className = "box7"
    btn7.disabled = false; 
    btn8.className = "box8"
    btn8.disabled = false; 
    btn9.className = "box9"
    btn9.disabled = false;
    count.length = 0; 

    
   }
function winner(){
  
  if(result.length > result2.length){
    alert(win.innerHTML = `Winner 🏆: ${nameIn.value[0].toUpperCase()+nameIn.value.slice(1)}`)
  document.querySelector(".heading").innerHTML =`${nameIn2.value[0].toUpperCase()+nameIn2.value.slice(1)} better luck next time!!!`
  }

  if(result.length < result2.length){
    alert(win.innerHTML = `Winner 🏆: ${nameIn2.value[0].toUpperCase()+nameIn2.value.slice(1)}`)
    document.querySelector(".heading").innerHTML =`${nameIn.value[0].toUpperCase()+nameIn.value.slice(1)} better luck next time!!!`
  }
  if(result.length === result2.length){
    alert(win.innerHTML = "Winner: Game draw")
    document.querySelector(".heading").innerHTML =`Reload the game and try again!!!`
  }
  win.style.display = "inline";
  document.querySelector(".user").style.display = "none";
  document.querySelector(".playerDetails").style.display = "none";
  document.querySelector(".divBox").style.display = "none";
  //rather then calling individual elements change the className
  document.querySelector(".mainDiv").className = "mainDiv2";
  document.querySelector("body").style.backgroundColor ="cadetblue"

}
   const reset = document.querySelector(".reset")
   const dataStore = document.querySelector(".dataStore");
   

   dataStore.addEventListener("click", store);
   reset.addEventListener("click", resetTable);

roundSubmit.addEventListener("click", round)

roundSubmit2.addEventListener("click", round2)
btn1.addEventListener("click", boxes)
btn2.addEventListener("click", boxes2)
btn3.addEventListener("click", boxes3)
btn4.addEventListener("click", boxes4)
btn5.addEventListener("click", boxes5)
btn6.addEventListener("click", boxes6)
btn7.addEventListener("click", boxes7)
btn8.addEventListener("click", boxes8)
btn9.addEventListener("click", boxes9)
