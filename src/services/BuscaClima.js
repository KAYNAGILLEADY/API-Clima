/* Busca dados de clima da API e reponde o objeto da resposta */

const KEY = JSON.stringify(import.meta.env)
console.log(import.meta.env.mode)

const buscaClima = async (nameCity) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=6cd686b2878d74bcf65fdaff2fd9543a&units=metric`
    let pesquisa = await fetch(url)
    let res = await pesquisa.json()
    return res
}

export default buscaClima