import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions } from "./Api";
import { Difficulty, QuestionState } from "./Api";

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    try {
      setLoading(true);
      setGameOver(false);
      const newQuestions = await fetchQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
    } catch (error) {
      console.log("sadsd", error);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e?.currentTarget?.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {};
    }
  };

  const nextQuestion = () => {};

  return (
    <>
      <h1>React Typescript Quiz App</h1>
      {gameOver || userAnswers?.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start Trivia</button>
      ) : null}
      {!gameOver ? <p>Score:{score}</p> : null}
      {loading && <p>Loading Questions:</p>}

      {!loading && !gameOver && (
        <QuestionCard
          question={questions[number]?.question}
          answers={questions[number]?.answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
        />
      )}

      {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 && (
        <button
          onClick={nextQuestion}
          style={{
            marginTop: "20px",
          }}
        >
          Next Question
        </button>
      )}
    </>
  );
}

export default App;
