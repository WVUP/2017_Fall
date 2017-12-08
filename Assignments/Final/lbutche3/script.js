

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

//Sets up the Game list across the middle pane
window.onload = GameList()

function GameList(){
    document.getElementById("gameContent").innerHTML = gameFirstRow();
    document.getElementById("gameRowsContainer").innerHTML += gameSecondRow().outerHTML;
}

//document.getElementById("gameContent").innerHTML = gameFirstRow();


function makeGameSquare(imageSource, name, viewerCount){

    var game = "<div class='col-2'> <img class='gamePicture' src='" + imageSource + "'><h5 class='gameHeader'>"+ name +"</h5><h6 class='gameViewCount'><i class='fa fa-user' aria-hidden='true'></i> "+ viewerCount +"</h6></div>"
    return game;
}

function gameFirstRow(){
    //Im ashamed of all of this
    var game1 = makeGameSquare("SuperMarioOdyssey.jpg", "Super Mario Odyssey", "100000");
    var game2 = makeGameSquare("XenobladeChronicles.jpg", "I'm Really Feeling It", "420");
    var game3 = makeGameSquare("EarthBound.jpg", "EarthBound", "4000");
    var game4 = makeGameSquare("SuperSmashBrosMelee.jpg", "Super Smash Bros Melee", "500");
    var game5 = makeGameSquare("The Legend of Zelda_ A Link to the Past.jpg", "Link to the Past", "4532");
    var game6 = makeGameSquare("HearthStone.jpg","HearthStone","8621");
    

    game1 += game2;
    game1 += game3;
    game1 += game4;
    game1 += game5;
    game1 += game6;
    
    
    
    return game1;
}

/**
 * Returns the second preBuilt rows of games
 */
function gameSecondRow(){
    var game7 = makeGameSquare("Siege.jpg","R6 Siege","2");
    var game8 = makeGameSquare("PUBG.jpg","PBUG","534892");
    var game9 = makeGameSquare("trash.jpg","League Of Legends","0");
    var game10 = makeGameSquare("LANoire.jpg","L.A. Noire","5642");
    var game11 = makeGameSquare("DarkSouls3.jpg","Dark Souls 3","7856");
    var game12 = makeGameSquare("Uno.jpg","Uno","765");
    var row2 = document.createElement("div");
    row2.className = "row";
    row2.id = "secondGameRow";

    game7 += game8;
    game7 += game9;
    game7 += game10;
    game7 += game11;
    game7 += game12;
    
    row2.innerHTML = game7;

    return row2;
}


/**
 * Expands the rightPane to show the recommended section
 */
function expandRecommended(){
    var rightPane = document.getElementById("rightPane");
    var middlePane = document.getElementById("middlePane");
    var expandRowClickOn = document.getElementById("expandRow");

    middlePane.style.width = '72%';
    rightPane.style.width = '15%';

    expandRowClickOn.setAttribute("onClick", "shrinkRecommended()");

    changeCarot(true);

    //Build out the spot for the Channels and makes the Streamer channels
    var channels = createRecommendedChannelsHeader();
    var recommendStreamer = makeRecommendedChannel('Brownman.jpeg', 'Brownman', 'Bee movie: The Game');
    var secondStreamer = makeRecommendedChannel('TerryCrews.png', 'TerryCrews', 'Rocket League');
    var thirdtStreamer = makeRecommendedChannel('GDQ.png', 'GamesDoneQuick','WindWaker');
    var fourthStreamer = makeRecommendedChannel('ScruffMcgee.png','ScruffMcgee','Smite');

    //Append all the channels to its container
    channels.appendChild(recommendStreamer);
    channels.appendChild(secondStreamer);
    channels.appendChild(thirdtStreamer);
    channels.appendChild(fourthStreamer);

    //Build out recommneded friends here

    //Add the channel container to the rightPane
    rightPane.appendChild(channels);
}

/**
 * Shrinks the rightPane section back down to just carets
 */
function shrinkRecommended(){
    var rightPane = document.getElementById("rightPane");
    var middlePane = document.getElementById("middlePane");
    var expandRowClickOn = document.getElementById("expandRow");

    middlePane.style.width = '84%';
    rightPane.style.width = '3%';

    expandRowClickOn.setAttribute("onClick", "expandRecommended()");

    changeCarot(false);

    var removeChannels = document.getElementById('recommendedChannels');
    rightPane.removeChild(removeChannels);
}

/**
 * pointRight means that it will switch the carot into looking right
 * specified by true, false will point it to the left
 * I've been spelling carot wrong. fontAwesome spells it 'caret'
 */
function changeCarot(pointRight){
    var carot1 = document.getElementById("firstCarot");
    var carot2 = document.getElementById("secondCarot");
    var carot3 = document.getElementById("thirdCarot");


    if(pointRight){
        carot1.className = 'fa fa-caret-right';
        carot2.className = 'fa fa-caret-right';
        carot3.className = 'fa fa-caret-right';
    }
    else{
        carot1.className = 'fa fa-caret-left';
        carot2.className = 'fa fa-caret-left';
        carot3.className = 'fa fa-caret-left';
    }
}

function createRecommendedChannelsHeader(){
    var div = document.createElement('div');
    var channel = document.createElement('div');
    var details = document.createElement('h5');

    div.className = 'row';
    div.setAttribute("id","recommendedChannels");

    channel.className = 'col-12';

    var node = document.createTextNode('Recommended Channels');
    details.className = 'channelHeading';

    details.appendChild(node);

    channel.appendChild(details);

    div.appendChild(channel);

    return div;
}

