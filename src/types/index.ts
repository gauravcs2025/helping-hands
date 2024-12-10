export interface Appointment {
  id: string;
  date: string;
  time: string;
  petName: string;
  vetName: string;
  reason: string;
}

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  owner: string;
}

export interface Veterinarian {
  id: string;
  name: string;
  specialization: string;
  availability: string[];
  location: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'pet-owner' | 'veterinarian';
}