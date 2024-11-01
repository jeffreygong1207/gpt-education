import React from "react";
import { roundOnePrompts } from "./prompts/roundOnePrompts";
import { CipherRound } from "./CipherRound";

interface RoundOneProps {
  onComplete: (isCorrect: boolean, selectedLetters: Set<number>) => void;
}

export function RoundOne({ onComplete }: RoundOneProps) {
  const promptID = Math.floor(Math.random() * roundOnePrompts.length);
  const randomPrompt = roundOnePrompts[promptID];

  return (
    <CipherRound
      roundNumber={1}
      reference={randomPrompt.reference}
      message={randomPrompt.message}
      promptID={promptID}
      onComplete={onComplete}
    />
  );
}
