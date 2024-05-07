selectEmoji('white_square')
clearCanvas(10)

selectEmoji('green_square')

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        drawEmoji(i, i)
    }
}
