const staffy = [
    {regNumber : 001,
    contract : "CDD",
    fstName : "dalila",
    lstName : "dah",
    qualif : "employee",
    salar : 1500,
    hDate : "20/12/2020",
     endCDate : "31/12/2021"
    },
    {regNumber : 002,
    contract : "CDI",
    fstName : "nico",
    lstName : "ben",
    qualif : "employee",
    salar : 1900,
     hDate : "20/12/2020",
     endCDate : ""
    },
    {regNumber : 003,
    contract : "CDI",
    fstName : "lola",
    lstName : "fish",
     qualif : "employee",
     salar : 1500,
     hDate : "01/01/2019",
    endCDate : ""
     }
]

const liststaffy = [staffy[0].regNumber,staffy[0].contract,staffy[0].fstName, staffy[0].lstName, staffy[0].qualif, staffy[0].salar, staffy[0].hDate, staffy[0].endCDate];
for(let j = 0; j<liststaffy.length; j++){
    const td = document.createElement('td');
    td.innerHTML = liststaffy[j];
   
}

const matchedStaff = staffy.find((stuff) => {
   return stuff
})
console.log(staffy)
const toJS = JSON.stringify(staffy);
console.log(toJS)
localStorage.setItem("stJS", toJS);


 
const form = document.querySelector('#listcollab').addEventListener('submit', (e)=>{
    e.preventDefault();


   


    const staff =JSON.parse(localStorage.getItem('stJS', toJS)) ?JSON.parse(localStorage.getItem('stJS', toJS)) : []
  console.log(staff)
    const regNumber = document.querySelector("#regNumber").value;
    const contract = document.querySelector("#contract").value;
    const fstName = document.querySelector("#fstName").value;
    const lstName = document.querySelector("#lstName").value;
    const qualif = document.querySelector("#qualif").value;
    const salar = document.querySelector("#salar").value;
    const hDate = document.querySelector("#hDate").value;
    const endCDate = document.querySelector("#endCDate").value;
    
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
