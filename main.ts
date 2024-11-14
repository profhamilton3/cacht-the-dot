let runnerSprite = game.createSprite(2, 2)
runnerSprite.ifOnEdgeBounce()
basic.forever(function () {
    runnerSprite.move(1)
    runnerSprite.turn(Direction.Right, 45)
})
