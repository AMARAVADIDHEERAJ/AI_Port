import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Crop Recommendation System',
    description:
      'Developed a 97% accurate machine learning model using Python to predict suitable crops based on comprehensive analysis of soil parameters and environmental factors, integrating decision tree, random forest, logistic regression, and Gaussian Naive Bayes algorithms.',
    technologies: ['ML', 'Random Forest', 'Logistic Regression'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ/Crop-Recommendation-System',
    category: 'AI/ML',
    image:
      './src/crop1.png'
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGkrTOERTS9ebKFRXstOKgRZBOGPk8qghNA&s',
  },
  {
    id: 2,
    title: 'Network Intrusion Detection System',
    description:
      'Engineered a deep learning model consisting of stacked Convolution1D and Maxpooling1D layers with Adam Optimizer to detect network intrusions and notify administrators, achieving a high accuracy rate of 98.59%.',
    technologies: ['DL', 'CNN', 'Adam'],
    githubUrl:
      'https://github.com/AMARAVADIDHEERAJ/Network-Intrusion-Detection-System-Using-Deep-Learning',
    category: 'AI/ML',
    image:
      './src/network.png'
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMOTtFgb_efPWt4I7v16CNnoEqc0T0p-WFg&s',
  },
  {
    id: 3,
    title: 'ECGNET: A Deep Learning Approach for Rapid Arrhythmia Classification',
    description:
      'Created a deep learning model using 2D CNN with data augmentation to predict arrhythmia diseases using ECG signals, integrated with a Flask application, achieving 95.3% accuracy rate.',
    technologies: ['CNN', 'ECG', 'Transfer Learning'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ/Enhanced-Arrhythmia-Detection-System-Using-ECGNet',
    category: 'AI/ML',
    image:
      'src/ECG.png'
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWMe45dFlwsLVTq4tWxPFTtUkRxhZFIipfg&s',
  },
  {
    id: 4,
    title: 'Automatic Early Fire Detection System Using Deep Learning',
    description:
      'Devised a wireless fire detection system using GoogLeNet inspired inception network and Python to achieve fast and accurate fire detection with a 96% accuracy rate.',
    technologies: ['Python', 'InceptionNet'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ/Automatic-Early-Fire-Detection-System-Using-Deep-Learning',
    category: 'AI/ML',
    image:
      'src/Firedetection1.png',
  },
  {
    id: 5,
    title: 'Lane Line Detection',
    description:
      'Developed an AI multistage system using Hough transform and Canny Edge detection algorithm to detect lanes on the road, ensuring safe driving.',
    technologies: ['Hough Transform', 'Canny Edge Detection'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ/Lane-Line-Detection',
    category: 'AI/ML',
    image:
      'src/LaneLine.png',
  },
  {
    id: 6,
    title: 'Telecom Customer Retention Prediction Using Deep Learning',
    description:
      'Designed an interactive Power BI dashboard and a 96.2% accurate predictive model to forecast customer retention, utilizing Business Intelligence and RMSPROP technology.',
    technologies: ['Deep Learning', 'RMSPROP', 'POWER BI'],
    githubUrl: 'https://github.com/AMARAVADIDHEERAJ/Telecom-Customer-Retension-Prediction-Using-Deep-Learning',
    category: 'AI/ML',
    image:
      'src/telecom.png',
  },
];