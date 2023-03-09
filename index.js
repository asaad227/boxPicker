
const btn1 = document.querySelector("#box1")
const btn2 = document.querySelector("#box2")
const btn3 = document.querySelector("#box3")
const btn4 = document.querySelector("#box4")
const btn5 = document.querySelector("#box5")
const btn6 = document.querySelector("#box6")
const btn7 = document.querySelector("#box7")
const btn8 = document.querySelector("#box8")
const btn9 = document.querySelector("#box9")
const show = document.querySelector(".total");
const roundIn = document.querySelector(".roundIn");
const roundSubmit = document.querySelector(".roundSubmit");

var result = []; 
var count = [];


console.log(count)
function round(){
  document.querySelector(".round").innerHTML = `Select your round: ${roundIn.value}`
}

function boxes(){ 
  const num = roundIn.value - 1;
  console.log(num)
  if(count.length > num){
alert(show.innerHTML = `Game over and score ${final}`)
  }else{
    count.push(1)
    const randomBox = Math.floor(Math.random()*4)
    const randomClass = Math.floor(Math.random()*4)
    if(randomBox === randomClass){
     result.push(10)
     btn1.style.backgroundColor = "green"
    }else{
      btn1.style.backgroundColor = "gold"
    }
   
  } 
 
 const final = result.reduce((acc, curr)=> acc + curr, 0);
 show.innerHTML = `Score: ${final}`                             
    }
    function boxes2(){
      
      const num = roundIn.value - 1;;
      console.log(num)
      if(count.length > num){
        const score = result.reduce((acc, curr)=> acc + curr, 0)
        alert(show.innerHTML = `Game over and score ${score}`)
          }else{ 
      count.push(1) 
      const randomBox = Math.floor(Math.random()*4)
      const randomClass = Math.floor(Math.random()*4)
      if(randomBox === randomClass){
        result.push(10)
       btn2.style.backgroundColor = "green"
      }else{
        btn2.style.backgroundColor = "gold"
      }
      
    }
      const final = result.reduce((acc, curr)=> acc + curr, 0);
      show.innerHTML = `Score: ${final}`                             
         }

         function boxes3(){ 
          const num = roundIn.value - 1;
  console.log(num)
  if(count.length > num){
    const score = result.reduce((acc, curr)=> acc + curr, 0)
            alert(show.innerHTML = `Game over and score ${final}`)
              }else{
          count.push(1) 
          const randomBox = Math.floor(Math.random()*4)
          const randomClass = Math.floor(Math.random()*4)
          if(randomBox === randomClass){
            result.push(10)
           btn3.style.backgroundColor = "green"
          }else{
            btn3.style.backgroundColor = "gold"
          }
         
        }
          const final = result.reduce((acc, curr)=> acc + curr, 0);
          show.innerHTML = `Score: ${final}`                             
             }

             function boxes4(){ 
              const num = roundIn.value - 1;
  console.log(num)
  if(count.length > num){
    const score = result.reduce((acc, curr)=> acc + curr, 0)
                alert(show.innerHTML = `Game over and score ${score}`)
                  }else{
              count.push(1) 
              const randomBox = Math.floor(Math.random()*4)
              const randomClass = Math.floor(Math.random()*4)
              if(randomBox === randomClass){
                result.push(10)
               btn4.style.backgroundColor = "green"
              }else{
                btn4.style.backgroundColor = "gold"
              }
             
            }
              const final = result.reduce((acc, curr)=> acc + curr, 0);
              show.innerHTML = `Score: ${final}`                             
                 }

                 function boxes5(){ 
                  const num = roundIn.value - 1;
  console.log(num)
  if(count.length > num){
    const score = result.reduce((acc, curr)=> acc + curr, 0)
                    alert(show.innerHTML = `Game over and score ${score}`)
                      }else{
                  count.push(1) 
                  const randomBox = Math.floor(Math.random()*4)
                  const randomClass = Math.floor(Math.random()*4)
                  if(randomBox === randomClass){
                    result.push(10)
                   btn5.style.backgroundColor = "green"
                  }else{
                    btn5.style.backgroundColor = "gold"
                  }
                 
                }
                  const final = result.reduce((acc, curr)=> acc + curr, 0);
                  show.innerHTML = `Score: ${final}`                             
                     }

                     function boxes6(){
                      const num = roundIn.value - 1;
                      console.log(num)
                      if(count.length > num){
                        const score = result.reduce((acc, curr)=> acc + curr, 0)
                        alert(show.innerHTML = `Game over and score ${score}`)
                          }else{ 
                      count.push(1) 
                      const randomBox = Math.floor(Math.random()*4)
                      const randomClass = Math.floor(Math.random()*4)
                      if(randomBox === randomClass){
                        result.push(10)
                       btn6.style.backgroundColor = "green"
                      }else{
                        btn6.style.backgroundColor = "gold"
                      }
                      
                    }
                      const final = result.reduce((acc, curr)=> acc + curr, 0);
                      show.innerHTML = `Score: ${final}`                             
                         }

                         function boxes7(){
                          const num = roundIn.value - 1;
                          console.log(num)
                          if(count.length > num){
                            const score = result.reduce((acc, curr)=> acc + curr, 0)
                            alert(show.innerHTML = `Game over and score ${score}`)
                              }else{
                          count.push(1)  
                          const randomBox = Math.floor(Math.random()*4)
                          const randomClass = Math.floor(Math.random()*4)
                          if(randomBox === randomClass){
                            result.push(10)
                           btn7.style.backgroundColor = "green"
                          }else{
                            btn7.style.backgroundColor = "gold"
                          }
                          
                        }
                          const final = result.reduce((acc, curr)=> acc + curr, 0);
                          show.innerHTML = `Score: ${final}`                             
                             }
                             function boxes8(){
                              const num = roundIn.value - 1;
                              console.log(num)
                              if(count.length > num){
                                const score = result.reduce((acc, curr)=> acc + curr, 0)
                                alert(show.innerHTML = `Game over and score ${score}`)
                                  }else{ 
                              count.push(1) 
                              const randomBox = Math.floor(Math.random()*4)
                              const randomClass = Math.floor(Math.random()*4)
                              if(randomBox === randomClass){
                                result.push(10)
                               btn8.style.backgroundColor = "green"
                              }else{
                                btn8.style.backgroundColor = "gold"
                              }
                              
                            }
                              const final = result.reduce((acc, curr)=> acc + curr, 0);
                              show.innerHTML = `Score: ${final}`                             
                                 }
                                 function boxes9(){ 
                                  const num = roundIn.value - 1;
                                  console.log(num)
                                  if(count.length > num){
                                    const score = result.reduce((acc, curr)=> acc + curr, 0)
                                    alert(show.innerHTML = `Game over and score ${score}`)
                                      }else{
                                  count.push(1) 
                                  const randomBox = Math.floor(Math.random()*4)
                                  const randomClass = Math.floor(Math.random()*4)
                                  if(randomBox === randomClass){
                                    result.push(10)
                                   btn9.style.backgroundColor = "green"
                                  }else{
                                    btn9.style.backgroundColor = "gold"
                                  }
                                 
                                }
                                  const final = result.reduce((acc, curr)=> acc + curr, 0);
                                  show.innerHTML = `Score: ${final}`                             
                                     }
   

roundSubmit.addEventListener("click", round)
btn1.addEventListener("click", boxes)
btn2.addEventListener("click", boxes2)
btn3.addEventListener("click", boxes3)
btn4.addEventListener("click", boxes4)
btn5.addEventListener("click", boxes5)
btn6.addEventListener("click", boxes6)
btn7.addEventListener("click", boxes7)
btn8.addEventListener("click", boxes8)
btn9.addEventListener("click", boxes9)