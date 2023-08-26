function createHrDropDown(timerContainer) {
  const hrDropDown = timerContainer.querySelector("#hourDropDwn");
  const fragment = new DocumentFragment();
  let i = 1;
  const timer = setInterval(() => {
    const optElement = document.createElement("option");
    optElement.innerText = i;
    fragment.append(optElement);
    i++;
    if (i === 24) {
      clearInterval(timer);
      hrDropDown.append(fragment);
    }
  });
}

function createMinDropDown(timerContainer) {
  const hrDropDown = timerContainer.querySelector("#minDropDown");
  const fragment = new DocumentFragment();
  let i = 1;
  const timer = setInterval(() => {
    const optElement = document.createElement("option");
    optElement.innerText = i;
    fragment.append(optElement);
    i++;
    if (i === 60) {
      clearInterval(timer);
      hrDropDown.append(fragment);
    }
  });
}

function createSecDropDown(timerContainer) {
  const hrDropDown = timerContainer.querySelector("#secDropDwn");
  const fragment = new DocumentFragment();
  let i = 1;
  const timer = setInterval(() => {
    const optElement = document.createElement("option");
    optElement.innerText = i;
    fragment.append(optElement);
    i++;
    if (i === 60) {
      clearInterval(timer);
      hrDropDown.append(fragment);
    }
  });
}


let timer;
function Timer(interval) {
  this.interval = interval;
}

Timer.prototype.timer = "";
Timer.prototype.onTimerStart = () => {
  const timerContainer = document.querySelector("#timerContainer");

  const resultsCotainer = document.querySelector("#results");
  const hrDropDown = timerContainer.querySelector("#hourDropDwn");
  const minDrpDwn = timerContainer.querySelector("#minDropDown");
  const secDrpDwn = timerContainer.querySelector("#secDropDwn");

  const hrsElement = document.querySelector("#hrs");
  const minsElement = document.querySelector("#mins");
  const secsElement = document.querySelector("#secs");

  let hrs =
    Number(hrsElement.innerText) || Number(hrDropDown.selectedOptions[0].value);
  let mins =
    Number(minsElement.innerText) || Number(minDrpDwn.selectedOptions[0].value);
  let secs =
    Number(secsElement.innerText) || Number(secDrpDwn.selectedOptions[0].value);

  resultsCotainer.classList.remove("hide");
  timer = setInterval(() => {
    hrsElement.innerText = hrs;
    minsElement.innerText = mins;
    secsElement.innerText = secs;
    // resultsCotainer.innerText = `${hrs}:${mins}:${secs}`;
    if (secs > 0) {
      secs--;
    } else if (mins > 0) {
      mins--;
    } else if (hrs > -1) {
      hrs--;
    }

    if (secs === 0 && mins === 0 && hrs === 0) {
      clearTimeout(timer);
    }
  }, 1000);
};
Timer.prototype.onTimerCancel = () => {
  const pauseBtn = document.querySelector("#pauseBtn");
  const resumeBtn = document.querySelector("#resumeBtn");
  const resultsCotainer = document.querySelector("#results");
  const hrsElement = document.querySelector("#hrs");
  const minsElement = document.querySelector("#mins");
  const secsElement = document.querySelector("#secs");
  hrsElement.innerText = "";
  minsElement.innerText = "";
  secsElement.innerText = "";
  clearInterval(timer);
  resultsCotainer.classList.add("hide");
  resumeBtn.classList.add("hide");
  pauseBtn.classList.add("hide");
};

Timer.prototype.onTimerPause = () => {
  clearInterval(timer);
};

function addOptsForTimer() {
  const timerContainer = document.querySelector("#timerContainer");
  createHrDropDown(timerContainer);
  createMinDropDown(timerContainer);
  createSecDropDown(timerContainer);
}



window.onload = () => {
  const startBtn = document.querySelector("#startBtn");
  const cancelBtn = document.querySelector("#cancelBtn");
  const pauseBtn = document.querySelector("#pauseBtn");
  const resumeBtn = document.querySelector("#resumeBtn");
  const timerObj = new Timer(2000);
  startBtn.addEventListener("click", () => {
    timerObj.onTimerStart();
    pauseBtn.classList.remove("hide");
  });
  cancelBtn.addEventListener("click", () => {
    timerObj.onTimerCancel();
  });

  pauseBtn.addEventListener("click", () => {
    timerObj.onTimerPause();
    resumeBtn.classList.remove("hide");
  });

  resumeBtn.addEventListener("click", () => {
    timerObj.onTimerStart();
  });
  addOptsForTimer();
};
