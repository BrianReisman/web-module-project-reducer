import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers/index";
import {initialState} from './reducers/index';
import * as actions from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  // const clickHandler = () => {
  //   dispatch(actions.addOne())
  // }
  const newClickHandler = (number) => {
    dispatch(actions.applyNumber(number))
  }
  const operatorClickHandler = (operator) => {
    dispatch(actions.changeOperator(operator))
  }
  const clearClickHandler = () => {
    dispatch(actions.clearTotal())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={clickHandler}/> */}
              <CalcButton value={1} onClick={()=>newClickHandler(1)}/>
              <CalcButton value={2} onClick={()=>newClickHandler(2)}/>
              <CalcButton value={3} onClick={()=>newClickHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>newClickHandler(4)}/>
              <CalcButton value={5} onClick={()=>newClickHandler(5)}/>
              <CalcButton value={6} onClick={()=>newClickHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>newClickHandler(7)}/>
              <CalcButton value={8} onClick={()=>newClickHandler(8)}/>
              <CalcButton value={9} onClick={()=>newClickHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> operatorClickHandler("+")}/>
              <CalcButton value={"*"} onClick={()=> operatorClickHandler("*")}/>
              <CalcButton value={"-"} onClick={()=> operatorClickHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearClickHandler}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
