radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
        otherHand = receivedNumber
        mayReceive = false
        while (hand == 0) {
            basic.pause(500)
        }
        basic.pause(500)
        if (hand == otherHand) {
            basic.showString("Draw")
        } else if (hand == 1 && otherHand == 2) {
            basic.showString("Lost")
        } else if (hand == 2 && otherHand == 3) {
            basic.showString("Lost")
        } else if (hand == 3 && otherHand == 1) {
            basic.showString("Lost")
        } else {
            basic.showString("Won")
            winCount += 1
        }
    }
})
input.onButtonPressed(Button.A, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Heart)
    winCount = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(winCount)
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    radio.sendNumber(hand)
})
let winCount = 0
let hand = 0
let otherHand = 0
let mayReceive = false
basic.showIcon(IconNames.Heart)
radio.setGroup(88)
mayReceive = true
