

function buildGameList(){
    var game = document.createElement("img");
    game.src.concat = "SuperMarioOdyssey.jpg";
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
        var d = document.getElementById("gameContent");
        d.innerHTML = game;
    }
}

window.onload = testFunction();

//document.addEventListener("load", testFunction, true);



