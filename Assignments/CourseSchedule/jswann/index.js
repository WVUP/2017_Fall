function logger( element )
{
	element += ": " + get( element ).value;
	log( element );
}
function get( input )
{
	return document.getElementsByName( input )[0];
}
function log( input )
{
	console.log( input );
}
function clickSubmit()
{
	title = getQueryString( 'courseTitle' );
	crnString = getQueryString('crn');
	instructorString = getQueryString( 'instructor' );
	this.item = new Course( title, crnString, instructorString );
}
function readData( input )
{
	get( input ).value = getQueryString( input );
	log( getQueryString(input));
}
function Course( courseTitle, crn, instructor)
{
	this.title = courseTitle;
	this.crn = crn;
	this.instructor = instructor;
	this.customAlert();
}
Course.prototype =
{
	customAlert: function()
	{
		logger( 'courseTitle' );
		logger( 'crn' );
		logger( 'instructor' );
		alert( this.title + ' is taught by ' + this.instructor );
	}
	
}

function getQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}