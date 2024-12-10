import React, { useState } from 'react';
import { PawPrint, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { SignInModal } from '../auth/SignInModal';

export function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8" />
            <span className="text-2xl font-bold">Helping Hand</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#appointments" className="hover:text-teal-200 transition-colors">
              Appointments
            </a>
            <a href="#records" className="hover:text-teal-200 transition-colors">
              Records
            </a>
            <a href="#resources" className="hover:text-teal-200 transition-colors">
              Resources
            </a>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <UserCircle className="h-6 w-6" />
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSignInOpen(true)}
                className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </nav>
      </div>
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </header>
  );
}