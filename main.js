const send = document.getElementById("send");
const input = document.getElementById("inp");
const value = document.getElementById("textt");
const container = document.getElementById("container");

const big = document.querySelector(".bigTask");
const bot = document.querySelector(".task");
const form = document.querySelector("form");

// container.style.border = "3px solid red"

// the first way

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const addNewTask =` <div class="task">
  <i class='bx bx-star'></i>
  <p id="textt" class="line">${input.value}</p>
  <div class="par">
      <i class='bx bx-trash'></i>
      <!-- <i class='bx bx-angry' ></i> -->
      <i class='bx bxs-angry'></i>
  </div>
  </div>`

  input.value =""
  big.innerHTML += addNewTask;
});



///////////////////
/*send.addEventListener("click", (eo) => {
  eo.preventDefault();
  const addNewTask =` <div class="task">
  <i class='bx bx-star'></i>
  <p id="textt" class="line">${input.value}</p>
  <div class="par">
      <i class='bx bx-trash'></i>
      <!-- <i class='bx bx-angry' ></i> -->
      <i class='bx bxs-angry'></i>
  </div>
  </div>`

  input.value =""
  big.innerHTML += addNewTask;
});*/

// the second way

// form.addEventListener("submit", (eo) => {
//     eo.preventDefault();
//   const addNewTask = `<div class="task">
//   <i class='bx bx-star'></i>
//   <p>${input.value}</p>
//   <div class="par">
//       <i class='bx bx-trash'></i>
//       <!-- <i class='bx bx-angry' ></i> -->
//       <i class='bx bxs-angry'></i>
//   </div>

// </div>`;
//     big.innerHTML += addNewTask;

// });
const angry = document.querySelector(".bxs-angry");
// console.log(angry);

big.addEventListener("click", (eo) => {
  if (eo.target.className == "bx bx-trash") {
    eo.target.parentElement.parentElement.remove();
  } else if (
    eo.target.className === "bx bxs-angry" ||
      eo.target.className === "bx bx-angry")
  {
       // how to replace element or emojy with another one

    eo.target.classList.add("mb");
      const heart = `<i class='bx bxs-heart'></i>`;
      
    //   very very important
      /*=======================================
      ---- getElementsByClassName not getElementByClassName
      =======================================*/
        
          eo.target.parentElement.parentElement.getElementsByClassName("line")[0].classList.add("finish");
   //     eo.target.parentElement.parentElement.getElementByClassName("line")[0].classList.add("finish");
      

   
    eo.target.parentElement.innerHTML += heart;

    // how to remove and display another emojy at same place;
  }
  else if (eo.target.className === "bx bxs-heart")
  {
    eo.target.classList.add("mb");
    eo.target.parentElement.parentElement.getElementsByClassName("line")[0].classList.remove("finish");
    const angry = `<i class='bx bxs-angry'></i>`;
    eo.target.parentElement.innerHTML += angry;
  }
    
    
  else if (eo.target.className === "bx bx-star")
  {
    eo.target.classList.add("st");
    big.prepend(eo.target.parentElement);
  }

  else if (eo.target.className === "bx bx-star st")
  {
    eo.target.classList.remove("st");
    
    }
}); 

// big.addEventListener("click", (eo) => {

//     if (eo.target.className === "a-card")
//     {
//         nHide.style.display = "block";
//   eo.preventDefault();
//     k7yan.style.display = "none";
//     sC.style.display = "block";
//         }
// })
