
var courseName = [];
var teacherLastName = [];
var courseNum = [];
var semester = [];
var visible = [true];
var amountStored = 0; 
var html = "";
var oldTableHeader = "";
/*
* Overloaded version to do it all in one go. 
*/
function addCourse(courseNameFormID,teacherLastNameFormID,courseNumFormID,semesterFormID,tableID, tableHeadID)
{
    courseName[amountStored] = document.getElementById(courseNameFormID).value;
    teacherLastName[amountStored] = document.getElementById(teacherLastNameFormID).value;
    courseNum[amountStored] = document.getElementById(courseNumFormID).value;
    semester[amountStored] = document.getElementById(semesterFormID).value;
    amountStored++;
    createTables(tableID,tableHeadID);
}
function showOnlyOneCourse(rowToRestoreID,tableID)
{
    var rowToRestore = document.getElementById(rowToRestoreID).value;
    var theTable = document.getElementById(tableID); 
    for(var i = 0; i < amountStored; i++)
    {
        visible[i] = false;
    }
    visible[rowToRestore] = true;
    updateTables(tableID);
}
function restoreCourse(rowToRestoreID,tableID)
{
    var rowToRestore = document.getElementById(rowToRestoreID).value;
    var theTable = document.getElementById(tableID); 
    visible[rowToRestore] = true;
    updateTables(tableID);
}
function removeCourse(rowToRemoveID,tableID)
{
    var rowToRemove = document.getElementById(rowToRemoveID).value;
    var theTable = document.getElementById(tableID); 
    visible[rowToRemove] = false;
    //courseName[rowToRemove] = "";
    //teacherLastName[rowToRemove] = "";
    //courseNum[rowToRemove] = "";
    //semester[rowToRemove] = "";
    updateTables(tableID);
}
/*
* Overloaded version to do it all in one go. 
*/
function updateCourse(rowToUpdateID,valueToUpdateID,newValueID,tableID)
{
    var rowToUpdate = document.getElementById(rowToUpdateID).value;
    var valueToUpdate = document.getElementById(valueToUpdateID).value;
    var newValue = document.getElementById(newValueID).value;
    var theTable = document.getElementById(tableID); 
    if(valueToUpdate == "courseName")
    {
        courseName[rowToUpdate] = newValue;
    }
    else if(valueToUpdate == "teacherLastName")
    {
        teacherLastName[rowToUpdate] = newValue;
    }
    else if(valueToUpdate == "courseNum")
    {
        courseNum[rowToUpdate] = newValue;
    }
    else if(valueToUpdate == "semester")
    {
        semester[rowToUpdate] = newValue;
    }
    updateTables(tableID);
}

function createTables(tableID, tableHeadID)
{
   var head = document.getElementById(tableHeadID);
    var theTable = document.getElementById(tableID); 
    if(amountStored == 1)
    {
     html += "<thead>" + head.innerHTML + "</thead>";
     oldTableHeader = "<thead>" + head.innerHTML + "</thead>";
    }
    else
    {
        html += oldTableHeader;
    }
    
    html += "<tbody>";
    for(var i = 0; i < amountStored; i++)
    {
        if(!(visible[i] == false))
        {
            html += "<tr> <td> " + courseName[i] + "</td>";
            html += "<td> " + teacherLastName[i] + "</td>";
            html += "<td> " + courseNum[i] + "</td>";
            html += "<td> " + semester[i] + "</td> </tr>";
        }
    }
    html += "</tbody>";
    theTable.innerHTML = html;
    html = "";
}
function updateTables(tableID, tableHeadID)
{
    var theTable = document.getElementById(tableID); 
    html += oldTableHeader;
    html += "<tbody>";
    for(var i = 0; i < amountStored; i++)
    {
        if(!(visible[i] == false))
        {
            html += "<tr> <td> " + courseName[i] + "</td>";
            html += "<td> " + teacherLastName[i] + "</td>";
            html += "<td> " + courseNum[i] + "</td>";
            html += "<td> " + semester[i] + "</td> </tr>";
        }
    }
    html += "</tbody>";
    console.log(html);
    theTable.innerHTML = html;
    html = "";
}


            /*
            var arr = ['blue', 'green', 'red', 'lime'];
    
            var html = '';
    
            for (var index = 0; index < arr.length; index++) 
            {
                var semester = arr[index];
    
                html += '<p> This semester is: <span style="semester:' + semester + '">' + semester + '</span></p>';
            }
    
    
            setTimeout( () => {
                document.getElementById('test').innerHTML = html;
            }, 500);
    
    

            var frag = document.createDocumentFragment();
    
            for (var i = 0; i < arr.length; i++) {
                var semester = arr[i];
                
                var p = document.createElement('p');
                p.innerHTML = 'This semester is: '
                
                var mySpan = document.createElement('span')
                mySpan.style.semester = semester;
                mySpan.innerHTML = semester;
    
                p.appendChild(mySpan);
    
                frag.appendChild(p);
    
            }
    
            setTimeout(() => {
                document.getElementById('frag_test').appendChild(frag);
            }, 500)
    
    
            var myself = {
                firstName: 'Aaron',
                lastName: 'Freeland'
            }
    
            function Course(courseName, teacherLastName){
                this.firstName = courseName;
                this.lastName = teacherLastName;
                this.el = document.getElementById('user');
            }
    
            Course.prototype = {
                
                customAlert: function(){
                    alert(this.firstName + ' ' + this.lastName);
                },
                
                showLastName: function(){
                    console.log('your teacher last name: ' + this.lastName);
                },
    
                customMescourseNum: function(callback){
                    if(callback){
                        //TODO: Get data from server
                        setTimeout(() => {
                            callback(this.firstName, this.lastName);
                        }, 2000);
                        
                    }
                }
                /*
                show: function(){
                    this.el.innerHTML = '<b>' + this.firstName + ' ' + this.lastName  + '</b>'
                }
              
    
            }
      */
            // Course.prototype.customAlert = function(){
            //     alert(this.firstName + ' ' + this.lastName);
            // }
            
    
            // Course.prototype.showLastName = function(){
            //     console.log('your teacher last name: ' + this.lastName);
            // }
    
    
    