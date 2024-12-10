import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import type { Appointment } from '../../types';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

interface AppointmentCardProps {
  appointment: Appointment;
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <Card
      onClick={() => console.log('View appointment details')}
      className="hover:border-teal-500 border-2 border-transparent"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div>
            <motion.h3 
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {appointment.petName}
            </motion.h3>
            <span className="text-teal-600 font-medium">{appointment.vetName}</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{appointment.time}</span>
            </div>
          </div>
          
          <p className="text-gray-700">{appointment.reason}</p>
        </div>
        
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Card>
  );
}