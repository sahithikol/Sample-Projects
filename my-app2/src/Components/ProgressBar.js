import React, { useEffect, useState } from "react";
import "../progress.css";

const ProgressBar = ({ isEmpty, filledBars, onCompleted }) => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const className = isTransitioning ? `animate` : "";

  const [pval, setProgressVal] = useState(1);
  //   const widthCls = pval === 1000 ? "fullWidth" : "";
  useEffect(() => {
    if (isEmpty) {
      return;
    }
    let timeOutId;
    setIsTransitioning(true);
    timeOutId = setInterval(() => setProgressVal((val) => val + 1), 5);

    if (pval === 9) {
      clearInterval(timeOutId);
    }
    return () => clearInterval(timeOutId);
  });

  return (
    <progress
      value={pval}
      max={10}
      className={`progress ${className}`}
      onTransitionEnd={() => {
        onCompleted();
      }}
    ></progress>
  );
};

const ProgressBarWrapper = () => {
  //   const [showProgressBar, setShowProgressBar] = React.useState(false);
  const [bars, setBars] = React.useState(0);
  const [filledBars, setFilledBars] = React.useState(0);
  console.log(filledBars, "dsdkfkdls")
  return (
    <>
      <button
        onClick={() => {
          setBars((_bars) => _bars + 1);
        }}
      >
        Add Progress Bar
      </button>
      {Array(bars)
        .fill(null)
        .map((_, index) => (
          <ProgressBar
            key={index}
            isEmpty={index > filledBars}
            onCompleted={() => {
              setFilledBars(filledBars + 1);
            }}
          />
        ))}
    </>
  );
};

export default ProgressBarWrapper;
