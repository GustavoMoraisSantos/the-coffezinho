"use client";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "./index.module.css";

function Footer() {
  const texto = "Olá! Gostaria de conversar com alguém do The Coffezinho!";
  const textoCodificado = encodeURIComponent(texto);
  const url = `https://api.whatsapp.com/send?phone=5541996301244&text=${textoCodificado}`;
  const redirect = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <footer class="w3-light-grey w3-padding-48 w3-large ">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: '20px ',
            textAlign:'center'
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "150px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <AiFillInstagram className={styles.icons} size={28} />
            <AiFillFacebook className={styles.icons} size={28} />
            <AiOutlineWhatsApp
              className={styles.icons}
              onClick={redirect}
              size={28}
            />
            <AiFillLinkedin className={styles.icons} size={28} />
          </div>
          <p>Dê uma olhada em nossas redes sociais!</p>
          <p>Ou entre em contato conosco através do número (11) 4002-8922</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
