import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training is a type of exercise that uses free weights to build strength. Unlike bodyweight exercises which use your own bodyweight to build muscle, weight training exercises use barbells, dumbbells, kettlebells, or weight machines to increase muscular strength throughout the body.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Your core is the central part of your body. It includes your pelvis, lower back, hips and stomach. The stomach muscles sometimes are called abs. Core exercises train the muscles in your core to work in harmony. This leads to better balance and steadiness, also called stability.",
    image: image3,
  },
  {
    name: "Back Extension",
    description:
      "The back extension is an exercise used to build lower back strength that also targets the hamstrings and glutes. It is often performed on a 45-degree bench with the feet anchored. Unweighted back extensions are often performed for high reps, such as 15-20 reps or more, but the movement can also be performed with added weight in lower rep ranges, such as 8-12 reps per set.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "fitness class means an organized meeting led by an instructor involving exercises designed to improve participant's fitness level.",
    image: image5,
  },
  {
    name: "Socializing Spaces",
    description:
      "What is socializing in person, Socialization involves being with and a part of other people; enjoying their company, confiding in them or letting them confide in you, and working together towards shared goals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
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
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Free, fun, and sure to leave you feeling the burn, we've specially selected some of the most popular exercise classes for you to enjoy at Our Gym.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
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