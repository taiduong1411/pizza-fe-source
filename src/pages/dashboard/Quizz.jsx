import clsx from 'clsx';
import React, { useState } from 'react';
import { FaRegSadTear, FaRegSmile } from 'react-icons/fa';
import { QuizData } from '../../data/quizz-data';
import { DashboardLayout } from '../../layouts/DashboardLayout';

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const totalQuestions = QuizData.length;

  const handleAnswerOptionClick = (answer) => {
    if (answer === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowFeedback('Correct!');
    } else {
      setShowFeedback('Incorrect!');
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setShowFeedback(null);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuizFinished(true);
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(null);
    setQuizFinished(false);
  };

  const progress = Math.floor((currentQuestion / totalQuestions) * 100);

  return (
    <DashboardLayout>
      <section
        className={clsx(
          'bg-gradient-to-b from-[#0441ac] to-[#00b9fd] text-neutral-50 h-[120vh]  flex justify-center items-center',
          'py-32'
        )}
      >
        <div className="container mx-auto">
          <div className="card bg-white text-black p-8 rounded-lg shadow-lg w-full ">
            <h1 className="text-4xl mb-4 font-bold text-center text-black">
              Quizz App
            </h1>
            <hr />

            <div className="mt-8">
              {!quizFinished ? (
                <>
                  <div className=" flex space-x-5">
                    <div className="flex items-center justify-between gap-2 text-green-500">
                      <FaRegSmile />
                      <span>{score}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-red-500">
                      <FaRegSadTear />
                      <span>{totalQuestions - score}</span>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      {progress > 0 ? (
                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full">
                          {currentQuestion + '/' + totalQuestions}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full">
                          {currentQuestion + '/' + totalQuestions}
                        </span>
                      )}
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-black">
                      <div
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <h2 className="text-3xl mb-6 text-black">
                    {QuizData[currentQuestion].question}
                  </h2>
                  {showFeedback && (
                    <div className="text-red-500">{showFeedback}</div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {QuizData[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className="bg-neutral-300 text-neutral-900 hover:bg-neutral-900 rounded-lg hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => handleAnswerOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-7">
                    <button
                      className="bg-blue-400 hover:bg-neutral-900 rounded-lg p-3  text-white rounded-lg py-3 transition duration-200"
                      onClick={() =>
                        currentQuestion > 0 &&
                        setCurrentQuestion(currentQuestion - 1)
                      }
                    >
                      Back
                    </button>
                    <button
                      className="bg-blue-400 hover:bg-neutral-900 rounded-lg p-3  text-white rounded-lg py-3 transition duration-200"
                      onClick={() =>
                        currentQuestion < totalQuestions - 1 &&
                        setCurrentQuestion(currentQuestion + 1)
                      }
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h2 className="text-4xl mb-6 font-semibold text-black">
                      Quiz Completed!
                    </h2>
                    11 minutes ago Uncommitted changes
                    <h3 className="text-2xl mb-8 text-black">
                      Your score is: {score}
                    </h3>
                    <button
                      className="bg-blue-400 hover:bg-neutral-900 rounded-lg p-3  text-white rounded-lg py-3 transition duration-200"
                      onClick={restartQuiz}
                    >
                      Restart Quiz
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Quizz;
