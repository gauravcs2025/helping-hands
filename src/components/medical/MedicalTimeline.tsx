import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'checkup' | 'vaccination' | 'treatment' | 'emergency';
}

const events: TimelineEvent[] = [
  {
    date: '2024-03-15',
    title: 'Annual Checkup',
    description: 'Regular health examination and vaccinations update',
    type: 'checkup'
  },
  {
    date: '2024-02-28',
    title: 'Rabies Vaccination',
    description: '3-year rabies vaccination administered',
    type: 'vaccination'
  },
  {
    date: '2024-02-10',
    title: 'Dental Cleaning',
    description: 'Professional dental cleaning and examination',
    type: 'treatment'
  }
];

const typeColors = {
  checkup: 'bg-blue-100 text-blue-800',
  vaccination: 'bg-green-100 text-green-800',
  treatment: 'bg-purple-100 text-purple-800',
  emergency: 'bg-red-100 text-red-800'
};

export function MedicalTimeline() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">Medical History</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-full before:z-10"
          >
            {index !== events.length - 1 && (
              <div className="absolute left-2.5 top-2 w-0.5 h-full -z-10 bg-gray-200" />
            )}
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${typeColors[event.type]}`}>
                  {event.type}
                </span>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}