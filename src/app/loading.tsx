import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center"
    >
      {/* Spinning Loader */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-16 h-16 border-t-4 border-gold rounded-full"
      />
      
      {/* Loading Text */}
      <p className="mt-4 text-lg text-gray-400">Preparing your luxury experience...</p>
    </motion.div>
  );
};

export default LoadingPage;