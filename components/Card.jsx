'use client';

import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`card ${className} ${hover ? 'hover:scale-105' : ''}`}
      whileHover={hover ? { scale: 1.05 } : {}}
      whileTap={hover ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
