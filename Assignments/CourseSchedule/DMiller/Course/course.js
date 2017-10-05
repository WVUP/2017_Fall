var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
function createTable() 
{
    // Create table.
    var table = document.createElement('table');
    // Insert New Row for table at index '0'.
    var row1 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row1col1 = row1.insertCell(0);
    row1col1.innerHTML = 'CRN';
    // Insert New Column for Row1 at index '1'.
    var row1col2 = row1.insertCell(1);
    row1col2.innerHTML = 'Subject';
    // Insert New Column for Row1 at index '2'.
    var row1col3 = row1.insertCell(2);
    row1col3.innerHTML = 'CRS';
    var row1col4 = row1.insertCell(3);
    rowcol4.innerHTML = 'Title';
    var row1col5 = row1.insertCell(4);
    row1col6.innerHTML = 'CR';
    var row1col7 = row1.insertCell(5);
    row1col7.innerHTML = 'Days';
    var row1col8 = row1.insertCell(6);
    row1col8.innerHTML = 'Time';
    var row1col9 = row1.insertCell(7);
    row1col9.innerHTML = 'Instructor';
    var row1col10 = row1.insertCell(8);
    row1col10.innerHTML = 'Room';
    var row1col11 = row1.insertCell(9);
    row1col11.innerHTML = 'Start Date';
    var row1col12 = row1.insertCell(10);
    row1col12.innerHTML = 'Seats Available';
    var row1col13 = row1.insertCell(11);
    row1col13.innerHTML = 'Length of Term';
    // Append Table into div.
    var div = document.getElementById('divTable');
    div.appendChild(table);
}

function checkNumber()
{
    var theNumber, theMessage;
    theNumber = document.getElementById("smallnumber").value;

        if(isNaN(theNumber) || theNumber < 0 || theNumber > 9)
        {
            theMessage = "Number was expected to be between 0 and 9";
        }
        else
        {
            theMessage = "Number is Good";

        }
        document.getElementById("numberMessage").innerHTML = theMessage;
}