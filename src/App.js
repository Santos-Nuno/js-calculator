import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;

    setDisplay(display + " " + operator + " ");
  };

  const handleEqual = () => {
    let result = Function("return " + display)

    setDisplay(result)
  };

  const handleDecimal = () => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" className="num" onClick={handleNumber}>
          7
        </div>
        <div id="eight" className="num" onClick={handleNumber}>
          8
        </div>
        <div id="nine" className="num" onClick={handleNumber}>
          9
        </div>
        <div id="multiply" className="op" onClick={handleOperator}>
          *
        </div>
        <div id="four" className="num" onClick={handleNumber}>
          4
        </div>
        <div id="five" className="num" onClick={handleNumber}>
          5
        </div>
        <div id="six" className="num" onClick={handleNumber}>
          6
        </div>
        <div id="divide" className="op" onClick={handleOperator}>
          /
        </div>
        <div id="one" className="num" onClick={handleNumber}>
          1
        </div>
        <div id="two" className="num" onClick={handleNumber}>
          2
        </div>
        <div id="three" className="num" onClick={handleNumber}>
          3
        </div>
        <div id="add" className="op" onClick={handleOperator}>
          +
        </div>
        <div id="zero" className="num" onClick={handleNumber}>
          0
        </div>
        <div id="decimal" className="num" onClick={handleDecimal}>
          .
        </div>
        <div id="equals" className="op" onClick={handleEqual}>
          =
        </div>
        <div id="subtract" className="op" onClick={handleOperator}>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
