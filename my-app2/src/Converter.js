window.onload = () => {
  const listElement = document.querySelector("#list");
  const fragment = new DocumentFragment();
  const liElement = document.createElement("li");
  liElement.innerText = "its me";
  fragment.append(liElement);
  listElement.append(fragment);
  makeBold(document.querySelector("#element"));
};

const makeBold = (container) => {
  let resultHTML;
  const content = container.innerHTML;
  const splittedContent = content.split(" ");
  for (const word of splittedContent) {
    const modifiedWord = transformString(word);
    if (resultHTML) {
      resultHTML += modifiedWord;
    } else {
      resultHTML = modifiedWord;
    }
    resultHTML += " ";
  }

  container.innerHTML = resultHTML;
};

const transformString = (word) => {
  let resultHtml = "";
  let trimmedWord = word.trim();
  const wordLen = trimmedWord.length;
  const boldedCharLen = Math.round(wordLen / 2);
  for (let i = 0; i < boldedCharLen; i++) {
    resultHtml += `<b>${trimmedWord[i]}</b>`;
  }

  for (let i = boldedCharLen; i < wordLen; i++) {
    resultHtml += trimmedWord[i];
  }

  return resultHtml.toString();
};
