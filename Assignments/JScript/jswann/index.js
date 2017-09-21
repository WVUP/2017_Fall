function logger( element )
{
	var prefix = ": ";

	switch( get( element ).type )
	{
		case "radio":
			element += prefix + get( element ).checked;
			break;
		default:
			element += prefix + get( element ).value;
			break;
	}
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