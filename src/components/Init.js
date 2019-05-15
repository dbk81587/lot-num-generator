import React from "react";
import PropTypes from "prop-types";

const Init = ({ onSelectNum, selectedNum, onGenNumbers }) => {
  let numInput;
  let inArr = [];
  let empty = () => {
    inArr = []
  }
  
  let result = (inArr) => {
    let promise = new Promise(() => {
      function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      let i = 0;
      while (i<selectedNum){
        let randomNum = getRandomArbitrary(1,50);
        if (inArr.length == 0) {
          inArr.push(randomNum);
          i++;
        } else if (inArr.find((el) => el == randomNum)) {
          console.log('Removed duplicate numbers and regenerated')
        } else {
          inArr.push(randomNum);
          i++;
        }
      }
    })
    promise.then(empty())
    return inArr.sort((a,b) => a-b)
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="input-group selectGroup">
        <select
          className="custom-select selectBtn"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          onChange={ () => onSelectNum(Number(numInput.value)) }
          ref={node => numInput = node}
        >
          <option value={0}>How many numbers?</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <div className="input-group-append">
          <button onClick={() => onGenNumbers(result(inArr))} 
            className="btn btn-outline-secondary" type="button">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

Init.propTypes = {
  onSelectNum: PropTypes.func,
  selectedNum: PropTypes.number,
  onGenNumbers: PropTypes.func
};

Init.defaultProps = {
  onSelectNum: () => console.warn("onSelectNum not defined"),
  selectedNum: 0,
  onGenNumbers: () => console.warn("onGenNumbers not defined")
};

export default Init;
