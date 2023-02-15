const array = [0];

for (let i = 1; i < 8; i++) {
    array[i] = new Audio(`./sounds/a${i}.mp3`);
}

document.querySelector("#piano").addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
        array[id].play();
        array[id] = new Audio(`./sounds/a${id}.mp3`);
    }
})
