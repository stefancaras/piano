const piano = document.querySelector("#piano")

const playSound = (e) => {
    if (e.target.id === "a1") {
        const audio = new Audio('./sounds/a1.wav');
        audio.play();
    } else if (e.target.id === "a2") {
        const audio = new Audio('./sounds/a2.wav');
        audio.play();
    } else if (e.target.id === "a3") {
        const audio = new Audio('./sounds/a3.wav');
        audio.play();
    } else if (e.target.id === "a4") {
        const audio = new Audio('./sounds/a4.wav');
        audio.play();
    } else if (e.target.id === "a5") {
        const audio = new Audio('./sounds/a5.wav');
        audio.play();
    } else if (e.target.id === "a6") {
        const audio = new Audio('./sounds/a6.wav');
        audio.play();
    } else if (e.target.id === "a7") {
        const audio = new Audio('./sounds/a7.wav');
        audio.play();
    }
}
piano.addEventListener("click", playSound)