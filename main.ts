let secret = 0
let number = 0
input.onButtonPressed(Button.AB, function () {
    secret = randint(1, 50)
    if (secret == 1) {
        basic.showString("YOU LOSE")
    } else {
        number = randint(1, 15)
        if (number == 1) {
            basic.showString("BLANK")
        } else if (number == 2) {
            basic.showString("SWITCH WITH THE CLOSEST PLAYER TO THE egg")
        } else if (number == 3) {
            basic.showString("MOVE FORWARDS 2")
        } else if (number == 4) {
            basic.showString("BLANK")
        } else if (number == 5) {
            basic.showString("MAKE ANOTHER TILE")
        } else if (number == 6) {
            basic.showString("SAY THE ALPHBET BACKWARDS")
        } else if (number == 7) {
            basic.showString("MOVE FORWARD 1")
        } else if (number == 8) {
            basic.showString("SWITCH WITH THE FURTHEST PLAYER TO THE egg")
        } else if (number == 9) {
            basic.showString("MAKE ANOTHER TILE")
        } else {
            basic.showString("MOVE BACK 3")
        }
    }
})
