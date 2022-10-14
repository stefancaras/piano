const piano = document.querySelector("#piano")
const array = [0];

for (let i = 1; i < 8; i++) {
    array[i] = new Audio(`./sounds/a${i}.mp3`)
}

const playSound = (e) => {
    if (e.target.id === "a1") {
        array[1].play();
        array[1] = new Audio(`./sounds/a1.mp3`)
    } else if (e.target.id === "a2") {
        array[2].play();
        array[2] = new Audio(`./sounds/a2.mp3`)
    } else if (e.target.id === "a3") {
        array[3].play();
        array[3] = new Audio(`./sounds/a3.mp3`)
    } else if (e.target.id === "a4") {
        array[4].play();
        array[4] = new Audio(`./sounds/a4.mp3`)
    } else if (e.target.id === "a5") {
        array[5].play();
        array[5] = new Audio(`./sounds/a5.mp3`)
    } else if (e.target.id === "a6") {
        array[6].play();
        array[6] = new Audio(`./sounds/a6.mp3`)
    } else if (e.target.id === "a7") {
        array[7].play();
        array[7] = new Audio(`./sounds/a7.mp3`)
    }
}
piano.addEventListener("click", playSound)