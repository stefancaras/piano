const piano = document.querySelector("#piano")
const array = [0];
const sounds = () => {
    for (let i = 1; i < 8; i++) {
        array[i] = new Audio(`./sounds/a${i}.wav`)
    }
}
sounds();

const playSound = (e) => {
    if (e.target.id === "a1") {
        array[1].play();
    } else if (e.target.id === "a2") {
        array[2].play();
    } else if (e.target.id === "a3") {
        array[3].play();
    } else if (e.target.id === "a4") {
        array[4].play();
    } else if (e.target.id === "a5") {
        array[5].play();
    } else if (e.target.id === "a6") {
        array[6].play();
    } else if (e.target.id === "a7") {
        array[7].play();
    }
    sounds();
}
piano.addEventListener("click", playSound)