import "./App.css";
import { useState } from "react";
import Result from "./Result";
import Btns from "./Btns";
const App = () => {
  //kitchen
  // usestates

  const [result, setResult] = useState("");

  let numberFeild1 = 0;
  let numberFeild2 = 0;

  //functions
  const onChange1 = (ch) => {
    numberFeild1 = ch.target.value;
  };

  const onChange2 = (ch) => {
    numberFeild2 = ch.target.value;
  };

  return (
    <>
      <div className="container">
        {/* header */}
        <h1 className="display-3 text-center mb-3">Calculator</h1>

        {/* input Feilds */}
        <div className="input-group mb-3 input-group-lg">
          <input
            type="text"
            onChange={onChange1}
            className="form-control m-2"
          />
          <input
            type="text"
            onChange={onChange2}
            className="form-control m-2"
          />
        </div>

        {/* Buttons */}
        <div className="btns">
          <Btns
            ops="+"
            onClick={() =>
              // use pasrInt to parses a value as a string and returns the first integer
              setResult(parseInt(numberFeild1) + parseInt(numberFeild2))
            }
          />
          <Btns
            ops="-"
            onClick={() =>
              setResult(parseInt(numberFeild1) - parseInt(numberFeild2))
            }
          />
          <Btns
            ops="*"
            onClick={() =>
              setResult(parseInt(numberFeild1) * parseInt(numberFeild2))
            }
          />
          <Btns
            ops="/"
            onClick={() =>
              setResult(parseInt(numberFeild1) / parseInt(numberFeild2))
            }
          />
          <Btns
            ops="%"
            onClick={() =>
              setResult(parseInt(numberFeild1) % parseInt(numberFeild2))
            }
          />
        </div>
        {/* resuult feild */}
        {/* <h3 className="text-center">{result}</h3> */}
        <div className="Result m-4">
          <input
            onChange={setResult}
            value={result}
            type="text"
            className="form-control"
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default App;
