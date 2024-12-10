import React from 'react';
import { PawPrint, Calendar, Activity, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import type { Pet } from '../../types';

interface PetProfileProps {
  pet: Pet;
}

export function PetProfile({ pet }: PetProfileProps) {
  const healthMetrics = [
    { icon: <Calendar />, label: 'Age', value: `${pet.age} years` },
    { icon: <Activity />, label: 'Last Checkup', value: '2 weeks ago' },
    { icon: <Syringe />, label: 'Vaccinations', value: 'Up to date' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-teal-500 to-teal-600">
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full bg-white p-2 shadow-lg">
              <PawPrint className="w-16 h-16 text-teal-600" />
            </div>
          </div>
        </div>
        
        <div className="pt-16 px-6 pb-6">
          <h2 className="text-2xl font-bold">{pet.name}</h2>
          <p className="text-gray-600">{pet.breed} • {pet.species}</p>
          
          <div className="mt-6 grid grid-cols-3 gap-4">
            {healthMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="inline-block p-2 rounded-full bg-teal-100 text-teal-600 mb-2">
                  {metric.icon}
                </div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="font-medium">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}