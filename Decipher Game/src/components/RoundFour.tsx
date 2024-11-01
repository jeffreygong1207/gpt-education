import React from "react";
import { roundFourPrompts } from "./prompts/roundFourPrompts";
import { GrammarlyRound } from "./GrammarlyRound";

interface RoundFourProps {
  onComplete: (isCorrect: boolean, selectedLetters: Set<number>) => void;
  grammarlyAccuracy: number;
}

export function RoundFour({ onComplete, grammarlyAccuracy }: RoundFourProps) {
  const promptID = Math.floor(Math.random() * roundFourPrompts.length);
  const randomPrompt = roundFourPrompts[promptID];

  return (
    <GrammarlyRound
      roundNumber={4}
      reference={randomPrompt.reference}
      message={randomPrompt.message}
      incorrectIndexes={randomPrompt.incorrectIndexes}
      promptID={promptID}
      onComplete={onComplete}
      forcedAccuracy={grammarlyAccuracy}
    />
  );
}
