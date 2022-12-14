let contUser = 0;
let contPc = 0;

const imgUser = document.getElementById("user")
const imgPc = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

const audioWin = new Audio("sounds/winning.wav")
const audioLoser = new Audio("sounds/losing.wav")

var player1 = ""
var player2 = ""

playing.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='images/" + player1 + ".png'>"
    imgPc.innerHTML = ""
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPc.innerHTML = "<img src='images/" + player2 + ".png'>"
    analize()
}

function analize() {

    playing.disabled = true

    let win = '0'

    if (player1 == player2) {

    } else if (player1 == "rock") {

        win = player2 == "scissor" ? 1 : -1

    } else if (player1 == "paper") {

        win = player2 == "rock" ? 1 : -1

    } else if (player1 == 'scissor') {

        win = player2 == 'paper' ? 1 : -1
    }

    if (win == 0) {

    } else if (win > 0) {
        contUser = contUser + 1
        audioWin.play()
    } else {
        contPc = contPc + 1
        audioLoser.play()
    }

    if (contUser >= 5) {
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (contPc >= 5) {
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    contador.innerHTML = contUser + ":" + contPc

    setTimeout(() => {
        playing.disabled = false
        clear();
    }, 2000)

}

function clear() {
    imgPc.innerHTML = "";
    imgUser.innerHTML = "";
}

function newGame() {
    contador.innerHTML = "0:0"
    contPc = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
} 
