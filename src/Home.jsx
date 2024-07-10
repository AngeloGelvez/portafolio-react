import './index.css';

export function Home() {
  return(
    <main className='home focus-in-contract-bck'>
      <div className='text'>
        <h1><small>Hola 👋,<br/>Soy Pavel,</small><br/>
          <strong className='text-emphasis'>Desarrollador <br/>Web</strong>
        </h1>
        <p className='text-second'>Te doy la bienvenida a mi sitio web, en este espacio compartiré detalles sobre mí, mis proyectos y las tecnologías que domino. </p>
        <p className='text-third'>¿Listo para explorar? ¡Vamos a ello!</p>
      </div>
      <div className='circle'>
        
      </div>
    </main>
  );
}