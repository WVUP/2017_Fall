
var loc = getFilename();
setNav( loc );
document.getElementById("nav-home").innerHTML = loc;

function getFilename()
{
	var loc = window.location.href;
	loc = /[A-Za-z0-9]*.html/.exec(loc);
	return /[A-Za-z0-9]*[^.html]/.exec(loc).toString();

}
function setNav( loc )
{
	switch( loc )
	{
		case "index":
			
			document.getElementById("nav-home").style.color = "white";
			break;
		case 'pricing':
			break;

	}
}
// document.getElementById("cap").innerHTML = loc;