import "./App.css";
import { useState } from "react";

function App() {
  const sample = {
    content:
      "People’s lives don’t end when they die, it ends when they lose faith.",
    author: "Itachi Uchiha",
    tags: ["Sad", "Naruto", "Anime"],
  };
  const [quote, setQuote] = useState(sample);
  async function getAdvice() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const advice = await response.json();
      console.log(advice);
      setQuote(advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }
  function copy() {
    navigator.clipboard.writeText(quote.content);
  }
  return (
    <div className="App">
      <Card quote={quote} />
      <Clicks func={getAdvice} copy={copy} />
    </div>
  );
}

function Card({ quote }) {
  if (!quote) {
    return (
      <div className="Card">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="Card">
      <h2>{quote.author}</h2>
      <Tags tags={quote.tags} />
      <h1>{quote.content}</h1>
    </div>
  );
}
function Tags({ tags }) {
  if (!tags) {
    return (
      <div>
        <p>No Tags</p>
      </div>
    );
  }
  return (
    <div className="Tags">
      {tags.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

function Clicks({ func, copy }) {
  return (
    <div className="Click">
      <button className="Buttons Left" onClick={func}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 15.2L2.29289 14.4929L1.58579 15.2L2.29289 15.9071L3 15.2ZM9.8 15.2L9.8 16.2L9.8 15.2ZM14.8 11.2C14.8 10.6477 14.3523 10.2 13.8 10.2C13.2477 10.2 12.8 10.6477 12.8 11.2L14.8 11.2ZM6.29289 10.4929L2.29289 14.4929L3.70711 15.9071L7.70711 11.9071L6.29289 10.4929ZM2.29289 15.9071L6.29289 19.9071L7.70711 18.4929L3.70711 14.4929L2.29289 15.9071ZM3 16.2L9.8 16.2L9.8 14.2L3 14.2L3 16.2ZM9.8 16.2C12.5614 16.2 14.8 13.9614 14.8 11.2L12.8 11.2C12.8 12.8569 11.4569 14.2 9.8 14.2L9.8 16.2Z"
            fill="#4A5567"
          />
          <path
            d="M21.5 8.8L22.2071 9.50711L22.9142 8.80001L22.2071 8.0929L21.5 8.8ZM14.2 8.80001L14.2 9.80001L14.2 9.80001L14.2 8.80001ZM9.20001 12.8C9.20001 13.3523 9.64773 13.8 10.2 13.8C10.7523 13.8 11.2 13.3523 11.2 12.8L9.20001 12.8ZM18.2071 13.5071L22.2071 9.50711L20.7929 8.0929L16.7929 12.0929L18.2071 13.5071ZM22.2071 8.0929L18.2071 4.0929L16.7929 5.50711L20.7929 9.50711L22.2071 8.0929ZM21.5 7.8L14.2 7.80001L14.2 9.80001L21.5 9.8L21.5 7.8ZM14.2 7.80001C11.4386 7.80002 9.20001 10.0386 9.20001 12.8L11.2 12.8C11.2 11.1432 12.5432 9.80002 14.2 9.80001L14.2 7.80001Z"
            fill="#4A5567"
          />
        </svg>
      </button>
      <button className="Buttons Right" onClick={copy}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10"
            stroke="#4A5567"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12H8"
            stroke="#4A5567"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14"
            stroke="#4A5567"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
export default App;
