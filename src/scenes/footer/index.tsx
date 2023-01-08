import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
  <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="Logo" src={Logo} />
            <p className="my-5">
            A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines.
            The large gym offers a variety of exercise equipment and weights
            </p>
            <p>© EVOGYM All Rights Deserved</p>
        </div>  
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Instagram</p>
            <p className="my-5">Facebook</p>
            <p>WhatsApp</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">(+333)425-6825</p>
            <p>Feel free to ask what ever you want.</p>
        </div>
    </div>
  </footer>
  );
};

export default Footer;