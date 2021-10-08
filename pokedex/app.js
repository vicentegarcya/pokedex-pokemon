let count = 1;

function renderImage() {
    let pokemonContainer = document.getElementById("pokemons");

    pokemonContainer.innerHTML = `<img id="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg" alt="pokemon image">`
}

let previousPoke = document.getElementById("previous");
let nextPoke = document.getElementById("next");

previousPoke.onclick = function() {
    if (count > 1) {
        count -= 1;
        renderImage();
    }
}

nextPoke.onclick = function() {
    if (count < 649) {
        count += 1;
        renderImage();
    }
}

renderImage();