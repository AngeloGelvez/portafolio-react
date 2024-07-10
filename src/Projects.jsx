import './index.css';
import gestorProyectos from './assets/gestor-proyectos.png'
import inmovision from './assets/inmovision.png'
import practica from './assets/practica.png'
import streaming from './assets/streaming.png'
import taika from './assets/taikachair.png'
import taskApp from './assets/taskapp.png'
import tienda from './assets/tienda.png'

export function Projects() {
  return(
    <section className='projects' id='proy'>
      <h2>Mis proyectos</h2>

      <div className='card-project'>
        <img src={gestorProyectos} alt="image projects"/>
        <div className='content-project'>
          <h3>Gestor Proyecto</h3>
          <hr />
          <p>Este proyecto combina tecnologías backend y frontend para crear una aplicación de gestión de proyectos o ideas de grado. Utiliza Spring Boot para el backend y Thymeleaf, HTML, CSS y Bootstrap para el frontend. Con esta herramienta, podrás gestionar proyectos.</p>
          <a href="https://github.com/AngeloGelvez/Gestor-Proyectos" target='_blank'><i className="fa-brands fa-github"></i></a>
          <a href="https://gestor-proyectos-s3r5.onrender.com" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={streaming} alt="image projects"/>
        <div className='content-project'>
          <h3>Streaming Tv</h3>
          <hr />
          <p>Bienvenidos a mi proyecto personal, un sitio web de transmisión de canales de televisión. Este proyecto fue construido desde cero utilizando JavaScript puro (vanilla), HTML y CSS, con un toque de Bootstrap para el diseño. Cada línea de código ha sido cuidadosamente escrita para ofrecer una experiencia de usuario fluida y atractiva.</p>
          <a href="https://github.com/AngeloGelvez/site" target='_blank'><i className="fa-brands fa-github"></i></a>
          <a href="https://streamingtelevision.site/" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={inmovision} alt="image projects"/>
        <div className='content-project'>
          <h3>InmoVision</h3>
          <hr />
          <p>Este proyecto consiste en una aplicación web, la cual ha sido implementada utilizando Java con JSP (JavaServer Pages) y JavaScript, proporcionando una interfaz dinámica y funcional. La estética del sitio se ha logrado con HTML y CSS, aprovechando las capacidades de diseño responsivo de Bootstrap 5.
          <br/><br/>
          La aplicación cuenta con una robusta conexión a base de datos MariaDB, lo que permite una gestión eficiente de la información.</p>
          <a href="https://github.com/AngeloGelvez/InmoVision" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={practica} alt="image projects"/>
        <div className='content-project'>
          <h3>Página Web</h3>
          <hr />
          <p>PracticeWEB es un repositorio en GitHub que contiene un sitio web de práctica. En este proyecto, he creado una página web sencilla utilizando HTML, CSS y un poco de JavaScript1. El diseño es básico pero funcional. Si deseas ver el código, puedes visitar el repositorio aquí.</p>
          <a href="https://github.com/AngeloGelvez/practice-web-line" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={taika} alt="image projects"/>
        <div className='content-project'>
          <h3>TeikaChair</h3>
          <hr />
          <p>TeikaChair es una aplicación web diseñada para simplificar la gestión de restaurantes y mejorar la experiencia tanto para los propietarios como para los clientes. Su objetivo principal es facilitar el registro y consulta de información relacionada con los restaurantes, así como proporcionar un proceso de registro sencillo para los usuarios.

          <br/><br/>
          Desarrollador con React, html, css y bootstrap 5 todo para el frontend, y para el backend se utilizo Java con Spring Boot, con un estilo de arquitectura ApiRest, para tener conectado el backend y el frontend.</p>
          <a href="https://github.com/AngeloGelvez/TeikaChair" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={taskApp} alt="image projects"/>
        <div className='content-project'>
          <h3>TaskApp</h3>
          <hr />
          <p>ProyectoTask es una aplicación de gestión de proyectos que te permite organizar y supervisar tus proyectos de manera eficiente. Con esta herramienta, puedes crear, editar y seguir el progreso de tus proyectos desde una interfaz intuitiva.

          <br/><br/>
          Tecnologías Utilizadas:

          Frontend: Desarrollado con Vanilla JavaScript, HTML y CSS.
          Backend: Implementado en Java con Spring Boot siguiendo una arquitectura API REST. La comunicación entre el frontend y el backend se realiza mediante APIs.
          Base de Datos: Se utiliza una base de datos relacional PostgreSQL para almacenar la información de los proyectos y tareas.
          Documentación: En el repositorio de Git, encontrarás el query para crear la estructura de la base de datos. También se incluye un diagrama relacional generado con StarUML para visualizar la relación entre las entidades.</p>
          <a href="https://github.com/AngeloGelvez/TaskApp" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <img src={tienda} alt="image projects"/>
        <div className='content-project'>
          <h3>Tienda</h3>
          <hr />
          <p>En mi aplicación web, creé un modelo de datos que incluye entidades como Producto, Usuario y Pedido. Establecí relaciones entre ellas; por ejemplo, un usuario puede tener varios pedidos. Implementé controladores para manejar rutas y acciones del usuario, como mostrar la lista de productos o procesar pedidos. Diseñé vistas Thymeleaf para mostrar datos dinámicos en plantillas HTML y apliqué estilos CSS junto con animaciones JavaScript. Además, configuré la conexión a PostgreSQL y trabaje todo el backend con Java Spring Boot.</p>
          <a href="https://github.com/AngeloGelvez/tiendaPractica" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='card-project'>
        <div className='content-project'>
          <h3>Spring Api Rest</h3>
          <hr />
          <p>En este proyecto se desarrollo de un API para la Gestión de Inmuebles en una Agencia Inmobiliaria Descripción: La agencia inmobiliaria necesita una solución eficiente para gestionar la información de los inmuebles que posee en varias de sus oficinas. Actualmente, la información se comparte telefónicamente entre oficinas, lo que es ineficiente. Se requiere desarrollar un API con Spring Boot para centralizar y gestionar la información de los inmuebles de manera efectiva.</p>
          <a href="https://github.com/AngeloGelvez/Proyecto-Final-ApiRest" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </section>
  );
}