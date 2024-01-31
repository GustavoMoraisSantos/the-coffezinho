import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer class="w3-light-grey w3-padding-48 w3-large ">
        <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "150px",
              width:'100%',
              marginBottom:'20px'
            }}
          >
            <AiFillInstagram size={28} />
            <AiFillFacebook size={28} />
            <AiOutlineWhatsApp size={28} />
            <AiFillLinkedin size={28} />
          </div>
          <p>Dê uma olhada em nossas redes sociais!</p>
          <p>Ou entre em contato conosco através do número (11) 4002-8922</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
