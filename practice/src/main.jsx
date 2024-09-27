import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Mini portfolio
// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return (
//     <div>
//       <img className="avatar" src="arrow.png " alt="arrow" />
//     </div>
//   );
// }

// function Intro() {
//   return (
//     <div className="">
//       <h1>Oluwasegun Amao</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
//       <Skill skill="Javascript" emoji="💪" color="yellow" />
//       <Skill skill="Web Design" emoji="💪" color="green" />
//       <Skill skill="Git and Github" emoji="💪" color="red" />
//       <Skill skill="REACT" emoji="💪" color="lightblue" />
//       <Skill skill="Svelte" emoji="💪" color="red" />
//     </div>
//   );
// }
// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

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

// function App() {
//   return (
//     <div>
//       <CountComponent />
//     </div>
//   );
// }

// const CountComponent = () => {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const calculateNewDate = () => {
//     const currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() + (count + step));
//     return currentDate.toDateString();
//   };

//   return (
//     <div>
//       <label>
//         Enter Count:{count}
//         {/* <input
//           type="number"
//           value={count}
//           onChange={(e) => setCount(Number(e.target.value))}
//         /> */}
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <button onClick={() => setCount(count - 1)}>-</button>
//       </label>
//       <br />

//       <label>
//         Enter Step:{step}
//         {/* <input
//           type="number"
//         value = {step}
//           onChange={(e) => setStep(Number(e.target.value))}
//         /> */}
//         <button onClick={() => setStep(step + 1)}>+</button>
//         <button onClick={() => setStep(step - 1)}>-</button>
//       </label>
//       <br />

//       <p>{`The new date, ${
//         count + step
//       } days from today, is: ${calculateNewDate()}`}</p>
//     </div>
//   );
// };

// Get advice
function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}


export default App;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
