
var text;
var semester;
var html = '';


var person = prompt("Welcome advisor/professor Please enter your name.", "Jennifer");
if (person != null) {
    
    alert("Hello " + person + "! Welcome to the registration database!");
}



function addClass() {
    "use strict";
 
     var table = document.getElementById("table");
     
     var row= document.createElement("tr");
     console.log(row);
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");    
     var td4 = document.createElement("td");
     var td5 = document.createElement("td");
 
     td1.innerHTML = document.getElementById("class").value;
     td2.innerHTML  = document.getElementById("professor").value;
     td3.innerHTML  = document.getElementById("days").value;
     td4.innerHTML = document.getElementById("times").value;
     td5.innerHTML = document.getElementById("section").value;
 
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);
     row.appendChild(td5);
 
     table.children[0].appendChild(row);

    
 };