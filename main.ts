input.onPinPressed(TouchPin.P0, function () {
    mesure_en_cours = 1
    basic.clearScreen()
    t0 = input.runningTime()
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    t1 = input.runningTime()
    basic.showIcon(IconNames.Yes)
    duree = t1 - t0
    duree_en_seconde = duree / 1000
    vitesse = 3.6 * (distance / duree_en_seconde)
    // 3,6 << coefficient m/s > hm/h
    for (let index = 0; index < 2; index++) {
        basic.showNumber(vitesse)
    }
    mesure_en_cours = 0
})
let vitesse = 0
let duree_en_seconde = 0
let duree = 0
let t1 = 0
let t0 = 0
let mesure_en_cours = 0
let distance = 0
distance = 1
mesure_en_cours = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (mesure_en_cours != 1) {
        basic.showIcon(IconNames.Happy)
    }
})
