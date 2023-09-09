import React, { useEffect, useReducer, useState } from "react";

function timerReducer(state, actions) {
  switch (actions.type) {
    case "hours_change":
      return {
        ...state,
        hrs: actions.hrs,
      };
    case "mins_change":
      return {
        ...state,
        mins: actions.mins,
      };
    case "secs_change":
      return {
        ...state,
        secs: actions.secs,
      };
    default:
      throw Error("unknown action");
  }
}

const CoundDownTimer = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);

  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const hrsRef = React.useRef(null)
  const minsRef = React.useRef(null)
  const secsRef = React.useRef(null)
  const hoursArr = Array.from({ length: 24 }, (_, i) => i + 1);
  const minsArr = Array.from({ length: 60 }, (_, i) => i + 1);
  const secsArr = Array.from({ length: 60 }, (_, i) => i + 1);

  const deadline = "December, 31, 2023";
  const getTime = () => {
    const today = new Date();
    today.setHours(hours);
    today.setMinutes(mins);
    today.setSeconds(secs);
    const time = Date.parse(today) - Date.now();
    if (secs > 0) {
      setSecs(secs - 1);
    } else if (mins > 0) {
      setMins(mins - 1);
    } else if (hours > 0) {
      setHours(hours - 1);
    }
  };

  useEffect(() => {
    let interval;
    if (showTimer && !pauseTimer) {
      interval = setInterval(() => getTime(deadline), 1000);
      return () => {
        clearInterval(interval);
      };
    }

    if (pauseTimer || !showTimer) {
      clearInterval(interval);
    }
  }, [showTimer, pauseTimer, secs, mins, hours]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="timerContainer">
        <select
          onChange={(ev) => {
            setHours(ev.target.value - "0");
          }}
          ref={hrsRef}
        >
          {hoursArr.map((item) => {
            return <option key={`hr_${item}`}>{item}</option>;
          })}
        </select>
        <select
          onChange={(ev) => {
            setMins(ev.target.value - "0");
          }}
          ref={minsRef}
        >
          {minsArr.map((item) => {
            return <option key={`mins_${item}`}>{item}</option>;
          })}
        </select>
        <select
          onChange={(ev) => {
            setSecs(ev.target.value - "0");
          }}
          ref={secsRef}
        >
          {secsArr.map((item) => {
            return <option key={`secs_${item}`}>{item}</option>;
          })}
        </select>
        {showTimer ? (
          <div>
            {hours}: {mins}: {secs}
          </div>
        ) : null}
      </div>
      <button
        onClick={() => {
          setShowTimer(true);
        }}
      >
        Start
      </button>

      <button
        onClick={() => {
          setShowTimer(false);
          setHours(hrsRef.current.value);
          setMins(minsRef.current.value);
          setSecs(secsRef.current.value);
        }}
      >
        Cancel
      </button>

      {showTimer ? (
        <button
          onClick={() => {
            setPauseTimer(true);
          }}
        >
          Pause
        </button>
      ) : null}

      {pauseTimer ? (
        <button
          onClick={() => {
            setPauseTimer(false);
          }}
        >
          Continue
        </button>
      ) : null}
    </>
  );
};

export default CoundDownTimer;
