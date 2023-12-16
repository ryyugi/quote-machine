import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft, FaQuoteRight}  from "react-icons/fa" ;
import './App.css'


interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length )]
}

const getRandomColor = (): string => {
  

  return 'rgb(${red}, ${blue}, ${green})'
}



function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote)
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())
 
  
  const changeQuote = () => {
    setQuote(getRandomQuote()) ;
    setRandomColor(getRandomColor);
  }

  return <div className="background" 
  style={{ backgroundColor: 'randomColor' }}>
    <div id="quote-box" >
      <div className="quote-content"  style={{color: 'randomColor' }} >
        <FaQuoteLeft size="30" style={{marginright: "10px"}} />
        <h2 id="text">{quote.quote}</h2>
        <FaQuoteRight size="30" style={{marginright: "10px"}} />
        <h4 id="author">{quote.author}</h4>
      </div>
      <div className="buttons" style={{color: randomColor }}>
        <a 
        href={'https://twitter.com/intent/tweet?'}
        id="tweet-quote"
        target="_top"
        style={{
          backgroundColor: "1da1f2" ,
          marginRight: "10px" , 
        }}
        > <FaTwitter color="white" />
        </a>
        <button id="new-quote" onClick={changeQuote}>Generate New Random Quote</button>
      </div>
    </div>
  </div>
   
  
}

export default App
