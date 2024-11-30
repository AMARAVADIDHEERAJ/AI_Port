import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';


export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      icon: <GraduationCap />,
      title: "Bachelor's in Computer Science",
      organization: 'VIT University',
      period: '2020 - 2024',
      description:
        'CSE with Specialization in Artificial Intelligence and Machine Learning',
    },
    {
      icon: <Briefcase />,
      title: 'Freelancer at Outlier',
      organization: 'Outlier',
      period: '2024',
      description: 'Remote AI Training for Hindi Writers',
    },
    {
      icon: <Award />,
      title: 'Secretary at NSS',
      organization: 'National Service Scheme (NSS)',
      period: '2021 - 2024',
      description:
        'Volunteer and Secretary at NSS, VIT Chennai',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/IMG_7885.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                As a passionate developer with a focus on AI and ML,
                I combine strong technical expertise with creative
                problem-solving to build innovative solutions. My journey in
                technology began with a fascination for how machines can learn
                and adapt, which inspired me to specialize in AI and ML during 
                my studies in Computer Science at VIT University.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding or training models, I dedicate time to
                contributing to open-source projects, developing personal hobby projects.
                I believe in the power of
                technology to solve real-world problems and am constantly
                exploring new ways to push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 pb-8"
              >
                <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                    {item.icon}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between mb-2">
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
      </div>
    </section>
  );
};
