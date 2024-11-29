import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/AMARAVADIDHEERAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/amaravadi-dheeraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/dheeraj_amaravadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="amaravadidheeraj@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Dheeraj Amaravadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
