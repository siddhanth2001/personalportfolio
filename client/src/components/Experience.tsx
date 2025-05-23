import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Building2, Cog, Laptop } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  iconUrl?: string;
  icon?: React.ReactElement;
  delay: number;
}

const experiences = [
  {
    title: "Research Assistant",
    company: "Portland State University",
    period: "Jan 2025 - Present",
    description:
      "Researching how Artificial Intelligence can enhance personalized recommendations by adapting to user behavior. Focusing on real-world applications in mobile apps, education platforms, and healthcare systems..",
    iconUrl: "https://i.postimg.cc/RZyFv5XP/image.png",
    delay: 0.1,
  },
  {
    title: "Front Desk Agent & IT Support",
    company: "University Place Hotel",
    period: "May 2024 - Present",
    description:
      "Assisted guests with check-ins and service requests while managing basic IT operations such as troubleshooting front desk systems and coordinating with technical support.",
    iconUrl: "https://i.postimg.cc/RZyFv5XP/image.png",
    delay: 0.2,
  },
  {
    title: "Software Intern",
    company: "Bionic Engineers",
    period: "Sep 2022 - Jan 2023",
    description:
      "Developed a web application using Django and SQL with seamless frontend-backend integration.Implemented CI/CD pipelines, optimized backend performance, and deployed the app on secure cloud infrastructure.",
    icon: <Cog className="text-white" />,
    delay: 0.3,
  },
];

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  icon,
  iconUrl,
  delay,
}: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-12 ml-8 relative last:mb-0"
    >
      <div className="absolute -left-16 mt-1.5 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Briefcase className="text-white h-4 w-4" />
      </div>

      <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <div className="flex items-center mt-2 md:mt-0">
            <CalendarDays className="text-accent mr-2 h-4 w-4" />
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-3 p-2">
            {iconUrl ? (
              <img src={iconUrl} alt={company} className="w-full h-full object-contain" />
            ) : icon ? (
              icon
            ) : (
              <Building2 className="text-white" />
            )}
          </div>
          <h4 className="font-semibold">{company}</h4>
        </div>

        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary inline-block pb-2 border-b-4 border-secondary">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative timeline-container pl-8 md:pl-16">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              icon={exp.icon}
              delay={exp.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
