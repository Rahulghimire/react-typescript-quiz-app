export enum Difficulty{
  EASY="easy",
  MEDIUM="medium",
  HARD="hard"
}
export type Question={
category:string;
correct:string;
difficulty:string;
incorrect_answer:string[];
question:string;
type:string;
}

export type QuestionState=Question & {answer:string[]}

export const fetchQuestions=async(amount:number,difficulty:Difficulty)=>{
  const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data=await((await fetch(endpoint)).json())

}