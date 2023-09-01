let homeScoreBtnOne = document.getElementById("home-score-btn-1")

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0

let homeScoreEl = document.getElementById("home-score")

let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetBtn() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
}

