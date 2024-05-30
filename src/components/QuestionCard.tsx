import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  console.log("asdfdfsd", question, answers);
  return (
    <div>
      <p
        style={{
          margin: "5px",
        }}
      >
        Question:{questionNumber}/{totalQuestions}
      </p>
      <p>{question}</p>
      {answers?.map((answer) => (
        <div
          key={answer}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <button
            disabled={userAnswer}
            value={answer}
            onClick={callback}
            style={{
              margin: "5px",
            }}
          >
            {answer}
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
