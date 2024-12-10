import React from 'react';
import { Phone, AlertTriangle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function EmergencyServices() {
  const emergencyContacts = [
    {
      name: "24/7 Pet Emergency Hospital",
      phone: "1-800-PET-EMRG",
      address: "123 Emergency Lane, Pet City",
      distance: "2.5 miles away"
    },
    {
      name: "Animal Emergency Center",
      phone: "1-888-VET-HELP",
      address: "456 Urgent Care Blvd, Pet City",
      distance: "3.8 miles away"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <Card className="border-l-4 border-red-500">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold">Emergency Services</h2>
        </div>

        <div className="space-y-6">
          {emergencyContacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium">{contact.name}</h3>
                <span className="text-sm text-green-600">{contact.distance}</span>
              </div>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contact.phone}`} className="hover:text-teal-600">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Open 24/7</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <Button
            variant="primary"
            size="lg"
            className="flex-1"
            icon={<Phone className="w-5 h-5" />}
          >
            Call Emergency
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            icon={<MapPin className="w-5 h-5" />}
          >
            Get Directions
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}