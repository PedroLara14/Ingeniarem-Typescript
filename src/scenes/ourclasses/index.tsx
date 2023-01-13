import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import image13 from "@/assets/image13.png";
import image14 from "@/assets/image14.png";
import image15 from "@/assets/image15.png";
import image16 from "@/assets/image16.png";
import image17 from "@/assets/image17.png";
import image18 from "@/assets/image18.png";
import image19 from "@/assets/image19.png";
import image20 from "@/assets/image20.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
  {
    image: image13,
  },
  {
    image: image14,
  },
  {
    image: image15,
  },
  {
    image: image16,
  },
  {
    image: image17,
  },
  {
    image: image18,
  },
  {
    image: image19,
  },
  {
    image: image20,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="proyectos" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>PROYECTOS</HText>
            <p className="py-5">
            INGENIAREM trabaja buscando que los proyectos constructivos se realicen cumpliendo los estándares de calidad, diseño y especificaciones técnicas planteadas y requeridas por nuestros clientes. Estamos conscientes de que el éxito de toda construcción radica en una buena integración y trabajo en equipo entre diseñador, constructor, interventoría y cliente final.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[380px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;