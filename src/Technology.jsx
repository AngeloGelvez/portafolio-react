import './index.css';
import logoHtml from './assets/html.png';
import logoCss from './assets/css.png';
import logoJs from './assets/js.png';
import logoFigma from './assets/figma.png';
import logoGit from './assets/git.png';
import logoBoot from './assets/bootstrap.png';
import logoJava from './assets/java.webp';
import logoSpring from './assets/spring.webp';
import logoSql from './assets/sql.png';
import logoReact from './assets/react.png';

export function Technology() {
  return(
    <section className='tecno' id='tecno'>
      <h2>Tecnologías que domino</h2>
      <div className='container-card'>
        <div className='card'>
          <aside>
            <img src={logoHtml} alt="icon html" width={100} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoCss} alt="icon css" width={160} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoJs} alt="icon js" width={160} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoFigma} alt="icon  figma" width={200} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoGit} alt="icon git" width={180} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoBoot} alt="icon bootstrap" width={150} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoSpring} alt="icon spring" width={200} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoJava} alt="icon java" width={105} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoSql} alt="icon sql" width={200} />
          </aside>
        </div>
        <div className='card'>
          <aside>
            <img src={logoReact} alt="icon react" width={77} />
          </aside>
        </div>
      </div>
    </section>
  );
}