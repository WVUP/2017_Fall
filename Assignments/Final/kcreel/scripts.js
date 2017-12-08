function dropdown() {
    var bars = document.getElementById("purpleRain");
    bars.style.visibility = 'hidden';
    var dropdown = document.getElementById("hidden");
    dropdown.style.visibility = 'visible';
}
function rightSide() {
    var sideBar = document.getElementsByClassName("rightpane")[0];
    sideBar.style.width = '250px';
    var arrow1 = document.getElementsByClassName("arrow")[0];
    var arrow2 = document.getElementsByClassName("arrow")[1];
    var arrow3 = document.getElementsByClassName("arrow")[2];
    arrow1.style.display = "none";
    arrow2.style.display = "none";
    arrow3.style.display = "none";
    var hide = document.getElementsByClassName("rightHide")[0];
    hide.style.visibility = "visible";
    var arrow4 = document.getElementsByClassName("arrowHidden")[0];
    var arrow5 = document.getElementsByClassName("arrowHidden")[1];
    var arrow6 = document.getElementsByClassName("arrowHidden")[2];
    arrow4.style.display = "block";
    arrow5.style.display = "block";
    arrow6.style.display = "block";  
}
function undoDrop(){
    var bars = document.getElementById("purpleRain");
    bars.style.visibility = 'visible';
    var dropdown = document.getElementById("hidden");
    dropdown.style.visibility = 'hidden';
}
function undorightSide(){
    var sideBar = document.getElementsByClassName("rightpane")[0];
    sideBar.style.width = '45px';
    var arrow1 = document.getElementsByClassName("arrow")[0];
    var arrow2 = document.getElementsByClassName("arrow")[1];
    var arrow3 = document.getElementsByClassName("arrow")[2];
    arrow1.style.display = "block";
    arrow2.style.display = "block";
    arrow3.style.display = "block";
    var hide = document.getElementsByClassName("rightHide")[0];
    hide.style.visibility = "hidden";
    var arrow4 = document.getElementsByClassName("arrowHidden")[0];
    var arrow5 = document.getElementsByClassName("arrowHidden")[1];
    var arrow6 = document.getElementsByClassName("arrowHidden")[2];
    arrow4.style.display = "none";
    arrow5.style.display = "none";
    arrow6.style.display = "none";
}
function search() {
    document.getElementById('search').onkeydown = function(event) {
        if (event.keyCode == 13) {
            alert('You pressed ENTER');
            var search = document.getElementById("search");
            var table = document.getElementById("table");
            var tr = table.getElementsByTagName("tr");
            var filter = search.value;

            for(var i = 0; i < tr.length; i++){
                for(var j = 0; j < tr.length; j++){
                    td = tr[i].getElementsByTagName("td")[j].getElementsByClassName("game")[0];
                    if(td) {
                        if(td.innerHTML.indexOf(filter) > -1) {
                            tr[i].style.display = "block";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        }
    }
}
function search2() {
    var arr = [
        {
            gameName:"Call of Duty: WWII",
            imageURL:"COD.jpg",
            views:"10000"
        },
        {
            gameName:"Dota 2",
            imageURL:"DOT.jpg",
            views:"10000"
        },
        {
            gameName:"Fortnite",
            imageURL:"FN.jpg",
            views:"10000"
        },
        {
            gameName:"Hearthstone",
            imageURL:"HS.jpg",
            views:"10000"
        },
        {
            gameName:"IRL",
            imageURL:"IRL.jpg",
            views:"10000"
        },
        {
            gameName:"League of Legends",
            imageURL:"LOL.jpg",
            views:"10000"
        },
        {
            gameName:"Overwatch",
            imageURL:"OVW.jpg",
            views:"10000"
        },
        {
            gameName:"Minecraft",
            imageURL:"MC.jpg",
            views:"10000"
        },
        {
            gameName:"Runescape",
            imageURL:"RS.jpg",
            views:"10000"
        },
        {
            gameName:"Player Unknown's Battlegrounds",
            imageURL:"PUBG.jpg",
            views:"10000"
        },
        {
            gameName:"World of Warcraft",
            imageURL:"WOW.jpg",
            views:"10000"
        },
        {
            gameName:"Counter Strike: GO",
            imageURL:"CS.jpg",
            views:"10000"
        }
    ]

}