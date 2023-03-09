
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

var result = []; 
var count = [];

console.log(count)

function boxes(){
const boxNumber= ["box1", "box2", "box3", "box4"];
 const classItem = ["box1", "box2", "box3", "box4"]   
 for(let i = 0; i < 1;i++){
    count.push(1)
    const randomBox = Math.floor(Math.random() * 4)
    const random = Math.floor(Math.random() * 4)
    let num = classItem[random];
    let nim = boxNumber[randomBox]
    console.log(nim, num)
    if(nim === num){
        btn1.style.backgroundColor = "blue";
        result.push(10)
        alert("Win")
      }else{
        btn1.style.backgroundColor = "gold";
      }
   
 }

 btn1.disabled = true;
 const final = result.reduce((acc, curr)=> acc + curr, 0);
 show.innerHTML = `Score: ${final}`                             
    }
    function boxes2(){
        count.push(1)
        const boxNumber= ["box1", "box2", "box3", "box4"];
         const classItem = ["box1", "box2", "box3", "box4"]   
         for(let i = 0; i < 1;i++){
            count.push(1)
            const randomBox = Math.floor(Math.random() * 4)
            const random = Math.floor(Math.random() * 4)
            let num = classItem[random];
            let nim = boxNumber[randomBox]
            console.log(nim, num)
            if(nim === num){
                btn2.style.backgroundColor = "blue";
                result.push(10)
                alert("Win")
              }else{
                btn2.style.backgroundColor = "gold";
              }
           
         }
     
         btn2.disabled = true;
         const final = result.reduce((acc, curr)=> acc + curr, 0);
         show.innerHTML = `Score: ${final}`                             
            }

            function boxes3(){
                count.push(1)
                const boxNumber= ["box1", "box2", "box3", "box4"];
                 const classItem = ["box1", "box2", "box3", "box4"]   
                 for(let i = 0; i < 1;i++){
                    count.push(1)
                    const randomBox = Math.floor(Math.random() * 4)
                    const random = Math.floor(Math.random() * 4)
                    let num = classItem[random];
                    let nim = boxNumber[randomBox]
                    console.log(nim, num)
                    if(nim === num){
                        btn3.style.backgroundColor = "blue";
                        result.push(10)
                        alert("Win")
                      }else{
                        btn3.style.backgroundColor = "gold";
                      }
                   
                 }
                
                 btn3.disabled = true;
                 const final = result.reduce((acc, curr)=> acc + curr, 0);
                 show.innerHTML = `Score: ${final}`                             
                    }
                    function boxes4(){
                        count.push(1)
                        const boxNumber= ["box1", "box2", "box3", "box4"];
                         const classItem = ["box1", "box2", "box3", "box4"]   
                         for(let i = 0; i < 1;i++){
                            count.push(1)
                            const randomBox = Math.floor(Math.random() * 4)
                            const random = Math.floor(Math.random() * 4)
                            let num = classItem[random];
                            let nim = boxNumber[randomBox]
                            console.log(nim, num)
                            if(nim === num){
                                btn4.style.backgroundColor = "blue";
                                result.push(10)
                                alert("Win")
                              }else{
                                btn4.style.backgroundColor = "gold";
                              }
                           
                         }
                       
                         btn4.disabled = true;
                         const final = result.reduce((acc, curr)=> acc + curr, 0);
                         show.innerHTML = `Score: ${final}`                             
                            }

 
                            function boxes5(){
                                count.push(1)
                                const boxNumber= ["box1", "box2", "box3", "box4"];
                                 const classItem = ["box1", "box2", "box3", "box4"]   
                                 for(let i = 0; i < 1;i++){
                                    count.push(1)
                                    const randomBox = Math.floor(Math.random() * 4)
                                    const random = Math.floor(Math.random() * 4)
                                    let num = classItem[random];
                                    let nim = boxNumber[randomBox]
                                    console.log(nim, num)
                                    if(nim === num){
                                        btn5.style.backgroundColor = "blue";
                                        result.push(10)
                                        alert("Win")
                                      }else{
                                        btn5.style.backgroundColor = "gold";
                                      }
                                   
                                 }
                                
                                 btn5.disabled = true;
                                 const final = result.reduce((acc, curr)=> acc + curr, 0);
                                 show.innerHTML = `Score: ${final}`                             
                                    }
                                    function boxes6(){
                                        count.push(1)
                                        const boxNumber= ["box1", "box2", "box3", "box4"];
                                         const classItem = ["box1", "box2", "box3", "box4"]   
                                         for(let i = 0; i < 1;i++){
                                            count.push(1)
                                            const randomBox = Math.floor(Math.random() * 4)
                                            const random = Math.floor(Math.random() * 4)
                                            let num = classItem[random];
                                            let nim = boxNumber[randomBox]
                                            console.log(nim, num)
                                            if(nim === num){
                                                btn6.style.backgroundColor = "blue";
                                                result.push(10)
                                                alert("Win")
                                              }else{
                                                btn6.style.backgroundColor = "gold";
                                              }
                                           
                                         }
                                       
                                         btn6.disabled = true;
                                         const final = result.reduce((acc, curr)=> acc + curr, 0);
                                         show.innerHTML = `Score: ${final}`                             
                                            }

                                            function boxes7(){
                                                count.push(1)
                                                const boxNumber= ["box1", "box2", "box3", "box4"];
                                                 const classItem = ["box1", "box2", "box3", "box4"]   
                                                 for(let i = 0; i < 1;i++){
                                                    count.push(1)
                                                    const randomBox = Math.floor(Math.random() * 4)
                                                    const random = Math.floor(Math.random() * 4)
                                                    let num = classItem[random];
                                                    let nim = boxNumber[randomBox]
                                                    console.log(nim, num)
                                                    if(nim === num){
                                                        btn7.style.backgroundColor = "blue";
                                                        result.push(10)
                                                        alert("Win")
                                                      }else{
                                                        btn7.style.backgroundColor = "gold";
                                                      }
                                                   
                                                 }
                                                 
                                                 btn7.disabled = true;
                                                 const final = result.reduce((acc, curr)=> acc + curr, 0);
                                                 show.innerHTML = `Score: ${final}`                             
                                                    }

                                                    function boxes8(){
                                                      
                                                        const boxNumber= ["box1", "box2", "box3", "box4"];
                                                         const classItem = ["box1", "box2", "box3", "box4"]   
                                                         for(let i = 0; i < 1;i++){
                                                            count.push(1)
                                                            const randomBox = Math.floor(Math.random() * 4)
                                                            const random = Math.floor(Math.random() * 4)
                                                            let num = classItem[random];
                                                            let nim = boxNumber[randomBox]
                                                            console.log(nim, num)
                                                            if(nim === num){
                                                                btn8.style.backgroundColor = "blue";
                                                                result.push(10)
                                                                alert("Win")
                                                              }else{
                                                                btn8.style.backgroundColor = "gold";
                                                              }
                                                           
                                                         }
                                                         
                                                         btn8.disabled = true;
                                                         const final = result.reduce((acc, curr)=> acc + curr, 0);
                                                         show.innerHTML = `Score: ${final}`                             
                                                            }
                                                            function boxes9(){
                                                                
                                                                const boxNumber= ["box1", "box2", "box3", "box4"];
                                                                 const classItem = ["box1", "box2", "box3", "box4"]   
                                                                 for(let i = 0; i < 1;i++){
                                                                    count.push(1)
                                                                    const randomBox = Math.floor(Math.random() * 4)
                                                                    const random = Math.floor(Math.random() * 4)
                                                                    let num = classItem[random];
                                                                    let nim = boxNumber[randomBox]
                                                                    console.log(nim, num)
                                                                    if(nim === num){
                                                                        btn9.style.backgroundColor = "blue";
                                                                        result.push(10)
                                                                        alert("Win")
                                                                      }else{
                                                                        btn9.style.backgroundColor = "gold";
                                                                      }
                                                                   
                                                                 }
                                                                
                                                                 btn9.disabled = true;
                                                                 const final = result.reduce((acc, curr)=> acc + curr, 0);
                                                                 show.innerHTML = `Score: ${final}`                             
     
                                                            }


btn1.addEventListener("click", boxes)
btn2.addEventListener("click", boxes2)
btn3.addEventListener("click", boxes3)
btn4.addEventListener("click", boxes4)
btn5.addEventListener("click", boxes5)
btn6.addEventListener("click", boxes6)
btn7.addEventListener("click", boxes7)
btn8.addEventListener("click", boxes8)
btn9.addEventListener("click", boxes9)