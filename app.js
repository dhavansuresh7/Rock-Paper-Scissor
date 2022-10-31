const buttons = document.querySelectorAll("button")
const playerImg = document.querySelector(".player-img")
const pcImg = document.querySelector(".pc-img")


document.querySelector(".winner").style.display = "none"


// rockBtn.addEventListener('click', function () {
//     pcImgNum = Math.floor(Math.random()*3+1)
//     switch(pcImgNum){
//         case 1: pcImg.src="./img/rock.jpg";break;
//         case 2:pcImg.src="./img/paper.jpg";break;
//         case 3:pcImg.src="./img/scissor.jpg";break;
//     }
//     playerImg.src = `./img/rock.jpg`
// })

// paperBtn.addEventListener('click', function () {
//     playerImg.src = `./img/paper.jpg`
// })

// scissorBtn.addEventListener('click', function () {
//     playerImg.src = `./img/scissor.jpg`
// })

youScore = 0
pcScore = 0

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        pcImgNum = Math.floor(Math.random() * 3 + 1)
        switch (pcImgNum) {
            case 1: pcImg.src = "./img/rock.jpg"; pcImg.dataset.name = "rock"; break;
            case 2: pcImg.src = "./img/paper.jpg"; pcImg.dataset.name = "paper"; break;
            case 3: pcImg.src = "./img/scissor.jpg"; pcImg.dataset.name = "scissor"; break;
        }

        playerImg.src = "./img/" + button.dataset.name + ".jpg"

        if (button.dataset.name == "rock") {
            if (pcImg.dataset.name == "rock") {
                console.log("draw")
            }
            else if (pcImg.dataset.name == "paper") {
                pcScore++
                document.querySelector(".cmp-score").textContent = pcScore
            }
            else{
                youScore++
                document.querySelector(".your-score").textContent = youScore
            }
        }
        if(button.dataset.name == "paper"){
            if(pcImg.dataset.name == "rock"){
                youScore++
                document.querySelector(".your-score").textContent = youScore
            }
            else if(pcImg.dataset.name == "paper"){

            }
            else{
                pcScore++
                document.querySelector(".cmp-score").textContent = pcScore
            }
        }
        if(button.dataset.name == "scissor"){
            if(pcImg.dataset.name == "rock"){
                pcScore++
                document.querySelector(".cmp-score").textContent = pcScore
                
            }
            else if(pcImg.dataset.name == "paper"){
                youScore++
                document.querySelector(".your-score").textContent = youScore
            }
            else{

            }
        }

        if(youScore==10){
            document.querySelector(".winner").textContent = "YOU WIN"
            document.querySelector(".winner").style.display = "block"
        }
        else if(pcScore==10){
            document.querySelector(".winner").textContent = "YOU LOSE"
            document.querySelector(".winner").style.display = "block"
        }

    })
})


