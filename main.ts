input.onButtonPressed(Button.A, function () {
    if (etape == 0) {
        etape = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (etape == 1) {
            etape = 2
            basic.showLeds(`
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                `)
            basic.clearScreen()
            basic.pause(500)
        } else {
            if (etape == 2) {
                etape = 0
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(500)
                basic.clearScreen()
            } else {
                if (etape == 3) {
                    etape = 4
                    basic.showLeds(`
                        # # # # .
                        # # # # .
                        # # # # .
                        # # # # .
                        # # # # .
                        `)
                    basic.pause(500)
                    basic.clearScreen()
                } else {
                    if (etape == 4) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                        etape = 0
                        basic.pause(500)
                        basic.clearScreen()
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (etape == 0) {
        etape = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (etape == 1) {
            etape = 0
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(500)
            basic.clearScreen()
        } else {
            if (etape == 2) {
                etape = 3
                basic.showLeds(`
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
                basic.clearScreen()
                basic.pause(500)
            } else {
                if (etape == 3) {
                    etape = 0
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                    basic.pause(500)
                    basic.clearScreen()
                } else {
                    if (etape == 4) {
                        etape = 0
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . # . .
                            . # . # .
                            # . . . #
                            `)
                        basic.pause(500)
                        basic.clearScreen()
                    }
                }
            }
        }
    }
})
let etape = 0
etape = 0
