input.onButtonPressed(Button.A, function () {
    chiffre = 1
})
input.onButtonPressed(Button.B, function () {
    chiffre = 2
})
let chiffre = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles(
"t",
"s"
)
chiffre = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (chiffre == 1) {
        datalogger.deleteLog()
        basic.showIcon(IconNames.Yes)
        while (chiffre == 1) {
            datalogger.log(
            datalogger.createCV("t", input.temperature()),
            datalogger.createCV("s", input.soundLevel())
            )
            led.toggle(0, 0)
            basic.pause(500)
        }
    } else if (chiffre == 2) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(500)
        control.reset()
    }
})
