
import React, { useState } from 'react';
import './app.css'

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
  {
    questionText: 'What is react?',
    answerOptions: [
      { answerText: 'framework', isCorrect: false },
      { answerText: 'programming language', isCorrect: false },
      { answerText: 'browser', isCorrect: false },
      { answerText: 'library', isCorrect: true },
    ],
  },
];





function App() {

  function next(isCorrect){
      if(isCorrect){
        setScore(score+1)
      }
      const next = currentQuestion+1;
      if(next < questions.length){
        setCurrentQuestion(next)
      }
      else{
        setShowscreen(true)
      }
  }
  
  const [score ,setScore] = useState(0);
const [showscreen, setShowscreen] = useState(false)
const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='app'>
    { showscreen ?
        (<div className='score-section'>
        score is {score}
        </div> ) : 
      (
            <div  className='question-section'>
              <h3>{currentQuestion}/{questions.length}</h3>    
               <h1> {questions[currentQuestion].questionText}</h1>

              {questions[currentQuestion].answerOptions.map((e) =>  <div className='answer-section'>
                
              {/* <input key={e.answerText} type='radio' value={e.answerText} />
              <label>{e.answerText}</label>  */}
              
              <button onClick={ ()=> next(e.isCorrect)}>{e.answerText}</button>   
                </div> 
              ) 
              }
               
              
            </div>  
      )
      }
    </div>
  );
}

export default App;
