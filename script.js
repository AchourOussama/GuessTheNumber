function game() {
    const x = parseInt(Math.random() * 10, 10)
    console.log(x)
    alert("welcome to the game ! ")
    let level = Number(prompt("number of attempts :"))
    let tentative = level
    while (tentative > 0) {
        let n = prompt("number: ")

        if (n == x) {
            alert("Bingo !")
            confirm("Do you want to play again ?") ? game(level) : alert("good bye !")
            break
        } else {
            alert("wrong !")
            tentative--

        }

    }
    if (tentative == 0) {
        alert("game over !")
        confirm("Do you want to play again ?") ? game(level) : alert("good bye !")

    }


}

game()