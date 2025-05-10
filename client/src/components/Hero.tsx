import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Cloud, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="pt-36 pb-24 hero-pattern relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"
        />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
            <motion.div 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm font-medium bg-background/80 backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for hire
              </Badge>
            </motion.div>
            
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
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animated-gradient-text"
            >
              Siddhanth Jain
            </motion.h1>
            
            <motion.h2 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-2xl md:text-3xl font-medium text-foreground mb-6"
            >
              <span className="text-primary">Delivering Real-World Impact with Cloud, Code, and AI</span> 
            </motion.h2>
            
            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-muted-foreground mb-8 max-w-lg text-lg"
            >
              I’m a developer who enjoys turning ideas into reliable, real-world systems. My journey has taken me from building full-stack web apps to integrating AI for intelligent automation, and deploying those solutions on scalable cloud infrastructure using tools like AWS, GCP, Docker, and Kubernetes. Whether it's analyzing transit data, streamlining e-commerce operations, or automating invoices with machine learning, I focus on creating systems that are efficient, scalable, and meaningful.


            </motion.p>
            
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full px-8 transition-transform hover:scale-105">
                <a href="#projects" className="group">
                  View My Work
                  <ArrowDown size={16} className="ml-2 inline-block transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 transition-transform hover:scale-105">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Download size={16} />
                  Resume
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
              {/* Social links with enhanced hover effects */}
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/siddhanth2001" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:siddhanthjain09@gmail.com" 
                aria-label="Email" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Mail size={18} />
              </a>
            </motion.div>
            
            {/* Tech stack indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              <Badge variant="outline" className="px-3 py-1 bg-background/60 backdrop-blur-sm flex items-center gap-1">
                <Code size={12} className="text-primary" />
                <span>Python</span>
              </Badge>
              <Badge variant="outline" className="px-3 py-1 bg-background/60 backdrop-blur-sm flex items-center gap-1">
                <Cloud size={12} className="text-primary" />
                <span>AWS</span>
              </Badge>
              <Badge variant="outline" className="px-3 py-1 bg-background/60 backdrop-blur-sm flex items-center gap-1">
                <Database size={12} className="text-primary" />
                <span>SQL</span>
              </Badge>
              <Badge variant="outline" className="px-3 py-1 bg-background/60 backdrop-blur-sm flex items-center gap-1">
                <i className="fab fa-react mr-1 text-[#61DAFB]" style={{fontSize: "12px"}}></i>
                <span>React</span>
              </Badge>
            </motion.div>
          </div>
          
          {/* Right Side - Profile Image with Floating Skill Badges */}
          <div className="md:w-1/2 relative z-10">
            <div className="relative">
              {/* Background circle decorations */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -m-10 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-xl"
              />
              
              {/* Glass card containing profile */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="glass-effect rounded-2xl p-6 mx-auto max-w-sm"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-xl bg-muted border-2 border-white/40 shadow-xl overflow-hidden"
                >
                  <img 
                    src="https://i.postimg.cc/Y972JDVs/1697314220972.jpg" 
                    alt="Siddhanth Jain headshot" 
                    className="object-cover w-full h-full"
                  />
                  
                  <motion.div 
                    animate={floatingAnimation}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
                  >
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-medium">M.S. Computer Science</p>
                      <p className="text-xs opacity-75">Portland State University</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Skill Badges - enhanced */}
                {skillBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ 
                      delay: badge.delay, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className={`absolute ${badge.position} ${badge.size} bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center skill-badge`}
                  >
                    <i className={`${badge.icon} text-xl`} style={{ color: badge.color }}></i>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
        <p className="text-xs text-muted-foreground mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
