import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary inline-block pb-2 border-b-4 border-secondary">About Me</h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Siddhanth Jain, a passionate Computer Science graduate student at Portland State University with a strong foundation in cloud computing, data engineering, and software development. I thrive at the intersection of AI, DevOps, and scalable web systems, with hands-on experience building impactful solutions in public transportation, e-commerce, and intelligent automation.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My goal is to create technology that solves real-world problems efficiently and intelligently. I'm a strong believer in the power of automation and cloud infrastructure to transform how we build and deliver software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new hiking trails, experimenting with photography, or diving into the latest tech blogs and research papers.
            </p>
          </motion.div>
          
          {/* Right Side - Education & Quick Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="lg:w-1/3"
          >
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-border">Education</h3>
              
              <div className="mb-6">
                <div className="flex items-start mb-1">
                  <div className="text-accent mt-1 mr-3">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">M.S. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Portland State University</p>
                    <p className="text-sm text-muted-foreground">2024-2025 | GPA: 3.74</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="text-accent mt-1 mr-3">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.E. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">VTU</p>
                    <p className="text-sm text-muted-foreground">2019-2023</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mt-8 mb-6 pb-2 border-b border-border">Quick Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-accent w-8 h-5" />
                  <span>Portland, Oregon</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-accent w-8 h-5" />
                  <a href="mailto:siddhanthjain09@gmail.com" className="hover:text-accent transition-colors">
                    siddhanthjain09@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-accent w-8 h-5" />
                  <a href="tel:+19718953121" className="hover:text-accent transition-colors">
                    +1 971-895-3121
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
