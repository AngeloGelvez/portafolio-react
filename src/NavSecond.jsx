import './index.css';

export function NavSecond() {
  const showNav = () => {
    const $nav = document.querySelector(".nav-second");
    $nav.classList.toggle("show");
  }

  return(
    <nav className="nav-second">
      <ul className='list-item-second'>
          <li><a href="https://angelogelvez.github.io/portafolio/" >Inicio</a></li>
          <li><a href="#about" onClick={showNav}>Sobre mí</a></li>
          <li><a href="#tecno" onClick={showNav}>Tecnologías</a></li>
          <li><a href="#proy" onClick={showNav}>Proyectos</a></li>
      </ul>
    </nav>
  );
}