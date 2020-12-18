
 /* let listColab = document.querySelector("button");
 console.log(listColab);
 listColab.addEventListener("click", () =>{
     let listCollab = document.querySelectorAll("input[name='listCollab']")
     console.log(listCollab[1].value);
     for(i = 0; i< )
 })
 * listColab.addEventListener("click", () =>{
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

   
})*/
/*
document.querySelector('#stuff').addEventListener("submit", (e) => {
    e.preventDefault = [];
    const stuffLo = localStorage.getItem('#stuffLi') ? localStorage.getItem('#stuffLi') : []
    console.log(stuffLo);

    const dataUser = [];
    const regNumber = document.querySelector("#registrationNumber").value;
    dataUser.push(regNumber);
    const contract = document.querySelector("#contrat").value;
    dataUser.push(contract);
    const firstName  = document.querySelector("#firstName").value;
    dataUser.push(firstName);
    const lasteName = document.querySelector("#lastName").value;
    dataUser.push(lasteName);
    const qualif = document.querySelector("#qualification").value;
    dataUser.push(qualif);
    console.log(regNumber);
    console.log(contract);
    console.log(firstName);
    console.log(lasteName);
    console.log(qualif);
    
    const tbody = document.querySelector('#bodyTable');
    const tr = document.createElement('tr');
   
    for (let i = 0; i < dataUser.length; i++){
        const td = document.createElement('td');
        td.innerHTML = dataUser[i];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}) */
const form1 = document.querySelector('#myForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const staff = localStorage.getItem('staff') ? localStorage.getItem('staff') : []
    const regNumber = document.querySelector("#registrationNumber").value;
    const contract = document.querySelector("#contrat").value;
    const fstName = document.querySelector("#firstName").value;
    const lstName = document.querySelector("#lastName").value;
    const qualif = document.querySelector("#qualification").value;
    const salar = document.querySelector("#salary").value;
    const hDate = document.querySelector("#hiringDate").value;
    const endCDate = document.querySelector("#endContratDate").value;
    
    const tbody = document.querySelector('#bodyTable');
    const tr = document.createElement('tr');
    staff.push ({
        regNumber,
        contract,
        fstName,
        lstName,
        qualif,
        salar,
        hDate,
        endCDate,
    })
    console.log(staff)
    const liststaff = [staff[0].regNumber,staff[0].contract,staff[0].fstName, staff[0].lstName, staff[0].qualif, staff[0].salar, staff[0].hDate, staff[0].endCDate];
    for (let i = 0; i < liststaff.length; i++){
        const td = document.createElement('td');
        td.innerHTML = liststaff[i];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
})
