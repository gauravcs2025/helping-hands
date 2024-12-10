import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import toast from 'react-hot-toast';

export function VetSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm && !location) {
      toast.error('Please enter a search term or location');
      return;
    }
    toast.success('Searching for veterinarians...');
  };

  return (
    <Card className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Find a Veterinarian</h2>
        <Button
          variant="outline"
          size="sm"
          icon={<Filter className="w-4 h-4" />}
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or specialization"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-3 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Available Today</Button>
                <Button variant="outline" size="sm">Emergency Care</Button>
                <Button variant="outline" size="sm">House Calls</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Dogs</Button>
                <Button variant="outline" size="sm">Cats</Button>
                <Button variant="outline" size="sm">Exotic Pets</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button type="submit" className="w-full">
          Search
        </Button>
      </form>
    </Card>
  );
}