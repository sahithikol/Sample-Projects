const fetchBookDetails = async () => {
  const res = await fetch("https://anapioficeandfire.com/api/books/1");
  const response = await res.json();
  return response;
};

const fetchCharecterDetails = async (url) => {
  const res = await fetch(url);
  const response = await res.json();
  return response;
};

// strOfErrApis apiname and timer *10
const checkForErrorCalls = (strOfErrApis) => {
  let strt = 0;
  // poll
  // set
};

const debounce = (callback, time) => {
  // const spinner = document.querySelector(".spinner");
  // spinner.classList.add("show");
  let timer;
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    callback();
  }, time);
};

const polling = () => {
  setInterval(() => {});
};

const makeBatchApiCall = (promiseArr) => {};

const fetchCharecters = async (charecters) => {
  let promiseArr = [];
  let count = 0;
  let i = 0;
  let result = [];

  const interval = setInterval(() => {
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("show");
    const itemPromise = fetch(charecters[i]).then((res) => res.json());
    promiseArr.push(itemPromise);
    i++;
    if (promiseArr.length === 10) {
      const newArr = promiseArr;

      debounce(async () => {
        let timeId = setTimeout(
          () => alert("The request take more than 10 sec"),
       
        );

        await Promise.allSettled([...newArr])
          .then((result) => {
            console.log(result, "resu");

            spinner.classList.add("hide");
            spinner.classList.remove("show");
          })
          .catch((ex) => {
            throw ex;
          });
          clearTimeout(timeId)
      }, 2000);
      promiseArr = [];
    }
    if (i === 20) {
      clearInterval(interval);
    }
  }, 200);

  return result;
};

window.onload = async () => {
  const bookDetails = await fetchBookDetails();
  const { authors, isbn, name, characters } = bookDetails;
  const bookContainer = document.querySelector("#bookContainer");
  const nameElement = document.createElement("div");
  const newContent = document.createTextNode(name);
  nameElement.appendChild(newContent);

  const isbnElement = document.createElement("div");
  const textContent = document.createTextNode(isbn);
  isbnElement.appendChild(textContent);

  const authorElement = document.createElement("div");
  const aContent = document.createTextNode(authors.join(","));
  authorElement.appendChild(aContent);

  bookContainer.append(nameElement);
  bookContainer.append(isbnElement);
  bookContainer.append(authorElement);

  const spinnerElement = document.createElement("div");
  spinnerElement.className = "spinner";
  //   const idAttr= spinnerElement.createAttribute('id')
  // idAttr.value="spinner";
  const sContent = document.createTextNode("...loading...");
  spinnerElement.appendChild(sContent);
  bookContainer.append(spinnerElement);

  const chars = await fetchCharecters(characters);

  for (let id = 0; id < chars.length; id++) {
    const charElement = document.createElement("div");
    const newContent = document.createTextNode(chars[id]);
    charElement.appendChild(newContent);
    bookContainer.append(charElement);
  }

  // const isbnElement = '<div>{isbn}</div>'
  // const authorElement='<div>{authors.join(",")}</div>'
  // bookContainer.appendChild(nameElement)
};
