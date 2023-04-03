import "./App.css";
import { useState } from "react";
import { ButtonValues } from "./constants/constants";
import ButtonCalculator from "./components/ButtonCalculator";

function App() {
  const [screenMana, setScreenMana] = useState({
    screenInput: "",
    screenAux: "",
  });

  console.log("screenMana1:", screenMana);
  const [operator, setOperator] = useState("");

  function checkOperator(inputValue) {
    switch (operator ? operator : inputValue) {
      case "+":
        console.log("screenMana:", screenMana);
        setScreenMana((prevValue) =>
          !screenMana.screenAux
            ? { ...screenMana, screenAux: screenMana.screenInput }
            : {
                ...screenMana,
                screenAux:
                  Number(screenMana.screenInput) + Number(prevValue.screenAux),
              }
        );
        console.log("screenMana:", screenMana);
        break;
      case "-":
        setScreenMana((prevValue) =>
          !screenMana.screenAux
            ? { ...screenMana, screenAux: screenMana.screenInput }
            : {
                ...screenMana,
                screenAux:
                  Number(screenMana.screenInput) + Number(prevValue.screenAux),
              }
        );
        break;
      case "*":
        setScreenMana((prevValue) =>
          !screenMana.screenAux
            ? { ...screenMana, screenAux: screenMana.screenInput }
            : {
                ...screenMana,
                screenAux:
                  Number(screenMana.screenInput) + Number(prevValue.screenAux),
              }
        );
        break;
      case "/":
        setScreenMana((prevValue) =>
          !screenMana.screenAux
            ? { ...screenMana, screenAux: screenMana.screenInput }
            : {
                ...screenMana,
                screenAux:
                  Number(screenMana.screenInput) + Number(prevValue.screenAux),
              }
        );
        break;
      default:
        break;
    }
  }

  function onHandlerButtonClick(inputValue) {
    switch (inputValue) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case ".":
        setScreenMana((prevValue) => {
          return {
            ...screenMana,
            screenInput: String(prevValue.screenInput + inputValue),
          };
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        checkOperator(inputValue);
        setOperator(inputValue);
        setScreenMana((prevValue) => {
          return {
            ...prevValue,
            screenInput: "",
          };
        });
        break;
      case "=":
        checkOperator(inputValue);
        setScreenMana((prevValue) => {
          return {
            ...prevValue,
            screenInput: prevValue.screenAux,
            screenAux: "",
          };
        });
        setOperator("");
        break;
      case "AC":
        setScreenMana((prevValue) => {
          return {
            ...prevValue,
            screenInput: "",
            screenAux: "",
          };
        });
        setOperator("");
        break;
      case "<--":
        setScreenMana((prevValue) => {
          return {
            ...prevValue,
            screenInput: String(prevValue.substring(0, prevValue.length - 1)),
          };
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="calculator">
        <div className="sreenContainer">
          <input
            type="default"
            onChange={(event) =>
              setScreenMana({
                ...screenMana,
                screenInput: event.target.value,
              })
            }
            value={screenMana.screenInput}
            disabled
          ></input>
          <div>
            <p>{operator}</p>
            <p>{screenMana.screenAux}</p>
          </div>
        </div>
        <div className="containerCalculator">
          {ButtonValues.map((buttonValue) => {
            return (
              <ButtonCalculator
                value={buttonValue}
                onHandlerButtonClick={onHandlerButtonClick}
              >
                {buttonValue}
              </ButtonCalculator>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