/**
 * Sets up a column container the image, name, and game of a current streamer
 * 
 * @param {*} imagePath 
 * @param {*} Name 
 * @param {*} game 
 */
function makeRecommendedChannel(imagePath, Name, game){

    var container = document.createElement('div');
    var profileImg = document.createElement('img');
    var profileName = document.createElement('h6');
    var gameName = document.createElement('small');

    //Create gameName
    var gameTxt = document.createTextNode(game);
    gameName.appendChild(gameTxt);
    //Game Name done

    //Create profileName
    var profileTxt = document.createTextNode(Name);
    profileName.appendChild(profileTxt)

    //Profile Image
    profileImg.src = imagePath;
    profileImg.className = 'channelImg';

    //Set up container and append all
    container.className = 'col-12 channelContainer';
    container.appendChild(profileImg);
    container.appendChild(profileName);
    container.appendChild(gameName);

    return container;
}

/**
 * Build out the UserProfile's details when the user clicks on the bar
 */
function addUserDetails(){
    var barDiv = document.getElementById('barContent');
    var parent = document.getElementById('topOfUserFollowers');
    var theBar = document.getElementById('theBar');

    //Create Followed Channels and header
    var followHeader = createFollowedChannelsHeader();
    var followedChannel = makeFollowedChannel('witwix.png', 'witwix', 'Odyssesy');
    var secondChannel = makeFollowedChannel('bethesda.jpeg','Bethasda','Fallout 4 disappointment');
    var thirdChannel = makeFollowedChannel('twitchPresents.jpeg','Twitch Presents','Yu-Gi-Oh');
    var fourthChannel = makeFollowedChannel('twitchPlaysPokemon.png','Twitch Plays Pokemon','Pokemon Red');

    //Append all the channels to header
    followHeader.appendChild(followedChannel);
    followHeader.appendChild(secondChannel);
    followHeader.appendChild(thirdChannel);
    followHeader.appendChild(fourthChannel);

    //Create Friends Header and Friends
    var friendHeader = createFriendsHeader();
    var firstFriend = createFriendDiv('ScruffMcgee.png','ScruffMcgee','Twitch');
    var secondFriend = createFriendDiv('amaz.png','Amaz','Hearthstone');
    var thirdFriend = createFriendDiv('cryaotic.png','Cryaotic','Hand of Fate 2');


    //Append friend to followChannel
    followHeader.appendChild(friendHeader);
    followHeader.appendChild(firstFriend);
    followHeader.appendChild(secondFriend);
    followHeader.appendChild(thirdFriend);

    parent.insertBefore(followHeader, barDiv);

    theBar.setAttribute('onClick', 'removeUserDetails()');

}

function removeUserDetails(){
    var profileContent = document.getElementById('topOfUserFollowers');
    var userInformation = document.getElementById('followedChannels');
    var theBar = document.getElementById('theBar');

    profileContent.removeChild(userInformation);

    theBar.setAttribute('onClick', 'addUserDetails()');
}

function createFollowedChannel(imagePath){

}

function createFollowedChannelsHeader(){
    var div = document.createElement('div');
    var details = document.createElement('h5');

    div.className = 'col-12';
    div.setAttribute("id","followedChannels");


    var node = document.createTextNode('Followed Channels');
    details.className = 'channelHeading';

    details.appendChild(node);


    div.appendChild(details);

    return div;
}


function makeFollowedChannel(imagePath, Name, game){
    
        var container = document.createElement('div');
        var profileImg = document.createElement('img');
        var profileName = document.createElement('h6');
        var gameName = document.createElement('small');
    
        //Create gameName
        var gameTxt = document.createTextNode(game);
        gameName.appendChild(gameTxt);
        //Game Name done
    
        //Create profileName
        var profileTxt = document.createTextNode(Name);
        profileName.appendChild(profileTxt)
    
        //Profile Image
        profileImg.src = imagePath;
        profileImg.className = 'followedChannelImage';
    
        //Set up container and append all
        container.className = 'col-12 channelContainer';
        container.appendChild(profileImg);
        container.appendChild(profileName);
        container.appendChild(gameName);
    
        return container;
}

/**
 * Creates the friends header
 */
function createFriendsHeader(){
    var div = document.createElement('div');
    var details = document.createElement('h5');

    div.className = 'col-12';
    div.setAttribute("id","friendHeader");


    var node = document.createTextNode('Friends');
    details.className = 'channelHeading';

    details.appendChild(node);


    div.appendChild(details);

    return div;
}

function createFriendDiv(imagePath, friendName, game){

    var container = document.createElement('div');
    var profileImg = document.createElement('img');
    var profileName = document.createElement('h6');
    var gameName = document.createElement('small');

    //Create gameName
    var gameTxt = document.createTextNode(game);
    gameName.appendChild(gameTxt);
    //Game Name done

    //Create profileName
    var profileTxt = document.createTextNode(friendName);
    profileName.appendChild(profileTxt)

    //Profile Image
    profileImg.src = imagePath;
    profileImg.className = 'friendImage';

    //Set up container and append all
    container.className = 'col-12 channelContainer';
    container.appendChild(profileImg);
    container.appendChild(profileName);
    container.appendChild(gameName);

    return container;
}
