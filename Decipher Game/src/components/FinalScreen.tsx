import React from 'react';
import { Trophy, Home } from 'lucide-react';
import Confetti from 'react-confetti';

interface FinalScreenProps {
  onRestart: () => void;
}

export function FinalScreen({ onRestart }: FinalScreenProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 p-6">
      <Confetti numberOfPieces={200} recycle={false} />
      
      <div className="animate-bounce">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500" />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
          Congratulations!
        </h2>

        <div className="bg-gray-900/50 p-8 rounded-xl border-2 border-yellow-500/30 backdrop-blur-sm">
          <p className="text-xl text-gray-300 leading-relaxed">
            Thank you for playing our cipher challenge! You've completed all rounds and demonstrated excellent cryptographic skills.
          </p>
        </div>

        <button
          onClick={onRestart}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          <span className="relative z-10">Take me back to start</span>
          <div className="absolute inset-0 rounded-lg animate-pulse bg-blue-400/20 group-hover:bg-blue-400/30 -z-0"></div>
        </button>
      </div>
    </div>
  );
}