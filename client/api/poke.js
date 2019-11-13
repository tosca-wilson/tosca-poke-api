const request = require('superagent')
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'


export function getPokeDetails() {
    return request.get(baseUrl + 'ditto/')
    .then(res => res.body)
}