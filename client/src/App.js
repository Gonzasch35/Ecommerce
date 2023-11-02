import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [producto, setProducto] = useState([])

  const productos = async () => {
    const product = await axios.get('http://localhost:3001/productos')
    setProducto(product.data)
  }


  useEffect(() => {
    productos()
  }, [])

  return (
    <div className="App">
        {producto.map(p => {
          return (
            <div>
              <h3>{p.title}</h3>
              <img src={p.image} alt='imagen' width="300"/>
              <img src={p.image} alt='imagen' width="300"/>
            </div>
          )
        })}
    </div>
  );
}

export default App;
