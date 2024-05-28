import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './Api';
import { Difficulty } from './Api';

const TOTAL_QUESTIONS=10;

function App() {
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState([]);
  const [number,setNumber]=useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const [score,setScore]=useState([]);
  const [gameOver,setGameOver]=useState([]);


  fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY);

  const startTrivia=async()=>{

  }

  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion=()=>{

  }
  
  return (
    <>
      <h1>React Typescript Quiz App</h1>
      <button onClick={startTrivia}>Start Trivia</button>
      <p>Score:</p>
      <p>Loading Questions:</p>
      <QuestionCard
      question={questions[number]?.question}
      answers={questions[number]?.answer}
      callback={checkAnswer}
      userAnswer={userAnswers?userAnswers[number]:undefined}
      questionNumber={number+1}
      totalQuestions={TOTAL_QUESTIONS}
      />
      <button onClick={nextQuestion}>Next Question</button>
    </>
  );
}

export default App;
