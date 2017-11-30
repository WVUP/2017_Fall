/*

*/

var userNames = {};

var passwords = {};

var currentMode;
function log(id)
{
    var input = document.getElementById(id);
    console.log(input.value);
}


function validateUser(userID,pinID, errorPlaceID)
{
	var username = document.getElementById(userID).value;
	var password = document.getElementById(pinID).value;
	if(username == "default" && password == "changeme123")
	{
		window.location.href = "mainMenu.html";
	}
	else
	{
        var exists = false;
        for(var i = 0; i < userNames.length ; i++)
        {
            if(username == userNames[i] && password == passwords[i])
            {
                exists = true;
            }
        }
        alert('Invalid username or password');
	}
}

function changeText(currentID,newID,confirmID,FieldName)
{
    var currentField = document.getElementById(currentID);
    var newField =  document.getElementById(newID);
    var confirmField = document.getElementById(confirmID);
    currentField.placeholder = "Please enter current " + FieldName;
    newField.placeholder = "Please enter new " + FieldName;
    confirmField.placeholder = "Confirm new " + FieldName;
}

function updateBannerText(elementID)
{
	var bannerTextSpot = document.getElementById(elementID);
	var d = new Date();
	//https://www.w3schools.com/js/js_dates.asp
	
	var Christmas = new Date("December 25, 2017 6:13:00");
	var daysTillChristmas = Christmas.getDate() - d.getDate();
	var monthsTillChristmas = Christmas.getMonth() - d.getMonth();
	if(monthsTillChristmas == 0)
	{
		bannerTextSpot.textContent = "Only " +  daysTillChristmas + " days till Christmas.";
	}
	else
	{
        if(daysTillChristmas != Math.abs(daysTillChristmas))
        {
            var today = new Date();
            var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
            daysTillChristmas = daysTillChristmas + lastDayOfMonth.getDate();
            bannerTextSpot.textContent = "Only " +  daysTillChristmas + " days till Christmas."; 
        }
        else
        {
          	bannerTextSpot.textContent = "Only " + monthsTillChristmas + " months and "  +  daysTillChristmas + " days till Christmas.";  
        }
	
	}
}
//updateRows('credit','billing','minimum','maximum','date')
function updateRows(creditID,billingID,minimumID,maximumID,dateID)
{
    var d = new Date();
    var dateSpot = document.getElementById(dateID);
    dateSpot.textContent = d.toUTCString()
}
/*
function updateRows(CRNIDRow1, CRNIDRow2,creditID,billingID,minimumID,maximumID,dateID)
{
    var CRNCode1 = document.getElementById(CRNIDRow1).value();
    var CRNCode2 = document.getElementById(CRNIDRow2).value();
    if(CRNCode1 )
    var d = new Date();
    var dateSpot = document.getElementById(dateID);
    dateSpot.textContent = d.toUTCString()
}




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
/*
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
*/
function removeCourse(rowToRemove,tableID)
{
    var row = document.getElementById(rowToRemove);
    var theTable = document.getElementById(tableID); 
    visible[row] = false;
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

//https://stackoverflow.com/questions/7707074/creating-dynamic-button-with-click-event-in-javascript

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
            html += "<td> " + semester[i] + "</td>";
            html += "<td> " + "<input type = 'button' onclick = 'removeCourse(" +  + i + ",'table')' value = 'Remove:'/></tr>"
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
            html += "<td> " + semester[i] + "</td>";
            html += "<td> " + "<input type = 'button' onclick = 'removeCourse(" +  + i +  + ",'table')' value = 'Remove:'/></tr>"
        }
    }
    html += "</tbody>";
    console.log(html);
    theTable.innerHTML = html;
    html = "";
}


