"strict-mode";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import carouselHtml from "./components/carousel.component";
import cardHtml from "./components/bottom-cards.component";
import sideCardlHtml from "./components/side-cards.componenr";

/*
const loadNews = async function (topic) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c`
  );
  const data = await response.json();
  console.log(data);
};
loadNews("india");
*/

const bottomCards = document.querySelector(".middle-card");
const rightCards = document.querySelector(".right-section");

//side nav buttons
const allNav = document.querySelectorAll(".nav-link");
const india = document.querySelector(".india");
const home = document.querySelector(".home");
const politics = document.querySelector(".politics");
const sports = document.querySelector(".sports");
const market = document.querySelector(".market");

class App {
  article = [];
  recentArticle = [];
  // indianArticles = [];
  btn = [home, politics, sports, market];

  constructor() {
    //RENDER PAGE
    // this._dataFromApi("india");
    this._renderArticlesHome();
    this._renderArticlesLatest();
    home.addEventListener("click", this._renderArticlesHome.bind(this));

    politics.addEventListener(
      "click",
      this._renderPoliticalArticles.bind(this)
    );

    sports.addEventListener("click", this._renderSportsArticles.bind(this));

    market.addEventListener("click", this._renderMarketArticles.bind(this));
  }

  _removeActiveClass() {
    this.btn.map((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
      return;
    });
  }

  async _renderArticlesHome() {
    this._removeActiveClass();
    home.classList.add("active");

    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderArticlesLatest(country, sort, category) {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.recentArticle = data.articles;

      this.recentArticle.map((arts, i) => {
        return rightCards.insertAdjacentHTML(
          "afterbegin",
          sideCardlHtml(arts, i)
        );
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderIndianArticles() {
    this._removeActiveClass();
    india.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderPoliticalArticles() {
    this._removeActiveClass();
    politics.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=political&sortBy=popularity&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderSportsArticles() {
    this._removeActiveClass();
    sports.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=sports&sortBy=popularity&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderMarketArticles() {
    this._removeActiveClass();
    market.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=stocks&sortBy=popularity&language=en&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c"
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }
}

const app = new App();

console.log(app);
