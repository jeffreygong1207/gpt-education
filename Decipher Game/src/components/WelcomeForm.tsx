import React from 'react';
import { Brain } from 'lucide-react';

interface WelcomeFormProps {
  formData: {
    userId: string;
    name: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string) => void;
}

export function WelcomeForm({ formData, onSubmit, onChange }: WelcomeFormProps) {
  return (
    <div className="text-center space-y-8">
      <div className="animate-pulse">
        <Brain className="w-20 h-20 mx-auto text-blue-500" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Welcome to the Decipher Game
      </h1>
      
      <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <div className="relative group">
            <input
              type="text"
              value={formData.userId}
              onChange={(e) => onChange('userId', e.target.value)}
              className="w-full bg-black border-2 border-blue-500 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="User ID"
              required
            />
            <div className="absolute inset-0 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 -z-10 transition-colors"></div>
          </div>

          <div className="relative group">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full bg-black border-2 border-blue-500 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Your Name"
              required
            />
            <div className="absolute inset-0 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 -z-10 transition-colors"></div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 relative group"
        >
          <span className="relative z-10">Next</span>
          <div className="absolute inset-0 rounded-lg animate-pulse bg-blue-400/20 group-hover:bg-blue-400/30 -z-0"></div>
        </button>
      </form>
    </div>
  );
}