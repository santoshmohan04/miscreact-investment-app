import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;

const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}

  return (
    <React.Fragment>
       <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput}/>}
    </React.Fragment>
  )
}

export default App
