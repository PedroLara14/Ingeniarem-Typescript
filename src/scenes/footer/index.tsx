import WhatsAppIcon from "@/assets/WhatsAppIcon.png";
import InstagramIcon from "@/assets/InstagramIcon.png";


const Footer = () => {
  return (
  <footer className="bg-primary-600 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <h4 className="font-bold text-xl">ACERCA DE NOSOTROS</h4>
            <p className="my-3">
            <b>Somos una empresa dedicada a direccionar, ejecutar y gestionar de manera eficaz y transparente proyectos y prestación de servicios directos en el ámbito de la construcción, con la participación de personal capacitado y estimulado en una cultura orientada a la satisfacción de nuestros clientes.</b>
            </p>
            <p><b>INGENIAREM © Todos los derechos reservados.</b></p>
        </div>  
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold text-xl">Redes Sociales</h4>
            <a href="https://www.instagram.com/ingeniarem/" target="_blank"><img className="h-8 my-3" src={InstagramIcon} alt="Instagram-Icon"/></a>
            <a href="https://wa.me/573017264927" target="_blank"><img className="h-8 mt-2" src={WhatsAppIcon} alt="WhatsApp-Icon"/></a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold text-xl">Contáctanos</h4>
            <p className="my-0"><b>(+57) 301 - 726 - 4927</b></p>
        </div>
    </div>
  </footer>
  );
};

export default Footer;