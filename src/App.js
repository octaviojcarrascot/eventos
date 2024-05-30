import imagen0 from './imagenes/gohan.jpg';
import imagen1 from './imagenes/goku.jpg';
import './App.css';


function App() {
  return (
    <>
      <div className = "caja"></div>
      <button>Aceptar</button>
      <img src = {imagen0} alt="Descripción del logo"  />
      <input className='campo'/>
    </>
  );
}

export default App;
