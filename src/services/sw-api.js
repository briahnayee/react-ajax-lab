const starshipEndpoint = 'https://swapi.dev/api/starships/'

export function getAllStarships() {
    console.log("Hello from getAllStarships!")

    return fetch(starshipEndpoint)
    .then(res=>{
        return res.json();
    })
    .then(json => json.results)
    }







