import React from "react";
import { roundTwoPrompts } from "./prompts/roundTwoPrompts";
import { CipherRound } from "./CipherRound";

interface RoundTwoProps {
  onComplete: (isCorrect: boolean, selectedLetters: Set<number>) => void;
}

export function RoundTwo({ onComplete }: RoundTwoProps) {
  const promptID = Math.floor(Math.random() * roundTwoPrompts.length);
  const randomPrompt = roundTwoPrompts[promptID];

  return (
    <CipherRound
      roundNumber={2}
      reference={randomPrompt.reference}
      message={randomPrompt.message}
      promptID={promptID}
      onComplete={onComplete}
    />
  );
}
