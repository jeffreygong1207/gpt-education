import React from "react";
import { roundThreePrompts } from "./prompts/roundThreePrompts";
import { GrammarlyRound } from "./GrammarlyRound";

interface RoundThreeProps {
  onComplete: (isCorrect: boolean, selectedLetters: Set<number>) => void;
}

export function RoundThree({ onComplete }: RoundThreeProps) {
  const promptID = Math.floor(Math.random() * roundThreePrompts.length);
  const randomPrompt = roundThreePrompts[promptID];

  return (
    <GrammarlyRound
      roundNumber={3}
      reference={randomPrompt.reference}
      message={randomPrompt.message}
      incorrectIndexes={randomPrompt.incorrectIndexes}
      promptID={promptID}
      onComplete={onComplete}
    />
  );
}
