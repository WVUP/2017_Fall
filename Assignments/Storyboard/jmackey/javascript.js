
var text;
var semester;
var html = '';


function addClass() {
    "use strict";




    var CRN = {};
    
    CRN[5415] = { course: "CS101", title: "Intro to PC Applications", credits: 4, startDate: "01-08-2018", endDate: "05-04-2018", days: "T, Th", time: "1:00 PM - 2:15 PM", instructor: "Gary Thompson"};
    CRN[5424] = { course: "CS121", title: "Intro to Programming", credits: 4, startDate: "01-08-2018", endDate: "05-04-2018", days: "M, W ", time: "11:00 AM - 12:45 PM", instructor: "Charles Almond"};
    CRN[5405] = { course: "CS122", title: "Object Oriented Programming", credits: 4, startDate: "01-08-2018", endDate: "05-04-2018", days: "M, T, W, Th", time: "9:30 AM - 10:20 AM", instructor: "Gary Thompson"};
    CRN[5427] = { course: "CS220", title: "Web Application Development", credits: 3, startDate: "01-08-2018", endDate: "05-04-2018", days: "T, Th", time: "11:00 AM - 12:15 PM", instructor: "Charles Almond"};
    CRN[5536] = { course: "CS260", title: "Computer Science Capstone", credits: 3, startDate: "01-08-2018", endDate: "05-04-2018", days: "T, Th", time: "1:00 PM - 2:15 PM", instructor: "Charles Almond"};
    
    
 
     var table = document.getElementById("table");
     
     var row= document.createElement("tr");
     console.log(row);
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");    
     var td4 = document.createElement("td");
     var td5 = document.createElement("td");
     var td6 = document.createElement("td");
     var td7 = document.createElement("td");
 




     td1.innerhtml = document.getElementById("CRN").value;

     td1.innerHTML =  document.getElementById("course").value;
     
     td2.innerHTML =  document.getElementById("title").value;
     
     td3.innerHTML =  document.getElementById("credits").value;
     td4.innerHTML =  document.getElementById("startDate").value;
     td5.innerHTML =  document.getElementById("endDate").value;
     td6.innerHTML =  document.getElementById("days").value;
     td7.innerHTML =  document.getElementById("time").value;
     td7.innerHTML =  document.getElementById("instructor").value;
 
     row.appendChild(td0);
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);
     row.appendChild(td5);
     row.appendChild(td6);
     row.appendChild(td7);
      
     table.children[0].appendChild(row);
   

    
 };