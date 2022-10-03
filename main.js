const btnChanger = document.querySelector('#btn')
const colorText = document.querySelector('.color')
let randomColor = '#000'

const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

btnChanger.onclick = function() {
    let hexColor = getRandomColor()
    colorText.innerText = hexColor
    document.body.style.backgroundColor = hexColor
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

function getRandomColor() {
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    return hexColor
}

