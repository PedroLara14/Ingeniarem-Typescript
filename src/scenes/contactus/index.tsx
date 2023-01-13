import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { triggerAsyncId } from "async_hooks";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
         register,
         trigger,
         formState,
         formState: { errors }
    } = useForm();

    const onSubmit = async(e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }


  return <section id="contáctanos" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
         className="md:w-3/5"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5}}
         transition={{ duration: 0.5 }}
         variants={{
             hidden: { opacity: 0, x:-50 },
             visible: { opacity: 1, x:0 },
        }}
        >
            <HText>
                <span className="text-primary-500">CONTÁCTANOS</span>
            </HText>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:50 },
                    visible: { opacity: 1, x:0 },
            }}
            >
                <form 
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/0cb9f5ad7e010d5152abcf30781a95cb"
                    method="POST"
                >
                   <input
                        className={inputStyles}
                        type="text"
                        placeholder="NOMBRE"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                   />
                   {errors.name && (
                    <p className="mt-1 text-primary-500">
                        {errors.name.type === "required" && 'Este campo es de completado obligario.'}
                        {errors.name.type === "maxLength" && 'Este campo es de maximo 100 caracteres.'}
                    </p>
                   )}

                    <input
                        className={inputStyles}
                        type="number"
                        placeholder="NUMERO DE TELEFONO"
                        {...register("phonenumber", {
                            required: true,
                            maxLength: 12,
                        })}
                   />
                   {errors.phonenumber && (
                    <p className="mt-1 text-primary-500">
                        {errors.phonenumber.type === "required" && 'Este campo es de completado obligario.'}
                        {errors.phonenumber.type === "maxLength" && 'El numero de telefono debe ser de maximo 12 numeros'}
                    </p>
                   )}

                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                   />
                   {errors.email && (
                    <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" && 'Este campo es de completado obligario.'}
                        {errors.email.type === "pattern" && 'Direccion de correo electronico invalida'}
                    </p>
                   )}

                    <textarea
                        className={inputStyles}
                        placeholder="MENSAJE"
                        rows={4}
                        cols={50}
                        {...register("message", {
                            required: true,
                            maxLength: 4000,
                        })}
                   />
                   {errors.message && (
                    <p className="mt-1 text-primary-500">
                        {errors.message.type === "required" && 'Este campo es de completado obligario.'}
                        {errors.message.type === "maxLength" && 'Este campo es de maximo 4000 caracteres.'}
                    </p>
                   )}

                   <button
                   type="submit"
                   className="mt-5 rounded-lg bg-secundary-500 px-20 py-3 transition duration-500 hover:text-white"
                   >
                    ENVIAR
                   </button>
                </form>
            </motion.div>

            <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:50 },
                    visible: { opacity: 1, x:0 },
            }}
            >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before-right-10 before:z-[-1]">
                    <img  
                        className="w-full rounded-lg"
                        alt="contact-us-page-graphic"
                        src={ContactUsPageGraphic}
                    />
                </div>
            </motion.div>
        </div>
    </motion.div>
  </section>
};

export default ContactUs;