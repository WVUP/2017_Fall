

function buildGameList(){
    var game = document.createElement("img");
    game.src = "SuperMarioOdyssey.jpg";
    // SuperMarioOdyssey.jpg
    return game;
}



function testFunction(){
    var game = buildGameList();
    if(game == null)
    {
        return;
    }
    else
    {
        document.getElementById("gameContent").innerHTML = game.outerHTML;
        return;  
    }
}

// window.onload = testFunction();

//document.addEventListener("load", testFunction, true);

window.onload = buildGameList;

document.getElementById("gameContent").innerHTML = gameFirstRow();


function makeGameSquare(imageSource, name, viewerCount){

    var game = "<div class='col-2'> <img class='gamePicture' src='" + imageSource + "'><h5 class='gameHeader'>"+ name +"</h5><h6 class='gameViewCount'><i class='fa fa-user' aria-hidden='true'></i> "+ viewerCount +"</h6></div>"
    return game;
}

function gameFirstRow(){
    var game1 = makeGameSquare("SuperMarioOdyssey.jpg", "Super Mario Odyssey", "100000");
    var game2 = makeGameSquare("XenobladeChronicles.jpg", "I'm Really Feeling It", "420");
    var game3 = makeGameSquare("EarthBound.jpg", "EarthBound", "4000");
    var game4 = makeGameSquare("SuperSmashBrosMelee.jpg", "Super Smash Bros Melee", "500");
    var game5 = makeGameSquare("The Legend of Zelda_ A Link to the Past.jpg", "Link to the Past", "4532");

    game1 += game2;
    game1 += game3;
    game1 += game4;
    game1 += game5;
    
    
    return game1;
}



function expandRecommended(){
    var rightPane = document.getElementById("rightPane");
    var middlePane = document.getElementById("middlePane");
    var expandRowClickOn = document.getElementById("expandRow");

    middlePane.style.width = '72%';
    rightPane.style.width = '15%';

    expandRowClickOn.setAttribute("onClick", "shrinkRecommended()");
}

function shrinkRecommended(){
    var rightPane = document.getElementById("rightPane");
    var middlePane = document.getElementById("middlePane");
    var expandRowClickOn = document.getElementById("expandRow");
    
    middlePane.style.width = '84%';
    rightPane.style.width = '3%';

    expandRowClickOn.setAttribute("onClick", "expandRecommended()");
}
