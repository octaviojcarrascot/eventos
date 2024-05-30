import imagen0 from './imagenes/gohan.jpg';
//import imagen1 from './imagenes/goku.jpg';
import './App.css';


function App() {
  function incrementar(e){
   e.target.innerHTML = Number(e.target.innerHTML)+1;
    
  }
  return (
    <>
      <div className = "caja" onClick={incrementar}>1</div>
      <button>Aceptar</button>
      <div><img src = {imagen0} alt="Descripción del logo"  /></div>
      <input className='campo'/>
    </>
  );
}

export default App;
