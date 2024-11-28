import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MLVisualization = () => {
  const [nodes, setNodes] = useState<{ x: number; y: number; radius: number }[]>([]);
  
  useEffect(() => {
    const generateNodes = () => {
      const newNodes = [];
      for (let i = 0; i < 30; i++) {
        newNodes.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: Math.random() * 10 + 5,
        });
      }
      setNodes(newNodes);
    };
    
    generateNodes();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse" />
      
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Connection lines */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="url(#gradient)"
              strokeWidth="0.2"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.radius / 5}
            fill="url(#nodeGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};