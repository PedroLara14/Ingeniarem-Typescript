import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "A state of the art computer system uses the most recently developed features, and a state of the art hospital has every modern amenity and follows all the latest rules of hygiene."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "The closed bell mixed gas saturation qualification is the highest level of commercial diver training a diver can reach during his career as a diver."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Our trainers. Expert Academy offers over 35 different courses in communication and personal development, given by 15 national and international experts."
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
  <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
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
            <HText>MORE THAN JUST A GYM</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
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

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
            <img 
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}           
            />
            
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:aboslute before:-top-20 before-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5}}
                  transition={{  duration: 0.5 }}
                  variants={{
                        hidden: { opacity: 0, x:50 },
                        visible: { opacity: 1, x:0 },
                  }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-primary-500">FIT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                    hidden: { opacity: 0, x:50 },
                    visible: { opacity: 1, x:0 },
              }}
              >
                <p className="my-5">Our work in the fitness industry is to deliver happiness to our clients. To effectively do so, we have to dissociate our likes and dislikes from our client's needs.</p>
                <p className="mb-5">We have to look at everything we are doing from the lens of the client. Our goal should be to make as many people happy as we can, and to do this, we have to put our personal preferences and ego aside and focus on the client.</p>
              </motion.div>
              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
        </div>
    </motion.div>
  </section>
  );
}

export default Benefits;