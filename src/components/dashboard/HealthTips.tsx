import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export function HealthTips() {
  const tips = [
    {
      title: "Regular Exercise",
      content: "Daily walks help maintain your pet's physical and mental health."
    },
    {
      title: "Balanced Diet",
      content: "Ensure your pet receives proper nutrition with age-appropriate food."
    },
    {
      title: "Dental Care",
      content: "Regular teeth cleaning prevents dental diseases and bad breath."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Card>
      <div className="flex items-center mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
        <h2 className="text-xl font-semibold">Daily Health Tips</h2>
      </div>
      
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            variants={item}
            className="border-l-4 border-teal-500 pl-4 hover:bg-teal-50 transition-colors rounded-r-lg p-3"
          >
            <h3 className="font-medium text-lg">{tip.title}</h3>
            <p className="text-gray-600 mt-1">{tip.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}