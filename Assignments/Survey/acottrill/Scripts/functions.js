/*
My first js function list
*/


function log(id)
{
    var input = document.getElementById(id);
    console.log(input.value);
}

function changeImage(imageID,teamID)
{
    var image = document.getElementById(imageID);
    var team = document.getElementById(teamID);
    if(team.value == "yellow")
    {
        image.src = "images/instinct.png";
    }
    else if(team.value == "red")
    {
        image.src = "images/valor.png";
    }
    else if(team.value == "blue")
    {
        image.src = "images/mystic.png";
    }
}
