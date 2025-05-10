import { motion } from "framer-motion";
import { Code, Globe, Cloud, Database, Network, Bolt } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

const skillCategories = [
  {
    icon: <Code className="text-2xl text-primary" />,
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "Bash"],
    delay: 0.1
  },
  {
    icon: <Globe className="text-2xl text-primary" />,
    title: "Web",
    skills: ["HTML", "CSS", "React.js", "Flask", "Django"],
    delay: 0.2
  },
  {
    icon: <Cloud className="text-2xl text-primary" />,
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD"],
    delay: 0.3
  },
  {
    icon: <Database className="text-2xl text-primary" />,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    delay: 0.4
  },
  {
    icon: <Network className="text-2xl text-primary" />,
    title: "Systems & Networking",
    skills: ["Linux", "TCP/IP", "Multithreading"],
    delay: 0.5
  },
  {
    icon: <Bolt className="text-2xl text-primary" />,
    title: "Bolt",
    skills: ["Git", "GitHub", "GitLab", "JIRA", "Visual Studio", "PyCharm"],
    delay: 0.6
  }
];

const SkillCategory = ({ icon, title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-background p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary inline-block pb-2 border-b-4 border-secondary">My Skills</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
