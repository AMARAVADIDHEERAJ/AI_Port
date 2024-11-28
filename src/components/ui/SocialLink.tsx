import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
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
      className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg`}
      aria-label="Social media link"
    >
      {icon}
    </motion.a>
  );
};