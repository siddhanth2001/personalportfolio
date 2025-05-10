import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Siddhanth Jain. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#home" className="hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#skills" className="hover:text-secondary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-secondary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
