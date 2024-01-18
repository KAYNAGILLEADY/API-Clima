/* Busca dados de clima da API e reponde o objeto da resposta */

const KEY = JSON.stringify(import.meta.env.API_KEY)

const buscaClima = async (nameCity) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${KEY}&units=metric`
    let pesquisa = await fetch(url)
    let res = await pesquisa.json()
    return res
}

export default buscaClima