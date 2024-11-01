import React from 'react';
import Confetti from 'react-confetti';
import { Trophy, RefreshCw } from 'lucide-react';

interface ResultsProps {
  success: boolean;
  onRetry: () => void;
  onStartRoundOne?: () => void;
}

export function Results({ success, onRetry, onStartRoundOne }: ResultsProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 p-6">
      {success && <Confetti numberOfPieces={200} recycle={false} />}
      
      <div className="animate-bounce">
        {success ? (
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        ) : (
          <RefreshCw className="w-16 h-16 mx-auto text-blue-500" />
        )}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {success 
            ? "Congratulations!" 
            : "Practice Round Incomplete"}
        </h2>

        <div className="bg-gray-900/50 p-6 rounded-xl border-2 border-blue-500/30 backdrop-blur-sm">
          <p className="text-xl text-gray-300 leading-relaxed">
            {success 
              ? "You have made it past the practice round!" 
              : "You did not answer all the practice questions correctly"}
          </p>
        </div>

        {success ? (
          <button
            onClick={onStartRoundOne}
            className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group"
          >
            <span className="relative z-10">Move on to Round 1</span>
            <div className="absolute inset-0 rounded-lg animate-pulse bg-green-400/20 group-hover:bg-green-400/30 -z-0"></div>
          </button>
        ) : (
          <button
            onClick={onRetry}
            className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 rounded-lg animate-pulse bg-blue-400/20 group-hover:bg-blue-400/30 -z-0"></div>
          </button>
        )}
      </div>
    </div>
  );
}