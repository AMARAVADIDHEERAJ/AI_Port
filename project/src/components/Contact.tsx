import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactOptions = [
    {
      title: "Let's Connect",
      description: "Connect with me on LinkedIn for professional networking",
      icon: <Linkedin className="w-8 h-8" />,
      href: "https://www.linkedin.com/in/amaravadi-dheeraj/",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Send a Message",
      description: "Drop me an email at amaravadidheeraj@gmail.com",
      icon: <Mail className="w-8 h-8" />,
      href: "mailto:amaravadidheeraj@gmail.com",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-r ${option.gradient} p-4 text-white`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {option.description}
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <MessageSquare className="w-8 h-8 mx-auto mb-4 text-purple-500" />
          <p className="text-gray-600 dark:text-gray-400">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};