import { useEffect, useState } from "react";

const Quiz = ({ quiz, setScore, setFinished }) => {
  const [currentQue, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(5);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer, correctAnswer) => {
    console.log(answers, correctAnswer);
    if (answer === correctAnswer && timer > 0) {
      setScore((score) => score + 1);
    }
    if (currentQue + 1 === quiz.length) {
      setFinished(true);
      return;
    }
    setCurrentQuestion(currentQue + 1);
    setTimer(5);
  };

  const handleSkip = () => {
    if (currentQue + 1 === quiz.length) {
      setFinished(true);
      return;
    }

    setCurrentQuestion(currentQue + 1);
    setTimer(5);
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(countdown);
    }
    return () => {
      clearInterval(countdown);
    };
  }, [currentQue, timer]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 4);
    const newAnswers = [...quiz[currentQue].incorrect_answers];
    newAnswers.splice(randomIndex, 0, quiz[currentQue].correct_answer);
    setAnswers(newAnswers);
  }, [currentQue, quiz]);
  return (
    <div className="grid h-screen place-content-center">
      <div className="flex flex-col w-48 gap-2 md:w-96">
        <div className="flex justify-between">
          <h3 className="font-bold md:text-2xl">Question {currentQue + 1}</h3>
          <span className="font-semibold md:text-2xl text-secondary ">
            Timer: {timer}
          </span>
        </div>
        <h4
          className="mb-2 font-medium md:h-24"
          dangerouslySetInnerHTML={{
            __html: quiz[currentQue].question,
          }}
        ></h4>
        {answers.map((answer) => (
          <button
            className="btn-sm btn btn-info"
            onClick={() => {
              handleAnswer(answer, quiz[currentQue].correct_answer);
            }}
            disabled={timer === 0}
          >
            {answer}
          </button>
        ))}
        <button className="mt-2 btn btn-ghost btn-sm" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Quiz;
