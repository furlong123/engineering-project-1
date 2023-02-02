input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        led.stopAnimation()
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        basic.pause(1000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    }
})
