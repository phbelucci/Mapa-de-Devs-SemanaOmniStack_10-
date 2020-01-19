import React,{useState,useEffect} from 'react';

import './global.css'
import './App.css';
import './sideBar.css'
import './main.css'


function App() {

  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitute] = useState('')

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        const {latitude,longitude} = position.coords;

        setLatitude(latitude)
        setLongitute(longitude)
        
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  },[])
  

  return (
    <div id="App">
      <aside>
          <strong>Cadastrar</strong>
          <form>

            <div className="input-block">
              <label htmlFor='github_username'>Usuário do GitHub</label>
              <input name="github_username" id="github_username" required></input>
            </div>
            
            <div className="input-block">
              <label htmlFor='techs'>Techs</label>
              <input name="techs" id="techs" required></input>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor='latitude'>Latitude</label>
                <input type="number" 
                name="latitude" 
                id="latitude" 
                required value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                />

              </div>
              <div className="input-block">
                <label htmlFor='longitude'>Longitude</label>
                <input type="number" name="longitude" id="longitude" required value={longitude}
                onChange={(e) => setLongitute(e.target.value)}></input>
              </div>
            </div>

            <button type="Submit">Salvar</button>       
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/41579551?s=460&v=4" alt="avatar"></img>
              <div className='user-info'>
                <strong>Paulo Belucci</strong>
                <span>ReactJS, React Native</span>

              </div>
            </header>
            <p>
            Após mais de 10 anos na área comercial estou mudando completamente o rumo da minha carreira e escolhi a programação como instrumento dessa transformação.
            </p>
            <a href="https://github.com/phbelucci">Acessar Perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/41579551?s=460&v=4" alt="avatar"></img>
              <div className='user-info'>
                <strong>Paulo Belucci</strong>
                <span>ReactJS, React Native</span>

              </div>
            </header>
            <p>
            Após mais de 10 anos na área comercial estou mudando completamente o rumo da minha carreira e escolhi a programação como instrumento dessa transformação.
            </p>
            <a href="https://github.com/phbelucci">Acessar Perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/41579551?s=460&v=4" alt="avatar"></img>
              <div className='user-info'>
                <strong>Paulo Belucci</strong>
                <span>ReactJS, React Native</span>

              </div>
            </header>
            <p>
            Após mais de 10 anos na área comercial estou mudando completamente o rumo da minha carreira e escolhi a programação como instrumento dessa transformação.
            </p>
            <a href="https://github.com/phbelucci">Acessar Perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/41579551?s=460&v=4" alt="avatar"></img>
              <div className='user-info'>
                <strong>Paulo Belucci</strong>
                <span>ReactJS, React Native</span>

              </div>
            </header>
            <p>
            Após mais de 10 anos na área comercial estou mudando completamente o rumo da minha carreira e escolhi a programação como instrumento dessa transformação.
            </p>
            <a href="https://github.com/phbelucci">Acessar Perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
