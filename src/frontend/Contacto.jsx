
import "./Contacto.css";
import { NavBar } from "./NavBar";
import  emailjs  from "emailjs-com";
import { useState } from "react";
import { db } from "../backend/firebase";
import { addDoc, collection } from "firebase/firestore";


export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Guardar en Firebase
      await addDoc(collection(db, "messages"), formData);

      // 2. Enviar correo con EmailJS
      await emailjs.send(
        "service_wv124or",  // Reemplaza con tu ID de servicio
        "template_6jd1o5q", // Reemplaza con tu ID de plantilla
        formData,
        
       // Reemplaza con tu ID de usuario // ESTE LO AGREGUE YO X EL TELEFONO
      "oR5h3UQJNuhCCFBNy"   // Reemplaza con tu clave pública de EmailJS
      );

      alert("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje");
    }
  };
  return (
    <div className="contact-page">
      {/* Breadcrumb Section */}
      <section>
        <br />
        <br />
        <div className="breadcrumb-content">
         
        </div>
        <br />
        <br />
        <br />
      
  
      <form onSubmit={handleSubmit}>
        <h2 className="form-signin-heading fw-bold"> Por consultas escríbanos aquí </h2>
       
        <input
          name="name"
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Nombre y Apellido"
          value={formData.name}
          onChange={handleChange}

          required
       
        />

        
        <input
        name="email"
          type="email"
          
          id="inputEmail"
         
          className="form-control"
          placeholder="direccion email"
          value={formData.email}
          onChange={handleChange}
          required
         
        />

      

        <input
          name="message"
          type="text"
          id="text"
          className="form-control"
          placeholder=" Mensaje "
          value={formData.message}
          onChange={handleChange}
          required
        
        />
       
        <div >
        </div>
          <button
            className="btn btn-lg btn-success btn-block mt-3"
            type="submit">
           Enviar
          </button>
      
      </form>
      </section>
      {/* Inquiry Section */}
     



      <NavBar />
    </div>
  );
};

