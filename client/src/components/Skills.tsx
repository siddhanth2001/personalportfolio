import { motion } from "framer-motion";

interface SkillCategoryProps {
  iconUrl: string;
  title: string;
  skills: string[];
  delay: number;
}

const skillCategories = [
  {
    iconUrl: "https://i.postimg.cc/PfLq77S2/image.png",
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "Bash"],
    delay: 0.1
  },
  {
    iconUrl: "https://i.postimg.cc/MZhGJY4x/image.png",
    title: "Web",
    skills: ["HTML", "CSS", "React.js", "Flask", "Django"],
    delay: 0.2
  },
  {
    iconUrl: "https://i.postimg.cc/DzyvPpWQ/image.png",
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD"],
    delay: 0.3
  },
  {
    iconUrl: "https://i.postimg.cc/HxrTfJ9V/image.png",
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    delay: 0.4
  },
  {
    iconUrl: "https://i.postimg.cc/zXZqcGbG/image.png",
    title: "Systems & Networking",
    skills: ["Linux", "TCP/IP", "Multithreading"],
    delay: 0.5
  },
  {
    iconUrl: "https://i.postimg.cc/sg3s3HJF/image.png",
    title: "Tools",
    skills: ["Git", "GitHub", "GitLab", "JIRA", "Visual Studio", "PyCharm"],
    delay: 0.6
  }
];

const SkillCategory = ({ iconUrl, title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-background p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary bg-opacity-5 rounded-lg flex items-center justify-center mr-4 p-2">
          <img src={iconUrl} alt={title} className="w-full h-full object-contain" />
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
              iconUrl={category.iconUrl}
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
