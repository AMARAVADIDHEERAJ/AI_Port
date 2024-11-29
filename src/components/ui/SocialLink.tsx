import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  gradient: string;
}

export const SocialLink = ({ href, icon, gradient }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group flex p-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg`}
      // aria-label="Social media link"
      // className={`relative group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg overflow-hidden`}
    >
      {icon}
    </motion.a>
  );
};