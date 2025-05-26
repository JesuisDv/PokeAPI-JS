const pokemonContainer = document.getElementById("contPokemon");
const buscarPokemon = document.getElementById("buscarInput");

let allPokemons;

async function fetchPokemones() {
    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await respuesta.json()

        const promesa = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        allPokemons = await Promise.all(promesa)

        mostrarPokemones(allPokemons)
    }catch (error){
        console.error("Error al cargar pokemones", error);
    }
}

function mostrarPokemones(pokemones){
    pokemonContainer.innerHTML = ``;
    pokemones.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjetaPokemon");
        tarjeta.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <p><span class="idPokemon"> N° ${pokemon.id}</span> ${pokemon.name.toUpperCase()} <br>
        ${pokemon.types[0].type.name}</p>
        `;
        pokemonContainer.appendChild(tarjeta)
    });
}

buscarPokemon.addEventListener("input", ()=>{
    const valor = buscarPokemon.value.toLowerCase();
    const filtrado = allPokemons.filter(pokemon=>
        pokemon.name.toLowerCase().includes(valor)
    );

    mostrarPokemones(filtrado)
})

fetchPokemones();