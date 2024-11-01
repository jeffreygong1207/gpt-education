import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export function CipherInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-blue-500/20 transition-colors"
        title="Show cipher key"
      >
        <Info className="w-5 h-5 text-blue-400" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border-2 border-blue-500/30 max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500/20 transition-colors"
            >
              <X className="w-5 h-5 text-red-400" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Cipher Key</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Plaintext Alphabet</h4>
                <div className="bg-black/30 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-xl font-mono tracking-wider">abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Ciphertext Alphabet</h4>
                <div className="bg-black/30 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-xl font-mono tracking-wider">yplxmwvsfzrqonkjihagteducb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}