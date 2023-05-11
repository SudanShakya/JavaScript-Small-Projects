
let cards = [] //initialization of array

let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el") // querySelector is more dynamic and we have to be more specific while using it.

let cardsEl = document.getElementById("cards-el")

//creating object is juse like creating array but we use curly brackets instead ani separate them with (:) <- this symbol
//methods: functions they are attached to the object
let player = {
    name: "Sudan",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips //to retrieve key from the object we use object_name.Key_name

//we initialized it in function startGame because we want to show the cards only after the player plays the game
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard +secondCard
    isAlive = true
    renderGame()
}

//creating function for choosing random cards
function getRandomCard() {
    //Math.random() generates a random number from 0 to 1 (excluding 1)
    // Math.floor() gives the floor value i.e. 3.88 = 3
    // Math.ceil() gives the ceiling value i.e. 3.88 = 4
    let randomNumber = Math.ceil(Math.random()*13)
    if (randomNumber > 10)  {
        return 11
    } else if (randomNumber === 1){
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    
    //creating a for loop to render out all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21) {
        message = "You've won the Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "Oops! You've lost the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function drawNewCard() {
    //creating logical AND operator because the player should be able to draw a new card iff the player is alive and doesnot have a blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}


