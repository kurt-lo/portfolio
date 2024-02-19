import { motion } from "framer-motion";

const Section = ({ children, title, className, ...props }) => {
    return (
        <section className={`py-[5rem] px-[1rem] ${className}`} {...props}>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="text-2xl text-primary font-[700] pb-[1.5rem] text-center">{title}</h1>
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

export default Section