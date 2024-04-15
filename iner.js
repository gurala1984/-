
let section = document.querySelector("section");
let btn1 = document.querySelector(".btn");
let option = document.querySelector("option");
let about = document.querySelector(".about");
let about1 = document.querySelector(".about");
let card = document.querySelector(".card");

let name =""


let apiUrl = `https://freetestapi.com/api/v1/actors`
fetch(apiUrl)
.then(tip1=> tip1.json())
.then(tip1 => htm(tip1))


function htm(serch){
    section.innerHTML = "";
    serch.forEach(obj =>{
  
section.innerHTML += `
<div class="card"style="width: 18rem;">
<img src="${obj.image} " class="card-img-top" style="height: 380px; alt="...">
<div class="card-body"">
<h1 class="card-title"> </h1>
  <h3 class="card-title">${obj.name} </h3>
  <h4 class="card-title">birth year: ${obj.birth_year}</h4>
  <h4 class="card-title">nationality: ${obj.nationality}</h4>
  <h6 class="card-title"><b>awards: ${obj.awards}</b></h6>
  <p class="card-text" style="color: red">${obj.known_for} </p>
  <a href="#" class="btn btn-primary">ABOUT MY</a>
</div>
</div>`
})}
about1.addEventListener("click", function() {
  // ყველა სახელის გამოტანა
  section.innerHTML = "";
  fetch(apiUrl)
  .then(actore => actore.json())
  .then(actor => {
      actor.forEach(obj => {
          section.innerHTML += `<h6>${obj.name}</h5>`;
          
      });
  });
});





