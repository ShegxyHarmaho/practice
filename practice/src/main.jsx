import { StrictMode, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createRoot } from "react-dom/client";
import "./index.css";

// Mini portfolio
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="arrow.png " alt="arrow" />
    </div>
  );
}

function Intro() {
  return (
    <div className="">
      <h1>Oluwasegun Amao</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="green" />
      <Skill skill="Git and Github" emoji="💪" color="red" />
      <Skill skill="REACT" emoji="💪" color="lightblue" />
      <Skill skill="Svelte" emoji="💪" color="red" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// Prop validation
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
// greeting

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="John" />
//       <Greeting name="Jane" />
//     </div>
//   );
// }

// counter app

function App() {
  return (
    <div>
      <CountComponent />
    </div>
  );
}

const CountComponent = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const calculateNewDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + (count + step));
    return currentDate.toDateString();
  };

  return (
    <div>
      <label>
        Enter Count:{count}
        {/* <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        /> */}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </label>
      <br />

      <label>
        Enter Step:{step}
        {/* <input
          type="number"
        value = {step}
          onChange={(e) => setStep(Number(e.target.value))}
        /> */}
        <button onClick={() => setStep(step + 1)}>+</button>
        <button onClick={() => setStep(step - 1)}>-</button>
      </label>
      <br />

      <p>{`The new date, ${
        count + step
      } days from today, is: ${calculateNewDate()}`}</p>
    </div>
  );
};

// Get advice
// function App() {
//   const [advice, setAdvice] = useState("");
//   const [count, setCount] = useState(0);

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount((c) => c + 1);
//   }
//   useEffect(function () {
//     getAdvice();
//   }, []);

//   return (
//     <div>
//       <h1>{advice}</h1>
//       <button onClick={getAdvice}>Get advice</button>
//       <Message count={count} />
//     </div>
//   );
// }

// function Message(props) {
//   return (
//     <p>
//       You have read <strong>{props.count}</strong> pieces of advice.
//     </p>
//   );
// }

// Flashcard
// const flashcardData = [
//   {
//     id: 3457,
//     question: "What language is REACT based on?",
//     answer: "Javascript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of REACT apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What is the name of the syntax used to describe a UI in REACT?",
//     answer: "Jsx",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 2002,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 3457,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];
// function App() {
//   return (
//     <div className="flashcards">
//       {flashcardData.map((flashcard, index) => (
//         <Flashcard
//           key={index}
//           question={flashcard.question}
//           answer={flashcard.answer}
//         />
//       ))}
//     </div>
//   );
// }

// function Flashcard({ question, answer }) {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       className={`flashcard ${isFlipped ? "selected" : ""}`}
//       onClick={() => setIsFlipped(!isFlipped)}
//     >
//       {isFlipped ? answer : question}
//     </div>
//   );
// }

export default App;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
