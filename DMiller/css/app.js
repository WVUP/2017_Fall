function onLoad()
{
    alert("Page is loading");
}

function checkNumber()
{
    var theNumber, theMessage;
    theNumber = document.getElementById("smallnumber").value;

        if(isNaN(theNumber) || theNumber < 1 || theNumber > 100)
        {
            theMessage = "Number was expected to be between 1 and 100";
        }
        else
        {
            theMessage = "Number is Good";

        }
        document.getElementById("numberMessage").innerHTML = theMessage;
}