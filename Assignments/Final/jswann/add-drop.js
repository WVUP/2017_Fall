var schedule = {
   course1: new course,
   course2: new course,
   course3: new course,
   course4: new course

}

var course = {
    coursename: "unassigned"
}

function course(){
    this.course = course;
}

function submit(){
   schedule.course1 = document.getElementById("course1").value;
   schedule.course2 = document.getElementById("course2").value;
   schedule.course3 = document.getElementById("course3").value;
   schedule.course4 = document.getElementById("course4").value;
   showAll();
   resetTextInputs();
}
function resetTextInputs()
{
  if( schedule.course1 != "" )
  {
    document.getElementById("course"+1).value = schedule.course1;  
  }
  else
  {
    document.getElementById("course"+(1)).value = "";
  }
  if( schedule.course2 != "" )
  {
    document.getElementById("course"+2).value = schedule.course2;  
  }
  else
  {
    document.getElementById("course"+2).value = "";
  }
  if( schedule.course3 != "" )
  {
    document.getElementById("course"+3).value = schedule.course3;  
  }
  else
  {
    document.getElementById("course"+(3)).value = "";
  }
  if( schedule.course4 != "" )
  {
    document.getElementById("course"+4).value = schedule.course4;  
  }
  else
  {
    document.getElementById("course"+(4)).value = "";
  }
}
function showAll(){
    
    document.getElementsByClassName("registered")[0].getElementsByTagName("span")[0].innerHTML = schedule.course1;
    document.getElementsByClassName("registered")[1].getElementsByTagName("span")[0].innerHTML = schedule.course2;
    document.getElementsByClassName("registered")[2].getElementsByTagName("span")[0].innerHTML = schedule.course3;
    document.getElementsByClassName("registered")[3].getElementsByTagName("span")[0].innerHTML = schedule.course4;
    console.log( schedule.course1+" | "+schedule.course2 + " | " + schedule.course3+" | "+schedule.course4 );
    
}
function getDropValue( i )
{
  return document.getElementsByName("Action")[i].value == "drop";
}
function resetDrop()
{
  for( var i=0; i < 4; i++)
  {
    document.getElementsByName("Action")[i].value = "";
  }
}
function drop()
{
  if( getDropValue(0) )
  {
    schedule.course1 = "";
  }
  if( getDropValue(1) )
  {
    schedule.course2 = "";
  }
  if( getDropValue(2) )
  {
    schedule.course3 = "";
  }
  if( getDropValue(3) )
  {
    schedule.course4 = "";
  }
  showAll();
  resetDrop();
  resetTextInputs();
}