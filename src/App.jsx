import { useState, useEffect } from 'react'
import './App.css'

//imgs
import iconLocal from './assets/iconLocal.png'
import lupaIcon from './assets/lupaIcon.png'

//serviços
import buscaClima from './services/BuscaClima'

function App() {
  const [city, setCity] = useState('Goiânia')
  const [clima, setClima] = useState({})

  useEffect(() => {
    buscaClima(city)
    .then((res) => {
      setClima(res)
    })
  }, [city])
  
  return (
    <div className="main">
      <img className="background" src={`https://source.unsplash.com/1600x900/?${clima.name}`} alt="" />
      <div className='efeito-vidro'></div>
      <div className="painel">
          <div className="container-busca">
            <div className="campo-busca">
              <div><img src={iconLocal} alt="icone local" /></div>
              <div>
                <div className="container-input">
                  <input 
                    type="text"
                    placeholder="Ex. Goiânia"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
          <div className='container-temperatura'>
            <div className='name-city'>
            <img src={clima.weather? 'http://openweathermap.org/img/w/' + clima.weather[0].icon + '.png' : lupaIcon} alt="icone do tempo" />
              <h1>{clima.name || 'Cidade'}</h1>
            </div>
            <div>
              <div className='icone-tempo'>
                <p>Umidade: {clima.main? clima.main.humidity : 0}%</p>
                <p>Temperatura-max: {clima.main? clima.main.temp_max : 0}ºC</p>
                <p>Temperatura-min: {clima.main? clima.main.temp_min : 0}ºC</p>
              </div>
              <div className='temperatura'>
                <p id='temperatura'>{clima.main? clima.main.temp.toFixed(0) : 0} ºC</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
