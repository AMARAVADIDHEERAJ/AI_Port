import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Server, GitBranch, Users, Cloud } from 'lucide-react';

const skills = [
  {
    name: 'Artificial Intelligence',
    icon: <Brain className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Machine Learning',
    icon: <Code className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'MongoDB, SQL',
    icon: <Database className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Google Cloud',
    icon: <Cloud className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Version Control',
    icon: <GitBranch className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Python',
    icon: <Code className="w-6 h-6" />,
    category: 'Technical',
  },
  {
    name: 'Team Collaboration',
    icon: <Users className="w-6 h-6" />,
    category: 'Soft Skills',
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};