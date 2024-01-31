"use client";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./whatsapp.module.css";

const WhatsAppButton = () => {
  const texto = "Olá! Gostaria de conversar com alguém do The Coffezinho!";
  const textoCodificado = encodeURIComponent(texto);
  const url = `https://api.whatsapp.com/send?phone=5541996301244&text=${textoCodificado}`;
  const redirect = () => {
    window.open(url, "_blank");
  };
  return (
    <AiOutlineWhatsApp onClick={redirect} size={28} className={styles.button} />
  );
};

export default WhatsAppButton;
