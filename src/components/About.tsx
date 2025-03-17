import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Section } from './ui/Section';
import { fadeInUp, staggerContainer } from '../utils/animation';

export const About = () => {
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  const timeline = [
    {
      icon: <GraduationCap />,
      title: "B.Tech in Computer Science Engineering",
      organization: 'VIT University, Chennai',
      period: '2020 - 2024',
      description: 'CSE with Specialization in Artificial Intelligence and Machine Learning',
    },
    {
      icon: <Award />,
      title: 'Secretary at NSS',
      organization: 'National Service Scheme (NSS)',
      period: '2021 - 2024',
      description: 'Volunteer and Secretary at NSS, VIT Chennai',
    },
    {
      icon: <Briefcase />,
      title: 'Freelance LLM Trainer & Coding Expert',
      organization: 'Outlier.ai',
      period: '2024',
      description: 'Contributed to training generative AI models by evaluating and ranking code, crafting computer science questions, and providing detailed feedback on AI-generated code in Python to ensure accuracy and efficiency.',
    },
    {
      icon: <Briefcase />,
      title: 'Junior Developer',
      organization: 'ILaqa Technologies',
      period: 'July 2024 - February 2025',
      description: 'Developed and maintained APIs using Node.js, collaborated on database solutions with MongoDB, and enhanced application performance and scalability, contributing to improved system efficiency. ',
    },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio Section */}
        <motion.div
          ref={bioRef}
          variants={fadeInUp}
          initial="hidden"
          animate={bioInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <img
              src="/IMG_7885.png"
              alt="Profile"
              className="w-full h-full object-cover"
              // loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
              As a passionate developer with a focus on AI and Machine Learning, 
              I combine technical expertise with creative problem-solving to design 
              and implement innovative solutions. My journey in technology began with 
              a fascination for how machines can learn and adapt, which led me to 
              pursue advanced studies in Computer Science.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
              When I'm not coding or training models, you'll find me working on hobby projects, 
              exploring the latest AI tools, or contributing to open-source projects. I believe in the power of technology to solve 
              real-world problems and am always seeking new ways to push 
              the boundaries of what's possible in the world of AI.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          variants={staggerContainer}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative pl-12 pb-8 last:pb-0"
            >
              <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                  {item.icon}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    {item.organization}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};