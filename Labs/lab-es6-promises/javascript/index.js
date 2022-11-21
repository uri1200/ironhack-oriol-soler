// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
    getInstruction('mashedPotatoes', 2, (step3)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction('mashedPotatoes', 3, (step4)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 4, (step5)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  })
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  obtainInstruction('steak', 1).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 2).then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      obtainInstruction('steak', 3).then( (step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
        obtainInstruction('steak', 4).then( (step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          obtainInstruction('steak', 5).then( (step5) =>{
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
            obtainInstruction('steak', 6).then( (step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
              obtainInstruction('steak', 7).then( (step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                document.querySelector("#steak").innerHTML += `<li>Steak are ready!</li>`
                document.querySelector("#steakImg").removeAttribute("hidden");
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 3 using async/await
async function makeBroccoli() {
  const task0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${task0}</li>`
  const task1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${task1}</li>`
  const task2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${task2}</li>`
  const task3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${task3}</li>`
  const task4 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${task4}</li>`
  const task5 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${task5}</li>`
  const task6 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${task6}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli are ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrussels() {
  const task0 = obtainInstruction('brusselsSprouts', 0);
  const task1 = obtainInstruction('brusselsSprouts', 1);
  const task2 = obtainInstruction('brusselsSprouts', 2);
  const task3 = obtainInstruction('brusselsSprouts', 3);
  const task4 = obtainInstruction('brusselsSprouts', 4);
  const task5 = obtainInstruction('brusselsSprouts', 5);
  const task6 = obtainInstruction('brusselsSprouts', 6);
  const tarea7 = obtainInstruction('brusselsSprouts', 7);
  const [thread0, thread1, thread2, thread3, thread4, thread5, thread6, thread7] = await Promise.all([task0, task1, task2, task3, task4, task5, task6, tarea7]);
  
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread0}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread1}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread2}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread3}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread4}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread5}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread6}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${thread7}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}

makeBrussels();