
var text;
var semester;
var html = '';
 var CRN = {};
 var course = ' ';
 var title = ' ';
 var credits = ' ';
 var startDate = ' ';
 var endDate = ' ';
 var days = ' ';
 var time = ' ';
 var instructor = ' '; 

function addClass(CRN, course, title, credits, startDate, endDate, days, time, instructor) {


  var html = '';

  CRN = [

   {crnNumber: '5415',   course: 'CS101', title: 'Intro to PC Applications', credits: '4', startDate: '01-08-2018', endDate: '05-04-2018', days: 'T, Th', time: '1:00 PM - 2:15 PM', instructor: 'Gary Thompson'},
   
  {crnNumber: '5424', course: 'CS121', title: 'Intro to Programming', credits: 4, startDate: '01-08-2018', endDate: '05-04-2018', days: 'M, W ', time: '11:00 AM - 12:45 PM', instructor: 'Charles Almond'},
  { crnNumber: '5405', course: 'CS122', title: 'Object Oriented Programming', credits: 4, startDate: '01-08-2018', endDate: '05-04-2018', days: 'M, T, W, Th', time: '9:30 AM - 10:20 AM', instructor: 'Gary Thompson'},
   { crnNumber: '5427', course: 'CS220', title: 'Web Application Development', credits: 3, startDate: '01-08-2018', endDate: '05-04-2018', days: 'T, Th', time: '11:00 AM - 12:15 PM', instructor: 'Charles Almond'},
    { crnNumber: '5536', course: 'CS260', title: 'Computer Science Capstone', credits: 3, startDate: '01-08-2018', endDate: '05-04-2018', days: 'T, Th', time: '1:00 PM - 2:15 PM', instructor: 'Charles Almond'}
    
  ]





   html += "<tbody>";
    html+=" <tr>" 
  +" <th>   CRN  </th>"
  + "<th>   Course   </th>"
  +" <th>   Title  </th>"
  +"<th> Credits</th>"
   +"<th>Start Date</th>"
  +" <th>End Date</th>"
  +" <th>Days</th>"
  +" <th>Time</th>"
   +"<th>Instructor</th>"
  +" <th>Action</th>"
+"</tr>";

   html += "<tr>";
   html += "<td> 5415 </td>";
   html += "<td> CS101 </td>"
   html += "<td>Intro to PC Applications </td>";
   html += "<td>4</td>";
   html += "<td>01-08-2018</td>";
   html += "<td>05-04-2018</td>";
   html += "<td>T, Th</td>";
   html += "<td>1:00 PM - 2:15 PM</td>";
   html += "<td>Gary Thompson</td>";
   html +="<td><select name ='drop'> "
   +"<option value='1'>******</option>"
   +"<option value='2'>DROP</option> "
   +"<option value='3'>Repeat Course</option> </td>";
   html += "</tr>";



   html += "<tr>";
   html += "<td> 5424 </td>";
   html += "<td> CS121 </td>"
   html += "<td>Intro to Programming </td>";
   html += "<td>4</td>";
   html += "<td>01-08-2018</td>";
   html += "<td>05-04-2018</td>";
   html += "<td>M, W</td>";
   html += "<td>11:00 AM - 12:45 PM</td>";
   html += "<td>Charles Almond</td>";
   html +="<td><select name ='drop'> "
   +"<option value='1'>******</option>"
   +"<option value='2'>DROP</option> "
   +"<option value='3'>Repeat Course</option> </td>";
   html += "</tr>";


   html += "<tr>";
   html += "<td> 5405 </td>";
   html += "<td> CS122 </td>"
   html += "<td>Object Oriented Programing</td>";
   html += "<td>4</td>";
   html += "<td>01-08-2018</td>";
   html += "<td>05-04-2018</td>";
   html += "<td>M, T, W, Th</td>";
   html += "<td>9:30 PM - 10:20 AM</td>";
   html += "<td>Gary Thompson</td>";
   html +="<td><select name ='drop'> "
   +"<option value='1'>******</option>"
   +"<option value='2'>DROP</option> "
   +"<option value='3'>Repeat Course</option> </td>";
   html += "</tr>";




  
   html += "<tr>";
   html += "<td> 5424 </td>";
   html += "<td> C220 </td>"
   html += "<td>Web Application Development</td>";
   html += "<td>3</td>";
   html += "<td>01-08-2018</td>";
   html += "<td>05-04-2018</td>";
   html += "<td>M, W</td>";
   html += "<td>11:00 AM - 12:15 PM</td>";
   html += "<td>Charles Almond</td>";
   html +="<td><select name ='drop'> "
   +"<option value='1'>******</option>"
   +"<option value='2'>DROP</option> "
   +"<option value='3'>Repeat Course</option> </td>";
   html += "</tr>";


   
   html += "<tr>";
   html += "<td> 5424 </td>";
   html += "<td> C260 </td>"
   html += "<td>Computer Science Capstone</td>";
   html += "<td>3</td>";
   html += "<td>01-08-2018</td>";
   html += "<td>05-04-2018</td>";
   html += "<td>T, tH</td>";
   html += "<td>1:00 PM - 2:15 PM</td>";
   html += "<td>Charles Almond</td>";
   html +="<td><select name ='drop'> "
   +"<option value='1'>******</option>"
   +"<option value='2'>DROP</option> "
   +"<option value='3'>Repeat Course</option> </td>";
   html += "</tr>";




   html += "</tbody>";

   
   document.getElementById('table').innerHTML = html;
  
}