import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Crop Recommendation System',
    description:
      'Developed a 97% accurate machine learning model using Python to predict suitable crops based on comprehensive analysis of soil parameters and environmental factors, integrating decision tree, random forest, logistic regression, and Gaussian Naive Bayes algorithms.',
    technologies: ['Python', 'Random Forest', 'Logistic Regression'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ',
    category: 'AI/ML',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGkrTOERTS9ebKFRXstOKgRZBOGPk8qghNA&s',
  },
  {
    id: 2,
    title: 'Network Intrusion Detection System',
    description:
      'Engineered a deep learning model consisting of stacked Convolution1D and Maxpooling1D layers with Adam Optimizer to detect network intrusions and notify administrators, achieving a high accuracy rate of 98.59%.',
    technologies: ['Python', 'DL', 'CNN', 'Adam'],
    githubUrl:
      'https://github.com/AMARAVADIDHEERAJ/Network-Intrusion-Detection-System-Using-Deep-Learning',
    category: 'AI/ML',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMOTtFgb_efPWt4I7v16CNnoEqc0T0p-WFg&s',
  },
  {
    id: 3,
    title: 'ECGNET: A Deep Learning Approach for Rapid Arrhythmia Classification',
    description:
      'Created a deep learning model using 2D CNN with data augmentation to predict arrhythmia diseases using ECG signals, integrated with a Flask application, achieving 95.3% accuracy rate.',
    technologies: ['Python', 'CNN', 'ECG'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ',
    category: 'AI/ML',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWMe45dFlwsLVTq4tWxPFTtUkRxhZFIipfg&s',
  },
];