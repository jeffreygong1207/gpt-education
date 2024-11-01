import React from 'react';
import { KeyRound } from 'lucide-react';
import { CipherInfo } from './CipherInfo';

interface InstructionsProps {
  onNext: () => void;
}

export function Instructions({ onNext }: InstructionsProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 p-6">
      <div className="animate-pulse">
        <KeyRound className="w-16 h-16 mx-auto text-blue-500" />
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Cipher Instructions
        </h2>

        <div className="bg-gray-900/50 p-6 rounded-xl border-2 border-blue-500/30 backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Cipher Key</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blue-300 mb-1">Plaintext Alphabet</p>
                <div className="bg-black/30 p-3 rounded-lg border border-blue-500/20">
                  <p className="text-lg font-mono tracking-wider">abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-300 mb-1">Ciphertext Alphabet</p>
                <div className="bg-black/30 p-3 rounded-lg border border-blue-500/20">
                  <p className="text-lg font-mono tracking-wider">yplxmwvsfzrqonkjihagteducb</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            This is the cipher for this task. Sentences and words will be coded using
            these rules. The encoded cipher may or may not be correct. It is up to
            you to determine whether the following prompts are correct or incorrect.
          </p>
          
          <div className="mt-6 text-gray-300">
            <p className="font-semibold text-blue-400">Your Task:</p>
            <ol className="text-left list-decimal list-inside space-y-2 mt-2">
              <li>First select whether the example is correct or incorrect</li>
              <li>After that, select where in the text there are letters out of place or use the text box to describe the error</li>
            </ol>
          </div>
        </div>

        <button
          onClick={onNext}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
        >
          <span className="relative z-10">Begin Challenge</span>
          <div className="absolute inset-0 rounded-lg animate-pulse bg-blue-400/20 group-hover:bg-blue-400/30 -z-0"></div>
        </button>
      </div>
    </div>
  );
}