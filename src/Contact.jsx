import './index.css';

export function Contact() {
  return(
    <section className='contact'>
      <h2>Mis contactos</h2>
      <ul>
        <li><a href="https://github.com/AngeloGelvez" target='_blank'><i className="fa-brands fa-square-github"></i><br/>GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/angelo-gelvez-29b066253" target='_blank'><i className="fa-brands fa-linkedin"></i><br/>Linkedin</a></li>
        <li><a href="mailto:angelogelvez14@gmail.com" target='_blank'><i className="fa-solid fa-envelope"></i><br/>Email</a></li>
      </ul>
    </section>
  );
}