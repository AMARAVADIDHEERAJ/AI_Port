import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Mail, Brain, Sparkles, Code2 } from 'lucide-react';
import { NeuralNetwork } from './animations/NeuralNetwork';
import { SocialLink } from './ui/SocialLink';
import { MLVisualization } from './animations/MLVisualization';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* AI/ML Visualization */}
          <div className="w-full h-48 mb-8">
            <MLVisualization />
          </div>
          {/* Animated Icons */}
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Brain className="w-12 h-12 text-purple-500" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <Sparkles className="w-12 h-12 text-blue-500 animate-pulse" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Code2 className="w-12 h-12 text-pink-500" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-pink-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-6xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Dheeraj Amaravadi
            </motion.h1>

            <motion.div 
              className="flex flex-col items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <TypeAnimation
                sequence={[
                  'Transforming Ideas into Intelligent Solutions',
                  2000,
                  'Crafting AI-Powered Experiences',
                  2000,
                  'Building the Future with ML',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              />
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about creating intelligent solutions through machine learning and modern web development. Let's build something amazing together.
              </p>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <SocialLink
                href="https://github.com/AMARAVADIDHEERAJ"
                icon={<Github className="w-6 h-6" />}
                gradient="from-blue-500 to-purple-500" label={''}              />
              <SocialLink
                href="https://www.linkedin.com/in/amaravadi-dheeraj/"
                icon={<Linkedin className="w-6 h-6" />}
                gradient="from-purple-500 to-pink-500" label={''}              />
                <SocialLink
                href="https://www.instagram.com/dheeraj_amaravadi/"
                icon={<Instagram className="w-6 h-6" />}
                label="Follow"
                gradient="from-pink-500 to-red-500"                            />
              <SocialLink
                href="mailto:amaravadidheeraj@gmail.com"
                icon={<Mail className="w-6 h-6" />}
                gradient="from-pink-500 to-red-500" label={''}                 />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};