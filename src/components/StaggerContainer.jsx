import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1, 
  className = '',
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  direction = 'up', 
  distance = 40,
  duration = 0.6,
  className = '' 
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: direction === 'scale' ? 0.8 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerContainer;