import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Understanding
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Interpretable Machine Learning
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Explore the concepts and importance of making artificial intelligence systems transparent and explainable.
        </p>
      </motion.div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};