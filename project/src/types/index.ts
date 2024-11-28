export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'AI/ML' | 'Web Development' | 'Full Stack';
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Technical' | 'Soft Skills';
  proficiency: number;
}