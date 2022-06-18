let currentScoreHome = document.querySelector('#current-score-home')
let currentScoreGuest = document.querySelector('#current-score-guest')

let countHome = 0
let countGuest = 0


function increment1Home () {
    countHome += 1
    currentScoreHome.innerHTML = countHome
}

function increment2Home () {
    countHome += 2
    currentScoreHome.textContent = countHome
}

function increment3Home () {
    countHome += 3
    currentScoreHome.textContent = countHome
}

function increment1Guest () {
    countGuest += 1
    currentScoreGuest.textContent = countGuest
}

function increment2Guest () {
    countGuest += 2
    currentScoreGuest.textContent = countGuest
}

function increment3Guest () {
    countGuest += 3
    currentScoreGuest.textContent = countGuest
}


function resetBtn() {
    currentScoreHome.textContent = 0
    currentScoreGuest.textContent = 0
    countGuest = 0
    countHome = 0
}