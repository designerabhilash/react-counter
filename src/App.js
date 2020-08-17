import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [num, updateNum] = useState(0)
  const incrementNum = () => {
    updateNum(prevNum => prevNum + 1)
  }
  const decrementNum = () => {
    if (num > 0) {
      updateNum(prevNum => prevNum - 1)
    } else {
      alert("Value Has Reached to Zero")
    }
  }
  const resetNum = () => {
    updateNum(0)
  }

  return (
    <div className="bg-color">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="productqty text-center">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{num}</h2>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6 col-6">
                  <div className="input-group-btn">
                    <button className="quantity-left-minus btn btn-danger btn-number w-100"
                      onClick={decrementNum}
                    >
                      Decrement
                                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-sm-6 col-6">
                  <div className="input-group-btn">
                    <button className="quantity-right-plus btn btn-success btn-number w-100"
                      onClick={incrementNum}
                    >
                      Increment
                                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className="btn btn-info mt-3 w-100"
                onClick={resetNum}
              >Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
