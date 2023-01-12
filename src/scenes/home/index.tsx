import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ( {setSelectedPage} : Props) => { 


  return <section
    id="inicio"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
  >
    {/* IMAGE AND MAIN HEADER */}
    <motion.div 
    className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 },
            }}
            >
                <div className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </motion.div>     
        </div>
        {/* IMAGE */}
        <div className="relative">
            <div className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end">
            </div>
        </div>
    </motion.div>
  </section>
};

export default Home;