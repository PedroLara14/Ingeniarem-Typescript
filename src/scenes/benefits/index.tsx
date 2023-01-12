import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { BuildingOffice2Icon, HomeModernIcon, PresentationChartBarIcon  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <PresentationChartBarIcon className="h-6 w-6" />,
    title: "DISEÑAMOS",
    description:
      "Diseño y Construcción de Proyectos. Soluciones especiales pensando siempre en el bienestar y comodidad de tus clientes."
  },
  {
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    title: "CONSTRUIMOS",
    description:
      "Somos especialistas en el desarrollo de Construcciones, obtenemos los mejores profesionales para cada especialidad, profesionales en estructuras, acabados, fachadas flotantes, etc."
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "REMODELAMOS",
    description:
      "Nos caracterizamos por ser una empresa de desarrollo de Remodelaciones de calidad con Arquitectos o Diseñadores de Interiores, Haciendo de nuestra obra más profesional asegurando la estética de la edificación."
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
  <section id="sobrenosotros" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{  duration: 0.5 }}
        variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x:0 },
        }}
        >
            <HText>INGENIERÍA, ACABADOS Y REMODELACIONES</HText>
            <p className="my-5 text-sm">
            Empresa Contructora que ofrece todo tipo de servicios referente a la Ingeniería Civil. Cubre la selección de contratistas, preparación de documentos, programación, contratación de obras, ingeniería de campo, supervisión e inspección de los trabajos y gestión de apoyo logístico.
            </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5 }}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) =>(
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
    </motion.div>
  </section>
  );
}

export default Benefits;