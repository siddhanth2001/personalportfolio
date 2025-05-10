import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const skillBadges = [
  { icon: "fab fa-aws", color: "#FF9900", position: "top-0 left-0", size: "w-12 h-12", delay: 0.3 },
  { icon: "fab fa-python", color: "#3776AB", position: "top-1/4 -left-4", size: "w-14 h-14", delay: 0.5 },
  { icon: "fab fa-react", color: "#61DAFB", position: "bottom-1/4 -left-8", size: "w-16 h-16", delay: 0.7 },
  { icon: "fab fa-docker", color: "#2496ED", position: "top-0 right-1/4", size: "w-14 h-14", delay: 0.4 },
  { icon: "fab fa-js", color: "#F7DF1E", position: "top-1/3 right-0", size: "w-12 h-12", delay: 0.6 },
  { icon: "fab fa-google", color: "#4285F4", position: "bottom-0 right-1/4", size: "w-16 h-16", delay: 0.8 }
];

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="pt-32 pb-20 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-sm font-medium text-accent mb-2"
          >
            Hi, I'm
          </motion.div>
          
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Siddhanth Jain
          </motion.h1>
          
          <motion.h2 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
          >
            Cloud & AI Enthusiast Building Scalable Solutions
          </motion.h2>
          
          <motion.p 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-muted-foreground mb-8 max-w-lg"
          >
            Actively seeking roles in Cloud/DevOps/Software Engineering. 
            Passionate about leveraging technology to solve real-world problems.
          </motion.p>
          
          <motion.div 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex space-x-4 mt-8"
          >
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:siddhanthjain09@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        
        {/* Right Side - Profile Image with Floating Skill Badges */}
        <div className="md:w-1/2 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-muted border-4 border-white shadow-xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Siddhanth Jain headshot" 
              className="object-cover w-full h-full"
            />
          </motion.div>
          
          {/* Floating Skill Badges */}
          {skillBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: badge.delay, 
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className={`absolute ${badge.position} ${badge.size} bg-white rounded-full shadow-lg flex items-center justify-center skill-badge`}
            >
              <i className={`${badge.icon} text-xl`} style={{ color: badge.color }}></i>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
