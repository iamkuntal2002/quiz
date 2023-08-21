import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "FIFA has released a three-episode series on the life and career of which Indian football player?",
      answers: [
        {
          text: "Manjeet Kataria",
          correct: false,
        },
        {
          text: "Bajrang Punia",
          correct: false,
        },
        {
          text: "Sunil Chhetri",
          correct: true,
        },
        {
          text: "Neha Singh",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the only Indian on Time's 100 emerging leaders' list?",
      answers: [
        {
          text: "Anil Ambani",
          correct: false,
        },
        {
          text: "Mukesh Ambani",
          correct: false,
        },
        {
          text: "Gautam Adani",
          correct: false,
        },
        {
          text: "Akash Ambani",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Who has been named as the new CEO of the Data Security Council of India?",
      answers: [
        {
          text: "Bipin Rawat",
          correct: false,
        },
        {
          text: "Mukul Bhandarkar",
          correct: false,
        },
        {
          text: "Bepisha Yadav",
          correct: false,
        },
        {
          text: "Vinayak Godse",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "All women, married or unmarried, are entitled to safe and legal abortion till how many weeks of pregnancy?",
      answers: [
        {
          text: "23",
          correct: false,
        },
        {
          text: "24",
          correct: true,
        },
        {
          text: "34",
          correct: false,
        },
        {
          text: "45",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Prime Minister Narendra Modi launched 5G services at India Mobile Congress 2022 in which city?",
      answers: [
        {
          text: "Indore",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "Bengaluru",
          correct: false,
        },
        {
          text: "Hyderabad",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "All India Football Federation has launched a grassroots football development (GFD) scheme in which state?",
      answers: [
        {
          text: "Assam",
          correct: false,
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Arunachal Pradesh",
          correct: true,
        },
        {
          text: "West Bengal",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Peace and non-violence department will be set up in which state?",
      answers: [
        {
          text: "Haryana",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: true,
        },
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Maharastra",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which one became the cleanest city in the country for the sixth time in a row?",
      answers: [
        {
          text: "Indore",
          correct: true,
        },
        {
          text: "Bhopal",
          correct: false,
        },
        {
          text: "Faridabad",
          correct: false,
        },
        {
          text: "Bengaluru",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which Airport was renamed Shaheed Bhagat Singh International Airport?",
      answers: [
        {
          text: "Kochin Airport",
          correct: false,
        },
        {
          text: "New Delhi Airport",
          correct: false,
        },
        {
          text: "Hyderabad Airport",
          correct: false,
        },
        {
          text: "Chandigarh Airport",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "National Pension System (NPS) Diwas is being celebrated on which date?",
      answers: [
        {
          text: "October 1",
          correct: true,
        },
        {
          text: "November 1",
          correct: false,
        },
        {
          text: "October 5",
          correct: false,
        },
        {
          text: "November 5",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "For which language has ICCR signed an MoU with Google for easy search?",
      answers: [
        {
          text: "Sanskriti",
          correct: true,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Bengali",
          correct: false,
        },
        {
          text: "English",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "India has inked a defence export deal with which country?",
      answers: [
        {
          text: "USA",
          correct: false,
        },
        {
          text: "Armenia",
          correct: true,
        },
        {
          text: "Israel",
          correct: false,
        },
        {
          text: "Syria",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who has won Nobel Prize 2022 in Literature?",
      answers: [
        {
          text: "Leila Slimani",
          correct: false,
        },
        {
          text: "Michel Houellebecq",
          correct: false,
        },
        {
          text: "Annie Ernaux",
          correct: true,
        },
        {
          text: "Yasmina Reza",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which company has received India's first Micro Category Drone Certification?",
      answers: [
        {
          text: "Throttle Aerospace Systems Pvt Ltd",
          correct: false,
        },
        {
          text: "Shivayu Aerospace",
          correct: false,
        },
        {
          text: "Aadyah Aerospace Pvt Ltd",
          correct: false,
        },
        {
          text: "Asteria Aerospace Limited",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1000" },
        { id: 6, amount: "₹ 2000" },
        { id: 7, amount: "₹ 4000" },
        { id: 8, amount: "₹ 8000" },
        { id: 9, amount: "₹ 16000" },
        { id: 10, amount: "₹ 32000" },
        { id: 11, amount: "₹ 64000" },
        { id: 12, amount: "₹ 125000" },
        { id: 13, amount: "₹ 250000" },
        { id: 14, amount: "₹ 500000" },
        { id: 15, amount: "₹ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
