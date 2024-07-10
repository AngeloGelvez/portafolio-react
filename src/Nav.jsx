import './index.css';
import logo from "./assets/logo.png";

export function Nav() {
  const showNav = () => {
    const $nav = document.querySelector(".nav-second");
    $nav.classList.toggle("show");
  }


  return (
    <nav className='navigator'>
      <div>
        <img src={logo} alt="letter of p-g" width={70} height={35} />
        <ul className='list-item'>
          <li><a href="https://angelogelvez.github.io/portafolio/" className='text-emphasis'>Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#tecno">Tecnologías</a></li>
          <li><a href="#proy">Proyectos</a></li>
          <li><i className="fa-solid fa-bars" onClick={showNav}></i></li>
        </ul>
      </div>
    </nav>
  );
}


