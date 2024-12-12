
import "./Contacto.css";
import { NavBar } from ".//NavBar";


export const Contacto = () => {
  return (
    <div className="contact-page">
      {/* Breadcrumb Section */}
      <section>
        <br />
        <br />
        <br />
        <div className="breadcrumb-content">
          <h1>Contacto</h1>
        </div>
      </section>
      {/* Inquiry Section */}
      <section className="inquiry-section">
        <div className="column">
          <h3 className="inquiry-subtitle">Envíe su consulta</h3>
          <h2 className="inquiry-title"> 
            Si tiene alguna consulta para más información póngase en contacto con nosotros </h2>
    
        <p> Email:  barreiro.monica@gmail.com</p>
        <p> Teléfono: +54911-4479-0260</p>
        <p> Dirección: Av.Callao 569 - 3 Piso CABA</p>

        <p>Horario de atención: Lunes a viernes de 9:00 a 18:00hs</p>
      
        </div>

        <div className="column"></div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="column">
          <ul className="contact-list">
            <li>+01-256-2558</li>
            <li>MAIL@COMPANY.COM</li>
            <li>BAKER STREET 5-7, SAN FRANSISCO, CANADA.</li>
          </ul>
        </div>
        <div className="column">
          <form>{/* Add form components here */}</form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/search?q=callao+569&rlz=1C5CHFA_enAR1006AR1006&oq=callao+569+&gs_lcrp=EgZjaHJvbWUyDAgAEEUYExgWGB4YOTIJCAEQABgTGIAEMgoIAhAAGBMYFhgeMgoIAxAAGBMYFhgeMgoIBBAAGBMYFhgeMg0IBRAAGIYDGIAEGIoFMgoIBhAAGIAEGKIE0gEINDk1NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="column">
          <h3> Newsletter</h3>
        </div>
        <div className="column">
          <form>{/* Add form components here */}</form>
        </div>
      </section>
    </div>
  );
};

