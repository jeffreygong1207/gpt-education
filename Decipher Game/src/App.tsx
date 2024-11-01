import React, { useState } from "react";
import { WelcomeForm } from "./components/WelcomeForm";
import { Instructions } from "./components/Instructions";
import { CipherChallenge } from "./components/CipherChallenge";
import { CipherChallengeTwo } from "./components/CipherChallengeTwo";
import { Results } from "./components/Results";
import { RoundOne } from "./components/RoundOne";
import { RoundTwo } from "./components/RoundTwo";
import { RoundThree } from "./components/RoundThree";
import { RoundFour } from "./components/RoundFour";
import { FinalScreen } from "./components/FinalScreen";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ppjvtxzghvqxxlcnirzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwanZ0eHpnaHZxeHhsY25pcnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NTQ2NjMsImV4cCI6MjA0NjAzMDY2M30.UstBh8lbP9N1XQUKLUx5BBkPj6zzUglPNhvz1s7_1lk"
);

export default function App() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [practiceOneAnswer, setPracticeOneAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [practiceTwoAnswer, setPracticeTwoAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [roundOneAnswer, setRoundOneAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [roundTwoAnswer, setRoundTwoAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [roundThreeAnswer, setRoundThreeAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [roundFourAnswer, setRoundFourAnswer] = useState<{
    isCorrect: boolean;
    selectedLetters: Set<number>;
  } | null>(null);
  const [grammarlyAccuracy, setGrammarlyAccuracy] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePracticeOneComplete = (answer: boolean, letters: Set<number>) => {
    setPracticeOneAnswer({ isCorrect: answer, selectedLetters: letters });
    handleNextStep();
  };

  const handlePracticeTwoComplete = (answer: boolean, letters: Set<number>) => {
    setPracticeTwoAnswer({ isCorrect: answer, selectedLetters: letters });
    handleNextStep();
  };

  const handleRoundOneComplete = (answer: boolean, letters: Set<number>) => {
    setRoundOneAnswer({ isCorrect: answer, selectedLetters: letters });
    handleNextStep();
  };

  const handleRoundTwoComplete = (answer: boolean, letters: Set<number>) => {
    setRoundTwoAnswer({ isCorrect: answer, selectedLetters: letters });
    handleNextStep();
  };

  const handleRoundThreeComplete = (
    answer: boolean,
    letters: Set<number>,
    accuracy: number
  ) => {
    setRoundThreeAnswer({ isCorrect: answer, selectedLetters: letters });
    setGrammarlyAccuracy(accuracy);
    handleNextStep();
  };

  const handleRoundFourComplete = (answer: boolean, letters: Set<number>) => {
    setRoundFourAnswer({ isCorrect: answer, selectedLetters: letters });
    handleSubmit();
    handleNextStep();
  };

  const handleRetry = () => {
    setPracticeOneAnswer(null);
    setPracticeTwoAnswer(null);
    setCurrentStep(2);
  };

  const handleRestart = () => {
    // Reset all state
    setFormData({ userId: "", name: "" });
    setCurrentStep(0);
    setPracticeOneAnswer(null);
    setPracticeTwoAnswer(null);
    setRoundOneAnswer(null);
    setRoundTwoAnswer(null);
    setRoundThreeAnswer(null);
    setRoundFourAnswer(null);
    setGrammarlyAccuracy(0);
  };

  const handleStartRoundOne = () => {
    setCurrentStep(5); // Move to Round 1
  };

  const handleStartRoundTwo = () => {
    setCurrentStep(6); // Move to Round 2
  };

  const handleStartRoundThree = () => {
    setCurrentStep(7); // Move to Round 3
  };

  const handleStartRoundFour = () => {
    setCurrentStep(8); // Move to Round 4
  };

  const handleSubmit = async () => {
    // Insert form data into Supabase table
    const { data, error } = await supabase.from("User_Input").insert([
      {
        user_id: formData.userId,
        user_name: formData.name,
        t1_prompt_id: 1, // Assuming you have specific prompt IDs for each test; replace as needed
        t1_correct: roundOneAnswer?.isCorrect || false,
        t1_selections: JSON.stringify(
          Array.from(practiceOneAnswer?.selectedLetters || [])
        ),
        t2_prompt_id: 2,
        t2_correct: roundTwoAnswer?.isCorrect || false,
        t2_selections: JSON.stringify(
          Array.from(practiceTwoAnswer?.selectedLetters || [])
        ),
        t3_prompt_id: 3,
        t3_setting: grammarlyAccuracy, // Assuming Grammarly accuracy applies to t3_setting
        t3_suggestions: "Your suggestions here", // Adjust with actual data if available
        t3_correct: roundThreeAnswer?.isCorrect || false,
        t3_selections: JSON.stringify(
          Array.from(roundThreeAnswer?.selectedLetters || [])
        ),
        t4_prompt_id: 4,
        t4_setting: grammarlyAccuracy,
        t4_suggestions: "Your suggestions here", // Adjust as needed
        t4_correct: roundFourAnswer?.isCorrect || false,
        t4_selections: JSON.stringify(
          Array.from(roundFourAnswer?.selectedLetters || [])
        ),
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  };

  const checkSuccess = () => {
    return (
      practiceOneAnswer?.isCorrect === true &&
      practiceTwoAnswer?.isCorrect === false &&
      practiceTwoAnswer?.selectedLetters.has(0)
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div
        className={`transition-all duration-500 transform ${
          currentStep === 0 ? "translate-x-0" : "translate-x-[-100vw] absolute"
        }`}
      >
        <WelcomeForm
          formData={formData}
          onSubmit={handleFormSubmit}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 1
            ? "translate-x-0"
            : currentStep < 1
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <Instructions onNext={handleNextStep} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 2
            ? "translate-x-0"
            : currentStep < 2
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <CipherChallenge onComplete={handlePracticeOneComplete} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 3
            ? "translate-x-0"
            : currentStep < 3
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <CipherChallengeTwo onComplete={handlePracticeTwoComplete} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 4
            ? "translate-x-0"
            : currentStep < 4
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <Results
          success={checkSuccess()}
          onRetry={handleRetry}
          onStartRoundOne={handleStartRoundOne}
        />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 5
            ? "translate-x-0"
            : currentStep < 5
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <RoundOne onComplete={handleRoundOneComplete} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 6
            ? "translate-x-0"
            : currentStep < 6
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <RoundTwo onComplete={handleRoundTwoComplete} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 7
            ? "translate-x-0"
            : currentStep < 7
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <RoundThree onComplete={handleRoundThreeComplete} />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 8
            ? "translate-x-0"
            : currentStep < 8
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <RoundFour
          onComplete={handleRoundFourComplete}
          grammarlyAccuracy={grammarlyAccuracy}
        />
      </div>

      <div
        className={`transition-all duration-500 transform ${
          currentStep === 9
            ? "translate-x-0"
            : currentStep < 9
            ? "translate-x-[100vw] absolute"
            : "translate-x-[-100vw] absolute"
        }`}
      >
        <FinalScreen onRestart={handleRestart} />
      </div>
    </div>
  );
}
