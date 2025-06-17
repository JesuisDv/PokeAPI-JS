
# Poke API en JavaScript

Aplicación web para visualizar los primeros 151 pokemones.

---

## Contenido

- [Descripción](#descripción)
- [Caracteristicas](#caracteristicas)
- [Capturas](#capturas)
- [API Reference](#api-reference)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Autor](#autor)

---

## Descripción

Este proyecto es una aplicación web interactiva que consume la PokeAPI para mostrar una galería con los primeros 151 Pokémon de la primera generación, incluyendo sus sprites, nombres y tipos.

La aplicación incluye una función de búsqueda que permite filtrar Pokémon por nombre en tiempo real para busquedas especificas.

Es ideal como práctica para el consumo de APIs públicas, manejo del DOM, y diseño responsivo con JavaScript, HTML y CSS.

---

## Caracteristicas

- 🔍 Busqueda en tiempo real.
- 🎨 Interfaz visual amigable y responsiva.
- 📦 Consumos de API
- ⚡ Carga Rapida

---






## Capturas

![Pokemon](./assets/pokemon.png)




## API Reference

#### Get all items

```http
  GET https://pokeapi.co/api/v2/pokemon?limit=151
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Nombre del Pokémon |

#### Get item

```http
GET https://pokeapi.co/api/v2/pokemon/{id o nombre}

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `types`      | `array` | Tipo del Pokémon |

#### add(num1, num2)

Resultado: { name: "pikachu", sprites: {...}, types: [...] }




## Tecnologias Usadas

**Client:** HTML5, CSS, JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)

**API:** Node, Express

![PokéAPI](https://img.shields.io/badge/PokéAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black)



## Autor

- [@JesuisDv](https://github.com/JesuisDv)

