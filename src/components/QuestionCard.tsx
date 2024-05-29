import React from 'react'

type Props={
  question:string;
  answers:string[];
  callback:any;
  userAnswer:any;
  questionNumber:number;
  totalQuestions:number;
}

const QuestionCard:React.FC<Props> = ( {question,
  answers,
  callback,
  userAnswer,  
  questionNumber,
  totalQuestions}) => { 
  return (
    <div>
      <p>Question:{questionNumber}/{totalQuestions}</p>
      {answers?.map(answer=>(
        <div>
          <button disabled={userAnswer} onClick={callback}></button>
        </div>
      ))}

    </div>
  )
}

export default QuestionCard