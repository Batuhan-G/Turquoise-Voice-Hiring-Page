var waitingList = [
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw:false,
        player1:
            [
                "Lynn Tanner",
                "Roderick Flich",
            ],
        player2:
            [
                "Sledge Hammer",
                "Willie Tanner",
            ],
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw:false,
        player1:
            [
                "Angus MacGyver",
                "Hannibal Smith",
            ],
        player2:
            [
                "Michael Knight",
                "Fred Decker",
            ],
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw:true,
        player1:
            [
                "Thomas Magnum",
                "Roderic Decker",
            ],
        player2:
            [
                "Tony Danza",
                "Batuhan Gören",
            ],
        time: "21"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw:false,
        player1:
            [
                "Cristian Tanner",
                "B.A. Baracus",
            ],
        player2:
            [
                "Capt. Trunk",
                "Dori Doreau",
            ],
        time: "26"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw:true,
        player1:
            [
                "Lyna Tanner",
                "Roderic Flich",
            ],
        player2:
            [
                "Sledge Hammer",
                "Willie Tanner",
            ],
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw:true,
        player1:
            [
                "Angus MacGyver",
                "Hannibal Smith",
            ],
        player2:
            [
                "Michael Knight",
                "Fred Decker",
            ],
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw:true,
        player1:
            [
                "Thomas Magnum",
                "Roderick Decker",
            ],
        player2:
            [
                "Tony Danza",
                "Batuhan Gören",
            ],
        time: "21"
    },
    {
        type: "./icons/TennisRacket.png",
        rating: "./icons/Handshake.png",
        draw:true,
        player1:
            [
                "Cristina Tanner",
            ],
        player2:
            [
                "Capt. Trunk"
            ],
        time: "26"
    },
]

var resizeList = []
var executed = false       //it is check when the mobile screen size is turned on

function updateSize() {
    if (window.innerWidth <= 550) {
        resizeList = waitingList.slice(0, 4)

        if(executed){           
            refresh()
        }
    }
    else {
        resizeList = waitingList
    }
    if (resizeList.length >= 5) {        
        document.getElementById('expandText').innerHTML = ""
        document.getElementById('expandArrow').innerHTML = ""
    }
   
}



updateSize();
window.addEventListener("resize", updateSize);

buildTable(resizeList)
buildCard(waitingList)
buildMobileCard(waitingList)

function buildTable(data) {
    var table = document.getElementById('waitingList')
    var row =``
    for (var i = 0; i < data.length; i++) {

        if(data[i].draw){       // Check if it is draw then put handshake image on the rating value
            row = `
            <tr>
                <td class="web"><img src="${data[i].type}"/></td>
                <td class="web"><img src="${data[i].rating}"/></td>
                <td >${data[i].player1.join('<br/><br/>')}</td>
                <td >${data[i].player2.join('<br/><br/>')}</td>
                <td> <span class="bolder">${data[i].time}<span/><span class="soft"> mins<span/> <img class="trash" src="./icons/Trash.png"/></td>
            </tr>    
            `
        }
        else{                   // Otherwise put rating value
            row = `
            <tr>
                <td class="web"><img src="${data[i].type}"/></td>
                <td class="web"><span class="bolder">${data[i].rating}<span/></td>
                <td >${data[i].player1.join('<br/><br/>')}</td>
                <td >${data[i].player2.join('<br/><br/>')}</td>
                <td><span class="bolder">${data[i].time}<span/><span class="soft"> mins<span/> <img class="trash" src="./icons/Trash.png"/></td>
            </tr>    
            `
        }
        
        table.innerHTML += row
    }
}


function expandTable() {
    var expandedlist = waitingList.slice(4, 8)

    buildTable(expandedlist)
    document.getElementById('expandText').innerHTML = ""
    document.getElementById('expandArrow').innerHTML = ""
    document.getElementById('expandArrow').classList.remove('arrowDown');

}

function refresh() {
    window.location.reload()
}

function buildCard(data) {
    var cards = document.getElementById('cards')
    for (var i = 0; i < data.length; i++) {
        var card = `
        <div class="courtsCard">     
                <div class="cardContent">  
                <div className="nameGroup1">
                        Roderick D. <br/>
                        Devon M.                 
                </div>
                <div className="timeButton">
                    <span>12 min.</span> 
                </div>
                <div className="nameGroup2">
                        Rick W. <br/>
                        Dori D.
                </div>
                </div>
        </div>
        `
        cards.innerHTML += card
    }
}

function buildMobileCard(data) {

    executed=true       // Which is activated mobile screen mode

    var cards = document.getElementById('mobileCourtsGroup')
    var deactiveCards = 2
    var activeCards = data.length - deactiveCards

    for (var i = 0; i < activeCards; i++) {
        var card = `
        <div class="mobileCard">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
            <div class="item5"></div>
            <div class="item6"></div>
        </div>
        `
        cards.innerHTML += card
    }

    for (var i = 0; i < deactiveCards; i++) {
        var card = `
        <div class="mobileCard deactiveMobileCard">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
            <div class="item5"></div>
            <div class="item6"></div>
        </div>
        `
        cards.innerHTML += card
    }
    
}