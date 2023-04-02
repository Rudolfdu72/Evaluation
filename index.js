let monli = document.getElementById('monli');

console.log(monli)

// for(var i = 0; i<monli.length; i++){
//   monli[i].addEventListener('mouseover', (event)=>{
//     event.target.style.color ='red !important'
//   })
// }


monli.addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
});



