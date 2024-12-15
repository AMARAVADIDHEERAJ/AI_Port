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
      title: "Bachelor's in Computer Science",
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
      title: 'Freelancer at Outlier',
      organization: 'Outlier',
      period: '2024',
      description: 'Remote AI Trainer',
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
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              As a passionate Developer with a focus on AI and Machine Learning, 
              I bring together technical expertise and creative problem-solving 
              to build innovative solutions. My journey in technology began with 
              a fascination for how machines can learn and adapt, leading me to 
              pursue advanced studies in Computer Science.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I'm not coding or training models, you'll find me contributing 
              to open-source projects, writing technical blogs, or mentoring 
              aspiring developers. I believe in the power of technology to solve 
              real-world problems and am constantly exploring new ways to push 
              the boundaries of what's possible.
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