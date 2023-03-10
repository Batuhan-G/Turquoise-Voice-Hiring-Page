var waitingList = [
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw: false,
        player1: "Lynn Tanner",
        player2: "Roderick Flich",
        player3: "Sledge Hammer",
        player4: "Willie Tanner",
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw: false,
        player1: "Angus MacGyver",
        player2: "Hannibal Smith",
        player3: "Michael Knight",
        player4: "Fred Decker",
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw: true,
        player1: "Thomas Magnum",
        player2: "Roderic Decker",
        player3: "Tony Danza",
        player4: "Batuhan Gören",
        time: "21"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: 3.5,
        draw: false,
        player1:   "Cristian Tanner",
        player2:  "B.A. Baracus",
        player3:  "Capt. Trunk",
        player4:  "Dori Doreau",
        time: "26"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw: true,
        player1: "Lynn Tanner",
        player2: "Roderick Flich",
        player3: "Sledge Hammer",
        player4: "Willie Tanner",
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw: true,
        player1: "Angus MacGyver",
        player2: "Hannibal Smith",
        player3: "Michael Knight",
        player4: "Fred Decker",
        time: "19"
    },
    {
        type: "./icons/TennisRackets.png",
        rating: "./icons/Handshake.png",
        draw: true,
        player1: "Thomas Magnum",
        player2: "Roderic Decker",
        player3: "Tony Danza",
        player4: "Batuhan Gören",
        time: "21"
    },
    {
        type: "./icons/TennisRacket.png",
        rating: "./icons/Handshake.png",
        draw: true,
        player1: "Cristian Tanner",
        player2: "",
        player3: "Capt. Trunk",
        player4: "",
        time: "26"
    },
]

var resizeList = []
var executed = false       //it is check when the mobile screen size is turned on

function updateSize() {
    if (window.innerWidth <= 550) {
        resizeList = waitingList.slice(0, 4)

        if (executed) {
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
    var row = ``
    for (var i = 0; i < data.length; i++) {
        if (data[i].draw) {       // Check if it is draw then put handshake image on the rating value
            row = `
            <tr>
                <td class="web"><img src="${data[i].type}"/></td>
                <td class="web"><img src="${data[i].rating}"/></td>
                <td >${data[i].player1}<br/><br/> ${data[i].player2}</td>
                <td >${data[i].player3}<br/><br/><span class="selectedItem">${data[i].player4}</span></td>
                <td><span class="bolder">${data[i].time}<span/><span class="soft"> mins<span/><img class="trash" src="./icons/Trash.png"/></td>
            </tr>    
            `
        }
        else {                   // Otherwise put rating value
            row = `
            <tr>
                <td class="web"><img src="${data[i].type}"/></td>
                <td class="web"><span class="bolder">${data[i].rating}<span/></td>
                <td >${data[i].player1}<br/><br/> ${data[i].player2}</td>
                <td >${data[i].player3}<br/><br/><span class="selectedItem">${data[i].player4}</span></td>
                <td><span class="bolder">${data[i].time}<span/><span class="soft"> mins<span/><img class="trash" src="./icons/Trash.png"/></td>
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
        <div className="border">
            <div class="courtsCard">     
                    
                    <div className="nameGroup1">
                            Roderick D.<br/>
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

    executed = true       // Which is activated mobile screen mode

    var cards = document.getElementById('mobileCourtsGroup')
    var deactiveCards = 2
    var activeCards = data.length - deactiveCards

    for (var i = 0; i < activeCards; i++) {
        var card = `
        <div class="mobileCard">
            <img src="./icons/BackgroundMobile.png" alt="" />
        </div>
        `
        cards.innerHTML += card
    }

    for (var i = 0; i < deactiveCards; i++) {
        var card = `
        <div class="mobileCard deactiveMobileCard">
            <img src="./icons/BackgroundBlur.png" alt="" />
        </div>
        `
        cards.innerHTML += card
    }

}

//SelectedItem Color Process
document.querySelectorAll('.selectedItem').forEach(selectedItem => {

    let item = selectedItem.textContent.indexOf("Batuhan Gören")
    if (item !== -1) {
        selectedItem.classList.add('red')
    }
})
