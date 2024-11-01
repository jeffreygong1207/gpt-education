import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { CipherInfo } from './CipherInfo';

interface GrammarlyRoundProps {
  roundNumber: number;
  reference: string;
  message: string;
  incorrectIndexes: number[];
  onComplete: (isCorrect: boolean, selectedLetters: Set<number>) => void;
  forcedAccuracy?: number;
}

export function GrammarlyRound({ 
  roundNumber, 
  reference, 
  message, 
  incorrectIndexes,
  onComplete,
  forcedAccuracy 
}: GrammarlyRoundProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [selectedLetters, setSelectedLetters] = useState<Set<number>>(new Set());
  const [grammarlyAccuracy, setGrammarlyAccuracy] = useState<number>(0);
  const [grammarlyHighlights, setGrammarlyHighlights] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Use forced accuracy if provided, otherwise randomly select
    const accuracy = forcedAccuracy ?? [0, 0.5, 1][Math.floor(Math.random() * 3)];
    setGrammarlyAccuracy(accuracy);

    // Generate Grammarly highlights based on accuracy
    const highlights = new Set<number>();
    const shuffledIndexes = [...incorrectIndexes].sort(() => Math.random() - 0.5);
    const numHighlights = Math.floor(incorrectIndexes.length * accuracy);
    
    // Add correct highlights based on accuracy
    shuffledIndexes.slice(0, numHighlights).forEach(index => highlights.add(index));

    // Add some random incorrect highlights if accuracy is not 100%
    if (accuracy < 1) {
      const possibleIndexes = Array.from({ length: message.length }, (_, i) => i)
        .filter(i => !incorrectIndexes.includes(i) && message[i] !== ' ');
      const numRandomHighlights = Math.floor(Math.random() * 3) + 2; // 2-4 random highlights
      
      for (let i = 0; i < numRandomHighlights; i++) {
        const randomIndex = possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
        highlights.add(randomIndex);
      }
    }

    setGrammarlyHighlights(highlights);
  }, [message, incorrectIndexes, forcedAccuracy]);

  const handleLetterClick = (index: number) => {
    if (!selectedAnswer === false) return;
    
    const newSelected = new Set(selectedLetters);
    if (newSelected.has(index)) {
      newSelected.delete(index);
      // If this was a Grammarly highlight, add it back
      if (grammarlyHighlights.has(index)) {
        grammarlyHighlights.add(index);
      }
    } else {
      newSelected.add(index);
      // Remove Grammarly highlight when selecting
      grammarlyHighlights.delete(index);
    }
    setSelectedLetters(newSelected);
  };

  const handleContinue = () => {
    onComplete(selectedAnswer!, selectedLetters);
  };

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8 p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-3xl font-bold text-white">Round {roundNumber}</h2>
          <CipherInfo />
        </div>
        
        <div className="bg-gray-900/50 p-8 rounded-xl border-2 border-blue-500/30 backdrop-blur-sm">
          <div className="mb-8">
            <p className="text-lg text-blue-400 font-semibold mb-2">Reference Text:</p>
            <p className="text-xl text-white font-mono bg-black/30 p-4 rounded-lg border border-blue-500/20">
              {reference}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <p className="text-lg text-emerald-400 font-semibold">
                Grammarly suggests that the highlighted letters may be incorrect
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {message.split('').map((letter, index) => (
                <button
                  key={index}
                  onClick={() => handleLetterClick(index)}
                  className={`
                    w-8 h-8 flex items-center justify-center
                    rounded border-2 transition-all duration-200
                    ${letter === ' ' ? 'border-transparent' : 'border-blue-500/50'}
                    ${selectedLetters.has(index) 
                      ? 'bg-red-500/30 border-red-500' 
                      : grammarlyHighlights.has(index)
                        ? 'bg-emerald-500/20 border-emerald-500'
                        : 'hover:border-blue-400'
                    }
                    ${!selectedAnswer === false && letter !== ' ' ? 'cursor-pointer' : ''}
                  `}
                  disabled={selectedAnswer !== false || letter === ' '}
                >
                  <span className="text-lg font-mono">
                    {letter}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xl text-blue-400 font-semibold mb-4">
                Is this cipher correct?
              </p>
              
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setSelectedAnswer(true)}
                  className={`
                    px-6 py-2 rounded-lg font-semibold transition-all
                    ${selectedAnswer === true 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}
                  `}
                >
                  Yes
                </button>
                <button
                  onClick={() => setSelectedAnswer(false)}
                  className={`
                    px-6 py-2 rounded-lg font-semibold transition-all
                    ${selectedAnswer === false 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}
                  `}
                >
                  No
                </button>
              </div>
            </div>

            {selectedAnswer === false && (
              <div className="mt-8 space-y-4">
                <p className="text-lg text-blue-400">
                  Please select the incorrect letters in the cipher above
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Click on the letters to highlight errors</span>
                </div>
              </div>
            )}

            {(selectedAnswer === true || selectedLetters.size > 0) && (
              <button
                onClick={handleContinue}
                className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
              >
                <span className="relative z-10">Continue</span>
                <div className="absolute inset-0 rounded-lg animate-pulse bg-blue-400/20 group-hover:bg-blue-400/30 -z-0"></div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}