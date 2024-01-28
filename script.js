const spinner = document.querySelector("#spinner");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuote = document.querySelector("#new-quote");
const loading = (isVisible) => {
  spinner.style.visibility = isVisible ? "visible" : "hidden";
};

const getQuote = async () => {
  loading(true);
  const apiUrl = "https://type.fit/api/quotes";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      loading(false);
      return response.json();
    })
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      quote.textContent = data[randomIndex].text;
      author.textContent = data[randomIndex].author;
    });
};

newQuote.addEventListener("click", () => {
  getQuote();
});

getQuote();
