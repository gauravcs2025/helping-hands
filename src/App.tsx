import React from 'react';
import { Header } from './components/layout/Header';
import { AppointmentCard } from './components/appointments/AppointmentCard';
import { HealthTips } from './components/dashboard/HealthTips';
import { VetSearch } from './components/search/VetSearch';
import { PetProfile } from './components/pets/PetProfile';
import { MedicalTimeline } from './components/medical/MedicalTimeline';
import { EmergencyServices } from './components/emergency/EmergencyServices';
import { Chatbot } from './components/chat/Chatbot';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const samplePet = {
    id: '1',
    name: 'Max',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    owner: 'John Doe'
  };

  const sampleAppointment = {
    id: '1',
    date: '2024-03-20',
    time: '14:30',
    petName: 'Max',
    vetName: 'Dr. Sarah Johnson',
    reason: 'Annual checkup and vaccinations'
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <PetProfile pet={samplePet} />
              
              <section>
                <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
                <div className="grid gap-6">
                  <AppointmentCard appointment={sampleAppointment} />
                </div>
              </section>
              
              <MedicalTimeline />
              
              <section className="grid md:grid-cols-2 gap-8">
                <HealthTips />
                <EmergencyServices />
              </section>
            </div>
            
            <aside className="space-y-8">
              <VetSearch />
            </aside>
          </div>
        </main>
        <Chatbot />
        <Toaster position="top-right" />
      </div>
    </AuthProvider>
  );
}

export default App;