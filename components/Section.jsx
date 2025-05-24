import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
