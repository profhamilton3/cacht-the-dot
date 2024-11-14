input.onButtonPressed(Button.A, function () {
    catcherSprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    catcherSprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    catcherSprite.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    catcherSprite.change(LedSpriteProperty.Y, -1)
})
let catcherSprite: game.LedSprite = null
let runnerSprite = game.createSprite(2, 2)
catcherSprite = game.createSprite(4, 4)
runnerSprite.ifOnEdgeBounce()
let randoAngle = 45
game.startCountdown(100000)
basic.forever(function () {
    runnerSprite.move(1)
    basic.pause(250)
    runnerSprite.turn(Direction.Right, randoAngle)
    randoAngle = randint(20, 270)
    if (runnerSprite.isTouching(catcherSprite)) {
        game.addScore(1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
