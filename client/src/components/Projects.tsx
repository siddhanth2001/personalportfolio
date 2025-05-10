import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  delay: number;
}

const projects = [
  {
    title: "Trimet Transit Operations Analysis",
    description: "Real-time data analysis system for optimizing public transit; handled over 1M records/day.",
    techStack: ["Python", "PostgreSQL", "GCP"],
    imageUrl: "https://i.postimg.cc/528bJdzS/image.png",
    githubUrl: "https://github.com/siddhanth2001/Trimet_transit_analysis",
    delay: 0.1
  },
  {
    title: "E-Commerce DevOps Implementation",
    description: "Cloud-native microservices deployment using IaC and CI/CD for scalability.",
    techStack: ["Docker", "Kubernetes", "Terraform", "AWS"],
    imageUrl: "https://i.postimg.cc/hvJR3Hgx/image.png",
    githubUrl: "https://github.com/siddhanth2001/E-Commerce-Devops-Implementation",
    delay: 0.2
  },
  {
    title: "AI-powered Invoice Tracker",
    description: "Tool for automating receipt processing and organizing expenses using AI.",
    techStack: ["Flask", "GCP Vision API", "Gemini Pro API"],
    imageUrl: "https://i.postimg.cc/RFFkNjW8/image.png",
    githubUrl: "https://github.com/siddhanth2001/AI-Powered-Invoice-Tracker",
    delay: 0.3
  }
];

const ProjectCard = ({ title, description, techStack, imageUrl, githubUrl, delay }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col flex-grow justify-between">
        {/* Title and Stack */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>

        {/* GitHub Link */}
        <div className="mt-6">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:underline font-medium"
          >
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary inline-block pb-2 border-b-4 border-secondary">Featured Projects</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
