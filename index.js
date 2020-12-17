
 /*let listColab = document.querySelector("button");
 console.log(listColab);
 listColab.addEventListener("click", () =>{
     let listCollab = document.querySelectorAll("input[name='listCollab']")
     console.log(listCollab[1].value);
     for(i = 0; i< )
 })*/

 let listColab = document.querySelector("button");
console.log(listColab);
listColab.addEventListener("click", () =>{
    localStorage.setItem("registration", document.querySelector("#registrationNumber").value);
    localStorage.setItem("contract", document.querySelector("#contrat").value);
    localStorage.setItem("fstName", document.querySelector("#firstName").value);
    localStorage.setItem("lstName", document.querySelector("#lastName").value);
    localStorage.setItem("qualif", document.querySelector("#qualification").value);
    
    const stuffList = localStorage.getItem('stuff') ? localStorage.getItem('stuff') : []

   
    console.log(
 document.querySelector("#registration").innerHTML= localStorage.getItem("registration"));




 document.querySelector("#registration").innerHTML= localStorage.getItem("registration");
   document.querySelector("#contract").innerHTML= localStorage.getItem("contract");
   document.querySelector("#fstName").innerHTML= localStorage.getItem("fstName");
   document.querySelector("#lstName").innerHTML= localStorage.getItem("lstName");
   document.querySelector("#qualif").innerHTML= localStorage.getItem("qualif");

   
})
